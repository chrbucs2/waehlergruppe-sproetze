import styled from 'styled-components';

import { SiteFooter } from '../components/SiteFooter';
import { DetailBackLink } from '../components/detail/DetailBackLink';
import { DetailHeading } from '../components/detail/DetailHeading';
import { DetailIntroduction } from '../components/detail/DetailIntroduction';
import { DetailSections } from '../components/detail/DetailSections';
import { DetailSource } from '../components/detail/DetailSource';
import { NEWS_INDEX_PATH } from '../lib/constants';
import { ArticleModel } from '../models/ArticleModel';

const ArticleContent = styled.section`
    background: linear-gradient(180deg, #e6effb80, #f9f6fff2); 
    display: grid;
    gap: 24px;
    .section-heading {
        margin-bottom: 0;
    }
`;

export interface ArticlePageParams {
    article?: ArticleModel;
    onShowImpressum: () => void;
    onShowDatenschutz: () => void;
}

export function ArticlePage({ article, onShowImpressum, onShowDatenschutz }: ArticlePageParams) {
    if (!article) {
        return null;
    }

    return (
        <>
            <ArticleContent className="content">
                <DetailBackLink href={NEWS_INDEX_PATH} />

                <DetailHeading
                    type={'article'}
                    title={article.title}
                    category={article.category ?? 'Artikel'}
                    publishedAt={article.publishedAt}
                    modifiedAt={article.modifiedAt}
                />

                {article.introduction && (
                    <DetailIntroduction paragraphs={article.introduction} />
                )}

                {article.sections && (
                    <DetailSections sections={article.sections} />
                )}

                <DetailSource sources={article.sources ?? []} />
            </ArticleContent>

            <SiteFooter onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
        </>
    );
}
