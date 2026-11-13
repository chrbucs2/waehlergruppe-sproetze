import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { SiteFooter } from '../components/SiteFooter';
import { HeadSectionWithLogo } from '../components/headsection/HeadSectionWithLogo';
import { MoreButton } from '../components/common/button/MoreButton';
import { FilterButtonGroup } from '../components/common/filter/FilterButtonGroup';
import { MainSectionHeader } from '../components/mainsection/MainSectionHeader';
import MainSectionCard from '../components/mainsection/MainSectionCard';
import { MainSectionCardList } from '../components/mainsection/MainSectionCardList';
import { MainSectionContainer } from '../components/mainsection/MainSectionContainer';
import { useActiveNewsBadges } from '../lib/useActiveNewsBadges';
import { useQueryParamState } from '../lib/routing';
import { useSeo } from '../lib/seo';
import { NewsModel } from '../models/pages/NewsModel';
import { buildScheduleOverviewUrl } from '../lib/content';

const INITIAL_VISIBLE_ITEMS = 10;

const MoreButtonWrapper = styled.div`
    margin-top: 18px;
    justify-self: start;
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
    const [visibleItemCount, setVisibleItemCount] = useState(INITIAL_VISIBLE_ITEMS);

    useEffect(() => {
        setVisibleItemCount(INITIAL_VISIBLE_ITEMS);
    }, [selectedTopicId]);

    const selectedTopic = useMemo(
        () => availableTopics.find((topic) => topic.id === selectedTopicId) ?? null,
        [selectedTopicId, availableTopics],
    );

    useSeo({
        title: selectedTopic ? `News zu ${selectedTopic.label}` : 'Sprötze aktuell',
        description: selectedTopic?.description ?? 'Aktuelle Nachrichten und Meldungen der Wählergruppe Sprötze.',
        canonicalPath: selectedTopic ? `/sproetze-aktuell?thema=${selectedTopic.id}` : '/sproetze-aktuell',
    });

    // filter news items based on the selected topic
    const filteredNewsItems = useMemo(() => {
        const itemsWithoutHidden = items.filter((item) => !item.hidden);
        if (!selectedTopic) {
            return itemsWithoutHidden;
        }

        return itemsWithoutHidden.filter((item) => item.topicIds.includes(selectedTopic.id));
    }, [items, selectedTopic]);

    // remove inactive badges from items and sort
    const filteredAndSortedNewsItems = useActiveNewsBadges(filteredNewsItems);
    const visibleNewsItems = filteredAndSortedNewsItems.slice(0, visibleItemCount);
    const remainingItemCount = filteredAndSortedNewsItems.length - visibleNewsItems.length;

    // prepare content for the page
    const title = selectedTopic ? `News zu ${selectedTopic.label}` : 'Alle aktuellen Meldungen';
    const description =
        selectedTopic?.description ??
        'Angepinnte Beiträge stehen zuerst. Alle weiteren Meldungen folgen nach Veröffentlichungsdatum — neueste zuerst.';

    return (
        <>
            <HeadSectionWithLogo
                eyebrow="Sprötze aktuell"
                title="News und Themen aus Sprötze"
                lead="Hier pflegen wir aktuelle Meldungen zentral an einer Stelle."
                actions={[
                    { href: '/', label: 'Zur WGS Startseite', variant: 'primary' },
                    { href: buildScheduleOverviewUrl(), label: 'Zur Terminseite', variant: 'secondary' },
                ]}
            />

            <MainSectionContainer>
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

                <MainSectionCardList>
                    {visibleNewsItems.map((item) => (
                        <MainSectionCard key={item.id} item={item} />
                    ))}
                </MainSectionCardList>
                {remainingItemCount > 0 && (
                    <MoreButtonWrapper>
                        <MoreButton
                            expanded={false}
                            onClick={() => setVisibleItemCount((count) => count + INITIAL_VISIBLE_ITEMS)}
                            moreLabel={`Weitere Beiträge anzeigen (${Math.min(INITIAL_VISIBLE_ITEMS, remainingItemCount)})`}
                        />
                    </MoreButtonWrapper>
                )}
            </MainSectionContainer>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
