import styled from 'styled-components';

import { Button } from './Button';

const ButtonGroupRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

interface ButtonGroupProps {
    actions: Array<{ href: string; label: string; variant: 'primary' | 'secondary' }>;
}

export function ButtonGroup({ actions }: ButtonGroupProps) {
    return (
        <ButtonGroupRoot>
            {actions.map((action) => (
                <Button key={action.href} href={action.href} variant={action.variant}>
                    {action.label}
                </Button>
            ))}
        </ButtonGroupRoot>
    );
}
