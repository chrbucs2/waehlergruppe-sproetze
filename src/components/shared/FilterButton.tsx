import styled from 'styled-components';

interface FilterButtonProps {
    href: string;
    children: string;
    active?: boolean;
}

const FilterButtonRoot = styled.a<{ $active?: boolean }>`
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: 999px;
    border-color: ${({ $active }) =>
        $active ? 'rgba(123, 74, 124, 0.3)' : 'none'};
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform 160ms ease,
        background 160ms ease,
        box-shadow 160ms ease;
    background: ${({ $active }) =>
        $active ? 'linear-gradient(135deg, #7b4a7c33, #bba7de4d)' : 'rgba(255, 255, 255, 0.82)'};
`;

export function FilterButton({ href, children, active }: FilterButtonProps) {
    return (
        <FilterButtonRoot href={href} $active={active}>
            {children}
        </FilterButtonRoot>
    );
}
