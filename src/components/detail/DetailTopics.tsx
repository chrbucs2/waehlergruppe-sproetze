import styled from 'styled-components';

import { getTopicById } from '../../lib/content';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Topic = styled.a`
    display: inline-flex;
    border-radius: 999px;
    padding: 8px 12px;
    background: #7b4a7c24;
    border: 1px solid rgba(123, 74, 124, .26);
    color: var(--primary-dark);
    font-weight: 600;
    font-size: .86rem;
`;

interface DetailTopicsProps {
    topics: Array<{ key: string; value: string }>;
}

export function DetailTopics({ topics }: DetailTopicsProps) {
    if (!topics.length) {
        return null;
    }

    return (
        <Container>
            {topics.map(({ key, value }) => (
                <Topic key={key} href={value}>
                    <span>{getTopicById(key)?.label ?? key}</span>
                </Topic>
            ))}
        </Container>
    );
}
