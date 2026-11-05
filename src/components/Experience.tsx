import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship <span className="gradient-text">& Experience</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Hands-on software development and data intelligence work delivered in professional and academic environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-blue-900/30 hover:border-purple-500/50 transition-all duration-300 relative group hover:shadow-2xl hover:shadow-indigo-950/40"
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-purple-950/80 text-purple-300 border border-purple-800/40 mb-2">
                    {exp.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-blue-400">
                    {exp.company}
                    {exp.department && (
                      <span className="text-xs text-gray-400 font-normal"> — {exp.department}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-gray-300 border border-slate-800 font-mono-code">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 mt-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Short Summary */}
              <p className="text-sm text-gray-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Responsibilities & Impact */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  Key Responsibilities & Deliverables:
                </div>
                {exp.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 font-mono-code mr-1">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#080e22] text-blue-300 border border-blue-900/40 font-mono-code"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
