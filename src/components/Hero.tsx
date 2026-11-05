import React from 'react';
import { ArrowDown, Download, Eye, Github, Linkedin, Mail, Code, Terminal, Sparkles, MapPin } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface HeroProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onDownloadResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-700/20 via-blue-600/15 to-indigo-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.25) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-medium shadow-sm shadow-blue-900/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for 2025/2026 Internships & SDE Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-indigo-400 font-mono-code text-sm sm:text-base">
                <Terminal className="w-4 h-4" />
                <span>const developer = &quot;Priyanka Badugu&quot;;</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{' '}
                <span className="gradient-text">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-200/90 tracking-wide">
                {profile.title}
              </p>
              <div className="inline-block px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
                {profile.subTitle}
              </div>
            </div>

            {/* Short Narrative Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profile.shortBio}
            </p>

            {/* Tech Stack Pills */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs text-gray-400 font-mono-code mr-1">Core Stack:</span>
              {['React.js', 'TypeScript', 'Node.js', 'Express', 'Python', 'Tailwind CSS', 'MongoDB', 'SQL'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#0d162d] border border-blue-800/40 text-blue-300 font-medium hover:border-purple-500/60 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Two Main Requested Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={onDownloadResume}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-purple-500/40 text-purple-200 font-semibold text-sm shadow-md hover:border-purple-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={onOpenResume}
                  title="View Resume on Screen"
                  className="inline-flex items-center justify-center p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-blue-500/40 text-blue-300 hover:text-white transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Hyderabad, India</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-gray-300 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-blue-400 hover:text-blue-300 border border-slate-800 hover:border-blue-500/50 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-purple-400 hover:text-purple-300 border border-slate-800 hover:border-purple-500/50 transition-all"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {profile.socials.leetcode && (
                  <a
                    href={profile.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-amber-400 hover:text-amber-300 border border-slate-800 hover:border-amber-500/50 transition-all font-mono-code text-xs font-bold"
                    title="LeetCode Profile"
                  >
                    LC
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Photo with Glowing Frame */}
          <div className="flex-1 flex justify-center items-center relative">
            
            {/* Outer Glowing Gradient Halo Rings */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-2xl opacity-70 animate-pulse pointer-events-none" />

            <div className="relative z-10 w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl p-2 bg-gradient-to-b from-blue-500/40 via-purple-600/30 to-slate-900 border border-blue-400/30 shadow-2xl shadow-indigo-950/80">
              
              {/* Photo Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950 relative group">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle bottom gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />

                {/* Overlay Name & Department Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-blue-500/30 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm leading-none">{profile.name}</h3>
                    <p className="text-[11px] text-blue-300 mt-1">3rd-Year B.Tech CSE (Data Science)</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    <Code className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Floating Accreditations / Badges */}
              <div className="absolute -top-4 -right-3 px-3 py-1.5 rounded-xl bg-[#0b1329] border border-purple-500/40 text-purple-300 text-xs font-semibold shadow-lg shadow-purple-950/50 flex items-center gap-1.5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>CGPA 8.85 / 10</span>
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#0b1329] border border-blue-500/40 text-blue-300 text-xs font-semibold shadow-lg shadow-blue-950/50 flex items-center gap-1.5 backdrop-blur-md">
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span>15+ Projects Built</span>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Stat Counters Bar */}
        <div className="mt-14 pt-8 border-t border-blue-950/60 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl border border-blue-900/20 text-center hover:border-purple-500/40 transition-all hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <span className="gradient-text">{stat.value}</span>
              </div>
              <div className="text-xs font-semibold text-gray-200 mt-1">{stat.label}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
