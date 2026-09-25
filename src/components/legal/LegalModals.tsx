import styled from 'styled-components';

import { contacts, legal, organization, teamMembers } from '../../data';

interface LegalModalsProps {
    showImpressum: boolean;
    showDatenschutz: boolean;
    setShowImpressum: (value: boolean) => void;
    setShowDatenschutz: (value: boolean) => void;
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 1000;
    animation: fadeIn 0.2s ease-out;
`;

const Modal = styled.article`
    position: relative;
    background: white;
    border-radius: 24px;
    max-width: 700px;
    width: 100%;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 80px rgba(123, 74, 124, 0.15);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 28px 0;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;

    h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: var(--text);
    }
`;

const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--text);
    opacity: 0.6;
    transition: opacity 0.2s;
    padding: 4px;
    line-height: 1;

    &:hover,
    &:focus-visible {
        opacity: 1;
    }
`;

const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 28px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        color: var(--text);
        margin: 0 0 12px;
    }

    h4 {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary);
        margin: 20px 0 8px;
        padding-top: 8px;
    }

    p {
        margin: 0 0 16px;
        line-height: 1.6;
        color: var(--text);
        font-size: 15px;
    }

    a {
        color: var(--primary);
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid var(--primary);
    }

    a:hover {
        opacity: 0.8;
    }
`;

export function LegalModals({ showImpressum, showDatenschutz, setShowImpressum, setShowDatenschutz }: LegalModalsProps) {
    return (
        <>
            {showImpressum && (
                <Overlay onClick={() => setShowImpressum(false)}>
                    <Modal onClick={(event) => event.stopPropagation()}>
                        <Header>
                            <h2>{legal.impressum.heading}</h2>
                            <CloseButton
                                type="button"
                                onClick={() => setShowImpressum(false)}
                                aria-label="Schließen"
                            >
                                ✕
                            </CloseButton>
                        </Header>
                        <Content>
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
                        </Content>
                    </Modal>
                </Overlay>
            )}

            {showDatenschutz && (
                <Overlay onClick={() => setShowDatenschutz(false)}>
                    <Modal onClick={(event) => event.stopPropagation()}>
                        <Header>
                            <h2>{legal.datenschutz.heading}</h2>
                            <CloseButton
                                type="button"
                                onClick={() => setShowDatenschutz(false)}
                                aria-label="Schließen"
                            >
                                ✕
                            </CloseButton>
                        </Header>
                        <Content>
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
                                Für volle DSGVO-Rechte kontaktieren Sie GitHub unter ihrer
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
                        </Content>
                    </Modal>
                </Overlay>
            )}
        </>
    );
}
