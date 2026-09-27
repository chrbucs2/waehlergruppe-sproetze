import styled from 'styled-components';

import { anchoredInlineLinkStyles } from '../common/link/linkStyles';
import { formatInlineMarkup } from '../../lib/formatting';

const Paragraph = styled.p`
    ${anchoredInlineLinkStyles}
`;

type DetailSectionTextProps = {
    text: string;
};

export function DetailSectionText({ text }: DetailSectionTextProps) {
    return <Paragraph dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />;
}
