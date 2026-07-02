import { useState } from 'react';

const priorities = [
    {
        title: 'Familien verbinden',
        eyebrow: '1. Familien, Kinder und Generationen',
        image: '/images/priorities/familie.svg',
        imageAlt: 'Illustration eines Hauses mit Sonne für familienfreundliches Wohnen',
        text:
            'Attraktive Spiel- und Freizeitangebote, sichere Schul- und Kindergartenwege und neue Begegnungsorte für Jung und Alt. Das Gelände der ehemaligen Feuerwehr soll als zentraler Treffpunkt mit Grünflächen, Spielmöglichkeiten und Raum für Gemeinschaft entwickelt werden.',
    },
    {
        title: 'Dorfcharakter bewahren',
        eyebrow: '2. Entwicklung mit Augenmaß',
        image: '/images/priorities/dorfcharakter.svg',
        imageAlt: 'Illustration einer Dorf-Silhouette',
        text:
            'Sprötze soll seinen gewachsenen, dörflichen Charakter behalten. Neue Bauvorhaben müssen sich harmonisch ins Ortsbild einfügen. Wachstum darf nicht zulasten von Lebensqualität, Infrastruktur oder Identität gehen.',
    },
    {
        title: 'Natur schützen',
        eyebrow: '3. Nachhaltigkeit',
        image: '/images/priorities/natur.svg',
        imageAlt: 'Illustration von Blättern und Landschaft für Naturschutz',
        text:
            'Heide-, Wald- und Naturlandschaften rund um Sprötze sind ein wertvolles Erbe. Wir setzen uns für sensible Lebensräume, den Erhalt von Grünflächen und eine verantwortungsvolle Besucherlenkung ein.',
    },
    {
        title: 'Mobilität sichern',
        eyebrow: '4. Verkehr & Sicherheit',
        image: '/images/priorities/mobilitaet.svg',
        imageAlt: 'Illustration einer Straße mit Markierungen',
        text:
            'Eine starke ÖPNV-Anbindung mit zuverlässigen Bahn- und Busverbindungen, dazu Verkehrsberuhigung, sichere Wege für Kinder, Fußgänger und Radfahrer.',
    },
    {
        title: 'Bürgerbeteiligung stärken',
        eyebrow: '5. Transparenz',
        image: '/images/priorities/transparenz.svg',
        imageAlt: 'Illustration von Sprechblasen für Dialog und Beteiligung',
        text:
            'Politik muss nachvollziehbar und bürgernah sein. Wir stehen für offene Kommunikation, frühzeitige Information und mehr Einbindung der Bürgerinnen und Bürger in Entscheidungen.',
    },
    {
        title: 'Ehrenamt fördern',
        eyebrow: '6. Vereine & Gemeinschaft',
        image: '/images/priorities/ehrenamt.svg',
        imageAlt: 'Illustration eines Herzsymbols mit Händen für Ehrenamt',
        text:
            'Vereine, Feuerwehr, Kultur- und Sportgemeinschaften sind das Herz unseres Dorfes. Wir wollen das Ehrenamt stärken und freiwilliges Engagement besser unterstützen.',
    },
    {
        title: 'Wohnen bezahlbar halten',
        eyebrow: '7. Ortsentwicklung',
        image: '/images/priorities/wohnen.svg',
        imageAlt: 'Illustration von Haus und Baum für nachhaltige Ortsentwicklung',
        text:
            'Sprötze soll für alle Generationen lebenswert bleiben. Wir unterstützen bezahlbaren Wohnraum für junge Familien und Senioren, ohne den dörflichen Charakter zu gefährden.',
    },
];

const candidates = [
    {
        name: 'Denise Jusinski',
        profile: '35 Jahre, Vertrieb für digitale Medien',
        summary:
            'Denise verbindet Familienfreundlichkeit, Naturschutz und echte Beteiligung im Dorfalltag.',
        priorities: [
            'Mehr Spiel- und Freizeitangebote für Kinder und junge Familien.',
            'Natur schützen und Tourismus so steuern, dass sensible Lebensräume erhalten bleiben.',
            'Transparente Kommunikation, stärkere Bürgerbeteiligung und faire Lösungen für Hundebesitzer.',
        ],
        focus: ['Familien', 'Naturschutz', 'Transparenz', 'Ehrenamt'],
    },
    {
        name: 'Peter Kröger',
        profile: '71 Jahre, Pensionär',
        summary:
            'Peter steht für unabhängige Kommunalpolitik, behutsame Ortsentwicklung und hohe Alltagssicherheit.',
        priorities: [
            'Sachliche, bürgernahe Entscheidungen ohne Parteibindung treffen.',
            'Begegnungsstätte für Jung und Alt auf dem ehemaligen Feuerwehrgelände schaffen.',
            'Tempo-30-Orientierung, starke ÖPNV-Anbindung und Schutz von Natur- und Heideflächen sichern.',
        ],
        focus: ['Unabhängig', 'Begegnung', 'Verkehr', 'Naturschutz'],
    },
    {
        name: 'Claas Bartels',
        profile: '44 Jahre, Kaufmann',
        summary:
            'Claas will Entwicklung mit Augenmaß, Rückhalt fürs Ehrenamt und frühzeitige, ehrliche Information.',
        priorities: [
            'Dörfliche Identität bewahren und Bauvorhaben am Ortsbild ausrichten.',
            'Vereine, Feuerwehr, Kultur und Ehrenamt als Träger des Dorflebens stärken.',
            'Transparente Entscheidungen und klare Grenzen gegenüber dem Gewerbegebiet sichern.',
        ],
        focus: ['Augenmaß', 'Ehrenamt', 'Transparenz', 'Dorfidentität'],
    },
    {
        name: 'Dorothee Kröger',
        profile: '36 Jahre, Klinikmanagement Unternehmensentwicklung',
        summary:
            'Dorothee verbindet sichere Wege, starke Vereine und einen offenen Dorfmittelpunkt für alle Generationen.',
        priorities: [
            'Auf dem ehemaligen Feuerwehrgelände eine Park- und Begegnungsanlage mit Spielplatz schaffen.',
            'Vereine aktiv unterstützen und den Zusammenhalt im Dorf stärken.',
            'Kinderfreundliche Verkehrsmaßnahmen und dorftypische Bauentwicklung durchsetzen.',
        ],
        focus: ['Dorfmittelpunkt', 'Vereine', 'Kindersicherheit', 'Dorfcharakter'],
    },
    {
        name: 'Christian Buck',
        profile: '47 Jahre, Softwareentwickler',
        summary:
            'Christian steht für eine lebenswerte Dorfentwicklung mit Augenmaß, Begegnung und digital transparenter Politik.',
        priorities: [
            'Dorfcharakter erhalten und Bauentwicklung maßvoll gestalten.',
            'Ehemaliges Feuerwehrgelände als Ort für Begegnung und Gemeinschaft weiterentwickeln.',
            'Bezahlbares Wohnen, Freizeit- und Vereinsangebote sowie nachvollziehbare Information stärken.',
        ],
        focus: ['Dorfcharakter', 'Begegnungsort', 'Wohnen', 'Transparenz'],
    },
    {
        name: 'René Hamann',
        profile: '50 Jahre, Medienvermarktung, Familienvater',
        summary:
            'René setzt den Fokus auf Mobilität, Verkehrssicherheit und den Schutz von Natur und Dorfidentität.',
        priorities: [
            'ÖPNV mit Metronom- und Busanbindung sichern und ausbauen.',
            'Verkehr im Ort beruhigen und Wege für Kinder, Fußgänger und Radfahrer sicherer machen.',
            'Heide, Wald und Grünflächen bewahren sowie Wachstum im Einklang mit Infrastruktur planen.',
        ],
        focus: ['ÖPNV', 'Verkehrssicherheit', 'Natur', 'Ortsentwicklung'],
    },
    {
        name: 'Ute Schwermer-Vietheer',
        profile: '74 Jahre, Studienrätin i. R.',
        summary:
            'Ute steht für Toleranz, Weltoffenheit und ein starkes Miteinander der Generationen.',
        priorities: [
            'Dorfgemeinschaft stärken und Menschen im Ort besser verbinden.',
            'Sichere Schulwege und ein verlässliches Umfeld für Familien sichern.',
            'Respektvolles Zusammenleben von Jung und Alt fördern.',
        ],
        focus: ['Weltoffenheit', 'Dorfgemeinschaft', 'Sicherheit', 'Miteinander'],
    },
    {
        name: 'Ingo Schalow',
        profile: '60 Jahre, Unternehmensberater Logistik',
        summary:
            'Ingo setzt auf bürgernahe Sachpolitik, klare Ortsgrenzen und einen lebendigen Ortskern.',
        priorities: [
            'Mehr Transparenz durch regelmäßige Information über Ortsratsthemen.',
            'Keine Erweiterung des Gewerbegebiets Trelder Berg Richtung Sprötze.',
            'Begegnungsfläche am Feuerwehrgelände und Nutzung des Lehrerhauses für die Allgemeinheit entwickeln.',
        ],
        focus: ['Bürgernähe', 'Sachpolitik', 'Ortsgrenzen', 'Begegnungsstätte'],
    },
];

const teamMembers = [
    {
        name: 'Denise Jusinski',
        image: '/images/team/denise-jusinski.png',
        meta: '35 Jahre, Vertrieb für digitale Medien',
        details: [
            { icon: '👨‍👩‍👦', text: 'verheiratet, 2 Jahre alten Sohn & eine Golden Retriever Dame “Zwirbi”' },
            { icon: '📍', text: 'geboren in Buchholz, aufgewachsen in Wörme' },
            { icon: '🤝', text: 'ehrenamtliches Vorstandsmitglied' },
            { icon: '🏅', text: 'ehrenamtlich als Spartenleitung sowie Übungsleiterin Fitness im TSV Sprötze' },
        ],
        quote:
            'Ein familienfreundliches Sprötze, lebendige Vereine, transparente Entscheidungen sowie Natur- und Artenschutz mit fairen Lösungen für Hundebesitzer – dafür setze ich mich ein',
    },
    {
        name: 'Peter Kröger',
        image: '/images/team/peter-kroeger.jpg',
        imagePosition: 'center 25%',
        meta: '71 Jahre, Pensionär',
        details: [
            { icon: '👨‍👩‍👦', text: 'verheiratet, Vater & Opa' },
            { icon: '🚒', text: 'Ehrenortsbrandmeister der FF Sprötze, 28 Jahre in der Wehrführung tätig' },
            { icon: '🎯', text: 'Ehrenkommandeur des Schützenvereins, 55 Jahre Mitglied im Verein' },
            { icon: '🗳️', text: 'Seit 1991 engagiere ich mich in der Freien Wählergruppe für unsere Ortschaft.' },
        ],
        quote:
            'Verlässlichkeit, Erfahrung und Verantwortung prägen mein Handeln. Gemeinsam gestalten wir die Zukunft unserer Ortschaft – bürgernah, unabhängig und mit Augenmaß.',
    },
    {
        name: 'Claas Bartels',
        image: '/images/team/claas-bartels.jpg',
        imagePosition: 'center 40%',
        meta: '44 Jahre, Kaufmann',
        details: [
            { icon: '👨‍👩‍👧‍👦', text: 'verheiratet, 2 Kinder' },
            { icon: '🎯', text: 'Präsident Schützenverein Sprötze-Kakenstorf' },
            { icon: '🚒', text: 'Mitglied Freiwillige Feuerwehr Sprötze' },
            { icon: '🎵', text: 'seit vielen Jahren ehrenamtlich in Sport & Musik engagiert' },
        ],
        quote:
            'Sprötze ist kein Reißbrettprojekt. Unser Dorf lebt von seiner Geschichte, seinen Menschen und dem Engagement vieler Ehrenamtlicher. Entwicklung braucht Augenmaß, damit das erhalten bleibt, was Sprötze ausmacht.',
    },
    {
        name: 'Dorothee Kröger',
        image: '/images/team/dorothee-kroeger.png',
        imagePosition: 'center 25%',
        meta: '36 Jahre, Klinikmanagement Unternehmensentwicklung',
        details: [
            { icon: '👨‍👩‍👧‍👦', text: 'Mutter' },
            { icon: '🚒', text: 'Mitglied Freiwillige Feuerwehr Sprötze, seit 2001, Stadtkinderfeuerwehrwartin und Kinderfeuerwehrwartin Sprötze, seit 2020' },
            { icon: '🎯', text: 'Mitglied Schützenverein Sprötze-Kakenstorf' },
        ],
        quote:
            'Wir gestalten Sprötze gemeinsam! Mit sicheren Wegen, lebendigen Vereinen, Orten der Begegnung und einer Entwicklung, die den Charakter unseres schönen Dorfes erhält.',
    },
    {
        name: 'Christian Buck',
        image: '/images/team/christian-buck.png',
        meta: '47 Jahre, Softwareentwickler',
        details: [
            { icon: '👨‍👩‍👧‍👦', text: 'Vater von 2 Töchtern' },
            { icon: '🌿', text: 'sportlich aktiv & naturverbunden' },
        ],
        quote:
            'Mir ist wichtig, dass Sprötze nicht einfach verwaltet, sondern gemeinsam gestaltet wird – mit Augenmaß bei der Entwicklung, Respekt vor unserer Natur und mehr Transparenz für alle.',
    },
    {
        name: 'René Hamann',
        image: '/images/team/rene-hamann.png',
        imagePosition: 'center 42%',
        meta: '50 Jahre, Medienvermarktung, Familienvater',
        details: [
            { icon: '👨‍👩‍👧‍👦', text: 'Familienvater' },
        ],
        quote:
            'Ich stehe für ein verkehrssicheres Sprötze, in dem jeder wohlbehalten an sein Ziel kommt, für den Erhalt des dörflichen Charakters im Einklang mit dem Wandel der Zeit sowie einen austarierten HeideTourismus.',
    },
    {
        name: 'Gabriele Pilkowski',
        image: '/images/team/gabriele-pilkowski.png',
        meta: '62 Jahre, Personalleiterin',
        details: [
            { icon: '⚖️', text: 'ehrenamtliche Richterin' },
        ],
        quote:
            'Sprötze ist für mich ein liebenswerter Ort für alle Generationen. Ich möchte die Vielfalt erhalten, das Miteinander bewahren und die Zukunft gemeinsam gestalten.',
    },
    {
        name: 'Ute Schwermer-Vietheer',
        image: '/images/team/ute-schwermer-vietheer.jpg',
        imagePosition: 'center 25%',
        meta: '74 Jahre, Studienrätin i. R.',
        details: [
            { icon: '🎂', text: '74 Jahre, Studienrätin i.R.' },
            { icon: '👨‍👩‍👧‍👦', text: 'verheiratet, 3 Kinder, 5 Enkelkinder' },
            { icon: '🚲', text: 'Hobbies: Fahrrad fahren, regionale Geschichte, Enkelkinder, Garten, Kultur, Musik' },
            { iconImage: '/images/icons/vierdoerfer-doenz.png', iconAlt: 'Logo Vierdörfer Dönz', text: 'ehem. 1. Vorsitzende der Vierdörfer Dönz,' },
        ],
        quote:
            'Ich setzte mich für eine starke Dorfgemeinschaft, sichere Schuluwege und eine lebenswerte Zukunft für Jung und Alt ein',
    },
    {
        name: 'Ingo Schalow',
        image: '/images/team/ingo-schalow.png',
        meta: '60 Jahre, Unternehmensberater Logistik',
        details: [
            { icon: '👨‍👩‍👧‍👦', text: '2 erwachsene Kinder' },
            { icon: '🏡', text: 'aufgewachsen in Sprötze' },
            { icon: '🗳️', text: 'Seit 20 Jahren Mitglied der Wählergemeinschaft, 15 Jahre im Ortsrat' },
        ],
        quote:
            'Ich bin hier zu Hause und Verantwortung beginnt vor der eigenen Haustür. Veränderungen entstehen nur dort, wo Menschen mitmachen und gemeinsam gestalten. Und ich möchte die Zukunft unsere Gemeinde aktiv mitgestalten.',
    },
];

function App() {
    const assetUrl = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
    const [activePriority, setActivePriority] = useState(priorities[0]);
    const [activeCandidate, setActiveCandidate] = useState(candidates[0]);
    const [activeTeamMemberName, setActiveTeamMemberName] = useState(null);
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);
    const activeTeamMember = teamMembers.find((member) => member.name === activeTeamMemberName) ?? null;
    const heroFaces = teamMembers;

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
                            <h2>Impressum</h2>
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
                            <h3>Wählergruppe Sprötze</h3>
                            <p>
                                Eine unabhängige Bürgerbewegung für eine lebenswerte Gemeinde.
                            </p>
                            <h4>Verantwortlich für Webseite & Inhalte</h4>
                            <p>
                                <strong>Christian Buck</strong> (Webmaster)<br/>
                                Hubertusweg 4<br/>
                                21244 Buchholz i.d.N.<br/>
                                <br/>
                                E-Mail: <a href="mailto:wgs@buck-online.net">wgs@buck-online.net</a>
                            </p>
                            <h4>Vertreter der Wählergruppe</h4>
                            <p>
                                <strong>Peter Kröger</strong><br/>
                                Sprötzer Bahnhofstraße 9A<br/>
                                21244 Buchholz-Sprötze<br/>
                                <br/>
                                Telefon: <a href="tel:+4941867878">+49 4186 7878</a><br/>
                                E-Mail: <a href="mailto:peter.kroeger@sproetze.de">peter.kroeger@sproetze.de</a>
                            </p>
                            <h4>Organisationsform</h4>
                            <p>
                                Wählergruppe Sprötze ist eine unabhängige Bürgerbewegung (nicht eingetragener Verein, parteilos).
                            </p>
                            <h4>Kandidaten der Wählergruppe</h4>
                            <p>
                                Denise Jusinski (35) · Peter Kröger (71) · Claas Bartels (44) · 
                                Dorothee Kröger (36) · Christian Buck (47) · René Hamann (50) · 
                                Ute Schwermer-Vietheer (74) · Ingo Schalow (60) · Detlev von der Heide
                            </p>
                            <h4>Hosting & Technologie</h4>
                            <p>
                                Diese Webseite wird gehostet auf <strong>GitHub Pages</strong> (<a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">pages.github.com</a>).<br/>
                                <br/>
                                Technologie: React + Vite<br/>
                                Quellcode: Öffentlich verfügbar auf <a href="https://github.com/chrbucs2/waehlergruppe-sproetze" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </p>
                            <h4>Haftungsausschluss für externe Links</h4>
                            <p>
                                Für fremde Inhalte, auf die wir von dieser Seite verlinken, übernehmen wir keine Haftung nach TMG §7(1). 
                                Dies gilt besonders für Inhalte auf von uns nicht kontrollierten Webseiten.
                            </p>
                            <h4>Bildrechte</h4>
                            <p>
                                Alle auf dieser Seite abgebildeten Personen haben der Veröffentlichung ihrer Fotos zugestimmt. 
                                Der Schutz der Persönlichkeitsrechte wird respektiert.
                            </p>
                        </div>
                    </article>
                </div>
            )}

            {showDatenschutz && (
                <div className="legal-overlay" onClick={() => setShowDatenschutz(false)}>
                    <article className="legal-modal" onClick={(e) => e.stopPropagation()}>
                        <header className="legal-modal__header">
                            <h2>Datenschutzerklärung</h2>
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
                            <h3>Datenschutz bei der Wählergruppe Sprötze</h3>
                            <p>
                                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung erläutert, 
                                welche Informationen erfasst werden und wie wir diese behandeln.
                            </p>
                            <h4>Datenerfassung durch uns</h4>
                            <p>
                                <strong>Diese Website erfasst KEINE persönlichen Daten von Ihnen.</strong><br/>
                                <br/>
                                ✓ Keine Kontaktformulare<br/>
                                ✓ Keine Newsletter-Anmeldung<br/>
                                ✓ Kein Tracking oder Analytics<br/>
                                ✓ Keine Cookies<br/>
                                ✓ Keine Speicherung von Besucherdaten
                            </p>
                            <h4>Datenerfassung durch GitHub Pages</h4>
                            <p>
                                Diese Website wird auf <strong>GitHub Pages</strong> gehostet. GitHub speichert automatisch 
                                und unvermeidlich:
                            </p>
                            <p>
                                • IP-Adresse (zur Sicherheit und Verfügbarkeit)<br/>
                                • Zugriffszeitstempel<br/>
                                • Browser-Informationen (User-Agent)<br/>
                                • Referrer-Daten<br/>
                                <br/>
                                <strong>Speicherdauer:</strong> Typischerweise ca. 90 Tage nach GitHub-Standardrichtlinien<br/>
                                <strong>Verarbeitung:</strong> Nur zur Infrastruktur-Überwachung und Sicherheit
                            </p>
                            <h4>Ihre Rechte</h4>
                            <p>
                                Sie haben unter der DSGVO folgende Rechte:
                            </p>
                            <p>
                                • Recht auf Auskunft über Ihre gespeicherten Daten<br/>
                                • Recht auf Berichtigung oder Löschung<br/>
                                • Recht auf Datenportabilität<br/>
                                • Recht auf Beschwerde bei einer Datenschutzbehörde<br/>
                                <br/>
                                <em>Da wir keine Daten speichern, sind diese Rechte in der Praxis nicht anwendbar, 
                                aber Sie können GitHub kontaktieren.</em>
                            </p>
                            <h4>GitHub Datenschutzerklärung</h4>
                            <p>
                                Für weitere Informationen zur Datenverarbeitung durch GitHub Pages siehe:<br/>
                                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                                    GitHub Privacy Statement
                                </a>
                            </p>
                            <h4>Open Source & Transparenz</h4>
                            <p>
                                Der Quellcode dieser Website ist öffentlich verfügbar. Es gibt keine versteckten 
                                Datenverarbeitungen oder Tracking-Skripte. Alle genutzten Bibliotheken sind 
                                mit Open-Source-Lizenzen lizenziert.
                            </p>
                            <h4>Kontakt zur Datenschutzerklärung</h4>
                            <p>
                                Bei Fragen zum Datenschutz kontaktieren Sie bitte die Wählergruppe Sprötze 
                                über die im Impressum angegebenen Kontaktdaten.
                            </p>
                            <h4>Änderungen</h4>
                            <p>
                                Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. 
                                Die aktuelle Fassung finden Sie hier auf dieser Seite.
                            </p>
                        </div>
                    </article>
                </div>
            )}
        </main>
    );
}

export default App;
