/**
 * Experience section with animated statistics
 * @module components/sections/ExperienceSection
 */

import { useEffect, useState, useRef } from 'react';
import { STATS } from '@/constants';
import { siteConfig } from '@/config';

interface AnimatedCounterProps {
    value: number;
    suffix: string;
    isVisible: boolean;
}

/**
 * Animated counter component that counts up when visible
 */
const AnimatedCounter = ({ value, suffix, isVisible }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const { counterDuration, counterSteps } = siteConfig.animation;
        const increment = value / counterSteps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, counterDuration / counterSteps);

        return () => clearInterval(timer);
    }, [value, isVisible]);

    return (
        <span className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            {count}
            <span className="gold-accent">{suffix}</span>
        </span>
    );
};

/**
 * Experience statistics section with animated counters
 * Features:
 * - Intersection Observer triggers animation when visible
 * - Smooth number count-up animation
 * - Four key statistics
 */
const ExperienceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: siteConfig.animation.intersectionThreshold }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="section-padding"
            style={{ background: 'var(--section-gradient)' }}
        >
            <div className="section-container">
                <div className="text-center mb-16">
                    <div className="gold-bar mx-auto" />
                    <h2 className="section-title">
                        Decades of <span className="gold-accent">Proven</span> Experience
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Numbers that reflect commitment, expertise, and results in every case.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="card-elevated text-center"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                isVisible={isVisible}
                            />
                            <p className="text-muted-foreground mt-2 text-sm font-medium uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
