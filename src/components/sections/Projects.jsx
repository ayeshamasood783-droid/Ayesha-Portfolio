import React, { useState } from 'react';
import { projects, category } from "../../data/projects";
import { Briefcase, Target, Globe, Palette } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../Animations/Fadein';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Handle category change
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

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

                {/* Category Filter */}
                <FadeIn delay={100}>
                    <div className='flex flex-wrap justify-center gap-3 mb-16'>
                        {category.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'bg-primary/10 opacity-100'
                                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                                }`} />
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

                {/* Projects Grid - 3 per row */}
                <FadeIn delay={200}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;
