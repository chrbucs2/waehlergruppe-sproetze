import { useEffect, useMemo, useState } from 'react';

import { getActiveNewsBadges, getNewsBadgeDate, hasPinBadge } from './newsBadges';
import type { NewsModel } from '../models/pages/NewsModel';

export function useActiveNewsBadges(items: NewsModel[]) {
    const [today, setToday] = useState(getNewsBadgeDate);

    // initialize timer to update the today variable
    useEffect(() => {
        // refresh the "today" date every hour to ensure that badges are updated correctly when the day changes
        let timer: ReturnType<typeof setTimeout>;
        const refresh = () => {
            setToday(getNewsBadgeDate());
            clearTimeout(timer);
            // Berlin midnight is on a UTC hour boundary, including daylight saving time.
            timer = setTimeout(refresh, 3_600_000 - Date.now() % 3_600_000);
        };
        refresh();

        // also refresh the "today" date when the user switches back to the tab or window, in case the day has changed while they were away
        window.addEventListener('focus', refresh);
        document.addEventListener('visibilitychange', refresh);

        // cleanup function
        return () => {
            clearTimeout(timer);
            window.removeEventListener('focus', refresh);
            document.removeEventListener('visibilitychange', refresh);
        };
    }, []);

    // get active badges for each item and sort items with pinned items first
    return useMemo(
        () => items
            .map((item) => ({ ...item, badges: getActiveNewsBadges(item.badges, today) }))
            .sort((left, right) => Number(hasPinBadge(right.badges)) - Number(hasPinBadge(left.badges))),
        [items, today],
    );
}
