/**
 * Practice areas data
 * @module constants/practiceAreas
 */

import {
    Building2,
    FileText,
    Handshake,
    Shield,
    TrendingUp,
    Users2,
} from 'lucide-react';
import type { PracticeArea } from '@/types';

/**
 * Legal practice areas offered
 */
export const PRACTICE_AREAS: PracticeArea[] = [
    {
        icon: Building2,
        title: 'Mergers & Acquisitions',
        description:
            'Strategic guidance through complex M&A transactions, due diligence, and deal structuring.',
    },
    {
        icon: FileText,
        title: 'Contract Negotiation',
        description:
            'Drafting and negotiating commercial agreements that protect your interests.',
    },
    {
        icon: Handshake,
        title: 'Business Formation',
        description:
            'Entity selection, incorporation, and organizational structure for new ventures.',
    },
    {
        icon: Shield,
        title: 'Corporate Governance',
        description:
            'Board advisory, compliance programs, and corporate policy development.',
    },
    {
        icon: TrendingUp,
        title: 'Securities & Finance',
        description:
            'Capital raising, securities compliance, and investment structuring.',
    },
    {
        icon: Users2,
        title: 'Partnership Disputes',
        description:
            'Resolution of shareholder and partnership conflicts through negotiation or litigation.',
    },
];
