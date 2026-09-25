import { useMemo } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { OverviewHeader } from '../components/overview/OverviewHeader';
import { OverviewSectionFilter } from '../components/overview/OverviewSectionFilter';
import { OverviewSectionHeader } from '../components/overview/OverviewSectionHeader';
import { filterTopics, news } from '../data';
import {
    buildArticleUrl,
    buildNewsDetailUrl,
    buildNewsOverviewUrl,
    getGeneralArticleBySlug,
    getTopicById,
    sortNewsByDate
} from '../lib/content';
import { NEWS_PATH, SCHEDULE_PATH } from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';
import { DetailModel } from '../models/details/DetailModel';
import { NewsModel } from '../models/pages/NewsModel';

interface NewsPageProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
    topicId?: string | null;
    articleSlug?: string | null;
}

type DetailTopic = { key: string; value: string };
type NewsLink = { href: string; text: string };

export function NewsPage({ onShowImpressum, onShowDatenschutz, topicId, articleSlug }: NewsPageProps) {
    const orderedArticles = useMemo(() => sortNewsByDate(news), []);
    const availableTopics = useMemo(
        () => filterTopics.filter((topic) => orderedArticles.some((article) => article.topicIds.includes(topic.id))),
        [orderedArticles],
    );
    const activeTopic = topicId ? getTopicById(topicId) : null;
    const activeArticle = articleSlug ? news.find((article) => article.slug === articleSlug) ?? null : null;
    const referencedArticle = activeArticle?.articleLink?.slug
        ? getGeneralArticleBySlug(activeArticle.articleLink.slug)
        : null;
    const hasOwnDetailContent = Boolean(
        activeArticle &&
            ((Array.isArray(activeArticle.introduction) && activeArticle.introduction.length > 0) ||
                (Array.isArray(activeArticle.sections) && activeArticle.sections.length > 0)),
    );
    const detailArticle = hasOwnDetailContent ? activeArticle : referencedArticle ?? activeArticle;
    const backHref = activeTopic ? `${NEWS_PATH}?thema=${activeTopic.id}` : NEWS_PATH;

    const selectedTopic = activeTopic;

    const filteredArticles = useMemo(() => {
        if (!selectedTopic) {
            return orderedArticles;
        }

        return orderedArticles.filter((article) => article.topicIds.includes(selectedTopic.id));
    }, [orderedArticles, selectedTopic]);

    const renderMarkup = (text: string) => ({ __html: formatInlineMarkup(text) });
    const getSummaryParagraphs = (summary: string | string[]) => (Array.isArray(summary) ? summary : [summary]);
    if (activeArticle) {
        const sections: DetailModel[] = detailArticle?.sections ? detailArticle.sections as DetailModel[] : [];
        const currentArticle: NewsModel = activeArticle;
        const topics: DetailTopic[] =
            (currentArticle.topicIds ?? [])
                .map((id) => ({
                    key: id,
                    value: buildNewsOverviewUrl(id)
                }));

        return (
            <>
                <Details
                    backHref={backHref}
                    backText={'Zurück zu den Sprötze-News'}
                    heading={{
                        type: 'news',
                        title: currentArticle.title,
                        publishedAt: currentArticle.publishedAt,
                    }}
                    introduction={detailArticle?.introduction}
                    sections={sections}
                    topics={topics}
                />

                <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
            </>
        );
    }

    return (
        <>
            <OverviewHeader
                eyebrow="Sprötze aktuell"
                title="News und Themen aus Sprötze"
                lead="Hier pflegen wir aktuelle Meldungen zentral an einer Stelle."
                actions={[
                    { href: '/', label: 'Zur WGS Startseite', variant: 'primary' },
                    { href: SCHEDULE_PATH, label: 'Zur Terminseite', variant: 'secondary' },
                ]}
            />

            <section className="content content--soft" id="news-feed">
                <OverviewSectionHeader
                    eyebrow="Themenfilter"
                    title={selectedTopic ? `News zu ${selectedTopic.label}` : 'Alle aktuellen Meldungen'}
                    copy={selectedTopic?.description || 'Beiträge sind nach Veröffentlichungsdatum sortiert — der neueste Beitrag steht immer zuerst.'}
                />

                <OverviewSectionFilter
                    items={availableTopics}
                    activeId={selectedTopic?.id ?? null}
                />

                <div className="news-list">
                    {filteredArticles.map((article) => {
                        const newsDetailHref = buildNewsDetailUrl(article.slug);
                        const hasNewsDetailLink = Boolean(article.introduction?.length && article.sections?.length);
                        const articleHref = buildArticleUrl(article.articleLink);
                        const articleLabel = article.articleLink?.text ?? 'Beitrag öffnen';

                        return (
                            <article className="news-card" key={article.id}>
                                <p className="eyebrow">{formatDate(article.publishedAt)}</p>
                                <h3>{article.title}</h3>
                                {getSummaryParagraphs(article.summary).map((paragraph, index) => (
                                    <p key={`${article.id}-summary-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                                ))}
                                {(hasNewsDetailLink || articleHref) && (
                                    <div className="news-overview-header-actions">
                                        {articleHref && (
                                            <a className="news-card__link" href={articleHref} dangerouslySetInnerHTML={renderMarkup(articleLabel)} />
                                        )}
                                        {hasNewsDetailLink && (
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
