import {useState, useEffect} from 'react';
import { ChevronDown , ImportIcon, Star } from 'lucide-react';
import {SiReact ,SiHtml5 , SiTailwindcss , SiJavascript ,SiCss , SiVite,SiPython, SiMysql} from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../utlis/constants';
import { scrollToSection } from '../hooks/useScrollSpy';
import FadeIn from '../Animations/Fadein';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';


const Hero = () => {
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant='hero' />
      
      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
             {/* left column - content */}
             <div className='text-left'>
                <FadeIn delay={0}>
                  <div className='inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full hover:bg-linear-to-r hover:from-primary/20 hover:via-primary/25 hover:to-primary/30 active:bg-linear-to-r active:from-primary/20 active:via-primary/25 active:to-primary/30 transition-all duration-300'>
                     <Star className='w-4 h-4 text-white fill-white'/>
                     <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                      {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                     </span>
                  </div>
                </FadeIn>
                <FadeIn delay={100}>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight'>
                    I'm <b className='text-green-500 hover:text-green-400 focus:text-green-400 transition-colors duration-300'> Ayesha Masood</b> . Frontend Developer
                  </h1>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className='text-lg text-white/70 max-w-[550px] mb-8'>
                    Building mordern scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experience.
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`inline-flex items-center gap-0 mb-12 group outline-none ${
                      isMobile 
                        ? 'focus:scale-105' 
                        : 'hover:scale-105'
                    } transition-transform duration-300`}
                    tabIndex={isMobile ? 0 : -1}
                  >
                    <div className={`relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white transition-all duration-300 ${
                      isMobile 
                        ? 'focus:bg-green-600 focus:text-white' 
                        : 'hover:bg-green-600 hover:text-white'
                    }`}>Get in Touch</div>
                  </button>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                    {STATS.map((stat, index) => (
                      <div
                        key={index}
                        className="text-left border-r border-white/50 pr-10 last:border-r-0"
                      >
                        <div className="text-2xl font-medium text-primary mb-2 font-mono">
                          {stat.value}
                        </div>

                        <p className="text-sm text-white leading-snug">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
             </div>

             {/* right column -developer pic */}
             <FadeIn delay={200}>
              <div className='relative'>
                    <div className='relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[500px] ml-auto group'>
                      <div className='absolute inset-0 rounded-2xl overflow-hidden '>
                        <div className='absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl'></div>
                      </div>

                        {/* image container */}
                        <div className='relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]'>
                          <img src='/ayesha.png'
                               alt='developer alt work'
                               className='w-full h-full object-cover'/>
                        </div>

                        {/* Technologies logo */}
                        <div className='absolute bottom-6 left-6 z-20'>
                          <FadeIn delay={500}>
                            <div className={`flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 transition-all duration-300 outline-none ${
                              isMobile 
                                ? 'focus:border-primary/50 focus:bg-black/60' 
                                : 'hover:border-primary/50 hover:bg-black/60'
                            }`} tabIndex={isMobile ? 0 : -1}>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiHtml5 className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiCss className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiJavascript className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiPython className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiReact className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiTailwindcss className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiMysql className='w-full h-full text-primary'/>
                              </div>
                              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                isMobile 
                                  ? 'group-focus:scale-110' 
                                  : 'group-hover:scale-110'
                              }`}>
                                <SiVite className='w-full h-full text-primary'/>
                              </div>
                            </div>
                          </FadeIn>
                        </div>
                    </div>
              </div>
             </FadeIn>
          </div>
      </div>

      {/* Scroll Indicator */}
      <button
       onClick={() => scrollToSection('about')}
       className={`absolute bottom-8 left-[1/2] -translate-x-1/2 animate-bounce outline-none transition-transform duration-300 ${
         isMobile 
           ? 'focus:scale-125' 
           : 'hover:scale-125'
       }`}
       tabIndex={isMobile ? 0 : -1}
      >
        <ChevronDown className='w-8 h-8 text-primary'/>
      </button>

    </section>
  )
}

export default Hero