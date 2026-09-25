import styled from 'styled-components';

import { FilterButton } from '../shared/button/FilterButton';

const OverviewSectionFilterRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

interface OverviewSectionFilterProps {
    items: Array<{ id: string; label: string }>;
    activeId?: string | null;
    onSelect: (id: string | null) => void;
}

export function OverviewSectionFilter({ items, activeId, onSelect }: OverviewSectionFilterProps) {
    return (
        <OverviewSectionFilterRoot className="topic-filter">
            <FilterButton active={!activeId} onClick={() => onSelect(null)}>
                Alle Themen
            </FilterButton>

            {items.map((item) => (
                <FilterButton
                    key={item.id}
                    active={activeId === item.id}
                    onClick={() => onSelect(item.id)}
                >
                    {item.label}
                </FilterButton>
            ))}
        </OverviewSectionFilterRoot>
    );
}
