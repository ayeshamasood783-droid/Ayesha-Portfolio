import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/footer';
import Certificate from './components/sections/Certificate';

const App = () => {
  return (
    <div className='min-h-screen'>
    <Navbar />

    <main>
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Certificate />
      <Contact />
    </main>

    <Footer />
    </div>
  );
};

export default App
