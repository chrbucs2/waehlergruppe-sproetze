import styled from 'styled-components';

import { buttonBaseStyles, buttonFilterStyles } from './buttonStyles';

interface FilterButtonProps {
    href: string;
    children: string;
    active?: boolean;
}

const FilterButtonRoot = styled.a<{ $active?: boolean }>`
    ${buttonBaseStyles}
    ${buttonFilterStyles}
    
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
