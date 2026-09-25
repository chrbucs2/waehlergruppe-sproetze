import styled from 'styled-components';

import { Eyebrow } from '../shared/Eyebrow';

const OverviewSectionHeaderRoot = styled.div`
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: unset;
`;

const OverviewSectionHeaderTitle = styled.h2`
    margin: 0;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    max-width: 18ch;
`;

const OverviewSectionHeaderCopy = styled.p`
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    max-width: none;
    width: 100%;
`;

interface OverviewSectionHeaderProps {
    eyebrow: string;
    title: string;
    copy?: string;
}

export function OverviewSectionHeader({ eyebrow, title, copy }: OverviewSectionHeaderProps) {
    return (
        <OverviewSectionHeaderRoot>
            <Eyebrow>{eyebrow}</Eyebrow>
            <OverviewSectionHeaderTitle>{title}</OverviewSectionHeaderTitle>
            {copy ? <OverviewSectionHeaderCopy>{copy}</OverviewSectionHeaderCopy> : null}
        </OverviewSectionHeaderRoot>
    );
}
