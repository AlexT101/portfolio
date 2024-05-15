'use client';

import AOS from 'aos';
import { useEffect } from 'react';

export default function Animate() {
    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        });
    }, []);
    return null;
}