import React from 'react';
import { Mail, MapPin, Heart, Phone, ArrowUp, Code, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../utlis/constants';
import { scrollToSection } from '../hooks/useScrollSpy';
import FadeIn from '../Animations/Fadein';

const footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Social Linkss
    const socialLinks = [
        { icon: FaGithub, label: 'GitHub', url: SOCIAL_LINKS?.github || 'https://github.com/ayeshamasood783-droid' },
        { icon: FaLinkedin, label: 'LinkedIn', url: SOCIAL_LINKS?.linkedin || 'www.linkedin.com/in/ayesha-masood-905b2037a' },
        { icon: FaTwitter, label: 'Twitter', url: SOCIAL_LINKS?.twitter || 'https://x.com/AyeshaMasood783' },
        { icon: FaInstagram, label: 'Instagram', url: SOCIAL_LINKS?.instagram || 'https://www.instagram.com/glaxy_coder?utm_source=qr&igsh=MWRhaWgwcmlzb3F5Nw==' },
        { icon: FaFacebook, label: 'Facebook', url: SOCIAL_LINKS?.facebook || 'https://www.facebook.com/profile.php?id=61572274587554' },
    ];

    // Quick Links
    const quickLinks = NAV_LINKS || [
        { id:'about',label:'About'},
        { id:'skills',label:'Skills'},
        { id:'projects',label:'Projects'},
        { id:'services',label:'Services'},
        { id:'contact',value :'Contact'}
    ];

    return (
        <footer className='relative bg-gradient-to-b from-black via-black to-[#0a0f0a] border-t border-white/5 overflow-hidden'>
            {/* Background Glow */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl' />
                <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl' />
                <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Main Footer Content */}
                <div className='py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {/* Brand Section */}
                        <div className='lg:col-span-1'>
                            <FadeIn delay={0}>
                                <div className='space-y-4'>
                                    <div className='flex items-center gap-2'>
                                        <Code className='w-8 h-8 text-primary' />
                                        <span className='text-2xl font-bold text-white'>
                                            {PERSONAL_INFO?.name || 'Your Name'}
                                        </span>
                                    </div>
                                    <p className='text-white/50 text-sm leading-relaxed'>
                                        Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies.
                                    </p>
                                    <div className='flex items-center gap-4 pt-2'>
                                        {socialLinks.map((link, index) => {
                                            const Icon = link.icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='text-white/30 hover:text-primary transition-all duration-300 hover:scale-110'
                                                    aria-label={link.label}
                                                >
                                                    <Icon className='w-5 h-5' />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <FadeIn delay={100}>
                                <h3 className='text-sm font-semibold text-white/40 uppercase tracking-wider mb-4'>
                                    Quick Links
                                </h3>
                                <ul className='space-y-3'>
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => scrollToSection(link.id)}
                                                className='text-white/50 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block'
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <FadeIn delay={200}>
                                <h3 className='text-sm font-semibold text-white/40 uppercase tracking-wider mb-4'>
                                    Contact Info
                                </h3>
                                <ul className='space-y-3'>
                                    <li className='flex items-center gap-3 text-white/50 text-sm'>
                                        <Mail className='w-4 h-4 text-primary flex-shrink-0' />
                                        <span>{PERSONAL_INFO?.email || 'ayeshamasood783@gmail.com'}</span>
                                    </li>
                                    <li className='flex items-center gap-3 text-white/50 text-sm'>
                                        <MapPin className='w-4 h-4 text-primary flex-shrink-0' />
                                        <span>{PERSONAL_INFO?.location || 'Lahore , Pakistan'}</span>
                                    </li>
                                    <li className='flex items-center gap-3 text-white/50 text-sm'>
                                        <Phone className='w-4 h-4 text-primary flex-shrink-0' />
                                        <span>{PERSONAL_INFO?.phone || '+92 322 0214581'}</span>
                                    </li>
                                </ul>
                            </FadeIn>
                        </div>

                        {/* Newsletter / CTA */}
                        <div>
                            <FadeIn delay={300}>
                                <h3 className='text-sm font-semibold text-white/40 uppercase tracking-wider mb-4'>
                                    Let's Connect
                                </h3>
                                <p className='text-white/50 text-sm leading-relaxed mb-4'>
                                    Have a project in mind? Let's work together!
                                </p>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className='group inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/30 rounded-xl text-white font-medium hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 text-sm'
                                >
                                    <Sparkles className='w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300' />
                                    Get in Touch
                                    <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                                </button>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-white/5 py-6'>
                    <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                        <div className='flex items-center gap-1 text-white/30 text-sm'>
                            <span>© {currentYear}</span>
                            <span>{PERSONAL_INFO?.name || 'Your Name'}</span>
                            <span>•</span>
                            <span>All rights reserved</span>
                        </div>

                        <div className='flex items-center gap-2 text-white/30 text-sm'>
                            <span>Made with</span>
                            <Heart className='w-4 h-4 text-primary animate-pulse' />
                            <span>using React & Tailwind</span>
                        </div>

                        {/* Scroll to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className='p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110 group'
                            aria-label='Scroll to top'
                        >
                            <ArrowUp className='w-4 h-4 text-white/40 group-hover:text-primary transition-colors duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;