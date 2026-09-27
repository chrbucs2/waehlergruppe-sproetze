import styled from 'styled-components';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
    href?: string | null;
};

const LinkRoot = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 0;
    font-weight: 700;
    color: var(--primary-dark);

    &::after {
        content: '→';
    }
`;

export default function Link({ href, children, ...rest }: LinkProps) {
    if (!href) {
        return null;
    }

    return (
        <LinkRoot href={href} {...rest}>
            {children}
        </LinkRoot>
    );
}
