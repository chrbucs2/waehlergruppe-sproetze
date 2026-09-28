import { Details } from '../components/detail/Details';
import { SiteFooter } from '../components/SiteFooter';
import { buildNewsOverviewUrl } from '../lib/content';
import { NEWS_PATH } from '../lib/constants';
import { useSeo } from '../lib/seo';
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

    useSeo({
        title: article.title,
        description: article.introduction?.length ? article.introduction[0] : 'Beitrag der Wählergruppe Sprötze.',
        canonicalPath: `/artikel/${article.slug}`,
    });

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
