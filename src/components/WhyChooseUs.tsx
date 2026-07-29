import React from 'react';
import { Award, Zap, Headphones, Shield, Cpu, Smile, Check, X } from 'lucide-react';

interface WhyChooseUsProps {
  isDarkMode: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ isDarkMode }) => {
  const differentiators = [
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: 'Certified Professionals',
      desc: 'Our team holds top industry credentials including CISSP, AWS Certified Solutions Architect, Microsoft 365 Enterprise Administrator, and Cisco CCNA.'
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Fast Response SLA',
      desc: 'Guaranteed 15-minute SLA for critical helpdesk tickets. We solve issues rapidly so your employees stay focused on productive work.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-cyan-400" />,
      title: '24/7/365 NOC Support',
      desc: 'Round-the-clock proactive monitoring and automated remediation before system glitches escalate into costly business downtime.'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Secure Zero Trust Architecture',
      desc: 'Multi-layered cybersecurity, Managed Detection & Response (MDR), and strict identity verification integrated into every network layer.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Scalable Infrastructure',
      desc: 'Cloud-native and hybrid environments designed to scale instantly as your company opens new branches, hires staff, or expands globally.'
    },
    {
      icon: <Smile className="w-6 h-6 text-cyan-400" />,
      title: '98%+ Client Satisfaction',
      desc: 'Transparent flat-rate pricing, dedicated vCIO strategic guidance, and zero hidden fees produce lasting multi-year client partnerships.'
    }
  ];

  const comparisonRows = [
    { feature: 'Helpdesk Response Time SLA', penguin: '< 15 Minutes', traditional: '4 to 24 Hours' },
    { feature: '24/7 Proactive Security Monitoring', penguin: 'Included (24/7/365 NOC)', traditional: 'Extra Cost or None' },
    { feature: 'Zero Trust Cybersecurity Stack', penguin: 'Built-in Standard', traditional: 'Basic Antivirus Only' },
    { feature: 'Dedicated vCIO Strategy & Audits', penguin: 'Quarterly Reviews Included', traditional: 'Unpredictable Hourly Billing' },
    { feature: 'Immutable Cloud Backup Testing', penguin: 'Daily Automated Audits', traditional: 'Manual / Untested' },
    { feature: 'Flat-Rate Transparent Subscription', penguin: '100% Predictable Monthly', traditional: 'Hidden Surcharges' }
  ];

  return (
    <section id="why-us" className={`py-24 relative ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100/60'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>The Penguin IT Advantage</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Modern Businesses Choose Penguin IT
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We replace unpredictable break-fix IT friction with proactive enterprise engineering, speed, and absolute clarity.
          </p>
        </div>

        {/* 6 Key Differentiators Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-950/20'
                  : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-slate-300/50'
              }`}
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                {diff.icon}
              </div>
              <h3 className={`text-xl font-bold font-display mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {diff.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: Penguin IT vs Traditional Vendors */}
        <div className={`rounded-3xl border overflow-hidden p-6 sm:p-8 shadow-2xl ${
          isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="mb-8 text-center sm:text-left">
            <h3 className={`text-2xl font-bold font-display ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Penguin IT vs Traditional IT Vendors
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              See how our proactive managed model outperforms legacy break-fix IT providers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-mono text-slate-400 uppercase">
                  <th className="pb-4 font-semibold">Service Requirement</th>
                  <th className="pb-4 font-semibold text-cyan-400">Penguin IT Managed</th>
                  <th className="pb-4 font-semibold text-slate-500">Traditional Break-Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-800/30 transition">
                    <td className={`py-4 font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {row.feature}
                    </td>
                    <td className="py-4 font-semibold text-emerald-400 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.penguin}</span>
                    </td>
                    <td className="py-4 text-slate-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
