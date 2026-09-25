import styled from 'styled-components';

import { LegalLinks } from './legal/LegalLinks';
import { containerBorderStyles } from './shared/commonStyles';

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
    ${containerBorderStyles(true)}
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
            <LegalLinks onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
            <BackToTop href="#top">
                Nach oben
            </BackToTop>
        </Footer>
    );
}