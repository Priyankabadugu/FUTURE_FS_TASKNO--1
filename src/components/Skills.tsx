import React, { useState } from 'react';
import { Code2, Server, Database, Terminal, Wrench, CheckCircle, Search } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Frontend Development',
    'Backend Development',
    'Programming Languages',
    'Databases & Data Science',
    'Tools & DevOps',
  ];

  // Get icon for category
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Frontend Development':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Backend Development':
        return <Server className="w-4 h-4 text-purple-400" />;
      case 'Programming Languages':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Databases & Data Science':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Tools & DevOps':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-indigo-400" />;
    }
  };

  // Filter skills
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryGroup: cat.title }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory =
      selectedCategory === 'All' || s.categoryGroup === selectedCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            A comprehensive overview of programming languages, modern frameworks, data tools, and architectures.
          </p>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-[#090f22] text-gray-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                  }`}
                >
                  {cat !== 'All' && getCategoryIcon(cat)}
                  <span>{cat === 'All' ? 'All Skills' : cat.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Python)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#090f22] border border-slate-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel p-4 rounded-xl border border-blue-900/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:text-purple-300 group-hover:border-purple-500/50 transition-colors">
                    {getCategoryIcon(skill.categoryGroup)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-mono-code">{skill.category}</span>
                  </div>
                </div>

                {skill.experience && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-gray-300 border border-slate-800 font-mono-code">
                    {skill.experience}
                  </span>
                )}
              </div>

              {/* Progress Bar & Percentage */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono-code">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-blue-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Breakdown Highlights */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#0a1128]/60 to-[#030712] border border-blue-800/30">
            <h4 className="text-sm font-bold text-blue-300 flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              Frontend Expertise
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Specialized in crafting dynamic single-page web applications using React.js, TypeScript, Tailwind CSS, and state management via Redux Toolkit and React Context.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 via-[#0a1128]/60 to-[#030712] border border-purple-800/30">
            <h4 className="text-sm font-bold text-purple-300 flex items-center gap-2 mb-2">
              <Server className="w-4 h-4 text-purple-400" />
              Backend & API Engineering
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Building secure RESTful microservices with Node.js, Express.js, JWT authentication, and structured database schemas across MongoDB, PostgreSQL, and MySQL.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-[#0a1128]/60 to-[#030712] border border-cyan-800/30">
            <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-cyan-400" />
              Data Science Advantage
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Applying Python, Pandas, NumPy, and Scikit-Learn to preprocess large datasets, train predictive models, and connect ML inference directly to web dashboards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
