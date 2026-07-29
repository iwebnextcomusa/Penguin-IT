import React from 'react';
import { INDUSTRIES_DATA } from '../data/mockData';
import { Building2, Activity, GraduationCap, ShoppingBag, Factory, CheckCircle2 } from 'lucide-react';

interface IndustriesProps {
  isDarkMode: boolean;
}

export const Industries: React.FC<IndustriesProps> = ({ isDarkMode }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Factory':
        return <Factory className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="industries" className={`py-24 relative ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tailored Industry Expertise</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Specialized Solutions for Every Sector
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Industry compliance, data privacy, and specialized software requirements demand custom-tailored IT strategies. Discover how Penguin IT empowers your domain.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-950/20'
                  : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-slate-300/50'
              }`}
            >
              <div>
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(ind.iconName)}
                </div>

                <h3 className={`text-xl font-bold font-display mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {ind.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {ind.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">Key Focus Areas:</span>
                  {ind.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Banner */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Impact Metric:</span>
                <span className="text-xs font-mono font-bold text-cyan-400">{ind.caseMetric}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
