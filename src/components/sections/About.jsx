import React, { useState, useEffect } from 'react';
import { Download, Code2, Sparkles } from 'lucide-react';
import { SiReact, SiHtml5, SiTailwindcss, SiJavascript, SiCss, SiVite, SiGit, SiPython, SiMysql, SiGithub } from 'react-icons/si';
import { PERSONAL_INFO, ABOUT_STATS } from '../utlis/constants';
import FadeIn from '../Animations/Fadein';
import GlowGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    { name: "Html5", icons: SiHtml5 },
    { name: "CSS", icons: SiCss },
    { name: "Javascript", icons: SiJavascript },
    { name: "Python", icons: SiPython },
    { name: "MySQL", icons: SiMysql },
    { name: "React.js", icons: SiReact },
    { name: "Tailwind CSS", icons: SiTailwindcss },
    { name: "Vite", icons: SiVite },
    { name: "GitHub", icons: SiGithub },
    { name: "Git", icons: SiGit },
  ];

  // Handle card click - Info cards
  const handleCardClick = (cardId) => {
    if (isMobile) {
      setActiveCard(activeCard === cardId ? null : cardId);
    }
  };

  // Handle skill click
  const handleSkillClick = (index) => {
    if (isMobile) {
      setActiveSkill(activeSkill === index ? null : index);
    }
  };

  // Click outside handler - Effect hatane ke liye
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile) {
        // Agar click card ya skill ke bahar ho to effect hatado
        const isCard = e.target.closest('[data-card]');
        const isSkill = e.target.closest('[data-skill]');
        
        if (!isCard && !isSkill) {
          setActiveCard(null);
          setActiveSkill(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile]);

  return (
    <section id='about' className='relative py-20 bg-black overflow-hidden'>
      <GlowGradientBackground variant='about' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* main grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20'>
          {/* left column content */}
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <FadeIn delay={60}>
                <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                  <Code2 className='w-4 h-4 text-primary' />
                  <span className='text-sm text-primary font-medium'>
                    Full Stack Developer
                  </span>
                  <Sparkles className='w-4 h-4 text-primary' />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                  Crafting Digital Experience That Matters
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <div className='flex flex-col gap-4'>
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className='text-base text-white/70 leading-relaxed'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className='grid grid-cols-3 gap-8'>
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className='relative'>
                      <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full'></div>
                      <div className='text-3xl text-white font-normal mb-2 font-mono'>
                        {stat.value}
                      </div>
                      <p className='text-sm text-white/60 leading-snug'>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className='inline-flex items-center gap-3 bg-white hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'
                >
                  <Download className='w-5 h-5 group-hover:translate-y-0.5 group-active:translate-y-0.5 transition-transform duration-300' />
                  Download Resume
                </button>
              </FadeIn>
            </div>
          </div>

          {/* right content - info grid */}
          <FadeIn delay={200}>
            <div className='grid grid-cols-2 gap-4'>
              {/* Expertise card */}
              <div 
                data-card="expertise"
                className="col-span-2 relative group cursor-pointer"
                onClick={() => handleCardClick('expertise')}
              >
                <div className={`absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 rounded-2xl blur-xl transition-opacity duration-300 ${
                  (activeCard === 'expertise' && isMobile) ? 'opacity-75' : 'opacity-50 group-hover:opacity-75'
                }`}></div>
                <div className={`relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 h-full min-h-[140px] ${
                  (activeCard === 'expertise' && isMobile) ? 'border-primary/30' : 'hover:border-primary/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Code2 className='w-6 h-6 text-primary' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-white mb-2'>Expertise</h3>
                      <p className='text-sm text-white/70 leading-relaxed'>
                        Specialized in building scalable web applications with modern technologies and best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Code card */}
              <div 
                data-card="clean-code"
                className="relative group cursor-pointer"
                onClick={() => handleCardClick('clean-code')}
              >
                <div className={`absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 rounded-2xl blur-xl transition-opacity duration-300 ${
                  (activeCard === 'clean-code' && isMobile) ? 'opacity-75' : 'opacity-50 group-hover:opacity-75'
                }`}></div>
                <div className={`relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 h-full min-h-[180px] flex flex-col justify-center ${
                  (activeCard === 'clean-code' && isMobile) ? 'border-primary/30' : 'hover:border-primary/30'
                }`}>
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Sparkles className='w-5 h-5 text-primary' />
                  </div>
                  <h3 className='text-base font-semibold text-white mb-2'>Clean Code</h3>
                  <p className='text-sm text-white/70 leading-relaxed'>
                    Writing maintainable, testable code following SOLID principles & industry best practices.
                  </p>
                </div>
              </div>

              {/* Performance card */}
              <div 
                data-card="performance"
                className="relative group cursor-pointer"
                onClick={() => handleCardClick('performance')}
              >
                <div className={`absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 rounded-2xl blur-xl transition-opacity duration-300 ${
                  (activeCard === 'performance' && isMobile) ? 'opacity-75' : 'opacity-50 group-hover:opacity-75'
                }`}></div>
                <div className={`relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 h-full min-h-[180px] flex flex-col justify-center ${
                  (activeCard === 'performance' && isMobile) ? 'border-primary/30' : 'hover:border-primary/30'
                }`}>
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Download className='w-5 h-5 text-primary' />
                  </div>
                  <h3 className='text-base font-semibold text-white mb-2'>Performance</h3>
                  <p className='text-sm text-white/70 leading-relaxed'>
                    Optimizing for 90+ Lighthouse scores with lazy loading, code splitting & efficient state management.
                  </p>
                </div>
              </div>

              {/* Stats card */}
              <div 
                data-card="stats"
                className='col-span-2 relative group cursor-pointer'
                onClick={() => handleCardClick('stats')}
              >
                <div className={`absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 rounded-2xl blur-xl transition-opacity duration-300 ${
                  (activeCard === 'stats' && isMobile) ? 'opacity-75' : 'opacity-50 group-hover:opacity-75'
                }`}></div>
                <div className={`relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 h-full min-h-[120px] ${
                  (activeCard === 'stats' && isMobile) ? 'border-primary/30' : 'hover:border-primary/30'
                }`}>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-xs text-white/60">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-xs text-white/60">Support Available</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">Fast</div>
                      <div className="text-xs text-white/60">Delivery Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* skill grid section */}
        <FadeIn delay={500}>
          <div className='flex flex-col items-center gap-8'>
            <div className='text-center'>
              <h3 className='text-2xl font-normal text-white mb-2'>
                Tech Stack & Expertise
              </h3>
              <p className='text-sm text-white/60'>
                Technologies I work with to built amazing projects.
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-skill={index}
                  className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer ${
                    (activeSkill === index && isMobile) 
                      ? 'bg-white/10 border-primary/50 scale-105' 
                      : 'hover:bg-white/10 hover:border-primary/50 hover:scale-105'
                  }`}
                  onClick={() => handleSkillClick(index)}
                >
                  <skill.icons className='text-3xl text-primary' />
                  <div className='text-sm text-white/80 font-medium text-center'>
                    {skill.name}
                  </div>

                  <div className={`absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 rounded-2xl transition-all duration-300 ${
                    (activeSkill === index && isMobile) 
                      ? 'from-primary/10 to-primary/10' 
                      : 'hover:from-primary/10 hover:to-primary/10'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;