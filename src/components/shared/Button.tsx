import styled from 'styled-components';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    href: string;
    children: string;
    variant: ButtonVariant;
}

const ButtonRoot = styled.a<{ $variant: ButtonVariant }>`
    appearance: none;
    border: 0;
    border-radius: 999px;
    padding: 14px 18px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform 160ms ease,
        box-shadow 160ms ease,
        background 160ms ease;

    &:hover,
    &:focus-visible {
        transform: translateY(-1px);
    }

    ${({ $variant }) =>
        $variant === 'primary'
            ? `
        color: #fff;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        box-shadow: 0 16px 30px rgba(93, 55, 93, 0.32);
    `
            : `
        background: rgba(255, 255, 255, 0.72);
        color: var(--accent-dark);
        border: 1px solid var(--border);
    `}
`;

export function Button({ href, children, variant }: ButtonProps) {
    return (
        <ButtonRoot $variant={variant} href={href}>
            {children}
        </ButtonRoot>
    );
}
