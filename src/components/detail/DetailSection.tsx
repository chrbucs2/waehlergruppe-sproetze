import { DetailSectionImage } from './DetailSectionImage';
import { DetailSectionLink } from './DetailSectionLink';
import { DetailSectionList } from './DetailSectionList';
import { DetailSectionSubHeading } from './DetailSectionSubHeading';
import { DetailSectionText } from './DetailSectionText';

type DetailSectionProps = {
    title: string;
    paragraphs?: DetailParagraph[];
    image?: DetailImage | null;
};

type DetailParagraph =
    | string
    | {
          text: string;
          link?: string;
          slug?: string;
          indent?: boolean;
          type?: 'subheading' | 'list';
          items?: string[];
      };

type DetailImage = {
    src: string;
    alt: string;
    caption?: string;
};

export function DetailSection({ title, paragraphs = [], image }: DetailSectionProps) {
    return (
        <section className="schedule-detail-section">
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

                return (
                    <DetailSectionLink
                        key={`${title}-${paragraph.text}`}
                        text={paragraph.text}
                        href={paragraph.link}
                        slug={paragraph.slug}
                        indent={paragraph.indent}
                    />
                );
            })}

            {image && <DetailSectionImage src={image.src} alt={image.alt} caption={image.caption} />}
        </section>
    );
}
