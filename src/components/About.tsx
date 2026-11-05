import React from 'react';
import { Layers, Database, Sparkles, Cpu, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface AboutProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenResume }) => {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: 'Full Stack Engineering',
      desc: 'Architecting end-to-end web apps with React.js, TypeScript, Node.js, Express, and REST APIs with secure authentication and clean MVC patterns.',
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: 'Data Science & Analytics',
      desc: 'Leveraging Python, Pandas, and Scikit-Learn to analyze data, engineer predictive models, and surface meaningful metrics through visual charts.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      title: 'Modern UI/UX & Tailwind',
      desc: 'Transforming ideas into polished, accessible, mobile-first interfaces with smooth animations, fluid typography, and dark developer aesthetics.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: 'DSA & Algorithmic Rigor',
      desc: 'Solid foundations in Data Structures and Algorithms with 500+ problems solved across LeetCode, HackerRank (5★ Python & SQL), and GFG.',
    },
  ];

  const quickDetails = [
    { label: 'Degree', value: 'B.Tech in Computer Science & Engineering' },
    { label: 'Specialization', value: 'Data Science (CS & DS)' },
    { label: 'Current Standing', value: '3rd Year (Class of 2026)' },
    { label: 'Cumulative CGPA', value: '8.85 / 10.0' },
    { label: 'Primary Focus', value: 'Web Development & Full Stack Software' },
    { label: 'Location', value: 'Hyderabad, India (Open to Relocation)' },
    { label: 'Languages', value: 'English, Telugu, Hindi' },
    { label: 'Interests', value: 'Open Source, Web3/AI tools, UI Design, Hackathons' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Web Solutions with <span className="gradient-text">Computer Science Rigor</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            A 3rd-year Computer Science and Data Science student passionate about turning complex ideas into intuitive, robust digital products.
          </p>
        </div>

        {/* Narrative & Quick Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Detailed Biography Text */}
          <div className="lg:col-span-7 space-y-4 text-gray-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl glass-panel border border-blue-900/30 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                My Journey & Ambitions
              </h3>
              {profile.fullBio.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Key Philosophies:</span>
                <span className="inline-flex items-center gap-1 text-xs text-blue-300 bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-800/40">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Clean, Modular Code
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-md border border-purple-800/40">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> User-Centric Design
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/40">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Continuous Learning
                </span>
              </div>
            </div>
          </div>

          {/* Quick Info & Highlights Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-panel border border-purple-900/30 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center justify-between">
                <span>Fast Facts</span>
                <span className="text-xs text-purple-400 font-mono-code">Resume Snapshot</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {quickDetails.map((item, idx) => (
                  <div key={idx} className="flex flex-col py-1.5 border-b border-slate-800/60 last:border-none">
                    <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-100">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-xs tracking-wide transition-all shadow-md text-center cursor-pointer"
                >
                  View Complete Resume & Credentials
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Competence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#090f23]/70 border border-blue-900/30 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/50"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-500 transition-all">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
