import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    // Apply dark class to document element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'industries', 'why-us', 'gallery', 'video-section', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Header */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Industries isDarkMode={isDarkMode} />
        <WhyChooseUs isDarkMode={isDarkMode} />
        <Gallery isDarkMode={isDarkMode} />
        <VideoSection isDarkMode={isDarkMode} />
        <Testimonials isDarkMode={isDarkMode} />
        <FAQ isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer with Developed by iWebNext */}
      <Footer isDarkMode={isDarkMode} />

      {/* Floating Interactive Controls */}
      <Chatbot isDarkMode={isDarkMode} />
      <ScrollToTop />
    </div>
  );
}
