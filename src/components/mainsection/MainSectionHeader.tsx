import styled from 'styled-components';

import { Eyebrow } from '../common/Eyebrow';

const MainSectionHeaderRoot = styled.div`
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: unset;
`;

const MainSectionHeaderTitle = styled.h2`
    margin: 0;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
`;

const MainSectionHeaderCopy = styled.p`
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    max-width: none;
    width: 100%;
`;

interface MainSectionHeaderProps {
    eyebrow: string;
    title: string;
    copy?: string;
}

export function MainSectionHeader({ eyebrow, title, copy }: MainSectionHeaderProps) {
    return (
        <MainSectionHeaderRoot>
            <Eyebrow>{eyebrow}</Eyebrow>
            <MainSectionHeaderTitle>{title}</MainSectionHeaderTitle>
            {copy ? <MainSectionHeaderCopy>{copy}</MainSectionHeaderCopy> : null}
        </MainSectionHeaderRoot>
    );
}
