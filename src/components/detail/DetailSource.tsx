import styled from 'styled-components';

import { DetailSourceModel } from '../../models/DetailSourceModel';

const Container = styled.aside`
    display: grid;
    gap: 12px;
    width: 100%;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.1rem;
    color: var(--text);
`;

const List = styled.ul`
    margin: 0;
    gap: 8px;
`;

const Item = styled.li`
    margin: 0;
    line-height: 1.6;
`;

const Link = styled.a`
    color: var(--primary-dark);

    &::after {
        content: '→';
        margin-left: 0.35rem;
    }
`;

interface DetailSourceProps {
    sources: DetailSourceModel[];
}

export function DetailSource({ sources }: DetailSourceProps) {
    if (!sources.length) {
        return null;
    }

    return (
        <Container>
            <Title>Quellen</Title>
            <List>
                {sources.map((source) => (
                    <Item key={source.label}>
                        <Link href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.label}
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    );
}
