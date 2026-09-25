import styled from 'styled-components';

interface ThankYouModalProps {
    isOpen: boolean;
    onClose: () => void;
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

const Modal = styled.div`
    position: relative;
    background: white;
    border-radius: 24px;
    max-width: 560px;
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
    text-align: center;
    gap: 16px;
    display: grid;

    p {
        margin: 0;
        line-height: 1.6;
        color: var(--text);
        font-size: 15px;
    }
`;

const Eyebrow = styled.p`
    margin: 0;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: var(--muted);
    justify-self: center;
`;

const Highlight = styled.p`
    margin: 0;
    font-size: clamp(2rem, 6vw, 3.5rem);
    line-height: 1;
    font-weight: 800;
    color: var(--primary-dark);
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
`;

const PrimaryButton = styled.button`
    appearance: none;
    border: 0;
    border-radius: 999px;
    padding: 14px 18px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    box-shadow: 0 16px 30px rgba(93, 55, 93, 0.32);
    transition:
        transform 160ms ease,
        box-shadow 160ms ease,
        background 160ms ease;

    &:hover,
    &:focus-visible {
        transform: translateY(-1px);
    }
`;

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay onClick={onClose}>
            <Modal
                role="dialog"
                aria-modal="true"
                aria-labelledby="thank-you-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <Header>
                    <h2 id="thank-you-modal-title">Danke für 42,1&nbsp;% Vertrauen</h2>
                    <CloseButton type="button" onClick={onClose} aria-label="Dankeschön schließen">
                        ✕
                    </CloseButton>
                </Header>
                <Content>
                    <Eyebrow>Ortsratswahl 2026</Eyebrow>
                    <p>
                        Herzlichen Dank an alle Wählerinnen und Wähler für dieses überragende Ergebnis bei der
                        Ortsratswahl in Sprötze.
                    </p>
                    <Highlight>42,1&nbsp;% für die Wählergruppe Sprötze</Highlight>
                    <p>
                        Dieses Vertrauen ist für uns Auftrag und Ansporn, uns weiter mit voller Kraft für Sprötze
                        einzusetzen.
                    </p>
                    <Actions>
                        <PrimaryButton type="button" onClick={onClose}>
                            Vielen Dank!
                        </PrimaryButton>
                    </Actions>
                </Content>
            </Modal>
        </Overlay>
    );
}
