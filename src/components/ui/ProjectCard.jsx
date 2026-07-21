import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrices, demoUrl, githubUrl, category } = project;
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px se chhota mobile
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile click handler - sirf mobile par kaam kare
  const handleCardClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <div 
      className={`
        bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden 
        transition-all duration-300 group 
        hover:border-primary/30 hover:transform hover:scale-[1.02]
        ${isActive && isMobile ? 'border-primary/30 transform scale-[1.02]' : ''}
      `}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className='relative overflow-hidden aspect-video'>
        <img
          src={image}
          alt={title}
          className={`
            w-full h-full object-cover transition-transform duration-500
            group-hover:scale-110
            ${isActive && isMobile ? 'scale-110' : ''}
          `}
        />

        {/* Overlay with links */}
        <div className={`
          absolute inset-0 bg-black/50 transition-opacity duration-300 
          flex items-center justify-center gap-3 md:gap-4
          group-hover:opacity-100
          ${isActive && isMobile ? 'opacity-100' : 'opacity-0'}
        `}>
          {demoUrl && (
            <a
              href={demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`
                p-2 md:p-3 bg-primary/20 backdrop-blur-sm rounded-full 
                border border-primary/30 transition-all duration-300
                hover:bg-primary/30 hover:scale-110
                ${isActive && isMobile ? 'bg-primary/30 scale-110' : ''}
              `}
              title='View Demo'
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className='w-4 h-4 md:w-5 md:h-5 text-white' />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`
                p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full 
                border border-white/20 transition-all duration-300
                hover:bg-white/20 hover:scale-110
                ${isActive && isMobile ? 'bg-white/20 scale-110' : ''}
              `}
              title='View Code'
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className='w-4 h-4 md:w-5 md:h-5 text-white' />
            </a>
          )}
        </div>

        {/* Category Badge */}
        {category && (
          <div className='absolute top-2 left-2 md:top-3 md:left-3'>
            <span className='px-2 py-0.5 md:px-3 md:py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-[10px] md:text-xs text-primary font-medium'>
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-4 md:p-6 space-y-3 md:space-y-4'>
        <div>
          <h3 className={`
            text-lg md:text-xl font-semibold text-white mb-1 md:mb-2 
            transition-colors duration-300
            group-hover:text-primary
            ${isActive && isMobile ? 'text-primary' : ''}
          `}>
            {title}
          </h3>
          <p className='text-xs md:text-sm text-white/70 leading-relaxed line-clamp-2'>
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className='flex flex-wrap gap-1.5 md:gap-2'>
          {technologies && technologies.map((tech, index) => (
            <span
              key={index}
              className={`
                px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs 
                text-primary bg-primary/10 border border-primary/20 rounded-lg 
                transition-all duration-200
                hover:bg-primary/20 hover:border-primary/30 hover:text-primary
                ${isActive && isMobile ? 'bg-primary/20 border-primary/30' : ''}
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrices && (
          <div className='flex items-center gap-1.5 md:gap-2 pt-2 border-t border-white/10'>
            <TrendingUp className='w-3 h-3 md:w-4 md:h-4 text-primary' />
            <p className='text-[10px] md:text-xs text-white/60'>{metrices}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;