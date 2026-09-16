import { contacts, legal, organization, teamMembers } from '../data';

export function LegalModals({ showImpressum, showDatenschutz, setShowImpressum, setShowDatenschutz }) {
    return (
        <>
            {showImpressum && (
                <div className="legal-overlay" onClick={() => setShowImpressum(false)}>
                    <article className="legal-modal" onClick={(event) => event.stopPropagation()}>
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
                    <article className="legal-modal" onClick={(event) => event.stopPropagation()}>
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
