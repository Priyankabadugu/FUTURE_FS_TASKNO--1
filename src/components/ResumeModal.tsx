import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import {
  educationData,
  experienceData,
  projectsData,
  skillCategories,
  certificationsData,
  achievementsData,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'ats_print'>('interactive');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const textContent = `
================================================================================
PRIYANKA BADUGU
Full Stack Web Developer & Computer Science Student (Data Science)
Email: ${profile.email} | Phone: ${profile.phone}
Location: ${profile.location}
LinkedIn: ${profile.socials.linkedin} | GitHub: ${profile.socials.github}
================================================================================

CAREER OBJECTIVE:
${profile.shortBio}

--------------------------------------------------------------------------------
EDUCATION:
--------------------------------------------------------------------------------
${educationData
  .map(
    (e) => `
* ${e.degree} in ${e.field}
  ${e.institution} (${e.duration})
  Score: ${e.gradeLabel} ${e.grade}
  Relevant Coursework: ${e.courses.join(', ')}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
TECHNICAL SKILLS:
--------------------------------------------------------------------------------
* Frontend: React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit, Next.js
* Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, Middleware
* Programming Languages: Python, Java, C++, C, JavaScript, TypeScript, SQL
* Databases & Data Science: MongoDB, MySQL, PostgreSQL, Pandas, NumPy, Scikit-Learn
* Developer Tools: Git, GitHub, VS Code, Postman, Vite, Vercel, Netlify, Linux/Bash

--------------------------------------------------------------------------------
INTERNSHIP EXPERIENCE:
--------------------------------------------------------------------------------
${experienceData
  .map(
    (exp) => `
* ${exp.role} - ${exp.company} (${exp.period})
  Location: ${exp.location} | Type: ${exp.type}
  Summary: ${exp.summary}
  Key Deliverables:
  ${exp.bulletPoints.map((b) => `  - ${b}`).join('\n')}
  Technologies: ${exp.technologies.join(', ')}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
KEY PROJECTS:
--------------------------------------------------------------------------------
${projectsData
  .map(
    (p) => `
* ${p.title} (${p.category})
  GitHub: ${p.githubUrl} ${p.liveUrl ? `| Live: ${p.liveUrl}` : ''}
  Summary: ${p.shortDescription}
  Key Highlights:
  ${p.highlights.map((h) => `  - ${h}`).join('\n')}
  Tech Stack: ${p.techStack.join(', ')}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
CERTIFICATIONS:
--------------------------------------------------------------------------------
${certificationsData
  .map(
    (c) => `
* ${c.title} - Issued by ${c.issuer} (${c.issueDate})
  ${c.credentialId ? `Credential ID: ${c.credentialId}` : ''}
  Skills: ${c.skillsCovered.join(', ')}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
HONORS & ACHIEVEMENTS:
--------------------------------------------------------------------------------
${achievementsData
  .map(
    (a) => `
* ${a.title} (${a.date}) - ${a.event}
  ${a.description}
`
  )
  .join('\n')}
================================================================================
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Priyanka_Badugu_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-hidden">
      <div
        className="relative w-full max-w-4xl bg-[#080e22] border border-blue-900/60 rounded-2xl shadow-2xl shadow-black flex flex-col h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 px-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-[#0a122e] no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-none">Priyanka Badugu — Curriculum Vitae</h3>
              <p className="text-[11px] text-gray-400 mt-1">3rd-Year B.Tech Computer Science & Data Science</p>
            </div>
          </div>

          {/* Tab Switcher & Action Buttons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'interactive'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Interactive View
              </button>
              <button
                onClick={() => setActiveTab('ats_print')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'ats_print'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Printable ATS View
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#040816]">
          
          {/* TAB 1: INTERACTIVE MODERN DEVELOPER VIEW */}
          {activeTab === 'interactive' && (
            <div className="max-w-3xl mx-auto space-y-8 bg-[#090f24] p-6 sm:p-10 rounded-2xl border border-blue-900/40 shadow-xl text-gray-200">
              
              {/* Header section with photo & contact */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="space-y-2 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {profile.name}
                  </h1>
                  <p className="text-sm font-semibold text-blue-400">{profile.title}</p>
                  <p className="text-xs text-purple-300">{profile.subTitle}</p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-blue-400" />
                      {profile.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-400" />
                      {profile.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {profile.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs text-blue-400 font-mono-code">
                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </a>
                    <span>•</span>
                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <Github className="w-3 h-3" /> GitHub
                    </a>
                  </div>
                </div>

                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-md shrink-0">
                  <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {profile.shortBio}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education & Academic Qualifications
                </h2>
                <div className="space-y-4">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-sm text-white">{edu.degree}</span>
                        <span className="font-mono-code text-blue-400">{edu.duration}</span>
                      </div>
                      <div className="text-purple-300 font-medium mb-1">{edu.field} — {edu.institution}</div>
                      <div className="text-emerald-400 font-semibold mb-2">{edu.gradeLabel}: {edu.grade}</div>
                      <p className="text-gray-400 leading-relaxed mb-2">{edu.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.courses.map((c, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-slate-800 text-gray-300 text-[10px]">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  Technical Skills & Competencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skillCategories.map((cat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="font-semibold text-white mb-1.5 text-xs">{cat.title}</div>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((s, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded bg-[#0b1329] text-blue-300 text-[11px] border border-blue-900/40">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Experience */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Internship Experience
                </h2>
                <div className="space-y-3">
                  {experienceData.map((exp) => (
                    <div key={exp.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-sm text-white">{exp.role}</span>
                        <span className="font-mono-code text-purple-400">{exp.period}</span>
                      </div>
                      <div className="text-blue-300 font-medium mb-2">{exp.company} ({exp.location})</div>
                      <div className="space-y-1.5 mb-3">
                        {exp.bulletPoints.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-1.5 text-gray-300">
                            <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-[11px] text-gray-400 font-mono-code">
                        Tech Stack: {exp.technologies.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  Highlighted Projects
                </h2>
                <div className="space-y-3">
                  {projectsData.slice(0, 4).map((p) => (
                    <div key={p.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">{p.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-2 leading-relaxed">{p.shortDescription}</p>
                      <div className="text-[11px] text-gray-400 font-mono-code">
                        Technologies: {p.techStack.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Certifications & Credentials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {certificationsData.map((c) => (
                    <div key={c.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="font-bold text-white text-xs">{c.title}</div>
                      <div className="text-gray-400 text-[11px]">{c.issuer} • {c.issueDate}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: CLEAN ATS PRINTABLE VIEW (Pure white paper style optimized for PDF export) */}
          {activeTab === 'ats_print' && (
            <div className="max-w-3xl mx-auto bg-white text-black p-8 sm:p-12 rounded-xl shadow-2xl space-y-6 font-sans">
              
              {/* ATS Header */}
              <div className="text-center border-b-2 border-black pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black uppercase">
                  Priyanka Badugu
                </h1>
                <p className="text-sm font-semibold text-gray-700 mt-1">
                  3rd-Year B.Tech Computer Science & Data Science Student | Full Stack Web Developer
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-700 mt-2">
                  <span>{profile.email}</span>
                  <span>•</span>
                  <span>{profile.phone}</span>
                  <span>•</span>
                  <span>{profile.location}</span>
                  <span>•</span>
                  <a href={profile.socials.linkedin} className="underline text-blue-700">LinkedIn</a>
                  <span>•</span>
                  <a href={profile.socials.github} className="underline text-blue-700">GitHub</a>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase border-b border-gray-400 pb-1 mb-2 text-black">
                  EDUCATION
                </h2>
                <div className="space-y-3 text-xs">
                  {educationData.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between font-bold text-gray-900">
                        <span>{edu.degree} in {edu.field}</span>
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex justify-between text-gray-700 italic">
                        <span>{edu.institution}, {edu.location}</span>
                        <span className="font-semibold text-black">{edu.gradeLabel}: {edu.grade}</span>
                      </div>
                      <div className="text-[11px] text-gray-600 mt-0.5">
                        <span className="font-semibold">Coursework:</span> {edu.courses.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase border-b border-gray-400 pb-1 mb-2 text-black">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1 text-xs text-gray-800">
                  <div>
                    <span className="font-bold">Frontend:</span> React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit, Next.js
                  </div>
                  <div>
                    <span className="font-bold">Backend:</span> Node.js, Express.js, RESTful APIs, JWT Authentication, MVC Pattern
                  </div>
                  <div>
                    <span className="font-bold">Languages:</span> Python, Java, C++, C, JavaScript, TypeScript, SQL
                  </div>
                  <div>
                    <span className="font-bold">Databases & Data Science:</span> MongoDB, MySQL, PostgreSQL, Pandas, NumPy, Scikit-Learn
                  </div>
                  <div>
                    <span className="font-bold">Tools & Platforms:</span> Git, GitHub, VS Code, Postman, Vite, Vercel, Netlify, Linux/Bash
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase border-b border-gray-400 pb-1 mb-2 text-black">
                  INTERNSHIP EXPERIENCE
                </h2>
                <div className="space-y-4 text-xs">
                  {experienceData.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between font-bold text-gray-900">
                        <span>{exp.role} — {exp.company}</span>
                        <span>{exp.period}</span>
                      </div>
                      <div className="text-gray-700 italic text-[11px] mb-1">
                        {exp.location} | Tech: {exp.technologies.join(', ')}
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-800 text-xs">
                        {exp.bulletPoints.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase border-b border-gray-400 pb-1 mb-2 text-black">
                  PROJECTS
                </h2>
                <div className="space-y-3 text-xs">
                  {projectsData.slice(0, 4).map((p) => (
                    <div key={p.id}>
                      <div className="flex justify-between font-bold text-gray-900">
                        <span>{p.title}</span>
                        <span className="font-normal italic text-gray-600 font-mono text-[11px]">{p.techStack.join(', ')}</span>
                      </div>
                      <p className="text-gray-700 mt-0.5">{p.shortDescription}</p>
                      <ul className="list-disc list-inside text-gray-800 text-[11px] space-y-0.5 mt-1">
                        {p.highlights.slice(0, 2).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase border-b border-gray-400 pb-1 mb-2 text-black">
                  CERTIFICATIONS & ACHIEVEMENTS
                </h2>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-800">
                  {certificationsData.map((c) => (
                    <li key={c.id}>
                      <span className="font-semibold">{c.title}</span> — {c.issuer} ({c.issueDate})
                    </li>
                  ))}
                  {achievementsData.slice(0, 2).map((a) => (
                    <li key={a.id}>
                      <span className="font-semibold">{a.title}</span>: {a.description}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
