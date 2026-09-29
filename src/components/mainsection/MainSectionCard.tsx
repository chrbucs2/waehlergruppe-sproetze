import styled from 'styled-components';

import Link from '../common/link/Link';
import { Eyebrow } from '../common/Eyebrow';
import { MainSectionCardImage } from './MainSectionCardImage';
import {buildArticleUrl, buildNewsDetailUrl, buildScheduleDetailUrl} from '../../lib/content';
import { formatDate, formatInlineMarkup } from '../../lib/formatting';
import { NewsModel } from '../../models/pages/NewsModel';
import { ScheduleModel } from '../../models/pages/ScheduleModel';

const CardRoot = styled.article<{}>`
    display: grid;
    gap: 14px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 18px 20px;

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
        line-height: 1.7;
        color: var(--muted);
    }
`;

const CardHeader = styled.div`
    display: grid;
    gap: 8px;
    justify-items: start;
    text-align: left;
`;

const CardBody = styled.div<{ $hasImage: boolean }>`
    display: grid;
    gap: 18px;
    align-items: start;
    grid-template-columns: ${
        ({ $hasImage }) => 
            ($hasImage ? '150px minmax(0, 1fr)' : '1fr')
    };

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

const CardImageColumn = styled.div`
    display: grid;
    gap: 12px;
    align-content: start;
    width: 100%;
    max-width: 150px;
    justify-self: start;
`;

const CardContent = styled.div`
    display: grid;
    gap: 10px;
    align-content: start;
    justify-items: start;
    text-align: left;
`;

const Actions = styled.div`
    display: grid;
    gap: 8px;
    justify-items: start;
    grid-column: 1 / -1;
    width: 100%;
    padding-top: 4px;
`;

export type CardItem = NewsModel | ScheduleModel;

type CardProps = {
    item: CardItem;
};

export default function MainSectionCard({ item }: CardProps) {
    const isSchedule = 'date' in item;

    // content
    const paragraphs = Array.isArray(item.summary) ? item.summary : [item.summary];
    const hasSummaryImage = Boolean(item.summaryImage);

    // if content for a detail page available create detail page link
    const hasDetailPage = Boolean(item.introduction?.length || item.sections?.length);
    const detailHref = hasDetailPage
        ? (isSchedule ? buildScheduleDetailUrl(item.slug) : buildNewsDetailUrl(item.slug))
        : undefined;
    const detailLabel = isSchedule ? 'Termin öffnen' : 'Beitrag öffnen';

    // if article is reference available create article link
    const articleHref = !isSchedule ? buildArticleUrl(item.articleLink) : undefined;
    const articleLabel = !isSchedule ? item.articleLink?.text ?? 'Beitrag öffnen' : undefined;

    const renderMarkup = (text: string) => ({ __html: formatInlineMarkup(text) });
    return (
        <CardRoot>
            <CardHeader>
                <Eyebrow>{isSchedule ? item.category : formatDate(item.publishedAt)}</Eyebrow>
                {isSchedule ? (
                    <div className="schedule-card__head">
                        <strong>
                            {formatDate(item.date)} · {item.time}
                        </strong>
                    </div>
                ) : null}
                <h3>{item.title}</h3>
            </CardHeader>
            <CardBody $hasImage={hasSummaryImage}>
                {hasSummaryImage ? (
                    <CardImageColumn>
                        <MainSectionCardImage image={item.summaryImage!} title={item.title} />
                    </CardImageColumn>
                ) : null}
                <CardContent>
                    {paragraphs.map((paragraph, index) => (
                        <p key={`${item.id}-summary-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                    ))}
                </CardContent>
                {(hasDetailPage || articleHref) && (
                    <Actions>
                        {articleHref ? <Link href={articleHref} dangerouslySetInnerHTML={renderMarkup(articleLabel ?? '')} /> : null}
                        {detailHref ? <Link href={detailHref} dangerouslySetInnerHTML={renderMarkup(detailLabel)} /> : null}
                    </Actions>
                )}
            </CardBody>
        </CardRoot>
    );
}
