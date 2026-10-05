import {NEWS_PATH, SCHEDULE_PATH} from './constants';

import { articles, filterTopics, news, scheduleItems } from '../data';
import {LinkModel} from "../models/LinkModel";
import {buildHrefWithPreservedQuery} from "./routing";

export function buildNewsOverviewUrl(topicId: string | undefined) {
    const href = !topicId ? NEWS_PATH : `${NEWS_PATH}?thema=${topicId}`;
    return buildHrefWithPreservedQuery(href);
}

export function buildNewsDetailUrl(slug: string) {
    return buildHrefWithPreservedQuery(`${NEWS_PATH}/${slug}`);
}

export function buildScheduleDetailUrl(slug: string) {
    return buildHrefWithPreservedQuery(`${SCHEDULE_PATH}/${slug}`);
}

export function buildArticleUrl(articleLink: LinkModel | undefined) {
    if (!articleLink) {
        return undefined;
    }
    const href = articleLink.slug ? `/artikel/${articleLink.slug}` : articleLink.href;
    return href ? buildHrefWithPreservedQuery(href) : undefined;
}

export function getTopicById(topicId: string) {
    return filterTopics.find((topic) => topic.id === topicId) ?? null;
}

export function getArticleBySlug(slug: string) {
    return articles.find((article) => article.slug === slug) ?? null;
}

export function getNewsItemBySlug(slug: string) {
    return news.find((article) => article.slug === slug) ?? null;
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
