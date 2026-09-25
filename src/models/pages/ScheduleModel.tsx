import { DetailModel } from './DetailModel';
import {DetailHeadingScheduleModel} from "./DetailHeadingModel";

export interface ScheduleModel extends Omit<DetailHeadingScheduleModel, 'type'>{
    id: string;
    slug: string;
    details: string;
    introduction?: string | string[];
    sections?: DetailModel[];
    link?: string;
    linkLabel?: string;
}
