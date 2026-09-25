import { useMemo, useState } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { Details } from '../components/detail/Details';
import { scheduleItems } from '../data';
import { getScheduleItemBySlug, getScheduleStatus, sortScheduleByDate } from '../lib/content';
import { SCHEDULE_PATH } from '../lib/constants';
import { assetUrl, formatDate, formatInlineMarkup } from '../lib/formatting';
import {DetailSectionModel} from "../models/DetailSectionModel";
import {DetailSectionLink} from "../components/detail/DetailSectionLink";

export function SchedulePage({ onShowImpressum, onShowDatenschutz, scheduleSlug }) {
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
        const sections: DetailSectionModel[] = activeScheduleItem?.sections ? activeScheduleItem.sections as DetailSectionModel[] : [];
        return (
            <>
                <Details
                    backHref={SCHEDULE_PATH}
                    backText={'Zurück zur Terminübersicht'}
                    heading={{
                        type: 'schedule',
                        title: activeScheduleItem.title,
                        category: activeScheduleItem.category,
                        scheduleDate: activeScheduleItem.date,
                        scheduleTime: activeScheduleItem.time,
                        location: activeScheduleItem.location,
                    }}
                    introduction={Array.isArray(activeScheduleItem.introduction) ? activeScheduleItem.introduction : [activeScheduleItem.introduction]}
                    sections={sections}
                >

                    <DetailSectionLink
                        href={activeScheduleItem.link}
                        text={activeScheduleItem.linkLabel ?? 'Zur öffentlichen Sitzungsseite'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    />
                </Details>
                <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
            </>
        );
    }

    return (
        <>
            <section className="hero hero--schedule">
                <div className="hero__copy">
                    <p className="eyebrow">Termine</p>
                    <h1 className="schedule-page__title">Termine für Sprötze</h1>
                    <p className="lead schedule-page__lead">
                        Der nächste relevante Termin zuerst, weitere bei Bedarf.
                    </p>
                    <div className="hero__actions hero__actions--schedule">
                        <a className="button button--primary" href="/">
                            Zur WGS Startseite
                        </a>
                        <a className="button button--secondary" href="/sproetze-aktuell">
                            Zu den News
                        </a>
                    </div>
                </div>
                <div className="hero__brand" aria-label="Logo der Wählergruppe Sprötze">
                    <img src={assetUrl('logo.png')} alt="Logo der Wählergruppe Sprötze" />
                </div>
            </section>

            <section className="content" id="kommende-termine">
                <div className="section-heading">
                    <p className="eyebrow">Anstehend</p>
                    <h2>Der nächste Termin</h2>
                </div>
                <div className="schedule-list">
                    {visibleUpcomingSchedule.map((item) => (
                        <article className="schedule-card" key={item.id}>
                            <div className="schedule-card__head">
                                <p className="eyebrow">{item.category}</p>
                                <strong>{formatDate(item.date)} · {item.time}</strong>
                            </div>
                            <h4>{item.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: formatInlineMarkup(item.details) }} />
                            {item.sections?.length && (
                                <a className="news-card__link" href={`${SCHEDULE_PATH}/${item.slug}`}>
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
                <div className="section-heading">
                    <p className="eyebrow">Rückblick</p>
                    <h2>Vergangene Sitzungen</h2>
                </div>
                <div className="schedule-list">
                    {pastSchedule.map((item) => (
                        <article className="schedule-card" key={item.id}>
                            <div className="schedule-card__head">
                                <p className="eyebrow">{item.category}</p>
                                <strong>{formatDate(item.date)} · {item.time}</strong>
                            </div>
                            <h4>{item.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: formatInlineMarkup(item.details) }} />
                            {item.sections?.length && (
                                <a className="news-card__link" href={`${SCHEDULE_PATH}/${item.slug}`}>
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
