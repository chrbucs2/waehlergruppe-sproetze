import styled from 'styled-components';

import { Button } from '../shared/Button';

const OverviewHeaderActionsRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

interface OverviewHeaderActionsProps {
    actions: Array<{ href: string; label: string; variant: 'primary' | 'secondary' }>;
}

export function OverviewHeaderActions({ actions }: OverviewHeaderActionsProps) {
    return (
        <OverviewHeaderActionsRoot>
            {actions.map((action) => (
                <Button key={action.href} href={action.href} variant={action.variant}>
                    {action.label}
                </Button>
            ))}
        </OverviewHeaderActionsRoot>
    );
}
