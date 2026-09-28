import styled from 'styled-components';

import { DetailSourceModel } from '../../models/details/DetailSourceModel';
import Link from "../common/link/Link";

const Container = styled.aside`
    display: grid;
    gap: 12px;
    width: 100%;
`;

const Title = styled.h3`
    display: block;
    font-size: 1.17em;
    font-weight: bold;
    unicode-bidi: isolate;
`;

const List = styled.ul`
    margin: 0;
    gap: 8px;
`;

const Item = styled.li`
    margin: 0;
    line-height: 1.6;
`;

interface DetailSourceProps {
    sources: DetailSourceModel[];
}

export function DetailSources({ sources }: DetailSourceProps) {
    if (!sources.length) {
        return null;
    }

    return (
        <Container>
            <Title>Quellen</Title>
            <List>
                {sources.map((source) => (
                    <Item key={source.label}>
                        <Link href={source.url} showArrow={false} fontWeight="thin" rel="noopener noreferrer">
                            {source.label}
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    );
}
