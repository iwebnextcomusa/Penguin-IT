import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

interface FAQProps {
  isDarkMode: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ isDarkMode }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = ['All', 'General', 'Security', 'Cloud', 'Billing'];

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className={`py-24 relative ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100/70'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Support Questions</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Find quick, transparent answers about our response SLAs, onboarding timelines, Zero Trust security, and billing.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search IT questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                    : isDarkMode
                    ? 'bg-slate-900 text-slate-400 hover:text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion FAQ Items List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
              <p className="text-slate-400 text-sm">No matching questions found. Try searching for another term or ask our 24/7 AI Chatbot!</p>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isDarkMode
                      ? isOpen
                        ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/20'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      : isOpen
                      ? 'bg-white border-cyan-500 shadow-md'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`text-base font-bold font-display ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${
                      isDarkMode ? 'text-slate-300 border-slate-800/80' : 'text-slate-600 border-slate-100'
                    }`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
