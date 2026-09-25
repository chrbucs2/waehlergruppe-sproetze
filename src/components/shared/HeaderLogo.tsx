import styled from 'styled-components';

import { assetUrl } from '../../lib/formatting';

const HeaderLogoRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;

    @media (max-width: 900px) {
        display: none;
    }
`;

const HeaderLogoImage = styled.img`
    display: block;
    width: min(20vw, 220px);
    max-width: 220px;
    height: auto;
    object-fit: contain;
`;

interface HeaderLogoProps {
    alt: string;
    label: string;
    path: string;
}

export function HeaderLogo({ alt, label, path }: HeaderLogoProps) {
    return (
        <HeaderLogoRoot aria-label={label}>
            <HeaderLogoImage src={assetUrl(path)} alt={alt} />
        </HeaderLogoRoot>
    );
}
