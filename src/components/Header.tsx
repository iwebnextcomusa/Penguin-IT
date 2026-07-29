import React, { useState, useEffect } from 'react';
import { PenguinLogo } from './PenguinLogo';
import { Sun, Moon, Menu, X, PhoneCall, Shield, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleTheme,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-900/30 shadow-lg shadow-cyan-950/20 py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="focus:outline-none">
            <PenguinLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/50'
                      : isDarkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              id="theme-toggle-btn"
              aria-label="Toggle theme mode"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Support Badge */}
            <a
              href="mailto:support@penguinit.com"
              className={`hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono border transition duration-200 ${
                isDarkMode
                  ? 'bg-cyan-950/40 border-cyan-800/50 text-cyan-300 hover:bg-cyan-900/50'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>24/7 Hotline</span>
            </a>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="header-cta-btn"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle & theme toggle for small screens */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-cyan-400' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-btn"
              aria-label="Open navigation menu"
              className={`p-2 rounded-lg border transition ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b py-6 px-6 shadow-2xl animate-in slide-in-from-top duration-300 ${
            isDarkMode ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : isDarkMode
                    ? 'hover:bg-slate-900 text-slate-300'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-md shadow-cyan-500/20"
              >
                Get Started
              </a>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2">
                <span>Support Email:</span>
                <a href="mailto:support@penguinit.com" className="text-cyan-400 font-semibold underline">
                  support@penguinit.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
