import styled from 'styled-components';

import { Eyebrow } from '../common/Eyebrow';
import { ButtonGroup } from '../common/button/ButtonGroup';
import { containerBorderStyles } from '../styles/commonStyles';
import { HeadSectionLogo } from './HeadSectionLogo';

const HeadSectionWithLogoRoot = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px;
    padding: 28px;
    align-items: center;
    background: linear-gradient(135deg, rgba(252, 250, 255, 0.98), rgba(234, 242, 252, 0.86), rgba(236, 229, 248, 0.92));
    ${containerBorderStyles(true)}

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const HeadSectionWithLogoCopy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const HeadSectionWithLogoLead = styled.p`
    margin: 0;
    font-size: 1.08rem;
    line-height: 1.7;
    max-width: 60ch;
    color: var(--muted);
`;

const HeadSectionWithLogoTitle = styled.h1`
    font-size: clamp(1.65rem, 2.5vw, 2.3rem);
    max-width: none;
`;

interface HeadSectionWithLogoProps {
    eyebrow: string;
    title: string;
    lead: string;
    actions: Array<{ href: string; label: string; variant: 'primary' | 'secondary' }>;
}

export function HeadSectionWithLogo({ eyebrow, title, lead, actions }: HeadSectionWithLogoProps) {
    return (
        <HeadSectionWithLogoRoot>
            <HeadSectionWithLogoCopy>
                <Eyebrow>{eyebrow}</Eyebrow>
                <HeadSectionWithLogoTitle>{title}</HeadSectionWithLogoTitle>
                <HeadSectionWithLogoLead>{lead}</HeadSectionWithLogoLead>
                <ButtonGroup actions={actions} />
            </HeadSectionWithLogoCopy>
            <HeadSectionLogo
                label="Logo der Wählergruppe Sprötze"
                alt="Logo der Wählergruppe Sprötze"
                path="logo.png"
            />
        </HeadSectionWithLogoRoot>
    );
}
