import styled from 'styled-components';

import { formatInlineMarkup } from '../../lib/formatting';
import {DetailSectionListModel} from "../../models/DetailSectionListModel";

const List = styled.ul`
    margin: 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.4rem;
    color: var(--muted);
    line-height: 1.7;
`;

interface DetailSectionListProps extends Omit<DetailSectionListModel, 'type'> {}

export function DetailSectionList({ items }: DetailSectionListProps) {
    return (
        <List>
            {items.map((item) => (
                <li key={item} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(item) }} />
            ))}
        </List>
    );
}
