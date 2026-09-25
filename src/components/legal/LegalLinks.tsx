import styled from 'styled-components';

interface LegalLinksProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

const Container = styled.div`
    display: flex;
    gap: 16px;
`;

const LinkButton = styled.button`
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

export function LegalLinks({ onShowImpressum, onShowDatenschutz }: LegalLinksProps) {
    return (
        <Container>
            <LinkButton type="button" onClick={onShowImpressum}>
                Impressum
            </LinkButton>
            <LinkButton type="button" onClick={onShowDatenschutz}>
                Datenschutz
            </LinkButton>
        </Container>
    );
}
