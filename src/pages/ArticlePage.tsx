import { SiteFooter } from '../components/SiteFooter';
import { DetailBackLink } from '../components/detail/DetailBackLink';
import { DetailSection } from '../components/detail/DetailSection';
import { NEWS_INDEX_PATH } from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';

function renderParagraph(text) {
    return { __html: formatInlineMarkup(text) };
}

export function ArticlePage({ article, onShowImpressum, onShowDatenschutz }) {
    if (!article) {
        return null;
    }

    return (
        <>
            <section className="content content--soft news-article-page">
                <DetailBackLink href={NEWS_INDEX_PATH} />

                <div className="section-heading">
                    <p className="eyebrow">
                        {article.category ?? 'Artikel'} · {formatDate(article.publishedAt)}
                        {article.modifiedAt && ` · aktualisiert am ${formatDate(article.modifiedAt)}`}
                    </p>
                    <h1 className="news-article-page__title">{article.title}</h1>
                </div>

                {article.introduction && (
                    <div className="schedule-detail-intro">
                        {article.introduction.map((paragraph, index) => (
                            <p key={`${article.id}-intro-${index}`} dangerouslySetInnerHTML={renderParagraph(paragraph)} />
                        ))}
                    </div>
                )}

                <article className="feature-card feature-card--active news-article-page__content">
                    {(article.sections ?? []).map((section) => (
                        <DetailSection key={section.title} {...section} />
                    ))}
                </article>

                {(article.sources ?? []).length > 0 && (
                    <aside className="article-sources">
                        <h3>Quellen</h3>
                        <ul>
                            {article.sources.map((source) => (
                                <li key={source.label}>
                                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                                        {source.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
