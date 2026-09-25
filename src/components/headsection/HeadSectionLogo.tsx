import styled from 'styled-components';

import { assetUrl } from '../../lib/formatting';

const HeadSectionLogoRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;

    @media (max-width: 900px) {
        display: none;
    }
`;

const HeadSectionLogoImage = styled.img`
    display: block;
    width: min(20vw, 220px);
    max-width: 220px;
    height: auto;
    object-fit: contain;
`;

interface HeadSectionLogoProps {
    alt: string;
    label: string;
    path: string;
}

export function HeadSectionLogo({ alt, label, path }: HeadSectionLogoProps) {
    return (
        <HeadSectionLogoRoot aria-label={label}>
            <HeadSectionLogoImage src={assetUrl(path)} alt={alt} />
        </HeadSectionLogoRoot>
    );
}
