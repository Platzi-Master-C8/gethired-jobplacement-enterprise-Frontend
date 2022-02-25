import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0, { behavior: 'smooth' });
    }, [location]);

    return null;
};
