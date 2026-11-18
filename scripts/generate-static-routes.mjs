import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const distDir = path.join(repoRoot, 'dist');

async function loadBuildModules() {
    const server = await createServer({
        root: repoRoot,
        server: { middlewareMode: true, hmr: false },
        appType: 'custom',
    });

    try {
        const [{ news }, { articles }, { scheduleItems }, { renderPage }, seo] = await Promise.all([
            server.ssrLoadModule('/src/data/content/news/index.ts'),
            server.ssrLoadModule('/src/data/content/articles/index.ts'),
            server.ssrLoadModule('/src/data/content/scheduleItems/index.ts'),
            server.ssrLoadModule('/src/prerender.tsx'),
            server.ssrLoadModule('/src/lib/seoMetadata.ts'),
        ]);
        return { news, articles, scheduleItems, renderPage, seo };
    } finally {
        await server.close();
    }
}

function hasDetailContent(item) {
    return Boolean(item?.introduction?.length || item?.sections?.length);
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

function replaceSeo(baseHtml, seo, metadata) {
    const { buildSeoTitle, DEFAULT_DESCRIPTION: defaultDescription, SITE_ORIGIN: siteOrigin } = metadata;

    return baseHtml
        .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(buildSeoTitle(seo.title))}</title>`)
        .replace(/<meta name="description" content="[\s\S]*?" \/>/, () => `<meta name="description" content="${escapeHtml(seo.description || defaultDescription)}" />`)
        .replace(/<meta name="robots" content="[\s\S]*?" \/>/, '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />')
        .replace(/<link rel="canonical" href="[\s\S]*?" \/>/, () => `<link rel="canonical" href="${escapeHtml(`${siteOrigin}${seo.canonicalPath}`)}" />`)
        .replace(/<meta property="og:title" content="[\s\S]*?" \/>/, () => `<meta property="og:title" content="${escapeHtml(buildSeoTitle(seo.title))}" />`)
        .replace(/<meta property="og:description" content="[\s\S]*?" \/>/, () => `<meta property="og:description" content="${escapeHtml(seo.description || defaultDescription)}" />`)
        .replace(/<meta property="og:url" content="[\s\S]*?" \/>/, () => `<meta property="og:url" content="${escapeHtml(`${siteOrigin}${seo.canonicalPath}`)}" />`)
        .replace(/<meta name="twitter:title" content="[\s\S]*?" \/>/, () => `<meta name="twitter:title" content="${escapeHtml(buildSeoTitle(seo.title))}" />`)
        .replace(/<meta name="twitter:description" content="[\s\S]*?" \/>/, () => `<meta name="twitter:description" content="${escapeHtml(seo.description || defaultDescription)}" />`);
}

async function writeRoute(routePath, html) {
    const relativeDir = routePath === '/' ? '' : routePath.replace(/^\//, '');
    const targetDir = path.join(distDir, relativeDir);
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
}

async function main() {
    const { news, articles, scheduleItems, renderPage, seo } = await loadBuildModules();
    const siteOrigin = seo.SITE_ORIGIN;

    const baseHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

    if (!baseHtml.includes('<div id="root"></div>') || !baseHtml.includes('</head>')) {
        throw new Error('Build template is missing the prerender root or head closing tag');
    }

    const routes = [
        {
            path: '/',
            ...seo.HOME_SEO,
        },
        {
            path: '/sproetze-aktuell',
            ...seo.NEWS_SEO,
        },
        ...news
            .filter((item) => !item.hidden)
            .filter(hasDetailContent)
            .map((item) => ({
                path: `/sproetze-aktuell/${item.slug}`,
                canonicalPath: `/sproetze-aktuell/${item.slug}/`,
                title: item.title,
                description: item.summary[0] ?? 'Sprötze aktuell.',
            })),
        {
            path: '/termine',
            canonicalPath: '/termine/',
            title: 'Termine für Sprötze',
            description: 'Sitzungen, Veranstaltungen und Termine der Wählergruppe Sprötze in und rund um Sprötze.',
        },
        ...scheduleItems
            .filter((item) => !item.hidden)
            .map((item) => ({
                path: `/termine/${item.slug}`,
                canonicalPath: `/termine/${item.slug}/`,
                title: item.title,
                description: item.summary[0] ?? 'Termin der Wählergruppe Sprötze.',
            })),
        ...articles
            .filter(hasDetailContent)
            .map((article) => ({
                path: `/artikel/${article.slug}`,
                canonicalPath: `/artikel/${article.slug}/`,
                title: article.title,
                description: article.introduction?.[0] ?? 'Beitrag der Wählergruppe Sprötze.',
            })),
    ];

    for (const route of routes) {
        const { html: content, styles } = renderPage(route.path);
        const pageHtml = baseHtml
            .replace('<div id="root"></div>', () => `<div id="root">${content}</div>`)
            .replace('</head>', () => `${styles}\n  </head>`);
        const html = replaceSeo(pageHtml, {
            title: route.title,
            description: route.description,
            canonicalPath: route.canonicalPath ?? route.path,
        }, seo);
        await writeRoute(route.path, html);
    }

    const sitemapEntries = routes.map((route) => `  <url><loc>${siteOrigin}${route.canonicalPath ?? route.path}</loc></url>`).join('\n');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
    await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
