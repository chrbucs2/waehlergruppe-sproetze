import styled from 'styled-components';

interface SiteFooterProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

const Footer = styled.footer`
    margin-top: 18px;
    padding: 18px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(123, 74, 124, 0.12);
`;

const Brand = styled.div`
    strong {
        display: block;
    }

    p {
        margin-top: 6px;
        color: var(--muted);
    }
`;

const Legal = styled.div`
    display: flex;
    gap: 16px;
`;

const LegalLink = styled.button`
    background: transparent;
    border: none;
    color: var(--text);
    cursor: pointer;
    font-size: 13px;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    padding: 0;
    font-family: inherit;

    &:hover,
    &:focus-visible {
        opacity: 1;
    }
`;

const BackToTop = styled.a`
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.8);
    transition:
        transform 160ms ease,
        background 160ms ease;

    &:hover,
    &:focus-visible {
        transform: translateY(-1px);
    }
`;

export function SiteFooter({ onShowImpressum, onShowDatenschutz }: SiteFooterProps) {
    return (
        <Footer>
            <Brand>
                <strong>Wählergruppe Sprötze</strong>
                <p>Bürgernähe, Augenmaß und ein lebenswertes Dorf.</p>
            </Brand>
            <Legal>
                <LegalLink type="button" onClick={onShowImpressum}>
                    Impressum
                </LegalLink>
                <LegalLink type="button" onClick={onShowDatenschutz}>
                    Datenschutz
                </LegalLink>
            </Legal>
            <BackToTop href="#top">
                Nach oben
            </BackToTop>
        </Footer>
    );
}