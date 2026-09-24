import styled from 'styled-components';

const BackLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: var(--primary-dark);

    &::before {
        content: '←';
    }
`;

type DetailBackLinkProps = {
    href: string;
    text?: string;
};

export function DetailBackLink({ href, text = 'Zurück zur Übersicht' }: DetailBackLinkProps) {
    return <BackLink href={href}>{text}</BackLink>;
}
