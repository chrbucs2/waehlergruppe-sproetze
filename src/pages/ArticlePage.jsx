import { SiteFooter } from '../components/SiteFooter';
import { NEWS_INDEX_PATH } from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';

export function ArticlePage({ article, onShowImpressum, onShowDatenschutz }) {
    if (!article) {
        return null;
    }

    const renderParagraph = (text) => ({ __html: formatInlineMarkup(text) });

    return (
        <>
            <section className="content content--soft news-article-page">
                <a className="news-back-link" href={NEWS_INDEX_PATH}>
                    Zurück zu den News
                </a>

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
                        <section className="schedule-detail-section" key={section.title}>
                            <h3>{section.title}</h3>
                            {section.paragraphs.map((paragraph, index) => {
                                if (typeof paragraph === 'string') {
                                    return (
                                        <p key={`${section.title}-${index}`} dangerouslySetInnerHTML={renderParagraph(paragraph)} />
                                    );
                                }

                                if (paragraph?.type === 'subheading') {
                                    return (
                                        <p key={`${section.title}-subheading-${index}`} className="article-subheading" dangerouslySetInnerHTML={renderParagraph(paragraph.text)} />
                                    );
                                }

                                if (paragraph?.type === 'list') {
                                    return (
                                        <ul key={`${section.title}-list-${index}`} className="article-list">
                                            {paragraph.items.map((item) => (
                                                <li key={item} dangerouslySetInnerHTML={renderParagraph(item)} />
                                            ))}
                                        </ul>
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

                            {(section.image ? [section.image] : []).map((image, index) => (
                                <figure className="article-section-image" key={`${section.title}-image-${index}`}>
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                    {image.caption && <figcaption>{image.caption}</figcaption>}
                                </figure>
                            ))}
                        </section>
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
