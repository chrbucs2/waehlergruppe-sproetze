import {DetailSectionImageModel} from "./DetailSectionImageModel";
import {DetailSectionSubheadingModel} from "./DetailSectionSubheadingModel";
import {DetailSectionListModel} from "./DetailSectionListModel";
import {DetailSectionLinkModel} from "./DetailSectionLinkModel";

export interface DetailSectionModel {
    title: string;
    paragraphs?: (string | DetailSectionSubheadingModel | DetailSectionListModel | DetailSectionLinkModel)[];
    image?: DetailSectionImageModel;
}