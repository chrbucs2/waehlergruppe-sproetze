import styled from 'styled-components';

import {moreButtonStyles } from './buttonStyles';

interface MoreButtonProps {
    expanded: boolean;
    onClick: () => void;
    moreLabel?: string;
    lessLabel?: string;
}

const MoreButtonRoot = styled.button`
    ${moreButtonStyles}
    background: rgba(255, 255, 255, 0.72);
    color: var(--accent-dark);
`;

export function MoreButton({
    expanded,
    onClick,
    moreLabel = 'Weitere Termine anzeigen',
    lessLabel = 'Weniger anzeigen',
}: MoreButtonProps) {
    return (
        <MoreButtonRoot type="button" onClick={onClick}>
            {expanded ? lessLabel : moreLabel}
        </MoreButtonRoot>
    );
}
