import styled from 'styled-components';

type DetailSectionImageProps = {
    src: string;
    alt: string;
    caption?: string;
};

const Figure = styled.figure`
    margin: 1rem 0 0;
    display: grid;
    gap: 0.45rem;
`;

const Image = styled.img`
    display: block;
    width: min(100%, 960px);
    max-height: 620px;
    object-fit: contain;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.6);
`;

const Caption = styled.figcaption`
    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.55;
`;

export function DetailSectionImage({ src, alt, caption }: DetailSectionImageProps) {
    return (
        <Figure>
            <Image src={src} alt={alt} loading="lazy" />
            {caption && <Caption>{caption}</Caption>}
        </Figure>
    );
}
