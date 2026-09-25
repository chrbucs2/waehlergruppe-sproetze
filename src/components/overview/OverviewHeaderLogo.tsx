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

export function OverviewHeaderLogo() {
    return (
        <OverviewHeaderLogoRoot aria-label="Logo der Wählergruppe Sprötze">
            <OverviewHeaderLogoImage src={assetUrl('logo.png')} alt="Logo der Wählergruppe Sprötze" />
        </OverviewHeaderLogoRoot>
    );
}
