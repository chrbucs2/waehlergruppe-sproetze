import styled from 'styled-components';

import { formatInlineMarkup } from '../../lib/formatting';

type DetailSectionLinkProps = {
    text: string;
    href?: string;
    slug?: string;
    indent?: boolean;
};

const LinkNote = styled.p<{ $indent: boolean }>`
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    color: var(--muted);
    ${({ $indent }) => $indent && 'padding-left: 1rem;'}

    .news-card__link {
        margin-top: 0;
    }
`;

const LinkText = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: var(--primary-dark);
`;

export function DetailSectionLink({ text, href, slug, indent = false }: DetailSectionLinkProps) {
    const resolvedHref = href ?? (slug ? `/artikel/${slug}` : undefined);

    return (
        <LinkNote $indent={indent}>
            {resolvedHref ? (
                <LinkText href={resolvedHref} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />
            ) : (
                <span dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />
            )}
        </LinkNote>
    );
}
