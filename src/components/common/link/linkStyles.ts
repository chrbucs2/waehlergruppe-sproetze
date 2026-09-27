import { css } from 'styled-components';


const inlineLinkArrowStyles = css`
    color: var(--primary-dark);
    text-decoration: underline;
    text-underline-offset: 0.14em;
`;

const linkArrowStyles = css`
    ${inlineLinkArrowStyles}
    gap: 8px;

    &::after {
        content: '→';
    }
`;


export const inlineLinkStyles = css`
    ${inlineLinkArrowStyles}
`;

export const anchoredInlineLinkStyles = css`
    a {
        ${inlineLinkArrowStyles}
    }
`;
