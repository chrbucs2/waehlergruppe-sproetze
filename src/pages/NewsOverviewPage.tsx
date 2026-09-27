import { useMemo } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { HeadSectionWithLogo } from '../components/headsection/HeadSectionWithLogo';
import { FilterButtonGroup } from '../components/common/filter/FilterButtonGroup';
import { MainSectionHeader } from '../components/mainsection/MainSectionHeader';
import { SCHEDULE_PATH } from '../lib/constants';
import { useQueryParamState } from '../lib/routing';
import { NewsModel } from '../models/pages/NewsModel';
import MainSectionCard from "../components/mainsection/MainSectionCard";
import {MainSectionCardList} from "../components/mainsection/MainSectionCardList";
import {MainSectionContainer} from "../components/mainsection/MainSectionContainer";

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
                    {filteredNewsItems.map((item) => (
                        <MainSectionCard key={item.id} item={item} />
                    ))}
                </MainSectionCardList>
            </MainSectionContainer>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
