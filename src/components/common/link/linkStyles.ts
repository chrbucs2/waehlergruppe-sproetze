import { css } from 'styled-components';

type LinkCssOptions = {
    underline?: boolean;
    showArrow?: boolean;
    fontWeight?: 'thick' | 'thin';
    arrowContent?: string;
};

export const getLinkStyles = ({
    underline = false,
    showArrow = true,
    fontWeight = 'thick',
    arrowContent = '→',
}: LinkCssOptions = {}) => css`
    color: var(--primary-dark);
    font-weight: ${fontWeight === 'thin' ? 400 : 700};
    text-decoration: ${underline ? 'underline' : 'none'};
    text-underline-offset: 0.14em;

    ${showArrow && css`
        gap: 8px;

        &::after {
            content: '${arrowContent}';
        }
    `}
`;

export const anchoredInlineLinkStyles = css`
    a {
        ${getLinkStyles({underline: true, showArrow: false, fontWeight: 'thick'})}
    }
`;
