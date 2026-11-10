import { DetailModel } from '../details/DetailModel';
import {DetailHeadingNewsModel} from "../details/DetailHeadingModel";
import {LinkModel} from "../LinkModel";
import type { SummaryImageModel } from './SummaryImageModel';

export interface NewsBadge {
    type: 'pin' | 'wgs';
    startDate?: string;
    endDate?: string;
}

export interface NewsModel extends Omit<DetailHeadingNewsModel, 'type'>{
    id: string;
    slug: string;
    hidden?: boolean;
    highlight?: boolean;
    badges?: NewsBadge[];
    topicIds: string[];
    summary: string[];
    summaryImage?: SummaryImageModel;
    articleLink?: LinkModel;
    introduction?: string[];
    sections?: DetailModel[];
}
