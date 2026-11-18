import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import test from 'node:test';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
let content;
let metadata;
let routing;
let formatting;
try {
    [content, metadata, routing, formatting] = await Promise.all([
        server.ssrLoadModule('/src/data/index.ts'),
        server.ssrLoadModule('/src/lib/seoMetadata.ts'),
        server.ssrLoadModule('/src/lib/routing.ts'),
        server.ssrLoadModule('/src/lib/formatting.ts'),
    ]);
} finally {
    await server.close();
}

function escapeHtml(text) {
    return text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#x27;');
}

async function readPage(route) {
    return fs.readFile(new URL(`../dist${route}index.html`, import.meta.url), 'utf8');
}

const hasDetails = item => Boolean(item.introduction?.length || item.sections?.length);
const detailPages = [
    ...content.news.filter(item => !item.hidden && hasDetails(item))
        .map(item => ({ path: `/sproetze-aktuell/${item.slug}/`, title: item.title, introduction: item.introduction })),
    ...content.articles.filter(hasDetails)
        .map(item => ({ path: `/artikel/${item.slug}/`, title: item.title, introduction: item.introduction })),
    ...content.scheduleItems.filter(item => !item.hidden)
        .map(item => ({ path: `/termine/${item.slug}/`, title: item.title, introduction: item.introduction })),
];
const overviewPages = [
    { path: '/', ...metadata.HOME_SEO, heading: 'Wählergruppe Sprötze – WGS' },
    { path: '/sproetze-aktuell/', ...metadata.NEWS_SEO, heading: 'Nachrichten und Aktuelles aus Sprötze' },
    { path: '/termine/', title: 'Termine für Sprötze', heading: 'Termine für Sprötze' },
];

test('all generated pages contain their content, links, styles and metadata without running JavaScript', async () => {
    const sitemap = await fs.readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
    const pages = [...overviewPages, ...detailPages];
    assert.equal((sitemap.match(/<loc>/g) ?? []).length, pages.length);

    for (const page of pages) {
        const html = await readPage(page.path);
        const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
        assert.equal(heading, escapeHtml(page.heading ?? page.title), page.path);
        assert.equal((html.match(/<h1\b/g) ?? []).length, 1, page.path);
        assert.ok(html.includes(`<div id="root"><main`), page.path);
        assert.match(html, /<a\b[^>]*href="\//, page.path);
        assert.match(html, /<style data-styled="true"[^>]*>[\s\S]+?<\/style>/, page.path);
        assert.ok(html.includes(`<title>${escapeHtml(metadata.buildSeoTitle(page.title))}</title>`), page.path);
        assert.ok(html.includes(`<link rel="canonical" href="${metadata.SITE_ORIGIN}${page.path}"`), page.path);
        assert.ok(sitemap.includes(`<loc>${metadata.SITE_ORIGIN}${page.path}</loc>`), page.path);
        for (const paragraph of page.introduction ?? []) {
            assert.ok(html.includes(formatting.formatInlineMarkup(paragraph)), `Missing article text: ${page.path}`);
        }
    }
});

test('home and news use the same search-focused metadata in static HTML and browser configuration', async () => {
    for (const page of overviewPages.slice(0, 2)) {
        const html = await readPage(page.path);
        const title = escapeHtml(metadata.buildSeoTitle(page.title));
        assert.ok(html.includes(`<meta name="description" content="${escapeHtml(page.description)}"`));
        assert.ok(html.includes(`<meta property="og:title" content="${title}"`));
        assert.ok(html.includes(`<meta name="twitter:title" content="${title}"`));
    }
    const home = await readPage('/');
    assert.ok(home.includes('Ortsteil von Buchholz in der Nordheide'));
    assert.ok(!home.includes('Wählergruppe Sprötze | Wählergruppe Sprötze'));
});

test('prerendered news overview preserves visible-item limit, linked details and hidden-item rules', async () => {
    const html = await readPage('/sproetze-aktuell/');
    assert.equal((html.match(/<article\b/g) ?? []).length, Math.min(10, content.news.filter(item => !item.hidden).length));
    assert.match(html, /href="\/sproetze-aktuell\/[^"]+\/"/);
    assert.ok(html.includes('Weitere Beiträge anzeigen'));
    for (const item of content.news.filter(item => item.hidden)) {
        assert.ok(!html.includes(escapeHtml(item.title)), item.slug);
    }
});

test('routing produces crawlable URLs on the server without browser globals', () => {
    assert.equal(routing.getSearchFromLocation(), '');
    assert.equal(routing.getQueryParam('thema'), null);
    assert.equal(routing.buildHrefWithPreservedQuery('/sproetze-aktuell'), '/sproetze-aktuell/');
    assert.equal(routing.buildHrefWithPreservedQuery('/sproetze-aktuell?thema=verkehr'), '/sproetze-aktuell/?thema=verkehr');
    assert.equal(routing.buildHrefWithPreservedQuery('https://example.com/'), 'https://example.com/');
});
