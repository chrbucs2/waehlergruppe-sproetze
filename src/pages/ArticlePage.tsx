import { SiteFooter } from '../components/SiteFooter';
import { DetailBackLink } from '../components/detail/DetailBackLink';
import { DetailHeading } from '../components/detail/DetailHeading';
import { DetailIntroduction } from '../components/detail/DetailIntroduction';
import { DetailSections } from '../components/detail/DetailSections';
import { DetailSource } from '../components/detail/DetailSource';
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

                <DetailSource sources={article.sources ?? []} />
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
