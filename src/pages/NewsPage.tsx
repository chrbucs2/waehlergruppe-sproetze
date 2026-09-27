import { useMemo } from 'react';

import { filterTopics, news } from '../data';
import { sortNewsByDate } from '../lib/content';
import { NewsDetailsPage } from './NewsDetailsPage';
import { NewsOverviewPage } from './NewsOverviewPage';

interface NewsPageProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
    newsItemSlug?: string;
}

export function NewsPage({ onShowImpressum, onShowDatenschutz, newsItemSlug }: NewsPageProps) {
    // order news by date so newest items come first in the overview
    const orderedNewsItems = useMemo(() => sortNewsByDate(news), []);

    // if a detail slug is in the URL, resolve the matching article to render the detail page
    const newsItem = newsItemSlug ? news.find((newsItem) => newsItem.slug === newsItemSlug) ?? null : null;

    // only show topics that are actually used by the current news data
    const availableTopics = useMemo(
        () => filterTopics.filter((topic) => orderedNewsItems.some((article) => article.topicIds.includes(topic.id))),
        [orderedNewsItems],
    );

    if (newsItem) {
        return (
            <NewsDetailsPage
                newsItem={newsItem}
                onShowImpressum={onShowImpressum}
                onShowDatenschutz={onShowDatenschutz}
            />
        );
    }

    return (
        <NewsOverviewPage
            items={orderedNewsItems}
            availableTopics={availableTopics}
            onShowImpressum={onShowImpressum}
            onShowDatenschutz={onShowDatenschutz}
        />
    );
}
