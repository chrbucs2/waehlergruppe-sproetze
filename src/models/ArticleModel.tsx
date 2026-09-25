import {DetailHeadingArticleModel} from "./DetailHeadingModel";
import {DetailModel} from "./DetailModel";
import {DetailSourceModel} from "./DetailSourceModel";

export interface ArticleModel extends Omit<DetailHeadingArticleModel, 'type'> {
    id: string,
    slug: string,
    introduction?: string[];
    sections?: DetailModel[];
    topicIds?: string[];
    sources?: DetailSourceModel[];
}
