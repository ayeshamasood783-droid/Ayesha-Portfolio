import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeft, ChevronRight, Quote, Star, ChevronsRight, User, Briefcase } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import FadeIn from '../Animations/Fadein';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const scrollContainerRef = useRef(null);

    // Detect if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
            });
        }
    };

    const nextTestimonial = () => {
        const newIndex = (currentIndex + 1) % testimonials.length;
        scrollToIndex(newIndex);
    };

    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        scrollToIndex(newIndex);
    };

    const testimonialStats = [
        { value: '3x', label: 'Fast Delivery' },
        { value: '95%', label: 'Client Satisfaction' },
        { value: '100%', label: 'On-time Delivery' },
        { value: '5★', label: 'Average Rating' },
    ];

    return (
        <section id='testimonials' className='relative py-24 bg-gradient-to-b from-black via-black to-[#0a0f0a] overflow-hidden'>
            {/* Animated Background */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse' />
                <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000' />
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

            <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <FadeIn delay={0}>
                    <div className='text-center mb-16'>
                        <div className='inline-flex items-center gap-3 px-6 py-3 border border-primary/30 bg-primary/10 rounded-full mb-6 hover:bg-primary/20 active:bg-primary/20 transition-all duration-300 hover:scale-105 active:scale-105 cursor-default'>
                            <Quote className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium tracking-wider uppercase'>
                                Testimonials
                            </span>
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                            Trusted By <span className='text-primary'>Forward-Thinking</span> Teams
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto rounded-full mb-4' />
                        <p className='text-base text-white/60 max-w-2xl mx-auto leading-relaxed'>
                            Empowering clients with design-driven, high-quality solutions built for success.
                        </p>
                    </div>
                </FadeIn>

                {/* Testimonials Carousel */}
                <FadeIn delay={100}>
                    <div className='relative max-w-4xl mx-auto'>
                        <div 
                            ref={scrollContainerRef}
                            className='overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar'
                            style={{ 
                                scrollSnapType: 'x mandatory',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            <div className='flex gap-6 pb-4'>
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className='w-full shrink-0 snap-start'
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div 
                                            className={`group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 outline-none cursor-pointer ${
                                                isMobile 
                                                    ? 'focus:border-primary/40 focus:shadow-2xl focus:shadow-primary/10 focus:scale-[1.01]' 
                                                    : 'hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.01]'
                                            }`}
                                            tabIndex={isMobile ? 0 : -1}
                                        >
                                            <div className='flex flex-col md:flex-row gap-8 items-start'>
                                                {/* Left Side - Profile Section */}
                                                <div className='flex-shrink-0 flex flex-col items-center md:items-start gap-3'>
                                                    {/* Profile Image */}
                                                    <div className='relative'>
                                                        <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-3 border-primary/30 transition-all duration-300 shadow-lg shadow-primary/10 ${
                                                            isMobile 
                                                                ? 'group-focus:border-primary/60' 
                                                                : 'group-hover:border-primary/60'
                                                        }`}>
                                                            <img
                                                                src={testimonial.image}
                                                                alt={testimonial.name}
                                                                className={`w-full h-full object-cover transition-transform duration-500 ${
                                                                    isMobile 
                                                                        ? 'group-focus:scale-110' 
                                                                        : 'group-hover:scale-110'
                                                                }`}
                                                            />
                                                        </div>
                                                        {/* Quote mark on image */}
                                                        <div className='absolute -bottom-2 -right-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full p-2 shadow-lg shadow-primary/20'>
                                                            <Quote className='w-3.5 h-3.5 text-primary' />
                                                        </div>
                                                    </div>

                                                    {/* Name & Role */}
                                                    <div className='text-center md:text-left'>
                                                        <h4 className={`text-base font-semibold text-white transition-colors duration-300 ${
                                                            isMobile 
                                                                ? 'group-focus:text-primary' 
                                                                : 'group-hover:text-primary'
                                                        }`}>
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className='text-xs text-white/50 flex items-center gap-1.5 justify-center md:justify-start'>
                                                            <Briefcase className='w-3.5 h-3.5' />
                                                            {testimonial.role}, {testimonial.company || testimonial.Company}
                                                        </p>
                                                    </div>

                                                    {/* Rating Stars */}
                                                    <div className='flex items-center gap-0.5'>
                                                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                            <Star key={i} className='w-3.5 h-3.5 fill-primary text-primary' />
                                                        ))}
                                                    </div>

                                                    {/* Stat Badge */}
                                                    {testimonialStats[index] && (
                                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full transition-all duration-300 ${
                                                            isMobile 
                                                                ? 'group-focus:bg-primary/20' 
                                                                : 'hover:bg-primary/20'
                                                        }`}>
                                                            <span className='text-sm font-bold text-primary'>
                                                                {testimonialStats[index].value}
                                                            </span>
                                                            <span className='text-[10px] text-white/60 font-medium'>
                                                                {testimonialStats[index].label}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Right Side - Content */}
                                                <div className='flex-1 space-y-3'>
                                                    {/* Quote Icon */}
                                                    <div className='flex items-center gap-2'>
                                                        <Quote className='w-6 h-6 text-primary/20' />
                                                        <div className='flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent' />
                                                    </div>

                                                    {/* Testimonial Text */}
                                                    <p className='text-sm md:text-base text-white/80 leading-relaxed font-light italic'>
                                                        "{testimonial.quote || testimonial.Quote}"
                                                    </p>

                                                    {/* Divider */}
                                                    <div className='w-12 h-1 bg-gradient-to-r from-primary to-primary/20 rounded-full' />

                                                    {/* Meta Info */}
                                                    <div className='flex flex-wrap items-center gap-3 pt-1'>
                                                        <div className='flex items-center gap-1.5 text-xs text-white/40'>
                                                            <User className='w-3.5 h-3.5' />
                                                            <span>Verified Client</span>
                                                        </div>
                                                        <div className='w-px h-3 bg-white/10' />
                                                        <div className='flex items-center gap-1 text-xs text-white/40'>
                                                            <span>⭐</span>
                                                            <span>{testimonial.rating || 5}.0/5.0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className='flex items-center justify-center gap-2.5 mt-10'>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToIndex(index)}
                                    className={`transition-all duration-500 rounded-full ${
                                        index === currentIndex
                                            ? 'bg-primary w-10 h-2.5 shadow-lg shadow-primary/30'
                                            : 'bg-white/20 w-2.5 h-2.5 hover:bg-white/40 hover:scale-125'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/80 hover:border-primary/30 active:bg-black/80 active:border-primary/30 transition-all duration-300 hover:scale-110 active:scale-110 shadow-lg shadow-black/30'
                            aria-label="Previous testimonial"
                        >
                            <ChevronsLeft className='w-4 h-4 text-white/80 hover:text-white active:text-white' />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/80 hover:border-primary/30 active:bg-black/80 active:border-primary/30 transition-all duration-300 hover:scale-110 active:scale-110 shadow-lg shadow-black/30'
                            aria-label="Next testimonial"
                        >
                            <ChevronsRight className='w-4 h-4 text-white/80 hover:text-white active:text-white' />
                        </button>
                    </div>
                </FadeIn>
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
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;