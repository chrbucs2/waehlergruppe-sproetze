import styled from 'styled-components';

import { formatInlineMarkup } from '../../lib/formatting';
import {DetailSectionSubheadingModel} from "../../models/details/DetailSectionSubheadingModel";

const SubHeading = styled.p`
    margin: 0.25rem 0 0;
    font-weight: 700;
    color: var(--primary-dark);
`;

interface DetailSectionSubHeadingProps extends Omit<DetailSectionSubheadingModel, 'type'> {}

export function DetailSectionSubHeading({ text }: DetailSectionSubHeadingProps) {
    return <SubHeading dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />;
}
