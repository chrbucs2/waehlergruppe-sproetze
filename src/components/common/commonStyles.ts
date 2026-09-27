import { css } from 'styled-components';

export const containerBorderStyles =
    (shadow = false) => css`
        border: 1px solid var(--border);
        border-radius: 28px;
        ${shadow && 'box-shadow: var(--shadow);'}
        `;

export const imageContainerStyles=
    () => css`
            border-radius: 16px;
            border: 1px solid var(--border);
        `;