import { DetailModel } from '../details/DetailModel';
import {DetailHeadingScheduleModel} from "../details/DetailHeadingModel";
import type { SummaryImageModel } from './SummaryImageModel';

export interface ScheduleModel extends Omit<DetailHeadingScheduleModel, 'type'>{
    id: string;
    slug: string;
    hidden?: boolean;
    summary: string[];
    summaryImage?: SummaryImageModel;
    introduction?: string[];
    sections?: DetailModel[];
    link?: string;
    linkLabel?: string;
}
