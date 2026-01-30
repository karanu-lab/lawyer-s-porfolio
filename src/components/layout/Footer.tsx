/**
 * Footer component with site navigation and legal disclaimer
 * @module components/layout/Footer
 */

import { siteConfig } from '@/config';

/**
 * Site footer with navigation, copyright, and legal disclaimer
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and Tagline */}
                    <div>
                        <p className="font-serif text-xl font-semibold">
                            Alexander <span className="gold-accent">Mitchell</span>
                        </p>
                        <p className="text-primary-foreground/60 text-sm mt-1">
                            {siteConfig.tagline}
                        </p>
                    </div>

                    {/* Footer Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a
                            href="#about"
                            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#practice"
                            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                            Practice Areas
                        </a>
                        <a
                            href="#testimonials"
                            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-primary-foreground/50 text-sm">
                        © {currentYear} All rights reserved
                    </p>
                </div>

                {/* Legal Disclaimer */}
                <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
                    <p className="text-xs text-primary-foreground/40">
                        The information on this website is for general informational purposes
                        only and does not constitute legal advice.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
