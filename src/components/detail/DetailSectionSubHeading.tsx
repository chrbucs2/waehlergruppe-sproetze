import styled from 'styled-components';

import { formatInlineMarkup } from '../../lib/formatting';

type DetailSectionSubHeadingProps = {
    text: string;
};

const SubHeading = styled.p`
    margin: 0.25rem 0 0;
    font-weight: 700;
    color: var(--primary-dark);
`;

export function DetailSectionSubHeading({ text }: DetailSectionSubHeadingProps) {
    return <SubHeading dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />;
}
