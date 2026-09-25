export type DetailHeadingModel = DetailHeadingArticleModel | DetailHeadingNewsModel | DetailHeadingScheduleModel;

export interface DetailHeadingArticleModel {
    type: 'article';
    title: string;
    category: string;
    publishedAt: string;
    modifiedAt?: string;
}

export interface DetailHeadingNewsModel {
    type: 'news';
    title: string;
    publishedAt: string;
}

export interface DetailHeadingScheduleModel {
    type: 'schedule';
    title: string;
    category: string;
    date: string;
    time: string;
    location?: string;
}