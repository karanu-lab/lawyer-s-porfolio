/**
 * Contact section with form and contact information
 * @module components/sections/ContactSection
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks';
import { CONTACT_INFO } from '@/constants';
import { siteConfig } from '@/config';
import type { ContactFormData } from '@/types';

/**
 * Contact section with contact info and consultation form
 * Features:
 * - Contact information cards
 * - Form validation
 * - Toast notifications
 * - Office hours display
 */
const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast({
            title: 'Message Sent',
            description:
                "Thank you for reaching out. We'll get back to you within 24 hours.",
        });

        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="section-padding bg-background">
            <div className="section-container">
                <div className="text-center mb-16">
                    <div className="gold-bar mx-auto" />
                    <h2 className="section-title">
                        Get in <span className="gold-accent">Touch</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Ready to discuss your legal needs? Schedule a confidential
                        consultation today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-2 space-y-8">
                        {CONTACT_INFO.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-foreground hover:text-accent transition-colors font-medium"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-foreground font-medium whitespace-pre-line">
                                            {item.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Office Hours */}
                        <div className="pt-6 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-4">Office Hours</p>
                            <p className="text-foreground">{siteConfig.officeHours.regular}</p>
                            <p className="text-muted-foreground text-sm mt-1">
                                {siteConfig.officeHours.additional}
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="card-elevated space-y-6">
                            {/* Name and Email */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="bg-background"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        className="bg-background"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Phone Number
                                </label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="bg-background"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    How Can I Help?
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Briefly describe your legal matter..."
                                    rows={5}
                                    required
                                    className="bg-background resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            {/* Legal Notice */}
                            <p className="text-xs text-muted-foreground text-center">
                                Your information is kept strictly confidential in accordance with
                                attorney-client privilege.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
