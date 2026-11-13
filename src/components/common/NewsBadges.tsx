import styled from 'styled-components';

import { assetUrl } from '../../lib/formatting';
import type { NewsBadge } from '../../models/pages/NewsModel';

const Symbols = styled.span`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
    color: var(--primary-dark);

    img {
        display: block;
        width: 26px;
        height: 26px;
        object-fit: contain;
    }

    svg {
        display: block;
    }
`;

export function NewsBadges({ badges }: { badges: NewsBadge[] }) {
    const pinned = badges.some((badge) => badge.type === 'pin');
    const wgs = badges.some((badge) => badge.type === 'wgs');
    if (!pinned && !wgs) {
        return null;
    }

    return (
        <Symbols>
            {pinned && (
                <span role="img" aria-label="Angepinnt" title="Angepinnt">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="m16 3 5 5-4 1-3 5-1 4-7-7 4-1 5-3 1-4Z M9 15l-6 6" />
                    </svg>
                </span>
            )}
            {wgs && (
                <span title="Wählergruppe Sprötze">
                    <img src={assetUrl('logo.png')} alt="Von der WGS angestoßen" />
                </span>
            )}
        </Symbols>
    );
}
