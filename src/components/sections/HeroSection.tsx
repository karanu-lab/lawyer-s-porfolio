/**
 * Hero section with video background and call-to-action
 * @module components/sections/HeroSection
 */

import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config';

/**
 * Main hero section with video background, title, and CTA buttons
 * Features:
 * - Full-screen video background
 * - Animated text elements
 * - Dual call-to-action buttons
 * - Scroll indicator
 */
const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="/videos/hero-background.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{ background: 'var(--hero-overlay)' }}
            />

            {/* Content */}
            <div className="relative z-10 section-container text-center text-primary-foreground">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 animate-fade-in opacity-0 animation-delay-200 text-primary-foreground/70">
                        {siteConfig.tagline}
                    </p>

                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 animate-fade-in-up opacity-0">
                        Alexander <span className="gold-accent">Mitchell</span>
                    </h1>

                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animation-delay-200">
                        {siteConfig.description}
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-400">
                        <Button
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8"
                            asChild
                        >
                            <a href="#contact">Schedule Consultation</a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/95 text-primary border-white hover:bg-white hover:scale-105 transition-all font-medium px-8"
                            asChild
                        >
                            <a href="#about">Learn More</a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all font-medium px-8 gap-2"
                            asChild
                        >
                            <a href="/documents/Alexander-Mitchell-CV.pdf" download>
                                <Download size={20} />
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
                aria-label="Scroll to about section"
            >
                <ArrowDown size={28} />
            </a>
        </section>
    );
};

export default HeroSection;
