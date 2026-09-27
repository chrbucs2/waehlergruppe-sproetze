import styled from 'styled-components';

import Link from '../common/link/Link';
import { Eyebrow } from '../common/Eyebrow';
import {buildArticleUrl, buildNewsDetailUrl, buildScheduleDetailUrl} from '../../lib/content';
import { formatDate, formatInlineMarkup } from '../../lib/formatting';
import { NewsModel } from '../../models/pages/NewsModel';
import { ScheduleModel } from '../../models/pages/ScheduleModel';

const CardRoot = styled.article`
    display: grid;
    gap: 12px;
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

const Actions = styled.div`
    display: grid;
    gap: 8px;
`;

export type CardItem = NewsModel | ScheduleModel;

type CardProps = {
    item: CardItem;
};

export default function MainSectionCard({ item }: CardProps) {
    const isSchedule = 'date' in item;

    // content
    const paragraphs = Array.isArray(item.summary) ? item.summary : [item.summary];

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
            <Eyebrow>{isSchedule ? item.category : formatDate(item.publishedAt)}</Eyebrow>
            {isSchedule ? (
                <div className="schedule-card__head">
                    <strong>
                        {formatDate(item.date)} · {item.time}
                    </strong>
                </div>
            ) : null}
            <h3>{item.title}</h3>
            {paragraphs.map((paragraph, index) => (
                <p key={`${item.id}-summary-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
            ))}
            {(hasDetailPage || articleHref) && (
                <Actions>
                    {articleHref ? <Link href={articleHref} dangerouslySetInnerHTML={renderMarkup(articleLabel ?? '')} /> : null}
                    {detailHref ? <Link href={detailHref} dangerouslySetInnerHTML={renderMarkup(detailLabel)} /> : null}
                </Actions>
            )}
        </CardRoot>
    );
}
