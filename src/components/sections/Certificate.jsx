import React, { useState, useRef } from 'react';
import { Award, Calendar, CheckCircle, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../Animations/Fadein';

const Certificate = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const scrollContainerRef = useRef(null);

    const certificates = [
        {
            id: 1,
            title: "AI Fluency Certification",
            issuer: "Anthropic",
            date: "July 2026",
            image: "/AI fluency.jpg",
        },
        {
            id: 2,
            title: "Soft Skill Training",
            issuer: "OEC Pakistan",
            date: "July 2026",
            image: "/Softskill.jpg",
        },
        {
            id: 3,
            title: "Canva Design",
            issuer: "Simplilearn",
            date: "February 2026",
            image: "/Canva Certificate.jpg",
        },
        {
            id: 4,
            title: "AI BOOT CAMP",
            issuer: "KICS UET",
            date: "July 2026",
            image: "/20.jpg",
        },
        {
            id: 5,
            title: "Frontend Development",
            issuer: "OneRoadMap",
            date: "March 2026",
            image: "/Frontend Development.jpg",
        },
        {
            id: 6,
            title: "CodeAlpha",
            issuer: "CodeAlpha",
            date: "March 2026",
            image: "/codealpha.jpg",
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id='certificates' className='relative py-24 bg-gradient-to-b from-black via-black to-[#0a0f0a] overflow-hidden'>
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

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <FadeIn delay={0}>
                    <div className='text-center mb-16'>
                        <div className='inline-flex items-center gap-3 px-6 py-3 border border-primary/30 bg-primary/10 rounded-full mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default'>
                            <Award className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium tracking-wider uppercase'>
                                Certificates
                            </span>
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                            My <span className='text-primary'>Certificates</span>
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto rounded-full mb-4' />
                        <p className='text-lg text-white/60 max-w-2xl mx-auto leading-relaxed'>
                            Professional certifications that showcase my skills and expertise
                        </p>
                    </div>
                </FadeIn>

                {/* Horizontal Scroll Container */}
                <div className='relative'>
                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollLeft}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 p-3 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full hover:bg-black/80 hover:border-primary/30 transition-all duration-300 hover:scale-110'
                        aria-label='Scroll left'
                    >
                        <ChevronLeft className='w-5 h-5 text-white' />
                    </button>

                    <button
                        onClick={scrollRight}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 p-3 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full hover:bg-black/80 hover:border-primary/30 transition-all duration-300 hover:scale-110'
                        aria-label='Scroll right'
                    >
                        <ChevronRight className='w-5 h-5 text-white' />
                    </button>

                    {/* Scrollable Certificates */}
                    <div 
                        ref={scrollContainerRef}
                        className='overflow-x-auto scroll-smooth hide-scrollbar pb-4'
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        <div className='flex gap-8' style={{ width: 'max-content' }}>
                            {certificates.map((cert) => (
                                <div 
                                    key={cert.id} 
                                    className='group w-[320px] sm:w-[380px] flex-shrink-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 cursor-pointer'
                                    onClick={() => openLightbox(cert.image)}
                                >
                                    {/* Certificate Image */}
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title}
                                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
                                            <div className='p-4 bg-black/60 backdrop-blur-sm rounded-full border border-white/30'>
                                                <ZoomIn className='w-8 h-8 text-white' />
                                            </div>
                                        </div>
                                        
                                        {/* Verified Badge - Improved Visibility */}
                                        <div className='absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-primary/50 rounded-full shadow-lg shadow-black/50'>
                                            <CheckCircle className='w-3.5 h-3.5 text-primary' />
                                            <span className='text-[10px] text-primary font-bold uppercase tracking-wider'>Verified</span>
                                        </div>

                                        {/* Number Badge */}
                                        <div className='absolute top-4 left-4 w-8 h-8 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg shadow-black/50'>
                                            <span className='text-xs text-white/80 font-bold'>0{cert.id}</span>
                                        </div>
                                    </div>

                                    {/* Certificate Info */}
                                    <div className='p-6 space-y-2'>
                                        <h3 className='text-base font-semibold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2'>
                                            {cert.title}
                                        </h3>
                                        <p className='text-sm text-white/40'>
                                            {cert.issuer}
                                        </p>
                                        <div className='flex items-center gap-2 text-xs text-white/40'>
                                            <Calendar className='w-3.5 h-3.5' />
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='flex items-center justify-center gap-2 mt-8'>
                    <div className='w-2 h-2 bg-primary/40 rounded-full' />
                    <div className='w-4 h-2 bg-primary/60 rounded-full' />
                    <div className='w-2 h-2 bg-primary/20 rounded-full' />
                    <div className='w-2 h-2 bg-primary/20 rounded-full' />
                    <div className='w-2 h-2 bg-primary/20 rounded-full' />
                    <span className='text-xs text-white/30 ml-2'>Scroll →</span>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className='fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn'
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className='absolute top-4 right-4 p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300'
                    >
                        <X className='w-8 h-8' />
                    </button>
                    <div className='relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center'>
                        <img 
                            src={selectedImage} 
                            alt="Certificate"
                            className='max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl shadow-primary/20'
                        />
                    </div>
                </div>
            )}

            {/* Custom Animations */}
            <style >{`
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
                    animation: fadeIn 0.3s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
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

export default Certificate;
