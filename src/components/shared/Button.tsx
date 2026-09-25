import styled from 'styled-components';
import { buttonBaseStyles, buttonStandardStyles } from './buttonStyles';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    href: string;
    children: string;
    variant: ButtonVariant;
}

const ButtonRoot = styled.a<{ $variant: ButtonVariant }>`
    ${buttonBaseStyles}
    ${buttonStandardStyles}

    ${({ $variant }) =>
        $variant === 'primary'
            ? `
                color: #fff;
                background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                box-shadow: 0 16px 30px rgba(93, 55, 93, 0.32);
              `
            : `
                color: var(--accent-dark);
                background: rgba(255, 255, 255, 0.72);
                border: 1px solid var(--border);
              `
    }
`;

export function Button({ href, children, variant }: ButtonProps) {
    return (
        <ButtonRoot $variant={variant} href={href}>
            {children}
        </ButtonRoot>
    );
}
