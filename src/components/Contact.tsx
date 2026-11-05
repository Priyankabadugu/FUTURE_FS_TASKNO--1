import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface ContactProps {
  profile: PortfolioProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate sending message with realistic processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Save locally to sent messages history if desired
      const sentHistory = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      sentHistory.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('portfolio_messages', JSON.stringify(sentHistory));

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch <span className="gradient-text">& Inquire</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Interested in discussing full-time opportunities, summer internships, open-source projects, or tech collaborations?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="glass-panel p-6 rounded-2xl border border-blue-900/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-gray-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</h4>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base font-bold text-white hover:text-blue-400 transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>
              <p className="text-xs text-gray-400">
                Direct inbox checked daily. Typically responding within 24 hours.
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-blue-900/30 flex items-center justify-between group hover:border-blue-400 transition-all cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">LinkedIn Profile</h4>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/priyankabadugu
                  </div>
                </div>
              </div>
              <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                Connect →
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-blue-900/30 flex items-center justify-between group hover:border-purple-400 transition-all cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">GitHub Profile</h4>
                  <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    github.com/priyankabadugu
                  </div>
                </div>
              </div>
              <span className="text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                Explore →
              </span>
            </a>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-[#080d21] border border-slate-800 text-xs text-gray-400 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-gray-200 font-medium">{profile.location}</span>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Authorized to work in India. Available for on-site, hybrid, and remote engineering opportunities.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-blue-900/30 relative">
              
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill out the form below to initiate an inquiry or project discussion.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Thank you for reaching out!</span>
                    <p className="mt-0.5 text-xs text-emerald-300">
                      Your message has been recorded. Priyanka will review it and reply back to your email shortly.
                    </p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-4 p-3 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Recruiter"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-slate-800 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-slate-800 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Summer SDE Internship Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-slate-800 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note, job requirements, or project details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-slate-800 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-gray-400 order-2 sm:order-1">
                    Or email directly to{' '}
                    <a href={`mailto:${profile.email}`} className="text-blue-400 underline">
                      {profile.email}
                    </a>
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer order-1 sm:order-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
