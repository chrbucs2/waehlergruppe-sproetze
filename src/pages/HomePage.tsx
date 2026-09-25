import { LegalLinks } from '../components/legal/LegalLinks';
import { useMemo, useRef, useState } from 'react';
import { Button, HeroButtonRow } from '../components/shared/Button';

import { candidates, electionResults, priorities, teamMembers } from '../data';
import { NEWS_PATH } from '../lib/constants';
import { assetUrl } from '../lib/formatting';

interface HomePageProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

type Candidate = typeof candidates[number];
type TeamMember = typeof teamMembers[number];
type TeamMemberWithElection = TeamMember & {
    election?: {
        name: string;
        rank: number;
        votes: number;
        elected: boolean;
    };
};
type TeamMemberRef = { current: { scrollIntoView: (options: ScrollIntoViewOptions) => void } | null };
type TeamMemberDetail = TeamMember['details'][number];

function hasIconImage(detail: TeamMemberDetail): detail is TeamMemberDetail & { iconImage: string; iconAlt: string } {
    return 'iconImage' in detail;
}

export function HomePage({ onShowImpressum, onShowDatenschutz }: HomePageProps) {
    const [activePriority, setActivePriority] = useState<(typeof priorities)[number]>(priorities[0]);
    const [activeCandidate, setActiveCandidate] = useState<Candidate>(candidates[0]);
    const [activeTeamMemberName, setActiveTeamMemberName] = useState<string | null>(null);
    const [showElectionInfo, setShowElectionInfo] = useState<boolean>(false);
    const priorityDetailRef = useRef<HTMLElement | null>(null);
    const candidateDetailRef = useRef<HTMLElement | null>(null);
    const teamSectionRef = useRef<HTMLElement | null>(null);
    const activeTeamMember = teamMembers.find((member) => member.name === activeTeamMemberName) ?? null;
    const heroFaces: TeamMember[] = teamMembers;
    const teamMembersByElectionRank = useMemo(
        () => [...teamMembers].sort((left, right) => {
            const leftResult = electionResults.allCandidateResults.find((entry) => entry.name === left.name);
            const rightResult = electionResults.allCandidateResults.find((entry) => entry.name === right.name);
            return (leftResult?.rank ?? Number.POSITIVE_INFINITY) - (rightResult?.rank ?? Number.POSITIVE_INFINITY);
        }),
        [],
    );
    const electedTeamMembers = useMemo<TeamMemberWithElection[]>(
        () => electionResults.electedCandidates
            .slice()
            .sort((left, right) => left.rank - right.rank)
            .flatMap((result) => {
                const member = teamMembers.find((entry) => entry.name === result.name);
                return member ? [{ ...member, election: result } as TeamMemberWithElection] : [];
            }),
        [],
    );

    const highlights = [
        'Bürgernähe. Sprötze. Für EUCH!',
        'Interessen aller Altersgruppen.',
        'Familienfreundliches Wohnen.',
        'Geordnetes Wachstum.',
        'Natur- und Umweltschutz.',
        'Lokalen Interessen von Sprötze!',
    ];

    const scrollDetailIntoView = (detailRef: TeamMemberRef) => {
        if (!window.matchMedia('(max-width: 900px)').matches) {
            return;
        }

        requestAnimationFrame(() => {
            detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const handleTeamMemberSelect = (memberName: string) => {
        setActiveTeamMemberName((current) => (current === memberName ? null : memberName));
    };

    const handleElectedMemberJump = (memberName: string) => {
        setActiveTeamMemberName(memberName);
        requestAnimationFrame(() => {
            teamSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const closeElectionInfo = () => setShowElectionInfo(false);

    return (
        <>
            <section className="hero">
                <div className="hero__visual" aria-hidden="true">
                    <div className="hero-logo">
                        <img src={assetUrl('logo.png')} alt="Logo der Wählergruppe Sprötze" />
                    </div>
                    {heroFaces.map((member, index) => (
                        <figure className={`hero-face hero-face--${index + 1}`} key={`hero-${member.name}`}>
                            <img
                                src={assetUrl(member.image)}
                                alt=""
                                loading="lazy"
                                style={{ objectPosition: member.imagePosition ?? 'center top' }}
                            />
                        </figure>
                    ))}
                </div>

                <div className="hero__copy">
                    <p className="eyebrow">Unabhängige Kommunalpolitik für Sprötze</p>
                    <h1>Unsere Wählergruppe</h1>
                    <p className="lead">
                        Wir engagieren uns für Sprötze: unabhängige Kommunalpolitik, klare Positionen und aktuelle Themen
                        rund um Ort, Ortsrat und Dorfentwicklung.
                    </p>

                    <article className="hero__group">
                        <ul>
                            <li>Politisch interessiert und parteilos: Sprötzer Bürger*innen für Sprötze.</li>
                            <li>Absolut unabhängig, frei von Parteiideologien und Einzelinteressen.</li>
                            <li>Seit mehreren Generationen durchsetzungsstark in der Sprötzer Kommunalpolitik.</li>
                        </ul>
                    </article>

                    <HeroButtonRow>
                        <Button href="#positionen" variant="primary">
                            Unsere Positionen
                        </Button>
                        <Button href="#personen" variant="secondary">
                            Unser Team
                        </Button>
                        <Button href={NEWS_PATH} variant="secondary">
                            Sprötze aktuell
                        </Button>
                    </HeroButtonRow>
                </div>
            </section>

            <section className="stats stats--team">
                <div className="stats__header">
                    <p className="eyebrow">Im Ortsrat für Euch dabei</p>
                    <p className="stats__intro">
                        Nach den Wahlergebnissen vom {electionResults.source.updatedAt.split(',')[0]}
                        <button
                            type="button"
                            className="stats__info-button"
                            onClick={() => setShowElectionInfo((current) => !current)}
                            aria-expanded={showElectionInfo}
                            aria-controls="election-info-overlay"
                            aria-label="Wahlergebnisse anzeigen"
                        >
                            <span aria-hidden="true">ⓘ</span>
                        </button>{' '}
                        wurden für Euch gewählt:
                    </p>
                </div>
                {showElectionInfo && (
                    <div className="election-overlay" onClick={closeElectionInfo}>
                        <div
                            className="election-modal"
                            id="election-info-overlay"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Wahlergebnisse Sprötze"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <header className="election-modal__header">
                                <div>
                                    <p className="eyebrow">Wahlergebnisse</p>
                                    <h3>Ortsratswahl 2026 in Sprötze</h3>
                                </div>
                                <button
                                    type="button"
                                    className="election-modal__close"
                                    onClick={closeElectionInfo}
                                    aria-label="Wahlergebnisse schließen"
                                >
                                    ✕
                                </button>
                            </header>
                            <div className="election-modal__content">
                                <p className="election-modal__copy">
                                    Stand {electionResults.source.updatedAt} · Wahlbeteiligung {electionResults.turnout}
                                </p>
                                <div className="election-results-list">
                                    {electionResults.partyResults.map((result) => (
                                        <div className="election-results-list__item" key={result.party}>
                                            <strong>{result.party}</strong>
                                            <span>{result.votes} Stimmen</span>
                                            <span>{result.percentage}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="election-info__source">
                                    Quelle:{' '}
                                    <a href={electionResults.source.url} target="_blank" rel="noopener noreferrer">
                                        {electionResults.source.label}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {electedTeamMembers.map((member) => (
                    <button
                        key={member.name}
                        type="button"
                        className="stat-card stat-card--team"
                        onClick={() => handleElectedMemberJump(member.name)}
                    >
                        <img
                            className="stat-card__portrait"
                            src={assetUrl(member.image)}
                            alt={`Portrait von ${member.name}`}
                            loading="lazy"
                            style={{ objectPosition: member.imagePosition ?? 'center top' }}
                        />
                        <strong>{member.name}</strong>
                    </button>
                ))}
            </section>

            <section className="stats">
                <div className="stats__header">
                    <p className="eyebrow">Wofür wir stehen</p>
                </div>
                {highlights.map((item) => (
                    <article className="stat-card" key={item}>
                        <strong>{item}</strong>
                    </article>
                ))}
            </section>

            <section className="content content--positionen" id="positionen">
                <div className="section-heading">
                    <p className="eyebrow">Unsere Schwerpunkte</p>
                </div>

                <div className="priority-grid">
                    <div className="priority-list" role="tablist" aria-label="Schwerpunkte">
                        {priorities.map((priority) => (
                            <button
                                key={priority.title}
                                type="button"
                                className={`priority-chip${activePriority.title === priority.title ? ' is-active' : ''}`}
                                onClick={() => {
                                    setActivePriority(priority);
                                    scrollDetailIntoView(priorityDetailRef);
                                }}
                            >
                                <span>{priority.eyebrow}</span>
                                {priority.title}
                            </button>
                        ))}
                    </div>

                    <article className="priority-detail" ref={priorityDetailRef}>
                        <p className="eyebrow">{activePriority.eyebrow}</p>
                        <h3>{activePriority.title}</h3>
                        <img
                            className="priority-detail__image"
                            src={assetUrl(activePriority.image)}
                            alt={activePriority.imageAlt}
                            loading="lazy"
                        />
                        <p>{activePriority.text}</p>
                    </article>
                </div>
            </section>

            <section className="content content--team" id="personen" ref={teamSectionRef}>
                <div className="section-heading">
                    <p className="eyebrow">Mitglieder</p>
                    <h2>Unser Team für Sprötze</h2>
                </div>

                <div className="team-layout">
                    <div className="team-grid">
                        {teamMembersByElectionRank.map((member) => {
                            const result = electionResults.allCandidateResults.find((entry) => entry.name === member.name);
                            return (
                                <article className={`team-card${activeTeamMemberName === member.name ? ' is-active' : ''}`} key={member.name}>
                                    <button
                                        className="team-card__trigger"
                                        type="button"
                                        onClick={() => handleTeamMemberSelect(member.name)}
                                    >
                                        <img
                                            src={assetUrl(member.image)}
                                            alt={`Portrait von ${member.name}`}
                                            loading="lazy"
                                            style={{ objectPosition: member.imagePosition ?? 'center top' }}
                                        />
                                        <h3>{member.name}</h3>
                                        <span className="team-card__meta">{member.meta}</span>
                                        {result?.elected && (
                                            <span className="team-card__badge">Gewählt · Platz {result.rank}</span>
                                        )}
                                    </button>
                                </article>
                            );
                        })}
                    </div>

                    {activeTeamMember && (
                        <div className="team-overlay" role="dialog" aria-modal="false" aria-label={`Steckbrief ${activeTeamMember.name}`}>
                            <article className="team-overlay__panel">
                                <div className="team-overlay__head">
                                    <img
                                        className="team-overlay__avatar"
                                        src={assetUrl(activeTeamMember.image)}
                                        alt={`Portrait von ${activeTeamMember.name}`}
                                        loading="lazy"
                                        style={{ objectPosition: activeTeamMember.imagePosition ?? 'center top' }}
                                    />
                                    <div>
                                        <p className="eyebrow">Kandidatur für den Ortsrat</p>
                                        <h3>{activeTeamMember.name}</h3>
                                    </div>
                                    <button
                                        className="team-overlay__close"
                                        type="button"
                                        onClick={() => setActiveTeamMemberName(null)}
                                        aria-label="Steckbrief schließen"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <ul className="team-detail__facts">
                                    {activeTeamMember.details.map((detail) => (
                                        <li key={`${hasIconImage(detail) ? detail.iconImage : detail.icon}-${detail.text}`}>
                                            {hasIconImage(detail) ? (
                                                <img
                                                    className="team-detail__icon-image"
                                                    src={assetUrl(detail.iconImage)}
                                                    alt={detail.iconAlt || ''}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <span className="team-detail__icon" aria-hidden="true">
                                                    {detail.icon}
                                                </span>
                                            )}
                                            <span>{detail.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="team-detail__quote team-detail__quote--featured">„{activeTeamMember.quote}“</p>
                            </article>
                        </div>
                    )}
                </div>
            </section>

            <section className="content content--soft content--candidate">
                <div className="section-heading">
                    <p className="eyebrow">Geht es noch konkreter?</p>
                    <h2>Persönliche Schwerpunkte aus dem Team</h2>
                </div>

                <div className="candidate-grid">
                    <div className="candidate-list">
                        {candidates.map((candidate) => (
                            <button
                                key={candidate.name}
                                type="button"
                                className={`priority-chip${activeCandidate.name === candidate.name ? ' is-active' : ''}`}
                                onClick={() => {
                                    setActiveCandidate(candidate);
                                    scrollDetailIntoView(candidateDetailRef);
                                }}
                            >
                                <span>{candidate.profile}</span>
                                {candidate.name}
                            </button>
                        ))}
                    </div>

                    <article className="feature-card feature-card--active" ref={candidateDetailRef}>
                        <h3>{activeCandidate.name}</h3>
                        <p className="feature-card__profile">{activeCandidate.profile}</p>
                        <p>{activeCandidate.summary}</p>
                        <ul className="feature-list">
                            {activeCandidate.priorities.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <div className="focus-list">
                            {activeCandidate.focus.map((focus) => (
                                <span key={focus}>{focus}</span>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <footer className="footer">
                <div>
                    <strong>Wählergruppe Sprötze</strong>
                    <p>Bürgernähe, Augenmaß und ein lebenswertes Dorf.</p>
                </div>
                <div className="footer__legal">
                    <LegalLinks onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
                </div>
                <a className="footer__link" href="#top">
                    Nach oben
                </a>
            </footer>
        </>
    );
}
