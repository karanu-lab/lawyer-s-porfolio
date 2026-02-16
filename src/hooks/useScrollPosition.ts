/**
 * Custom hook to track window scroll position
 * @module hooks/useScrollPosition
 */

import { useState, useEffect } from 'react';

/**
 * Tracks whether the user has scrolled past a threshold
 * @param threshold - Scroll position threshold in pixels (default: 50)
 * @returns boolean indicating if scrolled past threshold
 * 
 * @example
 * ```tsx
 * const isScrolled = useScrollPosition(100);
 * ```
 */
export const useScrollPosition = (threshold: number = 50): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        // Set initial state
        handleScroll();

        // Add event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
};
