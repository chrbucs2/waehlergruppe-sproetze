import { useEffect, useMemo, useState } from 'react';

import { LegalModals } from './components/LegalModals';
import { ThankYouModal } from './components/ThankYouModal';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { SchedulePage } from './pages/SchedulePage';
import { NEWS_INDEX_PATH, SCHEDULE_PATH, THANK_YOU_MODAL_STORAGE_KEY } from './lib/constants';
import { getPathFromLocation, getSearchFromLocation, normalizePath } from './lib/routing';

function App() {
    const [currentPath, setCurrentPath] = useState(getPathFromLocation);
    const [search, setSearch] = useState(getSearchFromLocation);
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectedPath = params.get('p');
        const redirectedSearch = params.get('q');

        if (redirectedPath) {
            const targetPath = decodeURIComponent(redirectedPath);
            const targetSearch = redirectedSearch ? decodeURIComponent(redirectedSearch) : '';
            window.history.replaceState(null, '', `${targetPath}${targetSearch}${window.location.hash}`);
            setCurrentPath(normalizePath(targetPath));
            setSearch(targetSearch);
        }

        const isHomePage = normalizePath(redirectedPath ? decodeURIComponent(redirectedPath) : window.location.pathname) === '/';
        const hasDismissedThankYouModal = window.localStorage.getItem(THANK_YOU_MODAL_STORAGE_KEY) === 'true';

        if (isHomePage && !hasDismissedThankYouModal) {
            setShowThankYouModal(true);
        }

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setShowImpressum(false);
                setShowDatenschutz(false);
                setShowThankYouModal(false);
            }
        };

        const handleLocationChange = () => {
            setCurrentPath(getPathFromLocation());
            setSearch(getSearchFromLocation());
        };

        document.addEventListener('keydown', handleEscKey);
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    const closeThankYouModal = () => {
        window.localStorage.setItem(THANK_YOU_MODAL_STORAGE_KEY, 'true');
        setShowThankYouModal(false);
    };

    const params = useMemo(() => new URLSearchParams(search), [search]);
    const topicId = params.get('thema');
    const articleSlug = params.get('artikel');
    const scheduleSlug = params.get('termin');
    const isNewsPage = currentPath === normalizePath(NEWS_INDEX_PATH);
    const isSchedulePage = currentPath === normalizePath(SCHEDULE_PATH);

    return (
        <main className="page" id="top">
            <ThankYouModal isOpen={showThankYouModal} onClose={closeThankYouModal} />
            {isNewsPage ? (
                <NewsPage
                    onShowImpressum={() => setShowImpressum(true)}
                    onShowDatenschutz={() => setShowDatenschutz(true)}
                    topicId={topicId}
                    articleSlug={articleSlug}
                />
            ) : isSchedulePage ? (
                <SchedulePage
                    onShowImpressum={() => setShowImpressum(true)}
                    onShowDatenschutz={() => setShowDatenschutz(true)}
                    scheduleSlug={scheduleSlug}
                />
            ) : (
                <HomePage
                    onShowImpressum={() => setShowImpressum(true)}
                    onShowDatenschutz={() => setShowDatenschutz(true)}
                />
            )}
            <LegalModals
                showImpressum={showImpressum}
                showDatenschutz={showDatenschutz}
                setShowImpressum={setShowImpressum}
                setShowDatenschutz={setShowDatenschutz}
            />
        </main>
    );
}

export default App;
