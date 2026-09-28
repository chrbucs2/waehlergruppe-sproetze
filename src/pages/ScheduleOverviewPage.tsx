import {useMemo, useState} from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { HeadSectionWithLogo } from '../components/headsection/HeadSectionWithLogo';
import { MainSectionContainer } from '../components/mainsection/MainSectionContainer';
import { MainSectionCardList } from '../components/mainsection/MainSectionCardList';
import { MainSectionHeader } from '../components/mainsection/MainSectionHeader';
import {NEWS_PATH} from '../lib/constants';
import { ScheduleModel } from '../models/pages/ScheduleModel';
import MainSectionCard from "../components/mainsection/MainSectionCard";
import {MoreButton} from "../components/common/button/MoreButton";
import {getScheduleStatus} from "../lib/content";
import styled from "styled-components";

export const MoreButtonWrapper = styled.div`
    margin-top: 18px;
    justify-self: start;
`;

interface ScheduleOverviewPageProps {
    items: ScheduleModel[];
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function ScheduleOverviewPage({
    items,
    onShowImpressum,
    onShowDatenschutz,
}: ScheduleOverviewPageProps) {
    // state of show more button
    const [showAllUpcoming, setShowAllUpcoming] = useState(false);

    // divide into upcoming and past schedule items
    const now = useMemo(() => new Date(), []);
    const pastSchedule = useMemo(
        () => items
            .filter(item => !item.hidden)
            .filter(
                (item) =>
                    getScheduleStatus(item, now) === 'past'
            )
            .reverse(),
        [now, items],
    );
    const upcomingSchedule = useMemo(
        () => items
            .filter(item => !item.hidden)
            .filter(
                (item) =>
                    getScheduleStatus(item, now) === 'upcoming'
            ),
        [now, items],
    );

    // dependent on show more status show either all upcoming or only the first one
    const visibleUpcomingSchedule = showAllUpcoming
        ? upcomingSchedule
        : upcomingSchedule.slice(0, 1);

    return (
        <>
            <HeadSectionWithLogo
                eyebrow="Termine"
                title="Termine für Sprötze"
                lead="Der nächste relevante Termin zuerst, weitere bei Bedarf."
                actions={[
                    {href: '/', label: 'Zur WGS Startseite', variant: 'primary'},
                    {href: NEWS_PATH, label: 'Zu den News', variant: 'secondary'},
                ]}
            />

            <MainSectionContainer>
                <MainSectionHeader
                    eyebrow="Anstehend"
                    title="Der nächste Termin"
                />
                <MainSectionCardList>
                    {visibleUpcomingSchedule.map((item) => (
                        <MainSectionCard item={item} key={item.id} />
                    ))}
                </MainSectionCardList>
                {upcomingSchedule.length > 1 && (
                    <MoreButtonWrapper>
                        <MoreButton
                            expanded={showAllUpcoming}
                            onClick={() => setShowAllUpcoming((prevState) => !prevState)}
                            moreLabel={`Weitere Termine anzeigen (${upcomingSchedule.length - 1})`}
                        />
                    </MoreButtonWrapper>
                )}
            </MainSectionContainer>

            <MainSectionContainer>
                <MainSectionHeader
                    eyebrow="Rückblick"
                    title="Vergangene Sitzungen"
                />
                <MainSectionCardList>
                    {pastSchedule.map((item) => (
                        <MainSectionCard item={item} key={item.id} />
                    ))}
                </MainSectionCardList>
            </MainSectionContainer>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
