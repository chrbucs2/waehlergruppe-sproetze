import { useMemo } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { news, newsTopics } from '../data';
import { getTopicById, sortNewsByDate } from '../lib/content';
import { NEWS_INDEX_PATH } from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';

export function NewsPage({ onShowImpressum, onShowDatenschutz, topicId, articleSlug }) {
    const orderedArticles = useMemo(() => sortNewsByDate(news), []);
    const availableTopics = useMemo(
        () => newsTopics.filter((topic) => orderedArticles.some((article) => article.topicIds.includes(topic.id))),
        [orderedArticles],
    );
    const activeTopic = topicId ? getTopicById(topicId) : null;
    const activeArticle = articleSlug ? news.find((article) => article.slug === articleSlug) ?? null : null;
    const backHref = activeTopic ? `${NEWS_INDEX_PATH}?thema=${activeTopic.id}` : NEWS_INDEX_PATH;

    const visibleArticles = useMemo(() => {
        if (!activeTopic) {
            return orderedArticles;
        }

        return orderedArticles.filter((article) => article.topicIds.includes(activeTopic.id));
    }, [activeTopic, orderedArticles]);

    const renderMarkup = (text) => ({ __html: formatInlineMarkup(text) });
    const getSummaryParagraphs = (summary) => (Array.isArray(summary) ? summary : [summary]);

    if (activeArticle) {
        const introParagraphs = Array.isArray(activeArticle.introduction)
            ? activeArticle.introduction
            : activeArticle.summary
                ? getSummaryParagraphs(activeArticle.summary)
                : [];
        const sections = activeArticle.sections ?? [];

        return (
            <>
                <section className="content content--soft news-article-page">
                    <a className="news-back-link" href={backHref}>
                        Zurück zur Übersicht
                    </a>
                    <div className="section-heading">
                        <p className="eyebrow">{formatDate(activeArticle.publishedAt)}</p>
                        <h1 className="news-article-page__title">{activeArticle.title}</h1>
                    </div>

                    {introParagraphs.length > 0 && (
                        <div className="schedule-detail-intro">
                            {introParagraphs.map((paragraph, index) => (
                                <p key={`${activeArticle.id}-intro-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                            ))}
                        </div>
                    )}

                    {sections.length > 0 ? (
                        <>
                            <article className="feature-card feature-card--active news-article-page__content">
                                {sections.map((section) => (
                                    <section className="schedule-detail-section" key={section.title}>
                                        <h3>{section.title}</h3>
                                        {section.paragraphs.map((paragraph, index) => {
                                            if (typeof paragraph === 'string') {
                                                return (
                                                    <p key={`${section.title}-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                                                );
                                            }

                                            return (
                                                <p
                                                    key={`${section.title}-${paragraph.text}`}
                                                    className="schedule-link-note is-indented"
                                                >
                                                    <a className="news-card__link" href={paragraph.link}>
                                                        {paragraph.text}
                                                    </a>
                                                </p>
                                            );
                                        })}
                                    </section>
                                ))}
                            </article>

                            <div className="focus-list focus-list--outside">
                                {activeArticle.topicIds.map((id) => (
                                    <a key={id} href={`${NEWS_INDEX_PATH}?thema=${id}`}>
                                        <span>{getTopicById(id)?.label ?? id}</span>
                                    </a>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <article className="feature-card feature-card--active news-article-page__content">
                                {(activeArticle.content ?? []).map((paragraph) => (
                                    <p key={paragraph} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                                ))}
                            </article>

                            <div className="focus-list focus-list--outside">
                                {activeArticle.topicIds.map((id) => (
                                    <a key={id} href={`${NEWS_INDEX_PATH}?thema=${id}`}>
                                        <span>{getTopicById(id)?.label ?? id}</span>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </section>

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
                    {visibleArticles.map((article) => (
                        <article className="news-card" key={article.id}>
                            <p className="eyebrow">{formatDate(article.publishedAt)}</p>
                            <h3>{article.title}</h3>
                            {getSummaryParagraphs(article.summary).map((paragraph, index) => (
                                <p key={`${article.id}-summary-${index}`} dangerouslySetInnerHTML={renderMarkup(paragraph)} />
                            ))}
                            <a className="news-card__link" href={`${NEWS_INDEX_PATH}/${article.slug}`}>
                                Beitrag öffnen
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
