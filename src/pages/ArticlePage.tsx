import { Details } from '../components/detail/Details';
import { SiteFooter } from '../components/SiteFooter';
import { buildNewsOverviewUrl } from '../lib/content';
import { NEWS_PATH } from '../lib/constants';
import { ArticleModel } from '../models/pages/ArticleModel';

export interface ArticlePageParams {
    article?: ArticleModel;
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function ArticlePage({ article, onShowImpressum, onShowDatenschutz }: ArticlePageParams) {
    if (!article) {
        return null;
    }

    const topics =
        (article.topicIds ?? [])
            .map((id) => ({
                key: id,
                value: buildNewsOverviewUrl(id)
            }));

    return (
        <>
            <Details
                backHref={NEWS_PATH}
                backText={'Zu den News'}
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
                topics={topics}
            />

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
