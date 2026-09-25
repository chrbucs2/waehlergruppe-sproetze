import styled from 'styled-components';

import { DetailBackLink } from './DetailBackLink';
import { DetailHeading } from './DetailHeading';
import { DetailIntroduction } from './DetailIntroduction';
import { DetailSections } from './DetailSections';
import { DetailTopics } from './DetailTopics';
import { DetailSectionLink } from './DetailSectionLink';
import { DetailSources } from './DetailSources';
import { DetailHeadingModel } from '../../models/details/DetailHeadingModel';
import { DetailModel } from '../../models/details/DetailModel';
import { DetailSourceModel } from '../../models/details/DetailSourceModel';
import { containerBorderStyles } from '../shared/styles/commonStyles';

const Container = styled.section`
    background: linear-gradient(180deg, #e6effb80, #f9f6fff2);
    display: grid;
    gap: 24px;
    width: 100%;
    margin-top: 18px;
    padding: 28px;
    ${containerBorderStyles(true)}

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
    sections?: DetailModel[];
    sources?: DetailSourceModel[];
    topics?: Array<{ key: string; value: string }>;
    link?: { href: string; text: string };
}

export function Details({
    backHref,
    backText,
    heading,
    introduction,
    sections,
    sources,
    topics,
    link,
}: DetailsProps) {
    return (
        <Container>
            <DetailBackLink href={backHref} text={backText} />
            <DetailHeading {...heading} />
            {introduction && <DetailIntroduction paragraphs={introduction} />}
            {sections && <DetailSections sections={sections} />}
            {topics && <DetailTopics topics={topics} />}
            {sources && <DetailSources sources={sources} />}
            {link && <DetailSectionLink href={link.href} text={link.text} />}
        </Container>
    );
}
