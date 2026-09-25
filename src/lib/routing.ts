export function normalizePath(pathname: string) {
    if (!pathname) {
        return '/';
    }

    const trimmed = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    return trimmed || '/';
}

export function getPathFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const redirectedPath = params.get('p');

    return normalizePath(redirectedPath ? decodeURIComponent(redirectedPath) : window.location.pathname);
}

export function getSearchFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const redirectedSearch = params.get('q');

    return redirectedSearch ? decodeURIComponent(redirectedSearch) : window.location.search;
}
