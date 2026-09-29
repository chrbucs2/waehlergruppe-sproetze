import { DetailModel } from '../details/DetailModel';
import {DetailHeadingNewsModel} from "../details/DetailHeadingModel";
import {LinkModel} from "../LinkModel";
import type { SummaryImageModel } from './SummaryImageModel';

export interface NewsModel extends Omit<DetailHeadingNewsModel, 'type'>{
    id: string;
    slug: string;
    hidden?: boolean;
    topicIds: string[];
    summary: string[];
    summaryImage?: SummaryImageModel;
    articleLink?: LinkModel;
    introduction?: string[];
    sections?: DetailModel[];
}
