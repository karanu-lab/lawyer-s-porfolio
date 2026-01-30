/**
 * Testimonials carousel section
 * @module components/sections/TestimonialsSection
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TESTIMONIALS } from '@/constants';

/**
 * Client testimonials carousel with navigation
 * Features:
 * - Previous/Next navigation
 * - Dot indicators for direct navigation
 * - Smooth transitions between testimonials
 */
const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const current = TESTIMONIALS[currentIndex];

    return (
        <section
            id="testimonials"
            className="section-padding"
            style={{ background: 'var(--section-gradient)' }}
        >
            <div className="section-container">
                <div className="text-center mb-16">
                    <div className="gold-bar mx-auto" />
                    <h2 className="section-title">
                        Client <span className="gold-accent">Testimonials</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Hear from the businesses and individuals I've had the privilege to
                        represent.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="card-elevated relative">
                        <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/20" />

                        <div className="pt-12 pb-6 px-4 text-center">
                            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                                "{current.quote}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={current.image}
                                    alt={current.author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
                                />
                                <div className="text-left">
                                    <p className="font-semibold text-foreground">
                                        {current.author}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{current.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={prevTestimonial}
                                className="text-muted-foreground hover:text-foreground"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>

                            {/* Dot Indicators */}
                            <div className="flex gap-2">
                                {TESTIMONIALS.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                                ? 'bg-accent w-6'
                                                : 'bg-border hover:bg-muted-foreground'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={nextTestimonial}
                                className="text-muted-foreground hover:text-foreground"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
