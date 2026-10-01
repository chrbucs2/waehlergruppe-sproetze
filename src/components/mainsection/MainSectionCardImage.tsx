import styled from 'styled-components';

import type { SummaryImageModel } from '../../models/pages/SummaryImageModel';
import {imageContainerStyles} from "../common/commonStyles";

const ImageFrame = styled.figure`
    ${imageContainerStyles()}
    margin: 7px 0px;
    overflow: hidden;
    background: #f5f1f5;
    width: 150px;
    height: 150px;
    justify-self: stretch;
    align-self: center;

    @media (max-width: 720px) {
        width: 100%;
        max-width: 150px;
    }
`;

// image positioning
const ImageTransformContent = styled.div<{ $zoom: number; $offsetX: number; $offsetY: number }>`
    width: 100%;
    height: 100%;
    transform-origin: center center;
    transform: ${({ $zoom, $offsetX, $offsetY }) =>
        `${$zoom !== 1 ? `scale(${$zoom}) ` : ''}translate(${$offsetX}%, ${$offsetY}%)`};
`;

// image
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

type MainSectionCardImageProps = {
    image: SummaryImageModel;
    title: string;
};

export function MainSectionCardImage({ image, title }: MainSectionCardImageProps) {
    const zoom = image.zoom ?? 1;
    const offsetX = image.offset?.x ?? 0;
    const offsetY = image.offset?.y ?? 0;
    return (
        <ImageFrame>
            <ImageTransformContent $zoom={zoom} $offsetX={offsetX} $offsetY={offsetY}>
                <Image src={image.src} alt={image.alt ?? title} />
            </ImageTransformContent>
        </ImageFrame>
    );
}
