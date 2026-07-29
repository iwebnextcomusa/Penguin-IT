import React from 'react';
import { Target, Compass, Award, Users, ShieldCheck, Zap } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Empowering Digital Transformation</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About PenguinIT
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Founded on the core principles of speed, resilience, and user sovereignty, PenguinIT is a full-service technology partner dedicated to helping modern individuals and enterprises navigate complex tech challenges.
          </p>
        </div>

        {/* Company Overview & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Company Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`text-2xl font-bold font-display ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Bridging the Gap Between Enterprise Tech & Operational Speed
            </h3>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              In an era where cyber threats evolve hourly and system downtime costs thousands per minute, businesses cannot settle for reactive IT support. Penguin IT brings proactive 24/7 engineering, Zero Trust cybersecurity frameworks, and scalable cloud management directly to growing organizations.
            </p>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Whether you are upgrading legacy infrastructure, enforcing compliance regulations, or adopting AI-powered cloud tools, our certified engineers become a seamless extension of your team.
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl border bg-slate-900/40 border-slate-800">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Security-First Culture</h4>
                  <p className="text-xs text-slate-400 mt-1">Zero Trust policies embedded in every single workflow and device.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border bg-slate-900/40 border-slate-800">
                <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Rapid SLA Response</h4>
                  <p className="text-xs text-slate-400 mt-1">Under 15-minute guaranteed response time for urgent issues.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metric Counter Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl border bg-slate-900/80 border-slate-800 shadow-xl text-center">
              <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                99.99%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">System Uptime SLA</div>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-900/80 border-slate-800 shadow-xl text-center">
              <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                &lt; 15m
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Helpdesk Response</div>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-900/80 border-slate-800 shadow-xl text-center">
              <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                500+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Enterprise Clients</div>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-900/80 border-slate-800 shadow-xl text-center">
              <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                24/7/365
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Active NOC Monitoring</div>
            </div>

          </div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className={`p-8 rounded-2xl border transition duration-300 relative overflow-hidden group ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40' : 'bg-white border-slate-200 hover:border-cyan-500'
          }`}>
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold font-display mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Mission
            </h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              To deliver reliable, secure, and frictionless technology infrastructure that allows businesses to innovate without fear of downtime or cyber threats.
            </p>
          </div>

          {/* Vision */}
          <div className={`p-8 rounded-2xl border transition duration-300 relative overflow-hidden group ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40' : 'bg-white border-slate-200 hover:border-cyan-500'
          }`}>
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold font-display mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Vision
            </h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              To be the premier trusted IT partner globally, recognized for engineering excellence, rapid human support, and pioneering Zero Trust cloud architecture.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
