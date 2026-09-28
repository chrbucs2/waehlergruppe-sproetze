import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { getArticleBySlug } from '../lib/content';
import { useQueryParamState } from '../lib/routing';
import { useSeo } from '../lib/seo';
import { DetailModel } from '../models/details/DetailModel';
import { ScheduleModel } from '../models/pages/ScheduleModel';
import {SCHEDULE_PATH} from "../lib/constants";

type DetailTopic = { key: string; value: string };

interface ScheduleDetailsPageProps {
    scheduleItem: ScheduleModel;
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function ScheduleDetailsPage({ scheduleItem, onShowImpressum, onShowDatenschutz }: ScheduleDetailsPageProps) {
    useSeo({
        title: scheduleItem.title,
        description: scheduleItem.summary[0] ?? 'Termin der Wählergruppe Sprötze.',
        canonicalPath: `/termine/${scheduleItem.slug}`,
    });

    // get params for the Details components
    const introduction: string[] = scheduleItem?.introduction || [];
    const sections: DetailModel[] = scheduleItem?.sections || [];

    return (
        <>
            <Details
                backHref={SCHEDULE_PATH}
                backText={'Zurück zur Terminübersicht'}
                heading={{
                    type: 'schedule',
                    title: scheduleItem.title,
                    category: scheduleItem.category,
                    date: scheduleItem.date,
                    time: scheduleItem.time,
                    location: scheduleItem.location,
                }}
                introduction={introduction}
                sections={sections}
                link={scheduleItem.link && scheduleItem.linkLabel ? {
                    href: scheduleItem.link,
                    text: scheduleItem.linkLabel,
                } : undefined}
            />
            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
