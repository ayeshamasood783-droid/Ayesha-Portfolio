import React, { useState, useEffect } from 'react';
import {skills} from "../../data/skills";
import * as Icons from "lucide-react";
import FadeIn from '../Animations/Fadein';

const Skills = () => {
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

  //categories skill
  const skillCategories = {
    'Frontend Developement': [
      skills.find (s => s.name === 'React.js'),
      skills.find (s => s.name === 'JavaScript'),
      skills.find (s => s.name === 'HTML'),
      skills.find (s => s.name === 'CSS'),
      skills.find (s => s.name === 'Tailwind CSS'),
    ].filter(Boolean),
    'Backend' : [
      skills.find (s => s.name === 'Python'),
      skills.find (s => s.name === 'MySQL'),
    ].filter(Boolean),
    'Tools & Others' : [
      skills.find (s => s.name === 'Git & Github'),
      skills.find (s => s.name === 'Visual Studio'),
      skills.find (s => s.name === 'Responsive Design'),
      skills.find (s => s.name === 'Vite'),
      skills.find (s => s.name === 'Technical Content Writing'),
    ].filter(Boolean)
  };

  //Get proficiency percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      'Expert' : 95,
      'Advanced' : 80,
      'Beginner' : 75
    };
    return levels [level] || 50 ;
  }

  //Get level color
  const getLevelColor = (level) => {
    const colors = {
      'Expert' : 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
      'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
      'Beginner': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
    };
    return colors [level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
  };

  return (
    <section id='skills' className='relative py-20 bg-black overflow-hidden'>
      {/* animate background gradient */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl'/>
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full opacity-50'/>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn delay={100}>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full mb-6'>
              <Icons.Sparkles className='w-4 h-4 text-primary'/>
              <span className='text-sm text-primary font-medium'>My Expertise</span>
            </div>
            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
              Skills & Technologies
            </h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              A comprehensive overview of my technical skills and proficiency level.
            </p>
          </div>
        </FadeIn>

        {/* skills category */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {Object.entries(skillCategories).map (([category,categorySkills], categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 100}>
              <div 
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#8DFF69]/30 transition-all duration-300 group outline-none cursor-pointer ${
                  isMobile ? 'focus:border-[#8DFF69]/30' : ''
                }`}
                tabIndex={isMobile ? 0 : -1}
              >
                <div className='flex items-center gap-3 mb-6 border-b border-white/10 pb-4'>
                  <div className='w-1 h-8 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full'></div>
                  <h3 className='text-xl font-medium text-white'>{category}</h3>
                </div>
              
                {/* skills list */}
                <div className='space-y-5'>
                  {categorySkills.map((skill,skillIndex) => {
                    const IconComponent = Icons[skill.icon] || Icons.Code2;
                    const proficiency = getProficiencyLevel(skill.level);

                    return(
                      <div key={skill.id} className='space-y-2'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <div className={`p-2 bg-[#8DFF69]/10 rounded-lg border border-[#8DFF69]/20 transition-all duration-300 ${
                              isMobile ? 'group-focus:bg-[#8DFF69]/20 group-focus:border-[#8DFF69]/30' : 'group-hover:bg-[#8DFF69]/20 group-hover:border-[#8DFF69]/30'
                            }`}>
                              <IconComponent className='w-4 h-4 text-primary'/>
                            </div>
                            <div className='flex items-center gap-3'>
                              <div className={`text-sm font-medium text-white transition-colors duration-300 ${
                                isMobile ? 'group-focus:text-[#8DFF69]' : 'group-hover:text-[#8DFF69]'
                              }`}>
                                {skill.name}
                              </div>
                              <div className='text-xs text-white/40'>{skill.experinece}</div>
                            </div>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                       
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                          <div
                            className='absolute top-0 left-0 h-full bg-gradient-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out'
                            style={{width : `${proficiency}%`}}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              
                {/* hover effect glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none ${
                  isMobile ? 'group-focus:from-primary/5 group-focus:to-primary/5' : 'group-hover:from-primary/5 group-hover:to-primary/5'
                }`}></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;