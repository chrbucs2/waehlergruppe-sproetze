import { DetailSectionLinkModel } from './DetailSectionLinkModel';
import { DetailModel } from './DetailModel';
import {DetailHeadingNewsModel} from "./DetailHeadingModel";
import {LinkModel} from "./LinkModel";

export interface NewsModel extends Omit<DetailHeadingNewsModel, 'type'>{
    id: string;
    slug: string;
    topicIds: string[];
    summary: string[];
    articleLink?: LinkModel;
    introduction?: string[];
    sections?: DetailModel[];
}
