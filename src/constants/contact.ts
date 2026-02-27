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
        value: '+254 703431423',
        href: 'tel:+254703431423',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'collinskaranu13@gmail.com',
        href: 'mailto:collinskaranu13@gmail.com',
    },
    {
        icon: MapPin,
        label: 'Office',
        value: 'Moi Avenue,Mtihani House\nParklands,NBO 10100',
    },
];
