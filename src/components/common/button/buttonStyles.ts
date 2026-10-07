import { css } from 'styled-components';

export const buttonBaseStyles = css`
    appearance: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    border-radius: 999px;
    transition:
        transform 160ms ease,
        box-shadow 160ms ease,
        background 160ms ease;
`;

export const buttonStandardStyles = css`
    ${buttonBaseStyles}
    border: 0;
    padding: 14px 18px;
    font-weight: 700;
`;

export const filterButtonStyles = css`
    ${buttonBaseStyles}
    border: 1px solid var(--border);
    padding: 10px 14px;
    font-weight: 600;
`;

export const moreButtonStyles = css`
    ${buttonBaseStyles}
    border: 1px solid var(--border);
    padding: 10px 14px;
    font-weight: 600;
`;
