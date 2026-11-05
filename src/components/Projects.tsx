import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2, Check, ArrowUpRight, Eye } from 'lucide-react';
import { Project } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Data Science', 'Web App'];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#020612]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="gradient-text">Software Implementations</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Real-world web applications, full-stack systems, and predictive data science solutions engineered from concept to deployment.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-[#0a1024] text-gray-300 hover:text-white hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-blue-900/30 overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-950/60"
            >
              {/* Card Header & Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/40 font-mono-code">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-950/80 text-purple-300 border border-purple-500/40">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/70">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] rounded bg-slate-900/90 text-blue-300 border border-slate-800 font-mono-code"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/70 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors cursor-pointer py-1.5 px-2 rounded-lg hover:bg-slate-800"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-gray-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-all"
                      title="Open Live Preview"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-[#030712] border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Interested in reviewing complete source code?</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Browse repositories, commit history, and algorithmic solutions on my public GitHub profile.
            </p>
          </div>
          <a
            href="https://github.com/priyankabadugu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold shadow-md transition-all whitespace-nowrap cursor-pointer hover:border-blue-400"
          >
            <Github className="w-4 h-4" />
            <span>Visit github.com/priyankabadugu</span>
          </a>
        </div>

      </div>
    </section>
  );
};
