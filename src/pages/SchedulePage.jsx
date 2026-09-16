import { useMemo, useState } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { scheduleItems } from '../data';
import { getScheduleItemBySlug, getScheduleStatus, sortScheduleByDate } from '../lib/content';
import { SCHEDULE_PATH } from '../lib/constants';
import { formatDate, formatInlineMarkup } from '../lib/formatting';

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
        return (
            <>
                <section className="content content--soft news-article-page">
                    <a className="news-back-link" href={SCHEDULE_PATH}>
                        Zurück zur Terminübersicht
                    </a>
                    <div className="section-heading">
                        <p className="eyebrow">
                            {activeScheduleItem.category} · {formatDate(activeScheduleItem.date)} · {activeScheduleItem.time}
                        </p>
                        <h1 className="news-article-page__title">{activeScheduleItem.title}</h1>
                        <p className="section-copy">{activeScheduleItem.location}</p>
                    </div>
                    {activeScheduleItem.introduction && (
                        <div className="schedule-detail-intro">
                            {Array.isArray(activeScheduleItem.introduction)
                                ? activeScheduleItem.introduction.map((paragraph) => (
                                    <p key={paragraph} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(paragraph) }} />
                                ))
                                : <p>{activeScheduleItem.introduction}</p>}
                        </div>
                    )}
                    {activeScheduleItem.sections?.length > 0 ? (
                        <article className="feature-card feature-card--active news-article-page__content">
                            {activeScheduleItem.sections.map((section) => (
                                <section className="schedule-detail-section" key={section.title}>
                                    <h3>{section.title}</h3>
                                    {section.paragraphs.map((paragraph) => {
                                        if (typeof paragraph === 'string') {
                                            return (
                                                <p
                                                    key={paragraph}
                                                    dangerouslySetInnerHTML={{ __html: formatInlineMarkup(paragraph) }}
                                                />
                                            );
                                        }

                                        return (
                                            <p key={paragraph.text} className="schedule-link-note">
                                                <a className="news-card__link" href={paragraph.link}>
                                                    {paragraph.text}
                                                </a>
                                            </p>
                                        );
                                    })}
                                </section>
                            ))}
                            {activeScheduleItem.outcome && (
                                <p className="schedule-outcome-text" dangerouslySetInnerHTML={{ __html: formatInlineMarkup(activeScheduleItem.outcome) }} />
                            )}
                        </article>
                    ) : (
                        activeScheduleItem.outcome && (
                            <p className="schedule-outcome-text" dangerouslySetInnerHTML={{ __html: formatInlineMarkup(activeScheduleItem.outcome) }} />
                        )
                    )}
                    {activeScheduleItem.link && (
                        <p className="schedule-source-link">
                            <a className="news-card__link" href={activeScheduleItem.link} target="_blank" rel="noopener noreferrer">
                                {activeScheduleItem.linkLabel ?? 'Zur öffentlichen Sitzungsseite'}
                            </a>
                        </p>
                    )}
                </section>

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
                            <p>{item.details}</p>
                            {item.sections?.length > 0 && (
                                <a className="news-card__link" href={`${SCHEDULE_PATH}?termin=${item.slug}`}>
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
                            <p>{item.details}</p>
                            {item.sections?.length > 0 && (
                                <a className="news-card__link" href={`${SCHEDULE_PATH}?termin=${item.slug}`}>
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
