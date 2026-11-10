import type { NewsBadge } from '../models/pages/NewsModel';

const dateFormatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

export function getNewsBadgeDate(now = new Date()): string {
    return dateFormatter.format(now);
}

export function getActiveNewsBadges(badges: NewsBadge[] = [], today = getNewsBadgeDate()): NewsBadge[] {
    return badges.filter((badge) =>
        (!badge.startDate || badge.startDate <= today) &&
        (!badge.endDate || today <= badge.endDate),
    );
}

export function hasPinBadge(badges: NewsBadge[]): boolean {
    return badges.some((badge) => badge.type === 'pin');
}
