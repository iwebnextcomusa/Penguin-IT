import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className={`py-24 relative ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Trusted Enterprise Client Voice</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            What Our Partners Say
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Read authentic reviews from CTOs, IT Directors, and Founders who rely on Penguin IT for daily operations.
          </p>
        </div>

        {/* Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className={`p-8 sm:p-12 rounded-3xl border shadow-2xl relative overflow-hidden transition-all duration-500 ${
            isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            
            {/* Background Accent Quote Icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-cyan-500/10 pointer-events-none" />

            {/* Stars Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Content */}
            <blockquote className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 italic ${
              isDarkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              "{current.content}"
            </blockquote>

            {/* Client Info Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/60 shadow-md"
              />
              <div>
                <h3 className={`text-base font-bold font-display ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {current.name}
                </h3>
                <p className="text-xs text-cyan-400 font-mono font-semibold">
                  {current.role} • {current.company}
                </p>
              </div>
            </div>

          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-slate-950 transition"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-slate-950 transition"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
