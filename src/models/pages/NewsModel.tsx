import { DetailSectionLinkModel } from '../details/DetailSectionLinkModel';
import { DetailModel } from '../details/DetailModel';
import {DetailHeadingNewsModel} from "../details/DetailHeadingModel";
import {LinkModel} from "../LinkModel";

export interface NewsModel extends Omit<DetailHeadingNewsModel, 'type'>{
    id: string;
    slug: string;
    topicIds: string[];
    summary: string[];
    articleLink?: LinkModel;
    introduction?: string[];
    sections?: DetailModel[];
}
