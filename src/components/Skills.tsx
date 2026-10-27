import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { CheckCircle2, BookOpen, Layers, Code2, LineChart, Cpu, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<'all' | 'pratique' | 'notion'>('all');

  const categories = [
    { id: 'all', label: 'Toutes les compétences' },
    { id: 'tools', label: 'IA & Outils', icon: Sparkles },
    { id: 'web', label: 'Web & Front-end', icon: Code2 },
    { id: 'stats', label: 'Statistiques & Données', icon: LineChart },
    { id: 'programming', label: 'Programmation', icon: Layers },
    { id: 'systems', label: 'Systèmes & Réseaux', icon: Cpu },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesLevel = levelFilter === 'all' || skill.level === levelFilter;
    return matchesCategory && matchesLevel;
  });

  const practicalCount = SKILLS_DATA.filter((s) => s.level === 'pratique').length;
  const notionCount = SKILLS_DATA.filter((s) => s.level === 'notion').length;

  return (
    <section id="competences" className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
              02. Compétences & Outils
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Niveau réel, pratique avérée et maîtrise de l'IA
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
              Distinction nette entre mes compétences déjà pratiquées en production ou projets, et les notions académiques en cours de consolidation.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start shrink-0">
            <button
              onClick={() => setLevelFilter('all')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                levelFilter === 'all'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Toutes ({SKILLS_DATA.length})
            </button>
            <button
              onClick={() => setLevelFilter('pratique')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                levelFilter === 'pratique'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pratique solide ({practicalCount})
            </button>
            <button
              onClick={() => setLevelFilter('notion')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                levelFilter === 'notion'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Notions ({notionCount})
            </button>
          </div>
        </div>

        {/* Category Segmented Filter Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                  : 'bg-slate-900/40 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:bg-slate-800/50'
              }`}
            >
              {cat.icon && <cat.icon className="w-3.5 h-3.5 text-teal-400" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Compact */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => {
            const isAi = skill.name.toLowerCase().includes('ia') || skill.name.toLowerCase().includes('intelligence');

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isAi
                    ? 'border-emerald-500/40 bg-emerald-950/20 hover:border-emerald-400'
                    : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-1.5">
                      {isAi && <Sparkles className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{skill.name}</span>
                    </h3>
                    <div
                      className={`text-[10px] font-medium tracking-wide flex items-center gap-1 shrink-0 ${
                        isAi
                          ? 'text-emerald-400'
                          : skill.level === 'pratique'
                          ? 'text-teal-400'
                          : 'text-cyan-400'
                      }`}
                    >
                      {skill.level === 'pratique' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <BookOpen className="w-3 h-3" />
                      )}
                      <span>{skill.level === 'pratique' ? 'Pratique' : 'Notions'}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 mb-2 font-mono">
                    {skill.levelLabel}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span>{categories.find((c) => c.id === skill.category)?.label}</span>
                  <span className={isAi ? 'text-emerald-400 font-semibold' : ''}>
                    {isAi ? 'Atout majeur' : skill.level === 'pratique' ? 'Opérationnel' : 'Fondamentaux'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
