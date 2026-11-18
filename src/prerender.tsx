import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './App';

export function renderPage(path: string) {
    const sheet = new ServerStyleSheet();

    try {
        const html = renderToString(sheet.collectStyles(<App initialPath={path} />));
        return { html, styles: sheet.getStyleTags() };
    } finally {
        sheet.seal();
    }
}
