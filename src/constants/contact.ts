/**
 * Contact information
 * @module constants/contact
 */

import { Mail, MapPin, Phone } from 'lucide-react';
import type { ContactInfo } from '@/types';

/**
 * Contact information items
 */
export const CONTACT_INFO: ContactInfo[] = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (555) 234-5678',
        href: 'tel:+15552345678',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'contact@alexandermitchell.law',
        href: 'mailto:contact@alexandermitchell.law',
    },
    {
        icon: MapPin,
        label: 'Office',
        value: '123 Legal Plaza, Suite 400\nNew York, NY 10001',
    },
];
