import {DetailSectionImageModel} from "./DetailSectionImageModel";
import {DetailSectionSubheadingModel} from "./DetailSectionSubheadingModel";
import {DetailSectionListModel} from "./DetailSectionListModel";
import {DetailSectionLinkModel} from "./DetailSectionLinkModel";

export interface DetailModel {
    title: string;
    paragraphs?: (string | DetailSectionSubheadingModel | DetailSectionListModel | DetailSectionLinkModel)[];
    image?: DetailSectionImageModel;
}