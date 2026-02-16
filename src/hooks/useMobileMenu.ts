/**
 * Custom hook for mobile menu state management
 * @module hooks/useMobileMenu
 */

import { useState, useCallback } from 'react';

interface UseMobileMenuReturn {
    /** Whether the mobile menu is open */
    isOpen: boolean;
    /** Toggle menu open/closed */
    toggle: () => void;
    /** Close the menu */
    close: () => void;
    /** Open the menu */
    open: () => void;
}

/**
 * Manages mobile menu state
 * @returns Mobile menu state and control functions
 * 
 * @example
 * ```tsx
 * const { isOpen, toggle, close } = useMobileMenu();
 * ```
 */
export const useMobileMenu = (): UseMobileMenuReturn => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    return { isOpen, toggle, close, open };
};
