import React, { useState, useRef, useEffect } from 'react';
import { projects, category } from "../../data/projects";
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../Animations/Fadein';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // reset carousel when category change
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex);
    };

    // Handle scroll event to update pagination dots
    const handleScroll = () => {
        if (scrollContainerRef.current && !isDragging) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3;
            const scrollPosition = container.scrollLeft;
            const newIndex = Math.round(scrollPosition / cardWidth);
            
            const maxIndex = Math.max(0, filteredProjects.length - 3);
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
                setCurrentIndex(newIndex);
            }
        }
    };

    // Add scroll event listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [filteredProjects.length, currentIndex]);

    // Update currentIndex when filteredProjects changes
    useEffect(() => {
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeCategory]);

    // Category Icon mapping
    const categoryIcons = {
        'All': Target,
        'Frontend Developement': Globe,
        'Full Stack Developement': Palette
    };

    return (
        <section id='projects' className='relative py-20 bg-black overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
                <div className='absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
                <div className='absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={0}>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <Briefcase className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium'>My work</span>
                        </div>
                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Featured Projects
                        </h2>
                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                            Showcasing my best work and achievement
                        </p>
                    </div>
                </FadeIn>

                {/* category filter */}
                <FadeIn delay={100}>
                    <div className='flex flex-wrap justify-center gap-3 mb-16'>
                        {category.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary/10 opacity-100'
                                    : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                                    }`}
                                />
                                <div className='relative flex items-center gap-2'>
                                    {React.createElement(categoryIcons[cat] || Target, { className: 'w-4 h-4' })}
                                    <span className='text-sm'>{cat}</span>
                                </div>

                                {activeCategory === cat && (
                                    <div className='absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10' />
                                )}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Project Carousel */}
                <FadeIn delay={200}>
                    <div className='relative'>
                        <div
                            ref={scrollContainerRef}
                            className='overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            onMouseDown={() => setIsDragging(true)}
                            onMouseUp={() => setIsDragging(false)}
                            onMouseLeave={() => setIsDragging(false)}
                            onTouchStart={() => setIsDragging(true)}
                            onTouchEnd={() => setIsDragging(false)}
                        >
                            <div className='flex gap-6 pb-4'>
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start'
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrow */}
                        {filteredProjects.length > 3 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className='flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                                    aria-label='Previous projects'
                                >
                                    <ChevronLeft className='w-6 h-6 text-white' />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= filteredProjects.length - 3}
                                    className='flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                                    aria-label='Next projects'
                                >
                                    <ChevronRight className='w-6 h-6 text-white' />
                                </button>
                            </>
                        )}

                        {/* Navigation dots - Ab scroll ke saath update honge */}
                        {filteredProjects.length > 3 && (
                            <div className='flex items-center justify-center gap-2 mt-8'>
                                {Array.from({ length: Math.max(0, filteredProjects.length - 2) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? 'bg-primary w-6 h-2'
                                            : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;