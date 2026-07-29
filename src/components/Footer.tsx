import React from 'react';
import { PenguinLogo } from './PenguinLogo';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t relative overflow-hidden ${
      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <PenguinLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Penguin IT provides reliable, innovative, and security-first managed IT infrastructure, Zero Trust cybersecurity, and 24/7 technical support for modern growing businesses.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About Us', 'Services', 'Industries', 'Why Choose Us', 'FAQ', 'Contact'].map((item) => {
                const href = '#' + item.toLowerCase().replace(/ /g, '-').replace('about-us', 'about').replace('why-choose-us', 'why-us');
                return (
                  <li key={item}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="text-slate-400 hover:text-cyan-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Services Scope
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Windows/Mac to Linux Switch & Setup ($199)</li>
              <li>Penguin Tech Support ($59/mo)</li>
              <li>Custom AI Setup ($299)</li>
              <li>Tech Partner ($199 - $299/mo)</li>
              <li>Automation & Reusable Workflows</li>
              <li>Zero-Data-Leak Privacy Engineering</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Contact NOC
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:support@penguinit.com" className="hover:underline font-mono text-cyan-400">
                  support@penguinit.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:5808267475" className="hover:underline text-amber-400 font-bold">580-826-7475</a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Text a plan number or questions to 580-826-7475</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-mono mt-2">
                NOC Status: 100% Operational (0 Active Incidents)
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Developed by iWebNext */}
      <div className="border-t border-slate-800/80 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          
          <div>
            © {new Date().getFullYear()} Penguin IT Inc. All rights reserved.
          </div>

          {/* Centered Footer Attribution as required */}
          <div className="text-center">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-bold inline-flex items-center gap-1">
              <span>iWebNext</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-cyan-400">Privacy Policy</a>
            <span>•</span>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-cyan-400">Terms of Service</a>
            <span>•</span>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-cyan-400">SLA Agreement</a>
          </div>

        </div>
      </div>

    </footer>
  );
};
