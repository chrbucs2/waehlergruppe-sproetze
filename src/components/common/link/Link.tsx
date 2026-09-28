import styled from 'styled-components';

type LinkFontWeight = 'thick' | 'thin';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
    href?: string;
    showArrow?: boolean;
    fontWeight?: LinkFontWeight;
};

const LinkRoot = styled.a<{ $showArrow: boolean; $fontWeight: LinkFontWeight }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 0;
    font-weight: ${({ $fontWeight }) => ($fontWeight === 'thin' ? 400 : 700)};
    color: var(--primary-dark);

    &::after {
        content: ${({ $showArrow }) => ($showArrow ? `'→'` : 'none')};
    }
`;

export default function Link({ href, children, showArrow = true, fontWeight = 'thick', ...rest }: LinkProps) {
    if (!href) {
        return null;
    }

    return (
        <LinkRoot href={href} $showArrow={showArrow} $fontWeight={fontWeight} {...rest}>
            {children}
        </LinkRoot>
    );
}
