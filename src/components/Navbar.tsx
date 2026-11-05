import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface NavbarProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume, onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-blue-900/40 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Avatar */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-md shadow-purple-500/20 group-hover:border-blue-400 transition-colors">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#030712] rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {profile.name}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 font-mono-code">
                  CS & DS
                </span>
              </div>
              <p className="text-xs text-gray-400 hidden sm:block">Full Stack Developer</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0b1120]/60 p-1.5 rounded-full border border-blue-900/30 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm shadow-blue-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                title="Edit / Customize Details"
                className="p-2 text-gray-400 hover:text-purple-300 hover:bg-slate-800/60 rounded-lg border border-slate-700/50 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold rounded-lg bg-blue-600/80 text-white"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#070d1d] border-b border-blue-900/40 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl shadow-black/80">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-medium rounded-lg ${
                  activeSection === item.id
                    ? 'bg-blue-600/30 text-blue-400 border border-blue-500/30'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3 text-gray-400">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Github className="w-4 h-4" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-purple-400">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
