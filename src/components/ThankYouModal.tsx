export function ThankYouModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="legal-overlay" onClick={onClose}>
            <div
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
            </div>
        </div>
    );
}
