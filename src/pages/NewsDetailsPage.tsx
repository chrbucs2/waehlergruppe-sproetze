import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { getArticleBySlug, buildNewsOverviewUrl } from '../lib/content';
import { useQueryParamState } from '../lib/routing';
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
    // sync the selected topic with the URL query param so filters are shareable and browser back/forward works
    const [selectedTopicId] = useQueryParamState('thema');

    // check if newsItem or linked article should be used
    const hasOwnDetailContent =
            Boolean(newsItem.introduction?.length || newsItem.sections?.length);
    const article = hasOwnDetailContent ?
        newsItem :
        newsItem.articleLink?.slug ?
            getArticleBySlug(newsItem.articleLink.slug) :
            undefined;

    // get params for the Details components
    const introduction: string[] = article?.introduction || [];
    const sections: DetailModel[] = article?.sections || [];
    const topics: DetailTopic[] = (newsItem.topicIds ?? []).map((id) => ({
        key: id,
        value: buildNewsOverviewUrl(id),
    }));

    return (
        <>
            <Details
                backHref={buildNewsOverviewUrl(selectedTopicId ?? topicId)}
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
