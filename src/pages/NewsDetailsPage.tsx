import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { getArticleBySlug, buildNewsOverviewUrl } from '../lib/content';
import { DetailModel } from '../models/details/DetailModel';
import { NewsModel } from '../models/pages/NewsModel';

type DetailTopic = { key: string; value: string };

interface NewsDetailsPageProps {
    newsItem: NewsModel;
    topicId?: string;
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function NewsDetailsPage({ newsItem, topicId, onShowImpressum, onShowDatenschutz }: NewsDetailsPageProps) {
    const hasOwnDetailContent =
            Boolean(newsItem.introduction?.length || newsItem.sections?.length);
    const article = hasOwnDetailContent ?
        newsItem :
        newsItem.articleLink?.slug ?
            getArticleBySlug(newsItem.articleLink.slug) :
            undefined;

    const introduction: string[] = article?.introduction || [];
    const sections: DetailModel[] = article?.sections || [];
    const topics: DetailTopic[] = (newsItem.topicIds ?? []).map((id) => ({
        key: id,
        value: buildNewsOverviewUrl(id),
    }));

    return (
        <>
            <Details
                backHref={buildNewsOverviewUrl(topicId)}
                backText={'Zurück zu den Sprötze-News'}
                heading={{
                    type: 'news',
                    title: newsItem.title,
                    publishedAt: newsItem.publishedAt,
                }}
                introduction={introduction}
                sections={sections}
                topics={topics}
            />

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
