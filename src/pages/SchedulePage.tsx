import { useMemo } from 'react';

import { scheduleItems } from '../data';
import {getScheduleItemBySlug, getScheduleStatus, sortScheduleByDate} from '../lib/content';
import {ScheduleDetailsPage} from "./ScheduleDetailsPage";
import {ScheduleOverviewPage} from "./ScheduleOverviewPage";

interface SchedulePageProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
    scheduleSlug?: string | null;
}

export function SchedulePage({ onShowImpressum, onShowDatenschutz, scheduleSlug }: SchedulePageProps) {
    // order news by date so newest items come first in the overview
    const orderedScheduleItems = useMemo(() => sortScheduleByDate(scheduleItems), []);

    // if a detail slug is in the URL, resolve the matching article to render the detail page
    const scheduleItem = scheduleSlug ? getScheduleItemBySlug(scheduleSlug) : null;

    if (scheduleItem) {
        return (
            <ScheduleDetailsPage
                scheduleItem={scheduleItem}
                onShowImpressum={onShowImpressum}
                onShowDatenschutz={onShowDatenschutz}
            />
        );
    }

    return (
        <ScheduleOverviewPage
            items={orderedScheduleItems}
            onShowImpressum={onShowImpressum}
            onShowDatenschutz={onShowDatenschutz}
        />
    );
}
