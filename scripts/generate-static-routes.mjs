import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const distDir = path.join(repoRoot, 'dist');

const siteOrigin = 'https://wählergruppe-sprötze.de';
const siteName = 'Wählergruppe Sprötze';
const defaultDescription = 'Unabhängige Kommunalpolitik für Sprötze.';

async function readFile(relativePath) {
    return fs.readFile(path.join(repoRoot, relativePath), 'utf8');
}

function extractSection(source, exportName) {
    const marker = `export const ${exportName}`;
    const markerIndex = source.indexOf(marker);

    if (markerIndex === -1) {
        throw new Error(`Could not find export "${exportName}"`);
    }

    const assignmentIndex = source.indexOf('=', markerIndex);
    const arrayStart = source.indexOf('[', assignmentIndex);
    if (arrayStart === -1) {
        throw new Error(`Could not find array start for "${exportName}"`);
    }

    let depth = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inTemplateString = false;
    let isEscaped = false;

    for (let index = arrayStart; index < source.length; index += 1) {
        const character = source[index];

        if (isEscaped) {
            isEscaped = false;
            continue;
        }

        if (character === '\\') {
            isEscaped = true;
            continue;
        }

        if (!inDoubleQuote && !inTemplateString && character === '\'') {
            inSingleQuote = !inSingleQuote;
            continue;
        }

        if (!inSingleQuote && !inTemplateString && character === '"') {
            inDoubleQuote = !inDoubleQuote;
            continue;
        }

        if (!inSingleQuote && !inDoubleQuote && character === '`') {
            inTemplateString = !inTemplateString;
            continue;
        }

        if (inSingleQuote || inDoubleQuote || inTemplateString) {
            continue;
        }

        if (character === '[') {
            depth += 1;
        } else if (character === ']') {
            depth -= 1;
            if (depth === 0) {
                return source.slice(arrayStart, index + 1);
            }
        }
    }

    throw new Error(`Could not find array end for "${exportName}"`);
}

function parseDataArray(source, exportName) {
    const section = extractSection(source, exportName);
    return vm.runInNewContext(`(${section})`);
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

function buildSeoTags({ title, description, canonicalPath }) {
    const fullTitle = `${title} | ${siteName}`;
    const fullUrl = `${siteOrigin}${canonicalPath}`;
    const safeDescription = escapeHtml(description || defaultDescription);
    const safeTitle = escapeHtml(fullTitle);
    const safeUrl = escapeHtml(fullUrl);

    return [
        `<title>${safeTitle}</title>`,
        `<meta name="description" content="${safeDescription}" />`,
        '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />',
        `<link rel="canonical" href="${safeUrl}" />`,
        `<meta property="og:title" content="${safeTitle}" />`,
        `<meta property="og:description" content="${safeDescription}" />`,
        `<meta property="og:url" content="${safeUrl}" />`,
        `<meta name="twitter:title" content="${safeTitle}" />`,
        `<meta name="twitter:description" content="${safeDescription}" />`,
    ].join('\n    ');
}

function replaceSeo(baseHtml, seo) {
    const tags = buildSeoTags(seo);

    return baseHtml
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(`${seo.title} | ${siteName}`)}</title>`)
        .replace(/<meta name="description" content="[\s\S]*?" \/>/, `<meta name="description" content="${escapeHtml(seo.description || defaultDescription)}" />`)
        .replace(/<meta name="robots" content="[\s\S]*?" \/>/, '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />')
        .replace(/<link rel="canonical" href="[\s\S]*?" \/>/, `<link rel="canonical" href="${escapeHtml(`${siteOrigin}${seo.canonicalPath}`)}" />`)
        .replace(/<meta property="og:title" content="[\s\S]*?" \/>/, `<meta property="og:title" content="${escapeHtml(`${seo.title} | ${siteName}`)}" />`)
        .replace(/<meta property="og:description" content="[\s\S]*?" \/>/, `<meta property="og:description" content="${escapeHtml(seo.description || defaultDescription)}" />`)
        .replace(/<meta property="og:url" content="[\s\S]*?" \/>/, `<meta property="og:url" content="${escapeHtml(`${siteOrigin}${seo.canonicalPath}`)}" />`)
        .replace(/<meta name="twitter:title" content="[\s\S]*?" \/>/, `<meta name="twitter:title" content="${escapeHtml(`${seo.title} | ${siteName}`)}" />`)
        .replace(/<meta name="twitter:description" content="[\s\S]*?" \/>/, `<meta name="twitter:description" content="${escapeHtml(seo.description || defaultDescription)}" />`);
}

async function writeRoute(routePath, html) {
    const relativeDir = routePath === '/' ? '' : routePath.replace(/^\//, '');
    const targetDir = path.join(distDir, relativeDir);
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
}

async function main() {
    const [newsSource, articlesSource, scheduleSource] = await Promise.all([
        readFile('src/data/news.ts'),
        readFile('src/data/articles.ts'),
        readFile('src/data/scheduleItems.ts'),
    ]);
    const news = parseDataArray(newsSource, 'news');
    const articles = parseDataArray(articlesSource, 'articles');
    const scheduleItems = parseDataArray(scheduleSource, 'scheduleItems');

    const baseHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

    const routes = [
        {
            path: '/',
            title: 'Wählergruppe Sprötze',
            description: 'Offizielle Website der Wählergruppe Sprötze mit Positionen, Team und Kontakten zur unabhängigen Kommunalpolitik vor Ort.',
        },
        {
            path: '/sproetze-aktuell',
            title: 'Sprötze aktuell',
            description: 'Aktuelle Nachrichten und Meldungen der Wählergruppe Sprötze.',
        },
        ...news
            .filter((item) => !item.hidden)
            .map((item) => ({
                path: `/sproetze-aktuell/${item.slug}`,
                title: item.title,
                description: item.summary[0] ?? 'Sprötze aktuell.',
            })),
        {
            path: '/termine',
            title: 'Termine für Sprötze',
            description: 'Sitzungen, Veranstaltungen und Termine der Wählergruppe Sprötze in und rund um Sprötze.',
        },
        ...scheduleItems
            .filter((item) => !item.hidden)
            .map((item) => ({
                path: `/termine/${item.slug}`,
                title: item.title,
                description: item.summary[0] ?? 'Termin der Wählergruppe Sprötze.',
            })),
        ...articles.map((article) => ({
            path: `/artikel/${article.slug}`,
            title: article.title,
            description: article.introduction?.[0] ?? 'Beitrag der Wählergruppe Sprötze.',
        })),
    ];

    for (const route of routes) {
        const html = replaceSeo(baseHtml, {
            title: route.title,
            description: route.description,
            canonicalPath: route.canonicalPath ?? route.path,
        });
        await writeRoute(route.filePath ?? route.path, html);
    }

    const sitemapEntries = routes.map((route) => `  <url><loc>${siteOrigin}${route.canonicalPath ?? route.path}</loc></url>`).join('\n');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
    await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
