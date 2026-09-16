import { newsArticles, newsTopics, scheduleItems } from '../data';

export function getTopicById(topicId) {
    return newsTopics.find((topic) => topic.id === topicId) ?? null;
}

export function getArticleBySlug(slug) {
    return newsArticles.find((article) => article.slug === slug) ?? null;
}

export function getScheduleItemBySlug(slug) {
    return scheduleItems.find((item) => item.slug === slug) ?? null;
}

export function sortNewsByDate(items) {
    return [...items].sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt));
}

export function sortScheduleByDate(items) {
    return [...items].sort((left, right) => new Date(left.date) - new Date(right.date));
}

export function getScheduleStatus(item, now = new Date()) {
    const scheduleDate = new Date(`${item.date}T${item.time?.slice(0, 5) || '00:00'}:00`);
    return scheduleDate < now ? 'past' : 'upcoming';
}
