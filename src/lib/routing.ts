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

export function syncQueryParam(name: string, value: string | null) {
    const nextUrl = new URL(window.location.href);
    if (value) {
        nextUrl.searchParams.set(name, value);
    } else {
        nextUrl.searchParams.delete(name);
    }

    window.history.pushState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
}

export function useQueryParamState(name: string, fallback: string | null = null) {
    const [value, setValue] = useState<string | null>(() => getQueryParam(name) ?? fallback);

    useEffect(() => {
        const handlePopState = () => {
            setValue(getQueryParam(name) ?? fallback);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [fallback, name]);

    const updateValue = (nextValue: string | null) => {
        setValue(nextValue);
        syncQueryParam(name, nextValue);
    };

    return [value, updateValue] as const;
}
