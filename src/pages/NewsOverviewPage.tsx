import { useMemo } from 'react';
import styled from 'styled-components';

import { SiteFooter } from '../components/SiteFooter';
import { HeadSectionWithLogo } from '../components/headsection/HeadSectionWithLogo';
import { FilterButtonGroup } from '../components/common/filter/FilterButtonGroup';
import { MainSectionHeader } from '../components/mainsection/MainSectionHeader';
import NewsCard from '../components/news/NewsCard';
import { SCHEDULE_PATH } from '../lib/constants';
import { useQueryParamState } from '../lib/routing';
import { NewsModel } from '../models/pages/NewsModel';

const NewsContent = styled.section.attrs({ id: 'news-feed' })`
    margin-top: 18px;
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: 28px;
    box-shadow: var(--shadow);
    background: linear-gradient(rgba(230, 239, 251, 0.5), rgba(249, 246, 255, 0.95));
`;

const NewsList = styled.div`
    display: grid;
    gap: 14px;
`;

interface NewsOverviewPageProps {
    items: NewsModel[];
    availableTopics: Array<{ id: string; label: string; description?: string }>;
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function NewsOverviewPage({
    items,
    availableTopics,
    onShowImpressum,
    onShowDatenschutz,
}: NewsOverviewPageProps) {
    // sync the selected topic with the URL query param so filters are shareable and browser back/forward works
    const [selectedTopicId, setSelectedTopicId] = useQueryParamState('thema');

    // if topic is selected find the topic object
    const selectedTopic = useMemo(
        () => availableTopics.find((topic) => topic.id === selectedTopicId) ?? null,
        [selectedTopicId, availableTopics],
    );

    // filter news items based on the selected topic
    const filteredNewsItems = useMemo(() => {
        if (!selectedTopic) {
            return items;
        }

        return items.filter((item) => item.topicIds.includes(selectedTopic.id));
    }, [items, selectedTopic]);

    // prepare content for the page
    const title = selectedTopic ? `News zu ${selectedTopic.label}` : 'Alle aktuellen Meldungen';
    const description =
        selectedTopic?.description ??
        'Beiträge sind nach Veröffentlichungsdatum sortiert — der neueste Beitrag steht immer zuerst.';

    return (
        <>
            <HeadSectionWithLogo
                eyebrow="Sprötze aktuell"
                title="News und Themen aus Sprötze"
                lead="Hier pflegen wir aktuelle Meldungen zentral an einer Stelle."
                actions={[
                    { href: '/', label: 'Zur WGS Startseite', variant: 'primary' },
                    { href: SCHEDULE_PATH, label: 'Zur Terminseite', variant: 'secondary' },
                ]}
            />

            <NewsContent>
                <MainSectionHeader
                    eyebrow="Themenfilter"
                    title={title}
                    copy={description}
                />

                <FilterButtonGroup
                    items={availableTopics}
                    activeId={selectedTopicId}
                    onSelect={setSelectedTopicId}
                />

                <NewsList>
                    {filteredNewsItems.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </NewsList>
            </NewsContent>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
