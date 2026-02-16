/**
 * Type definitions for the portfolio application
 * @module types
 */

import { LucideIcon } from 'lucide-react';

/**
 * Navigation link item
 */
export interface NavigationLink {
    /** Anchor href (e.g., '#about') */
    href: string;
    /** Display label */
    label: string;
}

/**
 * Practice area information
 */
export interface PracticeArea {
    /** Lucide icon component */
    icon: LucideIcon;
    /** Practice area title */
    title: string;
    /** Detailed description */
    description: string;
}

/**
 * Highlight/feature item for About section
 */
export interface Highlight {
    /** Lucide icon component */
    icon: LucideIcon;
    /** Highlight title */
    title: string;
    /** Detailed description */
    description: string;
}

/**
 * Client testimonial
 */
export interface Testimonial {
    /** Testimonial quote */
    quote: string;
    /** Author's full name */
    author: string;
    /** Author's title */
    title: string;
    /** Author's profile image URL */
    image: string;
}

/**
 * Statistics counter item
 */
export interface Stat {
    /** Numeric value to display */
    value: number;
    /** Suffix symbol (e.g., '+', '%') */
    suffix: string;
    /** Descriptive label */
    label: string;
}

/**
 * Contact information item
 */
export interface ContactInfo {
    /** Lucide icon component */
    icon: LucideIcon;
    /** Contact type label */
    label: string;
    /** Contact value/text */
    value: string;
    /** Optional href for clickable items */
    href?: string;
}

/**
 * Contact form data structure
 */
export interface ContactFormData {
    /** Full name */
    name: string;
    /** Email address */
    email: string;
    /** Phone number */
    phone: string;
    /** Message content */
    message: string;
}
