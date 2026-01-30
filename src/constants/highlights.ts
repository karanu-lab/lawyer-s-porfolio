/**
 * About section highlights
 * @module constants/highlights
 */

import { Award, Scale, Users } from 'lucide-react';
import type { Highlight } from '@/types';

/**
 * Key highlights displayed in About section
 */
export const HIGHLIGHTS: Highlight[] = [
    {
        icon: Scale,
        title: 'Trusted Counsel',
        description:
            'Providing sound legal advice rooted in decades of courtroom experience.',
    },
    {
        icon: Award,
        title: 'Proven Results',
        description:
            'A track record of favorable outcomes in complex business matters.',
    },
    {
        icon: Users,
        title: 'Client-Focused',
        description:
            'Your goals and concerns are always the priority of our practice.',
    },
];
