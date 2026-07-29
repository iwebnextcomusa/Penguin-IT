import React, { useState, useRef } from 'react';
import { ArrowRight, Phone, AlertTriangle, RefreshCw, HelpCircle, Cpu, Volume2, VolumeX } from 'lucide-react';
import { PAIN_POINTS_DATA } from '../data/mockData';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const painPointIcons = {
    AlertTriangle: AlertTriangle,
    RefreshCw: RefreshCw,
    HelpCircle: HelpCircle
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-60 filter brightness-100 contrast-105 scale-105"
        >
          <source
            src="https://g0064uyv8qiaww4b.public.blob.vercel-storage.com/Penguin_IT_video_OS_Switch_202607292149.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay gradients for crisp text readability */}
        <div className={`absolute inset-0 ${
          isDarkMode
            ? 'bg-gradient-to-b from-slate-950/60 via-slate-950/45 to-slate-950/85'
            : 'bg-gradient-to-b from-slate-900/40 via-slate-950/50 to-slate-950/75'
        }`} />
      </div>

      {/* Video Mute / Unmute Floating Control */}
      <button
        onClick={toggleMute}
        type="button"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 hover:text-cyan-300 shadow-xl shadow-slate-950/80 backdrop-blur-md transition-all duration-200 cursor-pointer hover:border-cyan-400 hover:scale-105 group"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span className="hidden sm:inline">Unmute Video</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="hidden sm:inline">Mute Video</span>
          </>
        )}
      </button>

      {/* High-tech Background Ambient Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-6 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>PenguinIT • OS Switch, AI, Automation & Everyday Support</span>
          </div>

          {/* Headline */}
          <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display leading-[1.08] mb-6 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Penguin{' '}
            <span className="text-amber-400 font-black tracking-normal">IT ON YOUR SIDE.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            OS Switch, AI, automation, and everyday tech support designed to liberate you from repetitive tech frustrations.
          </p>

          {/* CTA Buttons & Hotline Text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => handleScroll('#services')}
              id="hero-primary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore Plans & Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:5808267475"
              id="hero-secondary-cta"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 border ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:border-cyan-500 hover:bg-slate-800'
                  : 'bg-white border-slate-300 text-slate-800 hover:border-cyan-600 hover:bg-slate-50'
              }`}
            >
              <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Text or Call: 580-826-7475</span>
            </a>
          </div>

        </div>

        {/* 3 Pain Point Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PAIN_POINTS_DATA.map((pain) => {
            const IconComp = painPointIcons[pain.iconName as keyof typeof painPointIcons] || AlertTriangle;
            const borderColors = {
              amber: 'border-amber-500/40 hover:border-amber-400 bg-amber-950/20 text-amber-400',
              cyan: 'border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/20 text-cyan-400',
              rose: 'border-rose-500/40 hover:border-rose-400 bg-rose-950/20 text-rose-400'
            };

            return (
              <div
                key={pain.id}
                className={`bento-card p-8 flex flex-col justify-between transition-all duration-300 border ${borderColors[pain.accentColor]}`}
              >
                <div>
                  <div className={`p-3 rounded-2xl w-fit mb-5 ${
                    pain.accentColor === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                    pain.accentColor === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                    'bg-rose-500/10 text-rose-400'
                  }`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold font-display mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pain.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {pain.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

