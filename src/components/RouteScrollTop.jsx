/*
    File: RouteScrollTop.jsx
    Author: Baron Gobi
    Copyright: 2024 - Baron Gobi
    Version: 1.0
*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}
