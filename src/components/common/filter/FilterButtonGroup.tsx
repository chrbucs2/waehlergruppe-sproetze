import styled from 'styled-components';

import { FilterButton } from './FilterButton';

const FilterButtonGroupRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

interface FilterButtonGroupProps {
    items: Array<{ id: string; label: string }>;
    activeId?: string | null;
    onSelect: (id: string | null) => void;
}

export function FilterButtonGroup({ items, activeId, onSelect }: FilterButtonGroupProps) {
    return (
        <FilterButtonGroupRoot className="topic-filter">
            <FilterButton active={!activeId} onClick={() => onSelect(null)}>
                Alle Themen
            </FilterButton>

            {items.map((item) => (
                <FilterButton key={item.id} active={activeId === item.id} onClick={() => onSelect(item.id)}>
                    {item.label}
                </FilterButton>
            ))}
        </FilterButtonGroupRoot>
    );
}
