import styled from 'styled-components';

import { formatInlineMarkup } from '../../lib/formatting';

const Container = styled.div`
    margin: 0;
    width: 100%;
    max-width: unset;
    display: grid;
    gap: 1.25rem;
`;

const Paragraph = styled.p`
    margin: 0;
    line-height: 1.7;
    max-width: unset;
    width: 100%;

    a {
        text-decoration: underline;
        text-underline-offset: 0.14em;
    }

    a::after {
        content: '→';
    }
`;

export interface DetailIntroductionProps {
    paragraphs: string[];
}

export function DetailIntroduction({ paragraphs }: DetailIntroductionProps) {
    if (!paragraphs.length) {
        return null;
    }

    return (
        <Container>
            {paragraphs.map((paragraph, index) => (
                <Paragraph key={`detail-introduction-${index}`} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(paragraph) }} />
            ))}
        </Container>
    );
}
