import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#090f24] border border-blue-900/50 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-800 flex items-start justify-between gap-4 bg-[#0a122c]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-blue-950 text-blue-300 border border-blue-800">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-emerald-950 text-emerald-300 border border-emerald-800">
                {project.status || 'Active'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-300 leading-relaxed">
          {/* Detailed Summary */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Project Overview
            </h4>
            <p className="text-gray-200 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Architectural Highlights */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Key Features & Architectural Decisions
            </h4>
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              Full Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-lg bg-blue-950/70 text-blue-300 border border-blue-800/40 font-mono-code"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 px-6 bg-[#060b1b] border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow-md hover:shadow-indigo-500/30 transition-all"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
