import { useEffect } from 'react';

type SeoOptions = {
    title: string;
    description: string;
    canonicalPath: string;
    noindex?: boolean;
};

const SITE_NAME = 'Wählergruppe Sprötze';
const SITE_ORIGIN = 'https://wählergruppe-sprötze.de';
const DEFAULT_DESCRIPTION = 'Unabhängige Kommunalpolitik für Sprötze.';

function setMeta(name: string, content: string) {
    const selector = `meta[name="${name}"]`;
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

function setProperty(property: string, content: string) {
    const selector = `meta[property="${property}"]`;
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

function setCanonical(href: string) {
    let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
}

export function useSeo({ title, description, canonicalPath, noindex = false }: SeoOptions) {
    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        const fullUrl = `${SITE_ORIGIN}${canonicalPath}`;

        document.title = fullTitle;
        setMeta('description', description || DEFAULT_DESCRIPTION);
        setMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
        setMeta('twitter:title', fullTitle);
        setMeta('twitter:description', description || DEFAULT_DESCRIPTION);
        setProperty('og:title', fullTitle);
        setProperty('og:description', description || DEFAULT_DESCRIPTION);
        setProperty('og:url', fullUrl);
        setCanonical(fullUrl);
    }, [canonicalPath, description, noindex, title]);
}
