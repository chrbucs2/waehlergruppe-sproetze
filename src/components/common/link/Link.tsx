import styled from 'styled-components';
import {getLinkStyles} from "./linkStyles";

type LinkFontWeight = 'thick' | 'thin';

interface LinkRootProps {
    $showArrow: boolean;
    $fontWeight: LinkFontWeight;
    $underline: boolean;
}

const LinkRoot = styled.a<LinkRootProps>`
    display: inline-flex;
    ${({ $showArrow, $fontWeight, $underline }) => 
        getLinkStyles({ 
            showArrow: $showArrow, 
            fontWeight: $fontWeight, 
            underline: $underline })
    }
`;

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
    href?: string;
    showArrow?: boolean;
    arrowContent?: string;
    fontWeight?: LinkFontWeight;
    underline?: boolean;
}

export default function Link({ href, children, showArrow = true, fontWeight = 'thick', underline = false, ...rest }: LinkProps) {
    if (!href) {
        return null;
    }

    return (
        <LinkRoot href={href} $showArrow={showArrow} $fontWeight={fontWeight} $underline={underline} {...rest}>
            {children}
        </LinkRoot>
    );
}
