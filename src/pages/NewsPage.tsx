import { useMemo } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { HeadSectionWithLogo } from '../components/headsection/HeadSectionWithLogo';
import { MainSectionHeader } from '../components/mainsection/MainSectionHeader';
import { FilterButtonGroup } from '../components/common/filter/FilterButtonGroup';
import { filterTopics, news } from '../data';
import {
    buildArticleUrl,
    buildNewsDetailUrl,
    getTopicById,
    sortNewsByDate
} from '../lib/content';
import { SCHEDULE_PATH } from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';
import { useQueryParamState } from '../lib/routing';
import { Eyebrow } from '../components/common/Eyebrow';
import { NewsDetailsPage } from './NewsDetailsPage';

interface NewsPageProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
    newsItemSlug?: string;
    topicId?: string;
}

export function NewsPage({ onShowImpressum, onShowDatenschutz, topicId, newsItemSlug }: NewsPageProps) {
    const orderedArticles = useMemo(() => sortNewsByDate(news), []);
    const availableTopics = useMemo(
        () => filterTopics.filter((topic) => orderedArticles.some((article) => article.topicIds.includes(topic.id))),
        [orderedArticles],
    );
    const activeTopic = topicId ? getTopicById(topicId) : null;
    const newsItem = newsItemSlug ? news.find((newsItem) => newsItem.slug === newsItemSlug) ?? null : null;

    const [selectedTopicId, setSelectedTopicId] = useQueryParamState('thema', topicId ?? null);

    const selectedTopic = selectedTopicId ? getTopicById(selectedTopicId) : activeTopic;

    const filteredArticles = useMemo(() => {
        if (!selectedTopic) {
            return orderedArticles;
        }

        return orderedArticles.filter((article) => article.topicIds.includes(selectedTopic.id));
    }, [orderedArticles, selectedTopic]);

    const renderMarkup = (text: string) => ({ __html: formatInlineMarkup(text) });
    const getSummaryParagraphs = (summary: string | string[]) => (Array.isArray(summary) ? summary : [summary]);
    if (newsItem) {
        return (
            <NewsDetailsPage
                newsItem={newsItem}
                topicId={activeTopic?.id ?? undefined}
                onShowImpressum={onShowImpressum}
                onShowDatenschutz={onShowDatenschutz}
            />
        );
    }

    return (
        <>
            <HeadSectionWithLogo
                eyebrow="Sprötze aktuell"
                title="News und Themen aus Sprötze"
                lead="Hier pflegen wir aktuelle Meldungen zentral an einer Stelle."
                actions={[
                    { href: '/', label: 'Zur WGS Startseite', variant: 'primary' },
                    { href: SCHEDULE_PATH, label: 'Zur Terminseite', variant: 'secondary' },
                ]}
            />

            <section className="content content--soft" id="news-feed">
                <MainSectionHeader
                    eyebrow="Themenfilter"
                    title={selectedTopic ? `News zu ${selectedTopic.label}` : 'Alle aktuellen Meldungen'}
                    copy={selectedTopic?.description || 'Beiträge sind nach Veröffentlichungsdatum sortiert — der neueste Beitrag steht immer zuerst.'}
                />

                <FilterButtonGroup
                    items={availableTopics}
                    activeId={selectedTopic?.id ?? null}
                    onSelect={setSelectedTopicId}
                />

                <div className="news-list">
                    {filteredArticles.map((item) => {
                        const newsDetailHref = buildNewsDetailUrl(item.slug);
                        const detailPageLink = Boolean(item.introduction?.length && item.sections?.length);
                        const articleHref = buildArticleUrl(item.articleLink);
                        const articleLabel = item.articleLink?.text ?? 'Beitrag öffnen';

                        return (
                            <article className="news-card" key={item.id}>
                                <Eyebrow>{formatDate(item.publishedAt)}</Eyebrow>
                                <h3>{item.title}</h3>
                                {getSummaryParagraphs(item.summary).map((paragraph, index) => (
                                    <p key={`${item.id}-summary-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                                ))}
                                {(detailPageLink || articleHref) && (
                                    <div className="news-overview-header-actions">
                                        {articleHref && (
                                            <a className="news-card__link" href={articleHref} dangerouslySetInnerHTML={renderMarkup(articleLabel)} />
                                        )}
                                        {detailPageLink && (
                                            <a className="news-card__link" href={newsDetailHref} dangerouslySetInnerHTML={renderMarkup('Beitrag öffnen')} />
                                        )}
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
