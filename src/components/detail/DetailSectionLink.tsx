import styled from 'styled-components';

import { formatInlineMarkup } from '../../lib/formatting';
import {DetailSectionLinkModel} from "../../models/details/DetailSectionLinkModel";
import Link from "../common/link/Link";

const LinkWrapper = styled.p<{ $indent: boolean }>`
    ${({ $indent }) => $indent && 'padding-left: 1rem;'}
`;

interface DetailSectionLinkProps extends Omit<DetailSectionLinkModel, 'type'> {
    target?: string;
    rel?: string;
}

export function DetailSectionLink({ text, href, slug, indent = false }: DetailSectionLinkProps) {
    const resolvedHref = href ?? (slug ? `/artikel/${slug}` : undefined);

    return (
        <>
            <LinkWrapper $indent={indent}>
                {resolvedHref ? (
                    <Link href={resolvedHref}>{text}</Link>
                ) : (
                    <span dangerouslySetInnerHTML={{ __html: formatInlineMarkup(text) }} />
                )}
            </LinkWrapper>
        </>
    );
}
