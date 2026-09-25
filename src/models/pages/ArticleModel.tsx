import {DetailHeadingArticleModel} from "../details/DetailHeadingModel";
import {DetailModel} from "../details/DetailModel";
import {DetailSourceModel} from "../details/DetailSourceModel";

export interface ArticleModel extends Omit<DetailHeadingArticleModel, 'type'> {
    id: string,
    slug: string,
    introduction?: string[];
    sections?: DetailModel[];
    topicIds?: string[];
    sources?: DetailSourceModel[];
}
