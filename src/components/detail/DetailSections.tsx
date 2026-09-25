import styled from 'styled-components';

import { DetailSection } from './DetailSection';
import { DetailModel } from '../../models/details/DetailModel';
import {containerStyles} from "../shared/commonStyles";

const Container = styled.article`
    width: 100%;
    max-width: unset;
    display: grid;
    gap: 12px;
    padding: 20px;
    background: linear-gradient(135deg, rgba(249, 247, 255, 0.94), rgba(222, 213, 244, 0.7));
    align-content: start;
    ${containerStyles()}
`;

interface DetailSectionsProps {
    sections: DetailModel[];
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
