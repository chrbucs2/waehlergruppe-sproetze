export function assetUrl(path) {
    return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
}

export function formatDate(dateString) {
    return new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(dateString));
}

export function formatInlineMarkup(text) {
    return String(text)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, target) => `<a href="${resolveInlineLinkTarget(target)}">${label}</a>`)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function resolveInlineLinkTarget(target) {
    if (/^https?:\/\//i.test(target)) {
        return target;
    }

    if (target.startsWith('/')) {
        return target;
    }

    return `/artikel/${target}`;
}
