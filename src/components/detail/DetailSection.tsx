import styled from 'styled-components';

import { DetailSectionImage } from './DetailSectionImage';
import { DetailSectionLink } from './DetailSectionLink';
import { DetailSectionList } from './DetailSectionList';
import { DetailSectionSubHeading } from './DetailSectionSubHeading';
import { DetailSectionText } from './DetailSectionText';
import { DetailModel } from '../../models/DetailModel';

const Container = styled.section`
    display: grid;
    gap: 8px;

    h3 {
        margin: 0 0 4px;
        font-size: 1.1rem;
    }

    p {
        line-height: 1.75;
        margin-bottom: 4px;
        color: var(--muted);
    }
`;

interface DetailSectionProps extends DetailModel {}

export function DetailSection({ title, paragraphs = [], image }: DetailSectionProps) {
    return (
        <Container>
            <h3>{title}</h3>
            {paragraphs.map((paragraph, index) => {
                if (typeof paragraph === 'string') {
                    return <DetailSectionText key={`${title}-${index}`} text={paragraph} />;
                }

                if (paragraph.type === 'subheading') {
                    return <DetailSectionSubHeading key={`${title}-subheading-${index}`} text={paragraph.text} />;
                }

                if (paragraph.type === 'list') {
                    return <DetailSectionList key={`${title}-list-${index}`} items={paragraph.items ?? []} />;
                }

                if (paragraph.type === 'link') {
                    return (
                        <DetailSectionLink
                            key={`${title}-${paragraph.text}`}
                            text={paragraph.text}
                            href={paragraph.href}
                            slug={paragraph.slug}
                            indent={paragraph.indent}
                        />
                    );
                }

                return null;
            })}

            {image && <DetailSectionImage src={image.src} alt={image.alt} caption={image.caption} />}
        </Container>
    );
}
