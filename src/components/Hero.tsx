import React from 'react';
import { ArrowRight, Phone, AlertTriangle, RefreshCw, HelpCircle, MessageSquare, Wrench, FileCode, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';
import { PAIN_POINTS_DATA, LOOP_STEPS_DATA } from '../data/mockData';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const painPointIcons = {
    AlertTriangle: AlertTriangle,
    RefreshCw: RefreshCw,
    HelpCircle: HelpCircle
  };

  const loopIcons = [MessageSquare, Wrench, FileCode, TrendingUp, ShieldCheck];

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden"
    >
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

        {/* The Penguin IT Loop Section */}
        <div className="bento-card p-8 sm:p-12 relative overflow-hidden border border-cyan-500/30">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
              The <span className="text-cyan-400">PenguinIT</span> Loop
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              How our repeatable workflow turns single tech fixes into permanent assets for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {LOOP_STEPS_DATA.map((step, idx) => {
              const IconComponent = loopIcons[idx] || MessageSquare;
              return (
                <div
                  key={step.stepNumber}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-start relative group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      Step {step.stepNumber}
                    </span>
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-base font-extrabold font-display text-white mb-1 tracking-wide">
                    {step.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

