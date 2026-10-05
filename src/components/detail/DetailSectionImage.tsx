import styled from 'styled-components';
import {DetailSectionImageModel} from "../../models/details/DetailSectionImageModel";
import {containerBorderStyles, imageContainerStyles} from "../common/commonStyles";
import Link from "../common/link/Link";
import { getQueryParam } from '../../lib/routing';

const Figure = styled.figure`
    margin: 1rem 0 0;
    display: grid;
    gap: 0.45rem;
`;

const Image = styled.img`
    ${imageContainerStyles()}
    display: block;
    width: min(100%, 960px);
    max-height: 620px;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.6);
`;

const Caption = styled.figcaption`
    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.55;
`;

const LinkWrapper = styled.div`
    display: grid;
    gap: 0.75rem;
    padding: 1rem 1.1rem;
    background: linear-gradient(135deg, rgba(249, 247, 255, 0.94), rgba(222, 213, 244, 0.55));
    ${containerBorderStyles()}
`;

const NoticeHeading = styled.strong`
    display: block;
    color: var(--primary-dark);
`;

const NoticeText = styled.p`
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
`;

interface DetailSectionImageProps extends DetailSectionImageModel {}

export function DetailSectionImage({ src, alt, caption, linkHref, linkText }: DetailSectionImageProps) {
    const showInternalImage = !linkHref ||  Boolean(getQueryParam('internal'));
    return (
        <>
            {showInternalImage ? (
                <Figure>
                    <Image src={src} alt={alt} loading="lazy" />
                </Figure>
            ) : (
                <LinkWrapper>
                    <div>
                        <NoticeHeading>Bild hier aus rechtlichen Gründen nicht verfügbar</NoticeHeading>
                        <NoticeText>Aus rechtlichen Grunden konnen wir das Bild hier nicht anzeigen und verlinken es deshalb lediglich.</NoticeText>
                    </div>
                    <Link href={linkHref}>{linkText || caption}</Link>
                </LinkWrapper>
            )}

            {caption &&
                <Caption>{caption}</Caption>
            }
        </>

    );
}
