import styled from 'styled-components';

import { FilterButton } from '../shared/FilterButton';
import {buildNewsOverviewUrl} from "../../lib/content";

const OverviewSectionFilterRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

interface OverviewSectionFilterProps {
    items: Array<{ id: string; label: string }>;
    activeId?: string | null;
}

export function OverviewSectionFilter({ items, activeId }: OverviewSectionFilterProps) {
    return (
        <OverviewSectionFilterRoot className="topic-filter">
            <FilterButton href="/sproetze-aktuell" active={!activeId}>
                Alle Themen
            </FilterButton>
            
            {items.map((item) => (
                <FilterButton
                    key={item.id}
                    href={buildNewsOverviewUrl(item.id)}
                    active={activeId === item.id}
                >
                    {item.label}
                </FilterButton>
            ))}
        </OverviewSectionFilterRoot>
    );
}
