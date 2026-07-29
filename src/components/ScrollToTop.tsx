import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setIsVisible(currentScroll > 300);
      
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="scroll-to-top-btn"
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900 border border-cyan-500/50 text-cyan-400 shadow-2xl hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group flex items-center justify-center"
    >
      {/* Circular Progress Ring */}
      <svg className="absolute w-12 h-12 pointer-events-none -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-slate-800 fill-none"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-cyan-400 fill-none transition-all duration-100"
          strokeWidth="2.5"
          strokeDasharray="125.6"
          strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
        />
      </svg>

      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};
