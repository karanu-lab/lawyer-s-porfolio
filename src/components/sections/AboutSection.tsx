/**
 * About section with profile and key highlights
 * @module components/sections/AboutSection
 */

import { HIGHLIGHTS } from '@/constants';

/**
 * About section showcasing attorney profile, experience, and key highlights
 * Features:
 * - Professional profile image
 * - Biography and credentials
 * - Three key highlight cards
 */
const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-background">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Profile Image */}
                    <div className="relative animate-slide-in-left opacity-0">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/profile.jpg"
                                alt="Alexander Mitchell - Corporate Lawyer"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-accent/10 -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl border-2 border-accent/30 -z-10" />
                    </div>

                    {/* Content */}
                    <div className="animate-slide-in-right opacity-0">
                        <div className="gold-bar" />
                        <h2 className="section-title">
                            A Legacy of <span className="gold-accent">Excellence</span> in Law
                        </h2>
                        <p className="section-subtitle mb-6">
                            With over 20 years of experience in corporate and business law, I
                            have dedicated my career to helping companies navigate complex legal
                            challenges with confidence and clarity.
                        </p>
                        <p className="text-muted-foreground mb-10">
                            My approach combines rigorous legal analysis with practical business
                            insight. Whether you're structuring a major transaction, resolving a
                            dispute, or seeking strategic counsel, I provide the focused
                            attention and expertise your matter deserves.
                        </p>

                        {/* Highlights Grid */}
                        <div className="space-y-6">
                            {HIGHLIGHTS.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
