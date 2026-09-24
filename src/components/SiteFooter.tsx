export function SiteFooter({ onShowImpressum, onShowDatenschutz }) {
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
