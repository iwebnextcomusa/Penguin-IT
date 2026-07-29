import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PRICING_PLANS_DATA, CORE_GUARANTEES_DATA } from '../data/mockData';
import { PricingPlan } from '../types';
import {
  CheckCircle2,
  Phone,
  Shield,
  Users,
  Heart,
  TrendingUp,
  Cpu,
  Monitor,
  Headset,
  BrainCircuit,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  isDarkMode: boolean;
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', isHighlighted = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Dynamic light sheen effect based on cursor position
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (width === 0 || height === 0) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.03, z: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl border p-7 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md ${className}`}
    >
      {/* 3D Dynamic Ambient Glow Reflection */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: isHighlighted
            ? `radial-gradient(600px circle at ${sheenX} ${sheenY}, rgba(168, 85, 247, 0.25), transparent 80%)`
            : `radial-gradient(600px circle at ${sheenX} ${sheenY}, rgba(6, 182, 212, 0.2), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  const planIcons = [Monitor, Headset, BrainCircuit, Sparkles];
  const guaranteeIcons = [Shield, Users, Heart, TrendingUp];

  return (
    <section id="services" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100/70'}`}>
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4 shadow-sm shadow-cyan-950">
            <Cpu className="w-3.5 h-3.5" />
            <span>PenguinIT Membership & Service Plans</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Plans & Tech Services
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Hover over any plan card to inspect details. Transparent, straightforward pricing with no hidden surprises.
          </p>
        </div>

        {/* 4 Interactive 3D-Tilt Pricing Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 perspective-1000">
          {PRICING_PLANS_DATA.map((plan, idx) => {
            const IconComp = planIcons[idx] || Monitor;

            return (
              <TiltCard
                key={plan.id}
                isHighlighted={plan.highlighted}
                className={`group ${
                  plan.highlighted
                    ? 'bg-slate-900 border-purple-500/70 shadow-2xl shadow-purple-950/50 ring-1 ring-purple-500/50'
                    : isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/60 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-cyan-500 shadow-lg'
                }`}
              >
                {/* Plan Number & Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-xl font-mono font-bold text-sm flex items-center justify-center shadow-md ${
                    plan.planNumber === 1 ? 'bg-red-500 text-white' :
                    plan.planNumber === 2 ? 'bg-blue-600 text-white' :
                    plan.planNumber === 3 ? 'bg-emerald-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {plan.planNumber}
                  </span>

                  {plan.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider shadow-md animate-pulse">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`text-xl font-extrabold font-display mb-1 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display text-cyan-400">
                      {plan.price}
                    </span>
                    {plan.priceSubtext && (
                      <span className="text-xs font-mono text-slate-400">
                        {plan.priceSubtext}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {plan.subtitle}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Process Tag */}
                  {plan.processTag && (
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-amber-400 mb-4 font-semibold text-center shadow-inner">
                      {plan.processTag}
                    </div>
                  )}

                  {/* Early Bonus Banner */}
                  {plan.earlyBonus && (
                    <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-[11px] text-purple-300 mb-4 font-medium leading-relaxed shadow-sm">
                      {plan.earlyBonus}
                    </div>
                  )}
                </div>

                {/* Footnote & Action CTA */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  {plan.note && (
                    <p className="text-[10px] font-mono text-slate-400 italic mb-4">
                      {plan.note}
                    </p>
                  )}

                  <a
                    href="tel:5808267475"
                    className={`w-full py-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase flex items-center justify-center gap-2 border transition duration-200 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:brightness-110'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Select Plan {plan.planNumber}</span>
                  </a>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* 4 Core Guarantees Banner Grid */}
        <div className="bento-card p-8 sm:p-12 border border-cyan-500/30 bg-slate-900/90 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold font-display text-white mb-2">
              Our Core Commitments
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Built around ethics, user sovereignty, and long-term tech empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_GUARANTEES_DATA.map((guarantee, idx) => {
              const IconComp = guaranteeIcons[idx] || Shield;
              return (
                <TiltCard
                  key={guarantee.id}
                  className="bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 text-center flex flex-col items-center"
                >
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 inline-flex">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-extrabold font-mono text-white mb-2 uppercase tracking-wide">
                    {guarantee.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {guarantee.description}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};


