/**
 * Main navigation bar component with scroll-based styling
 * @module components/layout/Navbar
 */

import { Menu, X } from 'lucide-react';
import { useScrollPosition, useMobileMenu } from '@/hooks';
import { NAV_LINKS } from '@/constants';
import { siteConfig } from '@/config';

/**
 * Responsive navigation bar with mobile menu
 * - Changes style on scroll
 * - Mobile hamburger menu
 * - Smooth scroll to sections
 */
const Navbar = () => {
    const isScrolled = useScrollPosition(siteConfig.scrollThreshold);
    const { isOpen: isMobileMenuOpen, toggle, close } = useMobileMenu();

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-card/95 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className={`font-serif text-xl font-semibold transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'
                        }`}
                >
                    Alexander <span className="gold-accent">Mitchell</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggle}
                    className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'
                        }`}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-lg">
                    <div className="section-container py-4 flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={close}
                                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
