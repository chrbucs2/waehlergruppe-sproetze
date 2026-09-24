import { formatInlineMarkup } from '../../lib/formatting';
import styled from "styled-components";

const Paragraph = styled.p`
    a {
      text-decoration: underline;
      text-underline-offset: 0.14em;
    }
    
    a::after {
        content: '→';
    }
`;

type DetailSectionTextProps = {
    text: string;
};

export function DetailSectionText({ text }: DetailSectionTextProps) {
    return <Paragraph dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />;
}
