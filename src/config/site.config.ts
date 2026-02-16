/**
 * Site configuration
 * @module config/site
 */

export const siteConfig = {
    name: 'Alexander Mitchell',
    title: 'Alexander Mitchell - Corporate & Business Law',
    description: 'Delivering strategic legal counsel with integrity, precision, and unwavering commitment to your business success.',
    author: 'Alexander Mitchell',
    tagline: 'Corporate & Business Law',

    /** Office hours information */
    officeHours: {
        regular: 'Monday - Friday: 9:00 AM - 6:00 PM',
        additional: 'Evening and weekend appointments available upon request',
    },

    /** Scroll threshold for navbar state change */
    scrollThreshold: 50,

    /** Animation configuration */
    animation: {
        counterDuration: 2000,
        counterSteps: 60,
        intersectionThreshold: 0.3,
    },
} as const;
