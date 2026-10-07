import styled from 'styled-components';

import { FilterButton } from './FilterButton';
import { filterButtonStyles } from '../button/buttonStyles';

const FilterButtonGroupRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const MobileFilterSelectWrapper = styled.div`
    position: relative;
    display: none;
    width: 100%;

    @media (max-width: 640px) {
        display: block;
    }
`;

const MobileFilterSelect = styled.select`
    ${filterButtonStyles}
    appearance: none;
    width: 100%;
    padding-right: 44px;
    background: rgba(255, 255, 255, 0.82);
    color: inherit;
`;

const MobileFilterChevron = styled.span`
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    height: 10px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: translateY(-65%) rotate(45deg);
    pointer-events: none;
    opacity: 0.75;
`;

const DesktopFilterButtons = styled.div`
    display: contents;

    @media (max-width: 640px) {
        display: none;
    }
`;

interface FilterButtonGroupProps {
    items: Array<{ id: string; label: string }>;
    activeId?: string | undefined;
    onSelect: (id: string | undefined) => void;
}

export function FilterButtonGroup({ items, activeId, onSelect }: FilterButtonGroupProps) {
    return (
        <FilterButtonGroupRoot className="topic-filter">
            <MobileFilterSelectWrapper>
                <MobileFilterSelect
                    aria-label="News-Thema auswählen"
                    value={activeId ?? ''}
                    onChange={(event) => onSelect(event.target.value || undefined)}
                >
                    <option value="">Alle Themen</option>
                    {items.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.label}
                        </option>
                    ))}
                </MobileFilterSelect>
                <MobileFilterChevron aria-hidden="true" />
            </MobileFilterSelectWrapper>

            <DesktopFilterButtons>
                <FilterButton active={!activeId} onClick={() => onSelect(undefined)}>
                    Alle Themen
                </FilterButton>

                {items.map((item) => (
                    <FilterButton key={item.id} active={activeId === item.id} onClick={() => onSelect(item.id)}>
                        {item.label}
                    </FilterButton>
                ))}
            </DesktopFilterButtons>
        </FilterButtonGroupRoot>
    );
}
