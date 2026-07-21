import React, { useState, useEffect } from 'react';
import { services } from '../../data/services';
import * as Icons from 'lucide-react';
import { Wrench } from 'lucide-react';
import FadeIn from '../Animations/Fadein';

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id='services' className='relative py-20 bg-black overflow-hidden'>
      {/* Background gradients */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full opacity-50' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl' />
      </div>

      {/* Grid background pattern */}
      <div 
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <FadeIn delay={0}>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full mb-6'>
              <Wrench className='w-4 h-4 text-primary' />
              <span className='text-sm text-primary font-medium tracking-wider uppercase'>What I Offer</span>
            </div>
            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto'>
              Built for Innovation. Designed for Results
            </h2>
            <p className='text-lg text-white/60 max-w-xl mx-auto'>
              Comprehensive solution to transform your ideas into exceptional digital experiences.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid - All services */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div 
                  className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 group hover:border-primary/30 hover:transform hover:scale-[1.02] outline-none cursor-pointer ${
                    isMobile ? 'focus:border-primary/30 focus:scale-[1.02]' : ''
                  }`}
                  tabIndex={isMobile ? 0 : -1}
                >
                  {/* Icon */}
                  <div className='mb-5'>
                    <div className={`inline-flex p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 ${
                      isMobile ? 'group-focus:bg-primary/20' : ''
                    }`}>
                      <IconComponent className='w-6 h-6 text-primary' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='space-y-3'>
                    <h3 className={`text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300 ${
                      isMobile ? 'group-focus:text-primary' : ''
                    }`}>
                      {service.title}
                    </h3>
                    <p className='text-sm text-white/70 leading-relaxed'>
                      {service.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none ${
                    isMobile ? 'group-focus:opacity-100' : ''
                  }`} style={{
                    background: 'linear-gradient(135deg, rgba(141,255,105,0.2), transparent 50%, rgba(141,255,105,0.05))',
                    borderRadius: '1rem'
                  }} />
                
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;