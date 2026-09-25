import styled from 'styled-components';

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
            <a
                type="link"
                className={`topic-filter__chip${!activeId ? ' is-active' : ''}`}
                onClick={() => onSelect(null)}
            >
                Alle Themen
            </a>
            {items.map((item) => (
                <a
                    key={item.id}
                    type="link"
                    className={`topic-filter__chip${activeId === item.id ? ' is-active' : ''}`}
                    onClick={() => onSelect(item.id)}
                >
                    {item.label}
                </a>
            ))}
        </OverviewSectionFilterRoot>
    );
}
