import styled from 'styled-components';

import { formatDate } from '../../lib/formatting';
import { DetailHeadingModel } from '../../models/DetailHeadingModel';

const Eyebrow = styled.p`
    margin: 0;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: var(--muted);
`;

const Title = styled.h1`
    font-size: clamp(1.85rem, 3vw, 2.7rem);
    line-height: 1.12;
    max-width: unset;
    width: 100%;
    margin-bottom: 10px;
`;

const Location = styled.p`
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
`;

const Container = styled.div`
    display: grid;
    gap: 10px;
`;

export function DetailHeading(model: DetailHeadingModel) {
    const { type, title } = model;

    let eyebrow = '';
    if (type === 'article') {
        eyebrow = `${model.category} · ${formatDate(model.publishedAt)}${model.modifiedAt ? ` · aktualisiert am ${formatDate(model.modifiedAt)}` : ''}`;
    } else if (type === 'schedule') {
        eyebrow = `${model.category} · ${formatDate(model.scheduleDate)} · ${model.scheduleTime}`;
    } else if (type === 'news') {
        eyebrow = formatDate(model.publishedAt);
    }

    const hasLocation = type === 'schedule' && model.location;

    return (
        <Container>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Title>{title}</Title>
            {hasLocation && <Location>{model.location}</Location>}
        </Container>
    );
}
