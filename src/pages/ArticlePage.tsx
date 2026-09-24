import { SiteFooter } from '../components/SiteFooter';
import { DetailBackLink } from '../components/detail/DetailBackLink';
import { DetailHeading } from '../components/detail/DetailHeading';
import { DetailIntroduction } from '../components/detail/DetailIntroduction';
import { DetailSections } from '../components/detail/DetailSections';
import { NEWS_INDEX_PATH } from '../lib/constants';

export function ArticlePage({ article, onShowImpressum, onShowDatenschutz }) {
    if (!article) {
        return null;
    }

    return (
        <>
            <section className="content content--soft news-article-page">
                <DetailBackLink href={NEWS_INDEX_PATH} />

                <DetailHeading
                    type={'article'}
                    title={article.title}
                    category={article.category ?? 'Artikel'}
                    publishedAt={article.publishedAt}
                    modifiedAt={article.modifiedAt}
                />

                {article.introduction && (
                    <DetailIntroduction paragraphs={article.introduction} />
                )}

                {article.sections && (
                    <DetailSections sections={article.sections} />
                )}

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
