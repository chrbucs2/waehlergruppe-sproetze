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
    return (
        <ImageFrame>
            <Image
                src={image.src}
                alt={image.alt ?? title}
                style={{
                    objectPosition: image.crop ? `${image.crop.x}% ${image.crop.y}%` : 'center center',
                }}
            />
        </ImageFrame>
    );
}
