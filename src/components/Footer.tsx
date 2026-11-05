import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#01040d] border-t border-blue-950/80 pt-14 pb-8 relative text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-900">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-base text-white tracking-tight">{profile.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-blue-950 text-blue-300 border border-blue-800">
                Portfolio
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              3rd-Year B.Tech Computer Science & Data Science student passionate about modern Full Stack Web Engineering.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <button onClick={onOpenResume} className="text-purple-400 hover:text-purple-300 cursor-pointer">
              Resume
            </button>
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-purple-400 hover:text-purple-300 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white border border-blue-500/30 transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <div>
            © {currentYear} Priyanka Badugu. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span className="text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Hyderabad, India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
