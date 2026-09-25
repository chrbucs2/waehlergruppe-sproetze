import styled from 'styled-components';

import { Button } from './button/Button';

const HeaderActionsRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

interface HeaderActionsProps {
    actions: Array<{ href: string; label: string; variant: 'primary' | 'secondary' }>;
}

export function HeaderActions({ actions }: HeaderActionsProps) {
    return (
        <HeaderActionsRoot>
            {actions.map((action) => (
                <Button key={action.href} href={action.href} variant={action.variant}>
                    {action.label}
                </Button>
            ))}
        </HeaderActionsRoot>
    );
}
