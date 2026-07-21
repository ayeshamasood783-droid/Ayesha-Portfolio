import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, MessageSquare, User, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utlis/constants';
import FadeIn from '../Animations/Fadein';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');

    // Detect if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
        if (submitError) setSubmitError('');
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            await emailjs.send(
                "service_pw47z5i",
                "template_lm2nlkk",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "Lg2pDiaH5bkz313Ca"
            );

            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error(error);
            setSubmitError("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { 
            icon: Mail, 
            label: 'Email', 
            value: PERSONAL_INFO?.email || 'ayeshamasood783@gmail.com',
            link: `mailto:${PERSONAL_INFO?.email || 'ayeshamasood783@gmail.com'}`
        },
        { 
            icon: MapPin, 
            label: 'Location', 
            value: PERSONAL_INFO?.location || 'Lahore, Pakistan',
            link: '#'
        },
        { 
            icon: Phone, 
            label: 'Phone', 
            value: PERSONAL_INFO?.phone || '+92 322 0214581',
            link: `tel:${PERSONAL_INFO?.phone || '+923220214581'}`
        },
    ];

    const socialLinks = [
        { 
            icon: FaGithub, 
            label: 'GitHub', 
            url: 'https://github.com/ayeshamasood783-droid',
            color: 'hover:text-white focus:text-white'
        },
        { 
            icon: FaLinkedin, 
            label: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/ayesha-masood-905b2037a',
            color: 'hover:text-[#0A66C2] focus:text-[#0A66C2]'
        },
        { 
            icon: FaTwitter, 
            label: 'Twitter', 
            url: 'https://x.com/AyeshaMasood783',
            color: 'hover:text-[#1DA1F2] focus:text-[#1DA1F2]'
        },
        { 
            icon: FaInstagram, 
            label: 'Instagram', 
            url: 'https://www.instagram.com/glaxy_coder?utm_source=qr&igsh=MWRhaWgwcmlzb3F5Nw==',
            color: 'hover:text-[#E4405F] focus:text-[#E4405F]'
        },
        { 
            icon: FaFacebook, 
            label: 'Facebook', 
            url: 'https://www.facebook.com/profile.php?id=61572274587554',
            color: 'hover:text-[#0A66C2] focus:text-[#0A66C2]'
        },
    ];

    return (
        <section id='contact' className='relative min-h-screen py-24 bg-gradient-to-b from-black via-black to-[#0a0f0a] overflow-hidden'>
            {/* Animated Background */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse' />
                <div className='absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-500' />
                
                {/* Floating Particles */}
                <div className='absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float' />
                <div className='absolute top-40 right-20 w-3 h-3 bg-primary/10 rounded-full animate-float delay-1000' />
                <div className='absolute bottom-40 left-20 w-2 h-2 bg-primary/20 rounded-full animate-float delay-500' />
                <div className='absolute bottom-20 right-10 w-3 h-3 bg-primary/10 rounded-full animate-float delay-1500' />
            </div>

            {/* Grid Pattern */}
            <div 
                className='absolute inset-0 opacity-[0.02]'
                style={{
                    backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <FadeIn delay={0}>
                    <div className='text-center mb-20'>
                        <div className='inline-flex items-center gap-3 px-6 py-3 border border-primary/30 bg-primary/10 rounded-full mb-8 hover:bg-primary/20 active:bg-primary/20 transition-all duration-300 hover:scale-105 active:scale-105 cursor-default'>
                            <span className='relative'>
                                <span className='absolute inset-0 animate-ping bg-primary/20 rounded-full' />
                                <MessageSquare className='w-4 h-4 text-primary relative' />
                            </span>
                            <span className='text-sm text-primary font-medium tracking-wider uppercase'>
                                Let's Connect
                            </span>
                        </div>
                        <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
                            Get In <span className='text-primary'>Touch</span>
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto rounded-full mb-6' />
                        <p className='text-lg text-white/60 max-w-2xl mx-auto leading-relaxed'>
                            Have a question or want to work together? I'd love to hear from you!
                        </p>
                    </div>
                </FadeIn>

                {/* Main Content */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
                    {/* Left Side - Contact Info */}
                    <div className='lg:col-span-5'>
                        <FadeIn delay={100}>
                            <div className='space-y-8'>
                                <div>
                                    <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                                        <span className='w-1 h-10 bg-gradient-to-b from-primary to-primary/20 rounded-full' />
                                        Contact Info
                                    </h3>
                                    <p className='text-white/50 leading-relaxed text-sm'>
                                        I am always open to discussing new projects. Feel free to reach out.
                                    </p>
                                </div>

                                {/* Contact Cards */}
                                <div className='space-y-4'>
                                    {contactInfo.map((info, index) => {
                                        const Icon = info.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={info.link}
                                                className={`group flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 cursor-pointer shadow-2xl shadow-primary/10 outline-none ${
                                                    isMobile 
                                                        ? 'focus:border-primary/50 focus:bg-white/10' 
                                                        : 'hover:border-primary/50 hover:bg-white/10'
                                                }`}
                                                tabIndex={isMobile ? 0 : -1}
                                            >
                                                <div className='relative'>
                                                    <div className={`absolute inset-0 bg-primary/20 rounded-xl blur-xl transition-opacity duration-500 ${
                                                        isMobile 
                                                            ? 'group-focus:opacity-100' 
                                                            : 'opacity-0 group-hover:opacity-100'
                                                    }`} />
                                                    <div className={`relative p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl transition-transform duration-500 ${
                                                        isMobile 
                                                            ? 'group-focus:scale-110' 
                                                            : 'group-hover:scale-110'
                                                    }`}>
                                                        <Icon className='w-5 h-5 text-primary' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='text-xs text-white/40 font-medium uppercase tracking-wider'>
                                                        {info.label}
                                                    </p>
                                                    <p className={`text-white font-medium transition-colors duration-300 ${
                                                        isMobile 
                                                            ? 'group-focus:text-primary' 
                                                            : 'group-hover:text-primary'
                                                    }`}>
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h4 className='text-sm font-medium text-white/40 mb-4 uppercase tracking-wider'>Follow Me</h4>
                                    <div className='flex items-center gap-3 flex-wrap'>
                                        {socialLinks.map((link, index) => {
                                            const Icon = link.icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className={`p-3.5 bg-white/5 border border-white/10 rounded-xl transition-all duration-500 group outline-none ${
                                                        isMobile 
                                                            ? 'focus:bg-white/10 focus:border-primary/30 focus:scale-110' 
                                                            : 'hover:bg-white/10 hover:border-primary/30 hover:scale-110'
                                                    } ${link.color}`}
                                                    tabIndex={isMobile ? 0 : -1}
                                                    aria-label={link.label}
                                                >
                                                    <Icon className={`w-5 h-5 text-white/40 transition-colors duration-300 ${
                                                        isMobile 
                                                            ? 'group-focus:text-current' 
                                                            : 'group-hover:text-current'
                                                    }`} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Side - Form */}
                    <div className='lg:col-span-7'>
                        <FadeIn delay={200}>
                            <div className={`bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 shadow-2xl shadow-primary/5 outline-none ${
                                isMobile 
                                    ? 'focus-within:border-primary/30' 
                                    : 'hover:border-primary/30'
                            }`} tabIndex={isMobile ? 0 : -1}>
                                <div className='flex items-center gap-3 mb-8'>
                                    <div className='w-1 h-10 bg-gradient-to-b from-primary to-primary/20 rounded-full' />
                                    <h3 className='text-2xl font-bold text-white'>Send a Message</h3>
                                </div>

                                <form 
                                    onSubmit={handleSubmit}
                                    className='space-y-6'
                                >
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                        <div className='group'>
                                            <label htmlFor='name' className='block text-sm font-medium text-white/50 mb-2 flex items-center gap-2'>
                                                <User className='w-3.5 h-3.5' />
                                                Your Name <span className='text-primary'>*</span>
                                            </label>
                                            <div className='relative'>
                                                <input
                                                    type='text'
                                                    id='name'
                                                    name='name'
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-5 py-4 bg-white/[0.04] border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white placeholder-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm ${
                                                        isMobile 
                                                            ? 'group-focus:border-white/20' 
                                                            : 'group-hover:border-white/20'
                                                    }`}
                                                    placeholder='Ayesha Masood'
                                                    tabIndex={isMobile ? 0 : -1}
                                                />
                                                {errors.name && (
                                                    <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                                                        <AlertCircle className='w-5 h-5 text-red-400' />
                                                    </div>
                                                )}
                                            </div>
                                            {errors.name && (
                                                <p className='text-xs text-red-400 mt-2 flex items-center gap-1.5'>
                                                    <AlertCircle className='w-3 h-3' />
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className='group'>
                                            <label htmlFor='email' className='block text-sm font-medium text-white/50 mb-2 flex items-center gap-2'>
                                                <Mail className='w-3.5 h-3.5' />
                                                Email <span className='text-primary'>*</span>
                                            </label>
                                            <div className='relative'>
                                                <input
                                                    type='email'
                                                    id='email'
                                                    name='email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-5 py-4 bg-white/[0.04] border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white placeholder-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm ${
                                                        isMobile 
                                                            ? 'group-focus:border-white/20' 
                                                            : 'group-hover:border-white/20'
                                                    }`}
                                                    placeholder='ayesha@example.com'
                                                    tabIndex={isMobile ? 0 : -1}
                                                />
                                                {errors.email && (
                                                    <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                                                        <AlertCircle className='w-5 h-5 text-red-400' />
                                                    </div>
                                                )}
                                            </div>
                                            {errors.email && (
                                                <p className='text-xs text-red-400 mt-2 flex items-center gap-1.5'>
                                                    <AlertCircle className='w-3 h-3' />
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className='group'>
                                        <label htmlFor='message' className='block text-sm font-medium text-white/50 mb-2 flex items-center gap-2'>
                                            <MessageSquare className='w-3.5 h-3.5' />
                                            Message <span className='text-primary'>*</span>
                                        </label>
                                        <div className='relative'>
                                            <textarea
                                                id='message'
                                                name='message'
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className={`w-full px-5 py-4 bg-white/[0.04] border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white placeholder-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-sm ${
                                                    isMobile 
                                                        ? 'group-focus:border-white/20' 
                                                        : 'group-hover:border-white/20'
                                                }`}
                                                placeholder='Tell me about your project...'
                                                tabIndex={isMobile ? 0 : -1}
                                            />
                                            {errors.message && (
                                                <div className='absolute right-4 top-4'>
                                                    <AlertCircle className='w-5 h-5 text-red-400' />
                                                </div>
                                            )}
                                        </div>
                                        {errors.message && (
                                            <p className='text-xs text-red-400 mt-2 flex items-center gap-1.5'>
                                                <AlertCircle className='w-3 h-3' />
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {submitError && (
                                        <div className='flex items-center gap-3 text-red-400 text-sm p-4 bg-red-400/10 border border-red-400/20 rounded-2xl'>
                                            <AlertCircle className='w-5 h-5 flex-shrink-0' />
                                            <span>{submitError}</span>
                                        </div>
                                    )}

                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className={`w-full relative group/btn px-6 py-4 bg-gradient-to-r from-primary/40 to-primary/20 border border-primary/30 rounded-2xl text-white font-medium transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden outline-none ${
                                            isMobile 
                                                ? 'focus:shadow-2xl focus:shadow-primary/30 focus:scale-[1.02]' 
                                                : 'hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02]'
                                        }`}
                                        tabIndex={isMobile ? 0 : -1}
                                    >
                                        <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] group-focus/btn:translate-x-[100%] transition-transform duration-1000' />
                                        
                                        {isSubmitting ? (
                                            <div className='flex items-center justify-center gap-3'>
                                                <div className='w-5 h-5 border-2 border-white/30 border-t-primary rounded-full animate-spin' />
                                                <span>Sending...</span>
                                            </div>
                                        ) : isSubmitted ? (
                                            <div className='flex items-center justify-center gap-2'>
                                                <CheckCircle className='w-5 h-5' />
                                                <span>Message Sent!</span>
                                            </div>
                                        ) : (
                                            <div className='flex items-center justify-center gap-3'>
                                                <Send className='w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-focus/btn:translate-x-1 group-focus/btn:-translate-y-1 transition-transform duration-300' />
                                                <span>Send Message</span>
                                                <span className='text-white/40 text-sm'>→</span>
                                            </div>
                                        )}
                                    </button>

                                    {isSubmitted && (
                                        <div className='flex items-center gap-3 text-primary text-sm p-4 bg-primary/10 border border-primary/20 rounded-2xl animate-fadeIn'>
                                            <CheckCircle className='w-5 h-5 flex-shrink-0' />
                                            <span>Thank you for your message! I'll get back to you soon.</span>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .delay-1000 { animation-delay: 1s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-1500 { animation-delay: 1.5s; }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

        </section>
    );
};

export default Contact;