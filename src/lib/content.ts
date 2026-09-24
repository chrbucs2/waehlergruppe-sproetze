import { articles, filterTopics, news, scheduleItems } from '../data';

export function getTopicById(topicId: string) {
    return filterTopics.find((topic) => topic.id === topicId) ?? null;
}

export function getNewsArticleBySlug(slug: string) {
    return news.find((article) => article.slug === slug) ?? null;
}

export function getGeneralArticleBySlug(slug: string) {
    return articles.find((article) => article.slug === slug) ?? null;
}

export function getArticleBySlug(slug: string) {
    return getNewsArticleBySlug(slug) ?? getGeneralArticleBySlug(slug);
}

export function getScheduleItemBySlug(slug: string) {
    return scheduleItems.find((item) => item.slug === slug) ?? null;
}

export function sortNewsByDate<T extends { publishedAt: string }>(items: T[]) {
    return [...items].sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime());
}

export function sortScheduleByDate<T extends { date: string }>(items: T[]) {
    return [...items].sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime());
}

export function getScheduleStatus<T extends { date: string; time?: string }>(item: T, now = new Date()) {
    const scheduleDate = new Date(`${item.date}T${item.time?.slice(0, 5) || '00:00'}:00`);
    return scheduleDate < now ? 'past' : 'upcoming';
}
