import styled from 'styled-components';

import { Eyebrow } from './Eyebrow';
import { containerBorderStyles } from './styles/commonStyles';
import { HeaderActions } from './HeaderActions';
import { HeaderLogo } from './HeaderLogo';

const HeaderWithLogoRoot = styled.section`
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

const HeaderWithLogoCopy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const HeaderWithLogoLead = styled.p`
    margin: 0;
    font-size: 1.08rem;
    line-height: 1.7;
    max-width: 60ch;
    color: var(--muted);
`;

const HeaderWithLogoTitle = styled.h1`
    font-size: clamp(1.65rem, 2.5vw, 2.3rem);
    max-width: none;
`;

interface HeaderWithLogoProps {
    eyebrow: string;
    title: string;
    lead: string;
    actions: Array<{ href: string; label: string; variant: 'primary' | 'secondary' }>;
}

export function HeaderWithLogo({ eyebrow, title, lead, actions }: HeaderWithLogoProps) {
    return (
        <HeaderWithLogoRoot>
            <HeaderWithLogoCopy>
                <Eyebrow>{eyebrow}</Eyebrow>
                <HeaderWithLogoTitle>{title}</HeaderWithLogoTitle>
                <HeaderWithLogoLead>{lead}</HeaderWithLogoLead>
                <HeaderActions actions={actions} />
            </HeaderWithLogoCopy>
            <HeaderLogo
                label="Logo der Wählergruppe Sprötze"
                alt="Logo der Wählergruppe Sprötze"
                path="logo.png"
            />
        </HeaderWithLogoRoot>
    );
}
