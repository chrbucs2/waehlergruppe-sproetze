import { useEffect, useMemo, useRef, useState } from 'react';
import {
    candidates,
    contacts,
    electionResults,
    legal,
    newsArticles,
    newsTopics,
    organization,
    priorities,
    scheduleItems,
    teamMembers,
} from './data';

const NEWS_INDEX_PATH = '/spr%C3%B6tze-aktuell';
const SCHEDULE_PATH = '/termine';
const THANK_YOU_MODAL_STORAGE_KEY = 'wgs-thank-you-modal-dismissed-v1';

function assetUrl(path) {
    return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
}

function normalizePath(pathname) {
    if (!pathname) {
        return '/';
    }
    const trimmed = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    return trimmed || '/';
}

function getPathFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const redirectedPath = params.get('p');
    return normalizePath(redirectedPath ? decodeURIComponent(redirectedPath) : window.location.pathname);
}

function getSearchFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const redirectedSearch = params.get('q');
    return redirectedSearch ? decodeURIComponent(redirectedSearch) : window.location.search;
}

function formatDate(dateString) {
    return new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(dateString));
}

function formatInlineMarkup(text) {
    return String(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function getTopicById(topicId) {
    return newsTopics.find((topic) => topic.id === topicId) ?? null;
}

function getArticleBySlug(slug) {
    return newsArticles.find((article) => article.slug === slug) ?? null;
}

function getScheduleItemBySlug(slug) {
    return scheduleItems.find((item) => item.slug === slug) ?? null;
}

function sortNewsByDate(items) {
    return [...items].sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt));
}

function sortScheduleByDate(items) {
    return [...items].sort((left, right) => new Date(left.date) - new Date(right.date));
}

function getScheduleStatus(item, now = new Date()) {
    const scheduleDate = new Date(`${item.date}T${item.time?.slice(0, 5) || '00:00'}:00`);
    return scheduleDate < now ? 'past' : 'upcoming';
}

function LegalModals({ showImpressum, showDatenschutz, setShowImpressum, setShowDatenschutz }) {
    return (
        <>
            {showImpressum && (
                <div className="legal-overlay" onClick={() => setShowImpressum(false)}>
                    <article className="legal-modal" onClick={(e) => e.stopPropagation()}>
                        <header className="legal-modal__header">
                            <h2>{legal.impressum.heading}</h2>
                            <button
                                type="button"
                                onClick={() => setShowImpressum(false)}
                                aria-label="Schließen"
                                className="legal-modal__close"
                            >
                                ✕
                            </button>
                        </header>
                        <div className="legal-modal__content">
                            <h3>{organization.name}</h3>
                            <p>{organization.tagline}</p>
                            <h4>Organisationsform</h4>
                            <p>{legal.impressum.organizationForm}</p>
                            <h4>{legal.impressum.representativeSection.title}</h4>
                            <p>
                                <strong>{contacts.representative.name}</strong><br />
                                {contacts.representative.address}<br />
                                <br />
                                Telefon: <a href={`tel:${contacts.representative.phone.replace(/\s+/g, '')}`}>{contacts.representative.phone}</a><br />
                                E-Mail: <a href={`mailto:${contacts.representative.email}`}>{contacts.representative.email}</a>
                            </p>
                            <h4>Kandidaten der Wählergruppe</h4>
                            <p>{teamMembers.map((member) => `${member.name} (${member.meta.split(' ')[0]})`).join(' · ')}</p>
                            <h4>{legal.impressum.webmasterSection.title}</h4>
                            <p>
                                <strong>{contacts.webmaster.name}</strong> ({contacts.webmaster.title})<br />
                                {contacts.webmaster.address}<br />
                                <br />
                                E-Mail: <a href={`mailto:${contacts.webmaster.email}`}>{contacts.webmaster.email}</a>
                            </p>
                            <h4>Hosting & Technologie</h4>
                            <p>{legal.impressum.hostingTech}</p>
                            <h4>Haftungsausschluss für externe Links</h4>
                            <p>{legal.impressum.externalLinksDisclaimer}</p>
                            <h4>Bildrechte</h4>
                            <p>{legal.impressum.imageRights}</p>
                        </div>
                    </article>
                </div>
            )}

            {showDatenschutz && (
                <div className="legal-overlay" onClick={() => setShowDatenschutz(false)}>
                    <article className="legal-modal" onClick={(e) => e.stopPropagation()}>
                        <header className="legal-modal__header">
                            <h2>{legal.datenschutz.heading}</h2>
                            <button
                                type="button"
                                onClick={() => setShowDatenschutz(false)}
                                aria-label="Schließen"
                                className="legal-modal__close"
                            >
                                ✕
                            </button>
                        </header>
                        <div className="legal-modal__content">
                            <p>{legal.datenschutz.introduction}</p>
                            <h4>Datenverantwortlicher</h4>
                            <p>
                                {legal.datenschutz.dataController.split('\n').map((line, index) => (
                                    <span key={index}>{line}<br /></span>
                                ))}
                            </p>
                            <h4>Datenschutzbeauftragter</h4>
                            <p>{legal.datenschutz.dsb}</p>
                            <h4>Datenerfassung durch uns</h4>
                            <p>{legal.datenschutz.noDataCollection.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))}</p>
                            <h4>Datenerfassung durch GitHub Pages (Hosting-Provider)</h4>
                            <p>{legal.datenschutz.githubDataCollection.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))}</p>
                            <p>
                                <strong>Rechtsgrundlage:</strong> {legal.datenschutz.legalBasis}<br />
                                <strong>Speicherdauer:</strong> {legal.datenschutz.storageDuration}<br />
                                <strong>Verarbeitung durch:</strong> GitHub Inc. (USA), unter EU-Datenschutzabkommen
                            </p>
                            <h4>Ihre Rechte und Widerspruch</h4>
                            <p>Sie haben unter der DSGVO folgende Rechte:</p>
                            <p>{legal.datenschutz.userRights.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))}</p>
                            <p>
                                <strong>Sie können GitHub-Datenerfassung einschränken durch:</strong><br />
                                {legal.datenschutz.objectionMethods.split('\n').slice(1).map((line, index) => (
                                    <span key={index}>{line}<br /></span>
                                ))}
                            </p>
                            <p>
                                Für volle DSGVO-Rechte kontaktieren Sie bitte GitHub unter ihrer
                                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                                    {' '}Privacy Statement
                                </a>.
                            </p>
                            <h4>Kontakt & Fragen</h4>
                            <p>
                                Bei Fragen zum Datenschutz kontaktieren Sie die {organization.name}
                                {' '}über die im Impressum angegebenen Kontaktdaten.
                            </p>
                            <h4>Änderungen dieser Erklärung</h4>
                            <p>{legal.datenschutz.changes}</p>
                        </div>
                    </article>
                </div>
            )}
        </>
    );
}

function ThankYouModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="legal-overlay" onClick={onClose}>
            <article
                className="legal-modal thank-you-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="thank-you-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <header className="legal-modal__header">
                    <h2 id="thank-you-modal-title">Danke für 42,1&nbsp;% Vertrauen</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Dankeschön schließen"
                        className="legal-modal__close"
                    >
                        ✕
                    </button>
                </header>
                <div className="legal-modal__content thank-you-modal__content">
                    <p className="eyebrow">Ortsratswahl 2026</p>
                    <p>
                        Herzlichen Dank an alle Wählerinnen und Wähler für dieses überragende Ergebnis bei der
                        Ortsratswahl in Sprötze.
                    </p>
                    <p className="thank-you-modal__highlight">
                        42,1&nbsp;% für die Wählergruppe Sprötze
                    </p>
                    <p>
                        Dieses Vertrauen ist für uns Auftrag und Ansporn, uns weiter mit voller Kraft für Sprötze
                        einzusetzen.
                    </p>
                    <div className="hero__actions">
                        <button type="button" className="button button--primary" onClick={onClose}>
                            Vielen Dank!
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}

function SiteFooter({ onShowImpressum, onShowDatenschutz }) {
    return (
        <footer className="footer">
            <div>
                <strong>Wählergruppe Sprötze</strong>
                <p>Bürgernähe, Augenmaß und ein lebenswertes Dorf.</p>
            </div>
            <div className="footer__legal">
                <button type="button" onClick={onShowImpressum} className="footer__legal-link">
                    Impressum
                </button>
                <button type="button" onClick={onShowDatenschutz} className="footer__legal-link">
                    Datenschutz
                </button>
            </div>
            <a className="footer__link" href="#top">
                Nach oben
            </a>
        </footer>
    );
}

function HomePage({ onShowImpressum, onShowDatenschutz }) {
    const [activePriority, setActivePriority] = useState(priorities[0]);
    const [activeCandidate, setActiveCandidate] = useState(candidates[0]);
    const [activeTeamMemberName, setActiveTeamMemberName] = useState(null);
    const [showElectionInfo, setShowElectionInfo] = useState(false);
    const priorityDetailRef = useRef(null);
    const candidateDetailRef = useRef(null);
    const teamSectionRef = useRef(null);
    const activeTeamMember = teamMembers.find((member) => member.name === activeTeamMemberName) ?? null;
    const heroFaces = teamMembers;
    const teamMembersByElectionRank = useMemo(
        () => [...teamMembers].sort((left, right) => {
            const leftResult = electionResults.allCandidateResults.find((entry) => entry.name === left.name);
            const rightResult = electionResults.allCandidateResults.find((entry) => entry.name === right.name);
            return (leftResult?.rank ?? Number.POSITIVE_INFINITY) - (rightResult?.rank ?? Number.POSITIVE_INFINITY);
        }),
        [],
    );
    const electedTeamMembers = useMemo(
        () => electionResults.electedCandidates
            .slice()
            .sort((left, right) => left.rank - right.rank)
            .map((result) => {
                const member = teamMembers.find((entry) => entry.name === result.name);
                return member ? { ...member, election: result } : null;
            })
            .filter(Boolean),
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

    const scrollDetailIntoView = (detailRef) => {
        if (!window.matchMedia('(max-width: 900px)').matches) {
            return;
        }
        requestAnimationFrame(() => {
            detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const handleTeamMemberSelect = (memberName) => {
        setActiveTeamMemberName((current) => (current === memberName ? null : memberName));
    };

    const handleElectedMemberJump = (memberName) => {
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
                        Gemeinsam engagieren wir uns für ein lebenswertes Sprötze — nah an den Menschen,
                        lösungsorientiert und ohne Parteibindung.
                    </p>

                    <article className="hero__group">
                        <ul>
                            <li>Politisch interessiert und parteilos: Sprötzer Bürger*innen für Sprötze.</li>
                            <li>Absolut unabhängig, frei von Parteiideologien und Einzelinteressen.</li>
                            <li>Seit mehreren Generationen durchsetzungsstark in der Sprötzer Kommunalpolitik.</li>
                        </ul>
                    </article>

                    <div className="hero__actions">
                        <a className="button button--primary" href="#positionen">
                            Unsere Positionen
                        </a>
                        <a className="button button--secondary" href="#personen">
                            Unser Team
                        </a>
                    </div>
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
                        <article
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
                        </article>
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
                                        <li key={`${detail.icon || detail.iconImage || 'icon'}-${detail.text}`}>
                                            {detail.iconImage ? (
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

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}

function NewsPage({ onShowImpressum, onShowDatenschutz, topicId, articleSlug }) {
    const orderedArticles = useMemo(() => sortNewsByDate(newsArticles), []);
    const availableTopics = useMemo(
        () => newsTopics.filter((topic) => orderedArticles.some((article) => article.topicIds.includes(topic.id))),
        [orderedArticles],
    );
    const activeTopic = topicId ? getTopicById(topicId) : null;
    const activeArticle = articleSlug ? getArticleBySlug(articleSlug) : null;
    const backHref = activeTopic ? `${NEWS_INDEX_PATH}?thema=${activeTopic.id}` : NEWS_INDEX_PATH;

    const visibleArticles = useMemo(() => {
        if (!activeTopic) {
            return orderedArticles;
        }
        return orderedArticles.filter((article) => article.topicIds.includes(activeTopic.id));
    }, [activeTopic, orderedArticles]);

    if (activeArticle) {
        return (
            <>
                <section className="content content--soft news-article-page">
                    <a className="news-back-link" href={backHref}>
                        Zurück zur Übersicht
                    </a>
                    <div className="section-heading">
                        <p className="eyebrow">{formatDate(activeArticle.publishedAt)}</p>
                        <h1 className="news-article-page__title">{activeArticle.title}</h1>
                        <p className="section-copy">{activeArticle.summary}</p>
                    </div>
                    <article className="feature-card feature-card--active news-article-page__content">
                        {activeArticle.content.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                        <div className="focus-list">
                            {activeArticle.topicIds.map((id) => (
                                <a key={id} href={`${NEWS_INDEX_PATH}?thema=${id}`}>
                                    <span>{getTopicById(id)?.label ?? id}</span>
                                </a>
                            ))}
                        </div>
                    </article>
                </section>

                <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
            </>
        );
    }

    return (
        <>
            <section className="hero hero--news">
                <div className="hero__copy">
                    <p className="eyebrow">Sprötze aktuell</p>
                    <h1>News und Themen aus Sprötze</h1>
                    <p className="lead">
                        Hier pflegen wir aktuelle Meldungen zentral an einer Stelle — mit Themenfiltern
                        und Detailseiten für einzelne Beiträge.
                    </p>
                    <article className="hero__group">
                        <ul>
                            <li>Neueste Meldungen stehen automatisch oben.</li>
                            <li>Themen lassen sich gesammelt filtern und aufrufen.</li>
                            <li>Beiträge können über ihre eigene URL direkt geteilt werden.</li>
                        </ul>
                    </article>
                    <div className="hero__actions">
                        <a className="button button--primary" href="#news-feed">
                            Zu den News
                        </a>
                        <a className="button button--secondary" href={SCHEDULE_PATH}>
                            Zur Terminseite
                        </a>
                    </div>
                </div>
                <div className="news-hero-card">
                    <p className="eyebrow">Aktuelles System</p>
                    <h2>Zentrale Pflege für Beiträge</h2>
                    <p>
                        Inhalte kommen aus <code>src/data/</code> und lassen sich dort gesammelt
                        erweitern oder ändern.
                    </p>
                    <div className="focus-list">
                        {availableTopics.map((topic) => (
                            <a key={topic.id} href={`${NEWS_INDEX_PATH}?thema=${topic.id}`}>
                                <span>{topic.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content content--soft" id="news-feed">
                <div className="section-heading">
                    <p className="eyebrow">Themenfilter</p>
                    <h2>{activeTopic ? `News zu ${activeTopic.label}` : 'Alle aktuellen Meldungen'}</h2>
                    <p className="section-copy">
                        {activeTopic ? activeTopic.description : 'Beiträge sind nach Veröffentlichungsdatum sortiert — der neueste Beitrag steht immer zuerst.'}
                    </p>
                </div>

                <div className="topic-filter">
                    <a className={`topic-filter__chip${!activeTopic ? ' is-active' : ''}`} href={NEWS_INDEX_PATH}>
                        Alle Themen
                    </a>
                    {availableTopics.map((topic) => (
                        <a
                            key={topic.id}
                            className={`topic-filter__chip${activeTopic?.id === topic.id ? ' is-active' : ''}`}
                            href={`${NEWS_INDEX_PATH}?thema=${topic.id}`}
                        >
                            {topic.label}
                        </a>
                    ))}
                </div>

                <div className="news-list">
                    {visibleArticles.map((article) => (
                        <article className="news-card" key={article.id}>
                            <p className="eyebrow">{formatDate(article.publishedAt)}</p>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <div className="focus-list">
                                {article.topicIds.map((id) => (
                                    <a key={id} href={`${NEWS_INDEX_PATH}?thema=${id}`}>
                                        <span>{getTopicById(id)?.label ?? id}</span>
                                    </a>
                                ))}
                            </div>
                            <a className="news-card__link" href={`${NEWS_INDEX_PATH}?artikel=${article.slug}`}>
                                Beitrag öffnen
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}

function SchedulePage({ onShowImpressum, onShowDatenschutz, scheduleSlug }) {
    const orderedSchedule = useMemo(() => sortScheduleByDate(scheduleItems), []);
    const [showAllUpcoming, setShowAllUpcoming] = useState(false);
    const now = useMemo(() => new Date(), []);
    const activeScheduleItem = scheduleSlug ? getScheduleItemBySlug(scheduleSlug) : null;
    const upcomingSchedule = useMemo(
        () => orderedSchedule.filter((item) => getScheduleStatus(item, now) === 'upcoming'),
        [now, orderedSchedule],
    );
    const pastSchedule = useMemo(
        () => orderedSchedule.filter((item) => getScheduleStatus(item, now) === 'past').reverse(),
        [now, orderedSchedule],
    );
    const visibleUpcomingSchedule = showAllUpcoming ? upcomingSchedule : upcomingSchedule.slice(0, 1);

    if (activeScheduleItem) {
        const isPast = getScheduleStatus(activeScheduleItem, now) === 'past';

        return (
            <>
                <section className="content content--soft news-article-page">
                    <a className="news-back-link" href={SCHEDULE_PATH}>
                        Zurück zur Terminübersicht
                    </a>
                    <div className="section-heading">
                        <p className="eyebrow">
                            {activeScheduleItem.category} · {formatDate(activeScheduleItem.date)} · {activeScheduleItem.time}
                        </p>
                        <h1 className="news-article-page__title">{activeScheduleItem.title}</h1>
                        <p className="section-copy">{activeScheduleItem.location}</p>
                    </div>
                    <article className="feature-card feature-card--active news-article-page__content">
                        {activeScheduleItem.introduction && (
                            Array.isArray(activeScheduleItem.introduction)
                                ? activeScheduleItem.introduction.map((paragraph) => (
                                    <p key={paragraph} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(paragraph) }} />
                                ))
                                : <p>{activeScheduleItem.introduction}</p>
                        )}
                        <p>Themen der Sitzung waren:</p>
                        {activeScheduleItem.sections?.map((section) => (
                            <section className="schedule-detail-section" key={section.title}>
                                <h3>{section.title}</h3>
                                {section.paragraphs.map((paragraph) => {
                                    if (typeof paragraph === 'string') {
                                        return (
                                            <p
                                                key={paragraph}
                                                dangerouslySetInnerHTML={{ __html: formatInlineMarkup(paragraph) }}
                                            />
                                        );
                                    }

                                    return (
                                        <p key={paragraph.text} className="schedule-link-note">
                                            <a className="news-card__link" href={paragraph.link}>
                                                {paragraph.text}
                                            </a>
                                        </p>
                                    );
                                })}
                            </section>
                        ))}
                        {activeScheduleItem.link && (
                            <p className="schedule-link-note">
                                <strong>Quelle:</strong>{' '}
                                <a className="news-card__link" href={activeScheduleItem.link} target="_blank" rel="noopener noreferrer">
                                    {activeScheduleItem.linkLabel ?? 'Zur öffentlichen Sitzungsseite'}
                                </a>
                            </p>
                        )}
                    </article>
                </section>

                <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
            </>
        );
    }

    return (
        <>
            <section className="hero hero--news">
                <div className="hero__copy">
                    <p className="eyebrow">Termine</p>
                    <h1 className="schedule-page__title">Termine für Sprötze</h1>
                    <p className="lead schedule-page__lead">
                        Der nächste relevante Termin zuerst, weitere bei Bedarf.
                    </p>
                    <div className="hero__actions">
                        <a className="button button--primary" href={NEWS_INDEX_PATH}>
                            Zu den News
                        </a>
                        <a className="button button--secondary" href="/">
                            Zur WGS Startseite
                        </a>
                    </div>
                </div>
            </section>

            <section className="content" id="kommende-termine">
                <div className="section-heading">
                    <p className="eyebrow">Anstehend</p>
                    <h2>Der nächste Termin</h2>
                </div>
                <div className="schedule-list">
                    {visibleUpcomingSchedule.map((item) => (
                        <article className="schedule-card" key={item.id}>
                            <div className="schedule-card__head">
                                <p className="eyebrow">{item.category}</p>
                                <strong>{formatDate(item.date)} · {item.time}</strong>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.details}</p>
                            <a className="news-card__link" href={`${SCHEDULE_PATH}?termin=${item.slug}`}>
                                Termin öffnen
                            </a>
                        </article>
                    ))}
                </div>
                {upcomingSchedule.length > 1 && (
                    <button
                        type="button"
                        className="button button--secondary schedule-list__toggle"
                        onClick={() => setShowAllUpcoming((current) => !current)}
                    >
                        {showAllUpcoming ? 'Weniger anzeigen' : `Weitere Termine anzeigen (${upcomingSchedule.length - 1})`}
                    </button>
                )}
            </section>

            <section className="content content--soft" id="vergangene-termine">
                <div className="section-heading">
                    <p className="eyebrow">Rückblick</p>
                    <h2>Vergangene Sitzungen</h2>
                </div>
                <div className="schedule-list">
                    {pastSchedule.map((item) => (
                        <article className="schedule-card" key={item.id}>
                            <div className="schedule-card__head">
                                <p className="eyebrow">{item.category}</p>
                                <strong>{formatDate(item.date)} · {item.time}</strong>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.details}</p>
                            <a className="news-card__link" href={`${SCHEDULE_PATH}?termin=${item.slug}`}>
                                Termin öffnen
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}

function App() {
    const [currentPath, setCurrentPath] = useState(getPathFromLocation);
    const [search, setSearch] = useState(getSearchFromLocation);
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectedPath = params.get('p');
        const redirectedSearch = params.get('q');

        if (redirectedPath) {
            const targetPath = decodeURIComponent(redirectedPath);
            const targetSearch = redirectedSearch ? decodeURIComponent(redirectedSearch) : '';
            window.history.replaceState(null, '', `${targetPath}${targetSearch}${window.location.hash}`);
            setCurrentPath(normalizePath(targetPath));
            setSearch(targetSearch);
        }

        const isHomePage = normalizePath(redirectedPath ? decodeURIComponent(redirectedPath) : window.location.pathname) === '/';
        const hasDismissedThankYouModal = window.localStorage.getItem(THANK_YOU_MODAL_STORAGE_KEY) === 'true';

        if (isHomePage && !hasDismissedThankYouModal) {
            setShowThankYouModal(true);
        }

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setShowImpressum(false);
                setShowDatenschutz(false);
                setShowThankYouModal(false);
            }
        };

        const handleLocationChange = () => {
            setCurrentPath(getPathFromLocation());
            setSearch(getSearchFromLocation());
        };

        document.addEventListener('keydown', handleEscKey);
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    const closeThankYouModal = () => {
        window.localStorage.setItem(THANK_YOU_MODAL_STORAGE_KEY, 'true');
        setShowThankYouModal(false);
    };

    const params = useMemo(() => new URLSearchParams(search), [search]);
    const topicId = params.get('thema');
    const articleSlug = params.get('artikel');
    const scheduleSlug = params.get('termin');
    const isNewsPage = currentPath === normalizePath(NEWS_INDEX_PATH);
    const isSchedulePage = currentPath === normalizePath(SCHEDULE_PATH);

    return (
        <main className="page" id="top">
            <ThankYouModal isOpen={showThankYouModal} onClose={closeThankYouModal} />
            {isNewsPage ? (
                <NewsPage
                    onShowImpressum={() => setShowImpressum(true)}
                    onShowDatenschutz={() => setShowDatenschutz(true)}
                    topicId={topicId}
                    articleSlug={articleSlug}
                />
            ) : isSchedulePage ? (
                <SchedulePage
                    onShowImpressum={() => setShowImpressum(true)}
                    onShowDatenschutz={() => setShowDatenschutz(true)}
                    scheduleSlug={scheduleSlug}
                />
            ) : (
                <HomePage
                    onShowImpressum={() => setShowImpressum(true)}
                    onShowDatenschutz={() => setShowDatenschutz(true)}
                />
            )}
            <LegalModals
                showImpressum={showImpressum}
                showDatenschutz={showDatenschutz}
                setShowImpressum={setShowImpressum}
                setShowDatenschutz={setShowDatenschutz}
            />
        </main>
    );
}

export default App;
