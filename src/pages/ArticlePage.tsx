import { Details } from '../components/detail/Details';
import { SiteFooter } from '../components/SiteFooter';
import { NEWS_INDEX_PATH } from '../lib/constants';
import { ArticleModel } from '../models/ArticleModel';

export interface ArticlePageParams {
    article?: ArticleModel;
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function ArticlePage({ article, onShowImpressum, onShowDatenschutz }: ArticlePageParams) {
    if (!article) {
        return null;
    }

    return (
        <>
            <Details
                backHref={NEWS_INDEX_PATH}
                heading={{
                    type: 'article',
                    title: article.title,
                    category: article.category ?? 'Artikel',
                    publishedAt: article.publishedAt,
                    modifiedAt: article.modifiedAt,
                }}
                introduction={article.introduction}
                sections={article.sections}
                sources={article.sources}
            />

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
