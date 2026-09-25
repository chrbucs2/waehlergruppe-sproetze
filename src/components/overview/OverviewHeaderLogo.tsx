import styled from 'styled-components';

import { assetUrl } from '../../lib/formatting';

const OverviewHeaderLogoRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;

    @media (max-width: 900px) {
        display: none;
    }
`;

const OverviewHeaderLogoImage = styled.img`
    display: block;
    width: min(20vw, 220px);
    max-width: 220px;
    height: auto;
    object-fit: contain;
`;

interface OverviewHeaderLogoProps {
    alt: string;
    label: string;
    path: string;
}

export function OverviewHeaderLogo({ alt, label, path }: OverviewHeaderLogoProps) {
    return (
        <OverviewHeaderLogoRoot aria-label={label}>
            <OverviewHeaderLogoImage src={assetUrl(path)} alt={alt} />
        </OverviewHeaderLogoRoot>
    );
}
