import React, { useState, useEffect } from 'react';
import { initialProfile } from './data/portfolioData';
import { PortfolioProfile, Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { EditProfileModal } from './components/EditProfileModal';

export default function App() {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    const saved = localStorage.getItem('priyanka_portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved profile:', e);
      }
    }
    return initialProfile;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSaveProfile = (updated: PortfolioProfile) => {
    setProfile(updated);
    localStorage.setItem('priyanka_portfolio_profile', JSON.stringify(updated));
  };

  const handleResetProfile = () => {
    setProfile(initialProfile);
    localStorage.removeItem('priyanka_portfolio_profile');
  };

  const handleDownloadResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-purple-600/30 selection:text-white relative">
      
      {/* Global Background Glow Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="relative">
        {/* 1. Hero Section */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* 2. About Me Section */}
        <About
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 3. Education Timeline Section */}
        <Education />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Internship Experience Section */}
        <Experience />

        {/* 6. Certifications & Achievements Section */}
        <Certifications />

        {/* 8. Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* 9. Footer */}
      <Footer
        profile={profile}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <EditProfileModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

    </div>
  );
}
