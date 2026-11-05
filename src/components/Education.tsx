import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#02050f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-text">& Qualifications</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Rigorous foundations in Computer Science, Data Science, and analytical problem-solving.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Timeline Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-800 -translate-x-1/2 hidden sm:block opacity-60" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-800 sm:hidden opacity-60" />

          {/* Education Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#080d21] border-2 border-purple-500 shadow-lg shadow-purple-500/30 flex items-center justify-center z-10">
                    <GraduationCap className="w-4 h-4 text-purple-300" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2">
                    <div
                      className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/50 hover:-translate-y-1 ${
                        item.isCurrent
                          ? 'border-blue-500/50 bg-[#0c1328]/80'
                          : 'border-slate-800/80 bg-[#080d1e]/70'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/40 font-mono-code">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-950/80 to-blue-950/80 text-emerald-300 border border-emerald-500/40">
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item.gradeLabel}: {item.grade}</span>
                        </div>
                      </div>

                      {/* Degree & Field */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-semibold text-purple-400 mb-2">
                        {item.field}
                      </div>

                      {/* Institution & Location */}
                      <div className="flex items-center gap-2 text-xs text-gray-300 mb-4">
                        <span className="font-medium text-gray-200">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Narrative / Context */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Coursework Tags */}
                      {item.courses && item.courses.length > 0 && (
                        <div className="space-y-2 pt-3 border-t border-slate-800">
                          <div className="text-[11px] uppercase font-semibold text-gray-400 flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-indigo-400" />
                            <span>Relevant Coursework & Competencies:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.courses.map((course, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2 py-0.5 text-[11px] rounded bg-slate-900/90 text-slate-300 border border-slate-800 font-mono-code"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
