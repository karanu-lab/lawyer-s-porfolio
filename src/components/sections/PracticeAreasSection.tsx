/**
 * Practice areas section showcasing legal services
 * @module components/sections/PracticeAreasSection
 */

import { PRACTICE_AREAS } from '@/constants';

/**
 * Display grid of practice areas with icons and descriptions
 * Features:
 * - Responsive grid layout
 * - Icon-based visual hierarchy
 * - Hover effects on cards
 */
const PracticeAreasSection = () => {
    return (
        <section id="practice" className="section-padding bg-background">
            <div className="section-container">
                <div className="text-center mb-16">
                    <div className="gold-bar mx-auto" />
                    <h2 className="section-title">
                        Areas of <span className="gold-accent">Practice</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Comprehensive legal services tailored to meet the unique needs of
                        businesses at every stage of growth.
                    </p>
                </div>

                {/* Practice Areas Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRACTICE_AREAS.map((area, index) => (
                        <div
                            key={index}
                            className="group card-elevated border border-border hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                                <area.icon className="w-7 h-7 text-accent" />
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                                {area.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreasSection;
