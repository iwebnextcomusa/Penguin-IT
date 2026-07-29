import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/mockData';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  isDarkMode: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ isDarkMode }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <section id="gallery" className={`py-24 relative ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Infrastructure Media Gallery</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Behind Penguin IT Infrastructure
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Take an insider look at our 24/7 Security Operations Center (SOC), high-density data rack deployments, and certified engineering labs.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative h-80 rounded-2xl overflow-hidden border border-slate-800/80 cursor-pointer shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/60"
            >
              {/* Image with Lazy Loading */}
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/60 text-cyan-400 border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-base font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <img
              src={GALLERY_IMAGES[activeLightboxIndex].url}
              alt={GALLERY_IMAGES[activeLightboxIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl border border-cyan-500/30 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white font-display">
                {GALLERY_IMAGES[activeLightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {GALLERY_IMAGES[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
