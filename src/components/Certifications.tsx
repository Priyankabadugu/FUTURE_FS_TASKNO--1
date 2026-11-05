import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { certificationsData, achievementsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-[#02050f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Key Achievements</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Professional certifications from Meta, AWS, Oracle/HackerRank, and academic competitive honors.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 rounded-2xl border border-blue-900/30 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40"
            >
              <div>
                {/* Issuer Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-950/80 text-purple-300 border border-purple-800/40">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono-code">{cert.issueDate}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] text-blue-400 font-mono-code mb-3">
                    ID: {cert.credentialId}
                  </div>
                )}

                {/* Skills Covered */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Core Skills Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-900/80 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Credential
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Honors & Achievements Subsection */}
        <div className="mt-8 pt-10 border-t border-blue-900/30">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white">Honors & Academic Milestones</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-[#080e22] border border-blue-900/20 hover:border-amber-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950/60 text-amber-300 border border-amber-800/40">
                    {ach.badge}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono-code">{ach.date}</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  {ach.title}
                </h4>
                <div className="text-[11px] text-blue-400 mb-2">{ach.event}</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
