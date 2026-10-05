import { useEffect, useState } from 'react';

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

export function getQueryParam(name: string) {
    return new URL(window.location.href).searchParams.get(name);
}

const DEFAULT_PRESERVED_QUERY_PARAMS = ['internal'];
export function buildHrefWithPreservedQuery(href: string) {
    if (!href) {
        return href;
    }

    const url = new URL(href, window.location.origin);
    const currentUrl = new URL(window.location.href);

    DEFAULT_PRESERVED_QUERY_PARAMS.forEach((paramName) => {
        const value = currentUrl.searchParams.get(paramName);
        if (value !== null) {
            url.searchParams.set(paramName, value);
        }
    });

    return `${url.pathname}${url.search}${url.hash}`;
}

export function useQueryParamState(name: string, fallback: string | undefined = undefined) {
    const [value, setValue] = useState<string | undefined>(() => getQueryParam(name) ?? fallback);

    useEffect(() => {
        const handlePopState = () => {
            setValue(getQueryParam(name) ?? fallback);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [fallback, name]);

    const updateValue = (nextValue: string | undefined) => {
        setValue(nextValue);
        syncQueryParam(name, nextValue ?? null);
    };

    return [value, updateValue] as const;
}

export function syncQueryParam(name: string, value: string | null) {
    const nextUrl = new URL(window.location.href);
    if (value) {
        nextUrl.searchParams.set(name, value);
    } else {
        nextUrl.searchParams.delete(name);
    }

    window.history.pushState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
}
