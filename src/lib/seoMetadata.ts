export const SITE_NAME = 'Wählergruppe Sprötze';
export const SITE_ORIGIN = 'https://xn--whlergruppe-sprtze-ltb88a.de';
export const DEFAULT_DESCRIPTION = 'Unabhängige Kommunalpolitik für Sprötze.';

export const HOME_SEO = {
    title: 'WGS – Wählergruppe Sprötze | Team & Positionen',
    description: 'Die WGS – Wählergruppe Sprötze: unabhängige Kommunalpolitik, unser Team und unsere Positionen für Sprötze, Ortsteil von Buchholz in der Nordheide.',
    canonicalPath: '/',
};

export const NEWS_SEO = {
    title: 'Sprötze News & Aktuelles',
    description: 'Nachrichten aus Sprötze zu Ortsrat, Verkehr, Schulen und Dorfentwicklung – zusammengestellt und eingeordnet von der Wählergruppe Sprötze.',
    canonicalPath: '/sproetze-aktuell/',
};

export function buildSeoTitle(title: string) {
    return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}
