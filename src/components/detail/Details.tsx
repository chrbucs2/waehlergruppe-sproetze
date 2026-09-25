import styled from 'styled-components';

import { DetailBackLink } from './DetailBackLink';
import { DetailHeading } from './DetailHeading';
import { DetailIntroduction } from './DetailIntroduction';
import { DetailSections } from './DetailSections';
import { DetailTopics } from './DetailTopics';
import { DetailSource } from './DetailSource';
import { DetailHeadingModel } from '../../models/DetailHeadingModel';
import { DetailSectionModel } from '../../models/DetailSectionModel';
import { DetailSourceModel } from '../../models/DetailSourceModel';
import { containerStyles } from '../shared/commonStyles';

const Container = styled.section`
    background: linear-gradient(180deg, #e6effb80, #f9f6fff2);
    display: grid;
    gap: 24px;
    width: 100%;
    margin-top: 18px;
    padding: 28px;
    ${containerStyles(true)}

    .section-heading {
        margin-bottom: 0;
    }

    .focus-list--outside {
        margin-top: 4px;
    }
`;

interface DetailsProps {
    backHref: string;
    backText?: string;
    heading: DetailHeadingModel;
    introduction?: string[];
    sections?: DetailSectionModel[];
    sources?: DetailSourceModel[];
    topics?: Array<{ key: string; value: string }>;
    children?: React.ReactNode;
}

export function Details({
    backHref,
    backText,
    heading,
    introduction,
    sections,
    sources,
    topics,
    children,
}: DetailsProps) {
    return (
        <Container>
            <DetailBackLink href={backHref} text={backText} />
            <DetailHeading {...heading} />
            {introduction && <DetailIntroduction paragraphs={introduction} />}
            {sections && <DetailSections sections={sections} />}
            {topics && <DetailTopics topics={topics} />}
            {sources && <DetailSource sources={sources} />}
            {children}
        </Container>
    );
}
