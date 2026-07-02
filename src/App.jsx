import { useState, useEffect } from 'react';
import { priorities, candidates, teamMembers, organization, contacts, legal } from './data';

function App() {
    const assetUrl = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
    const [activePriority, setActivePriority] = useState(priorities[0]);
    const [activeCandidate, setActiveCandidate] = useState(candidates[0]);
    const [activeTeamMemberName, setActiveTeamMemberName] = useState(null);
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);
    const activeTeamMember = teamMembers.find((member) => member.name === activeTeamMemberName) ?? null;
    const heroFaces = teamMembers;

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                setActiveTeamMemberName(null);
                setShowImpressum(false);
                setShowDatenschutz(false);
            }
        };
        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, []);

    const highlights = [
        'Bürgernähe. Sprötze. Für EUCH!',
        'Interessen aller Altersgruppen.',
        'Familienfreundliches Wohnen.',
        'Geordnetes Wachstum.',
        'Natur- und Umweltschutz.',
        'Lokalen Interessen von Sprötze!',
    ];

    return (
        <main className="page" id="top">
            <section className="hero">
                <div className="hero__visual" aria-hidden="true">
                    <div className="hero-logo">
                        <img src={assetUrl('logo.png')} alt="" />
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
                    <h2>Tippen Sie auf ein Anliegen, um mehr zu erfahren.</h2>
                </div>

                <div className="priority-grid">
                    <div className="priority-list" role="tablist" aria-label="Schwerpunkte">
                        {priorities.map((priority) => (
                            <button
                                key={priority.title}
                                type="button"
                                className={`priority-chip${activePriority.title === priority.title ? ' is-active' : ''}`}
                                onClick={() => setActivePriority(priority)}
                            >
                                <span>{priority.eyebrow}</span>
                                {priority.title}
                            </button>
                        ))}
                    </div>

                    <article className="priority-detail">
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

            <section className="content content--team" id="personen">
                <div className="section-heading">
                    <p className="eyebrow">Für unseren Ortsrat mit dabei</p>
                    <h2>Unser Team für Sprötze</h2>
                </div>

                <div className="team-layout">
                    <div className="team-grid">
                        {teamMembers.map((member) => (
                            <article className={`team-card${activeTeamMemberName === member.name ? ' is-active' : ''}`} key={member.name}>
                                <button
                                    className="team-card__trigger"
                                    type="button"
                                    onClick={() =>
                                        setActiveTeamMemberName((current) =>
                                            current === member.name ? null : member.name,
                                        )
                                    }
                                >
                                    <img
                                        src={assetUrl(member.image)}
                                        alt={`Portrait von ${member.name}`}
                                        loading="lazy"
                                        style={{ objectPosition: member.imagePosition ?? 'center top' }}
                                    />
                                    <h3>{member.name}</h3>
                                    <span className="team-card__meta">{member.meta}</span>
                                </button>
                            </article>
                        ))}
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
                                        <p className="eyebrow">Geht es noch konkreter?</p>
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
                                    {activeTeamMember.details.map((detail, index) => (
                                        <li
                                            key={`${detail.icon || detail.iconImage || 'icon'}-${detail.text}`}
                                        >
                                            {(
                                                detail.iconImage ? (
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
                                                )
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
                                onClick={() => setActiveCandidate(candidate)}
                            >
                                <span>{candidate.profile}</span>
                                {candidate.name}
                            </button>
                        ))}
                    </div>

                    <article className="feature-card feature-card--active">
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
                    <button
                        type="button"
                        onClick={() => setShowImpressum(true)}
                        className="footer__legal-link"
                    >
                        Impressum
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowDatenschutz(true)}
                        className="footer__legal-link"
                    >
                        Datenschutz
                    </button>
                </div>
                <a className="footer__link" href="#top" onClick={(event) => event.preventDefault()}>
                    Nach oben
                </a>
            </footer>

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
                            <h4>{legal.impressum.webmasterSection.title}</h4>
                            <p>
                                <strong>{contacts.webmaster.name}</strong> ({contacts.webmaster.title})<br/>
                                {contacts.webmaster.address}<br/>
                                <br/>
                                E-Mail: <a href={`mailto:${contacts.webmaster.email}`}>{contacts.webmaster.email}</a>
                            </p>
                            <h4>{legal.impressum.representativeSection.title}</h4>
                            <p>
                                <strong>{contacts.representative.name}</strong><br/>
                                {contacts.representative.address}<br/>
                                <br/>
                                Telefon: <a href={`tel:${contacts.representative.phone.replace(/\s+/g, '')}`}>{contacts.representative.phone}</a><br/>
                                E-Mail: <a href={`mailto:${contacts.representative.email}`}>{contacts.representative.email}</a>
                            </p>
                            <h4>Organisationsform</h4>
                            <p>{legal.impressum.organizationForm}</p>
                            <h4>Kandidaten der Wählergruppe</h4>
                            <p>
                                {teamMembers.map((member) => `${member.name} (${member.meta.split(' ')[0]})`).join(' · ')}
                            </p>
                            <h4>Hosting & Technologie</h4>
                            <p>
                                {legal.impressum.hostingTech.split('\n')[0]}<br/>
                                <br/>
                                {legal.impressum.hostingTech.split('\n')[1]}<br/>
                                Quellcode: Öffentlich verfügbar auf <a href="https://github.com/chrbucs2/waehlergruppe-sproetze" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </p>
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
                                {legal.datenschutz.dataController.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br/></span>
                                ))}
                            </p>
                            <h4>Datenschutzbeauftragter</h4>
                            <p>{legal.datenschutz.dsb}</p>
                            <h4>Datenerfassung durch uns</h4>
                            <p>{legal.datenschutz.noDataCollection.split('\n').map((line, i) => (<span key={i}>{line}<br/></span>))}</p>
                            <h4>Datenerfassung durch GitHub Pages (Hosting-Provider)</h4>
                            <p>{legal.datenschutz.githubDataCollection.split('\n').map((line, i) => (<span key={i}>{line}<br/></span>))}</p>
                            <p>
                                <strong>Rechtsgrundlage:</strong> {legal.datenschutz.legalBasis}<br/>
                                <strong>Speicherdauer:</strong> {legal.datenschutz.storageDuration}<br/>
                                <strong>Verarbeitung durch:</strong> GitHub Inc. (USA), unter EU-Datenschutzabkommen
                            </p>
                            <h4>Ihre Rechte und Widerspruch</h4>
                            <p>Sie haben unter der DSGVO folgende Rechte:</p>
                            <p>{legal.datenschutz.userRights.split('\n').map((line, i) => (<span key={i}>{line}<br/></span>))}</p>
                            <p>
                                <strong>Sie können GitHub-Datenerfassung einschränken durch:</strong><br/>
                                {legal.datenschutz.objectionMethods.split('\n').slice(1).map((line, i) => (
                                    <span key={i}>{line}<br/></span>
                                ))}
                            </p>
                            <p>
                                Für volle DSGVO-Rechte kontaktieren Sie bitte GitHub unter ihrer 
                                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                                    {' '}Privacy Statement
                                </a>.
                            </p>
                            <h4>Open Source & Transparenz</h4>
                            <p>
                                <a href="https://github.com/chrbucs2/waehlergruppe-sproetze" target="_blank" rel="noopener noreferrer">Quellcode</a>: {legal.datenschutz.openSource}
                            </p>
                            <h4>Kontakt & Fragen</h4>
                            <p>
                                Bei Fragen zum Datenschutz kontaktieren Sie die {organization.name} 
                                über die im Impressum angegebenen Kontaktdaten.
                            </p>
                            <h4>Änderungen dieser Erklärung</h4>
                            <p>{legal.datenschutz.changes}</p>
                        </div>
                    </article>
                </div>
            )}
        </main>
    );
}

export default App;
