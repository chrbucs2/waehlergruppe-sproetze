import { useMemo } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { filterTopics, news } from '../data';
import { getGeneralArticleBySlug, getTopicById, sortNewsByDate } from '../lib/content';
import { NEWS_INDEX_PATH } from '../lib/constants';
import { assetUrl, formatDate, formatInlineMarkup } from '../lib/formatting';
import {DetailSectionModel} from "../models/DetailSectionModel";

export function NewsPage({ onShowImpressum, onShowDatenschutz, topicId, articleSlug }) {
    const orderedArticles = useMemo(() => sortNewsByDate(news), []);
    const availableTopics = useMemo(
        () => filterTopics.filter((topic) => orderedArticles.some((article) => article.topicIds.includes(topic.id))),
        [orderedArticles],
    );
    const activeTopic = topicId ? getTopicById(topicId) : null;
    const activeArticle = articleSlug ? news.find((article) => article.slug === articleSlug) ?? null : null;
    const referencedArticle = activeArticle?.articleLink
        ? getGeneralArticleBySlug(activeArticle.articleLink.slug)
        : null;
    const hasOwnDetailContent = Boolean(
        activeArticle &&
            ((Array.isArray(activeArticle.introduction) && activeArticle.introduction.length > 0) ||
                (Array.isArray(activeArticle.sections) && activeArticle.sections.length > 0)),
    );
    const detailArticle = hasOwnDetailContent ? activeArticle : referencedArticle ?? activeArticle;
    const backHref = activeTopic ? `${NEWS_INDEX_PATH}?thema=${activeTopic.id}` : NEWS_INDEX_PATH;

    const visibleArticles = useMemo(() => {
        if (!activeTopic) {
            return orderedArticles;
        }

        return orderedArticles.filter((article) => article.topicIds.includes(activeTopic.id));
    }, [activeTopic, orderedArticles]);

    const renderMarkup = (text: string) => ({ __html: formatInlineMarkup(text) });
    const getSummaryParagraphs = (summary) => (Array.isArray(summary) ? summary : [summary]);
    const hasNewsDetailContent = (article) => Boolean(
        article &&
            Array.isArray(article.introduction) &&
            article.introduction.length > 0 &&
            Array.isArray(article.sections) &&
            article.sections.length > 0,
    );

    if (activeArticle) {
        const sections: DetailSectionModel[] = detailArticle?.sections ? detailArticle.sections as DetailSectionModel[] : [];
        const topics =
            (activeArticle.topicIds ?? [])
                .map((id) => ({
                    key: id,
                    value: `${NEWS_INDEX_PATH}?thema=${id}`
                }));

        return (
            <>
                <Details
                    backHref={backHref}
                    heading={{
                        type: 'news',
                        title: activeArticle.title,
                        publishedAt: activeArticle.publishedAt,
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
            <section className="hero hero--news">
                <div className="hero__copy">
                    <p className="eyebrow">Sprötze aktuell</p>
                    <h1>News und Themen aus Sprötze</h1>
                    <p className="lead">
                        Hier pflegen wir aktuelle Meldungen zentral an einer Stelle.
                    </p>
                    <div className="hero__actions hero__actions--news">
                        <a className="button button--primary" href="/">
                            Zur WGS Startseite
                        </a>
                        <a className="button button--secondary" href="/termine">
                            Zur Terminseite
                        </a>
                    </div>
                </div>
                <div className="hero__brand" aria-label="Logo der Wählergruppe Sprötze">
                    <img src={assetUrl('logo.png')} alt="Logo der Wählergruppe Sprötze" />
                </div>
            </section>

            <section className="content content--soft" id="news-feed">
                <div className="section-heading">
                    <p className="eyebrow">Themenfilter</p>
                    <h2>{activeTopic ? `News zu ${activeTopic.label}` : 'Alle aktuellen Meldungen'}</h2>
                    <p className="section-copy">
                        {activeTopic ? activeTopic.description : 'Beiträge sind nach Veröffentlichungsdatum sortiert — der neueste Beitrag steht immer zuerst.'}
                    </p>
                </div>

                <div className="topic-filter">
                    <a className={`topic-filter__chip${!activeTopic ? ' is-active' : ''}`} href={NEWS_INDEX_PATH}>
                        Alle Themen
                    </a>
                    {availableTopics.map((topic) => (
                        <a
                            key={topic.id}
                            className={`topic-filter__chip${activeTopic?.id === topic.id ? ' is-active' : ''}`}
                            href={`${NEWS_INDEX_PATH}?thema=${topic.id}`}
                        >
                            {topic.label}
                        </a>
                    ))}
                </div>

                <div className="news-list">
                    {visibleArticles.map((article) => {
                        const newsDetailHref = `${NEWS_INDEX_PATH}/${article.slug}`;
                        const hasNewsDetailLink = hasNewsDetailContent(article);
                        const articleHref = article.articleLink
                            ? article.articleLink.slug ? `/artikel/${article.articleLink.slug}` : article.articleLink.link
                            : null;
                        const articleLabel = article.articleLink?.label ?? 'Beitrag öffnen';

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
