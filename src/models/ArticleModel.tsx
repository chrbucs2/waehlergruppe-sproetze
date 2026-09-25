import {DetailHeadingArticleModel} from "./DetailHeadingModel";
import {DetailSectionModel} from "./DetailSectionModel";
import {DetailSourceModel} from "./DetailSourceModel";

export interface ArticleModel extends DetailHeadingArticleModel {
    introduction: string[];
    sections: DetailSectionModel[];
    sources: DetailSourceModel[];
}
