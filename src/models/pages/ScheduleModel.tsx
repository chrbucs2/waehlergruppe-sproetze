import { DetailModel } from '../details/DetailModel';
import {DetailHeadingScheduleModel} from "../details/DetailHeadingModel";

export interface ScheduleModel extends Omit<DetailHeadingScheduleModel, 'type'>{
    id: string;
    slug: string;
    summary: string[];
    introduction?: string[];
    sections?: DetailModel[];
    link?: string;
    linkLabel?: string;
}
