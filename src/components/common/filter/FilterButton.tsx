import styled from 'styled-components';

import { buttonBaseStyles, buttonFilterStyles } from '../button/buttonStyles';

interface FilterButtonProps {
    children: string;
    active?: boolean;
    onClick: () => void;
}

const FilterButtonRoot = styled.button<{ $active?: boolean }>`
    ${buttonBaseStyles}
    ${buttonFilterStyles}
    
    background: ${({ $active }) =>
        $active ? 'linear-gradient(135deg, #7b4a7c33, #bba7de4d)' : 'rgba(255, 255, 255, 0.82)'};
`;

export function FilterButton({ children, active, onClick }: FilterButtonProps) {
    return (
        <FilterButtonRoot type="button" onClick={onClick} $active={active}>
            {children}
        </FilterButtonRoot>
    );
}
