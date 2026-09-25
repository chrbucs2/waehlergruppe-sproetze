import { useMemo, useState } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { scheduleItems } from '../data';
import {buildScheduleDetailUrl, getScheduleItemBySlug, getScheduleStatus, sortScheduleByDate} from '../lib/content';
import {NEWS_PATH, SCHEDULE_PATH} from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';
import { ScheduleModel } from '../models/pages/ScheduleModel';
import { OverviewHeader } from '../components/overview/OverviewHeader';
import {OverviewSectionHeader} from "../components/overview/OverviewSectionHeader";
import {Eyebrow} from "../components/shared/Eyebrow";

interface SchedulePageProps {
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
    scheduleSlug?: string | null;
}

export function SchedulePage({ onShowImpressum, onShowDatenschutz, scheduleSlug }: SchedulePageProps) {
    const orderedSchedule = useMemo(() => sortScheduleByDate(scheduleItems), []);
    const [showAllUpcoming, setShowAllUpcoming] = useState(false);
    const now = useMemo(() => new Date(), []);
    const activeScheduleItem = scheduleSlug ? getScheduleItemBySlug(scheduleSlug) : null;
    const upcomingSchedule = useMemo(
        () => orderedSchedule.filter((item) => getScheduleStatus(item, now) === 'upcoming'),
        [now, orderedSchedule],
    );
    const pastSchedule = useMemo(
        () => orderedSchedule.filter((item) => getScheduleStatus(item, now) === 'past').reverse(),
        [now, orderedSchedule],
    );
    const visibleUpcomingSchedule = showAllUpcoming ? upcomingSchedule : upcomingSchedule.slice(0, 1);

    if (activeScheduleItem) {
        const currentSchedule: ScheduleModel = activeScheduleItem;
        const sections = currentSchedule.sections ?? [];
        const introduction = currentSchedule.introduction ?? [];
        return (
            <>
                <Details
                    backHref={SCHEDULE_PATH}
                    backText={'Zurück zur Terminübersicht'}
                    heading={{
                        type: 'schedule',
                        title: currentSchedule.title,
                        category: currentSchedule.category,
                        date: currentSchedule.date,
                        time: currentSchedule.time,
                        location: currentSchedule.location,
                    }}
                    introduction={introduction}
                    sections={sections}
                    link={currentSchedule.link && currentSchedule.linkLabel ? {
                        href: currentSchedule.link,
                        text: currentSchedule.linkLabel,
                    } : undefined}
                />
                <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
            </>
        );
    }

    return (
        <>
            <OverviewHeader
                eyebrow="Termine"
                title="Termine für Sprötze"
                lead="Der nächste relevante Termin zuerst, weitere bei Bedarf."
                actions={[
                    {href: '/', label: 'Zur WGS Startseite', variant: 'primary'},
                    {href: NEWS_PATH, label: 'Zu den News', variant: 'secondary'},
                ]}
            />

            <section className="content" id="kommende-termine">
                <OverviewSectionHeader
                    eyebrow="Anstehend"
                    title="Der nächste Termin"
                />
                <div className="schedule-list">
                    {visibleUpcomingSchedule.map((item) => (
                        <article className="schedule-card" key={item.id}>
                            <Eyebrow>{item.category}</Eyebrow>
                            <div className="schedule-card__head">
                                <p className="eyebrow">{item.category}</p>
                                <strong>{formatDate(item.date)} · {item.time}</strong>
                            </div>
                            <h4>{item.title}</h4>
                            {item.summary.map((summary, index) => (
                                <p key={`${item.id}-summary-${index}`} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(summary) }} />
                            ))}
                            {(item.introduction?.length || item.sections?.length) && (
                                <a className="news-card__link" href={`${buildScheduleDetailUrl(item.slug)}`}>
                                    Termin öffnen
                                </a>
                            )}
                        </article>
                    ))}
                </div>
                {upcomingSchedule.length > 1 && (
                    <button
                        type="button"
                        className="button button--secondary schedule-list__toggle"
                        onClick={() => setShowAllUpcoming((current) => !current)}
                    >
                        {showAllUpcoming ? 'Weniger anzeigen' : `Weitere Termine anzeigen (${upcomingSchedule.length - 1})`}
                    </button>
                )}
            </section>

            <section className="content content--soft" id="vergangene-termine">
                <OverviewSectionHeader
                    eyebrow="Rückblick"
                    title="Vergangene Sitzungen"
                />
                <div className="schedule-list">
                    {pastSchedule.map((item) => (
                        <article className="schedule-card" key={item.id}>
                            <div className="schedule-card__head">
                                <p className="eyebrow">{item.category}</p>
                                <strong>{formatDate(item.date)} · {item.time}</strong>
                            </div>
                            <h4>{item.title}</h4>
                            {item.summary.map((summary, index) => (
                                <p key={`${item.id}-summary-${index}`} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(summary) }} />
                            ))}
                            {(item.introduction?.length || item.sections?.length) && (
                                <a className="news-card__link" href={`${buildScheduleDetailUrl(item.slug)}`}>
                                    Termin öffnen
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
