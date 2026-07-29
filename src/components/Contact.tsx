import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Managed IT Services',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your IT requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: 'Managed IT Services',
          message: ''
        });
      } else {
        setSubmitError(data.error || 'Failed to submit contact request.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setSubmitError('Unable to connect to Penguin IT server. Please try again or email support@penguinit.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 relative ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>24/7 Consultation & Support</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get in Touch with Penguin IT
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Ready to upgrade your technology infrastructure or eliminate cyber vulnerabilities? Our team responds within 1 business hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className={`p-8 rounded-3xl border shadow-xl space-y-6 ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-xl font-bold font-display ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Support Email</div>
                  <a
                    href="mailto:support@penguinit.com"
                    className="text-base font-bold text-cyan-400 hover:underline font-mono"
                  >
                    support@penguinit.com
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">24/7 Ticketing & Escalations</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Direct Hotline & Texting</div>
                  <a
                    href="tel:5808267475"
                    className={`text-base font-bold font-mono text-amber-400 hover:underline`}
                  >
                    580-826-7475
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Text a plan number or ask questions anytime</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Global Headquarters</div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    100 Tech Plaza, Suite 400<br />San Francisco, CA 94105
                  </p>
                </div>
              </div>

              {/* SLA Response Callout */}
              <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center gap-3 text-xs text-cyan-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Guaranteed SLA response under 15 minutes for active enterprise subscribers.</span>
              </div>
            </div>

            {/* Google Maps Placeholder Frame */}
            <div className={`rounded-3xl border overflow-hidden shadow-xl h-64 relative ${
              isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-200'
            }`}>
              <iframe
                title="Penguin IT Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864871088734!2d-122.39867968468205!3d37.78917297975631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77031%3A0x5e378c3f4e3c54a8!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl ${
              isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold font-display mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Request an IT Audit or Consultation
              </h3>
              <p className="text-xs text-slate-400 mb-8 font-mono">
                Fill out the form below and an engineer will contact you promptly.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-display">Thank You!</h4>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    Your request has been routed to our IT solutions team. We will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center gap-3 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-400 mt-1 font-mono">{errors.name}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-400 mt-1 font-mono">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                      Primary IT Need / Plan Selection
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="Plan 1: Windows/Mac to Linux Switch & Setup ($199)">Plan 1: Windows/Mac to Linux Switch & Setup ($199)</option>
                      <option value="Plan 2: Penguin Tech Support ($59/mo)">Plan 2: Penguin Tech Support ($59/mo)</option>
                      <option value="Plan 3: Custom AI Setup ($299)">Plan 3: Custom AI Setup ($299)</option>
                      <option value="Plan 4: Tech Partner ($199/mo - $299/mo)">Plan 4: Tech Partner ($199/mo - $299/mo)</option>
                      <option value="General IT Consultation">General IT Consultation & Questions</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current IT infrastructure, user count, or specific security needs..."
                      className={`w-full px-4 py-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-cyan-500 transition ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-red-400 mt-1 font-mono">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono">Routing to NOC...</span>
                    ) : (
                      <>
                        <span>Submit IT Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
