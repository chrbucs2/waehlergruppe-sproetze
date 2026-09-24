import styled from 'styled-components';

import { DetailSection } from './DetailSection';
import { DetailSectionModel } from '../../models/DetailSectionModel';

const Container = styled.article`
    width: 100%;
    max-width: unset;
    display: grid;
    gap: 12px;
    padding: 20px;
    background: linear-gradient(135deg, rgba(249, 247, 255, 0.94), rgba(222, 213, 244, 0.7));
    border: 1px solid var(--border);
    border-radius: 24px;
    align-content: start;
`;

interface DetailSectionsProps {
    sections: DetailSectionModel[];
}

export function DetailSections({ sections }: DetailSectionsProps) {
    if (!sections.length) {
        return null;
    }

    return (
        <Container>
            {sections.map((section) => (
                <DetailSection key={section.title} {...section} />
            ))}
        </Container>
    );
}
