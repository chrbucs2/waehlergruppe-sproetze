import styled from 'styled-components';

import { OverviewHeaderActions } from './OverviewHeaderActions';
import { OverviewHeaderLogo } from './OverviewHeaderLogo';
import { Eyebrow } from '../shared/Eyebrow';
import {containerBorderStyles} from "../shared/commonStyles";

const OverviewHeaderRoot = styled.section`
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

const OverviewHeaderCopy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const OverviewHeaderLead = styled.p`
    margin: 0;
    font-size: 1.08rem;
    line-height: 1.7;
    max-width: 60ch;
    color: var(--muted);
`;

const OverviewHeaderTitle = styled.h1`
    font-size: clamp(1.65rem, 2.5vw, 2.3rem);
    max-width: none;
`;

interface OverviewHeaderProps {
    eyebrow: string;
    title: string;
    lead: string;
    actions: Array<{ href: string; label: string; variant: 'primary' | 'secondary' }>;
}

export function OverviewHeader({ eyebrow, title, lead, actions }: OverviewHeaderProps) {
    return (
        <OverviewHeaderRoot>
            <OverviewHeaderCopy>
                <Eyebrow>{eyebrow}</Eyebrow>
                <OverviewHeaderTitle>{title}</OverviewHeaderTitle>
                <OverviewHeaderLead>{lead}</OverviewHeaderLead>
                <OverviewHeaderActions actions={actions} />
            </OverviewHeaderCopy>
            <OverviewHeaderLogo
                label="Logo der Wählergruppe Sprötze"
                alt="Logo der Wählergruppe Sprötze"
                path="logo.png" />
        </OverviewHeaderRoot>
    );
}
