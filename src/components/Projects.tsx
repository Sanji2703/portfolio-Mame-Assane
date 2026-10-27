import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { CheckCircle2, Clock, X, ArrowUpRight, HelpCircle, Target, Wrench, Lightbulb } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'web', label: 'Web & Solutions' },
    { id: 'stats', label: 'Statistiques & Données' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'web') return project.category === 'web' || project.category === 'app';
    if (filter === 'stats') return project.category === 'stats';
    return true;
  });

  return (
    <section id="projets" className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
              03. Réalisations & Projets
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Projets réalisés et en cours
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Des réalisations concrètes : intégration web réactive, analyse statistique interactive et solutions logiques de terrain.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards 2-Column Balanced Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => {
            const isCompleted = project.status === 'functional';
            const isInProgress = project.status === 'in_progress';

            return (
              <div
                key={project.id}
                className="rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all flex flex-col justify-between overflow-hidden group shadow-md"
              >
                {/* Visual Thumbnail (if available) */}
                {project.image ? (
                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800/60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-75" />
                    <div className="absolute top-2.5 right-2.5 text-[11px] bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-teal-300 font-mono">
                      {project.categoryLabel}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 pb-0 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>{project.categoryLabel}</span>
                    <span
                      className={`flex items-center gap-1 ${
                        isCompleted
                          ? 'text-teal-400'
                          : isInProgress
                          ? 'text-cyan-400'
                          : 'text-amber-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      <span>{project.statusLabel}</span>
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {project.image && (
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
                        <span
                          className={`flex items-center gap-1 ${
                            isCompleted
                              ? 'text-teal-400'
                              : isInProgress
                              ? 'text-cyan-400'
                              : 'text-amber-400'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                          <span>{project.statusLabel}</span>
                        </span>
                      </div>
                    )}

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    {/* Technologies */}
                    <div className="text-[11px] text-slate-400 mb-2.5 font-mono flex flex-wrap gap-x-2 gap-y-1">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="text-slate-300">
                          {tech}
                          {tIdx < project.technologies.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-teal-300 hover:text-teal-200 flex items-center gap-1 py-1"
                      >
                        <span>Examiner la fiche complète</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.interactiveDemoId && (
                        <a
                          href="#lab-stats"
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 transition-colors"
                        >
                          Tester la démo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-[#0d1629] p-5 sm:p-7 shadow-2xl text-left my-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer la fiche projet"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase">
                <span>{selectedProject.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">{selectedProject.statusLabel}</span>
              </div>
              <h3 className="mt-1.5 text-xl font-bold text-white tracking-tight">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Body Content */}
            <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-300">
              {/* Problem */}
              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50">
                <div className="text-xs font-semibold text-white uppercase flex items-center gap-1.5 mb-1">
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                  Problème & Contexte
                </div>
                <p className="leading-relaxed">{selectedProject.problem}</p>
              </div>

              {/* Objective */}
              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50">
                <div className="text-xs font-semibold text-white uppercase flex items-center gap-1.5 mb-1">
                  <Target className="w-3.5 h-3.5 text-teal-400" />
                  Objectif du projet
                </div>
                <p className="leading-relaxed">{selectedProject.objective}</p>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-semibold text-white uppercase flex items-center gap-1.5 mb-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-400" />
                  Technologies & Outils
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <div className="text-xs font-semibold text-white uppercase mb-1.5">
                  Fonctionnalités principales
                </div>
                <ul className="space-y-1 list-disc list-inside text-slate-300 text-xs">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx} className="leading-relaxed">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="p-3.5 rounded-xl border border-teal-500/30 bg-teal-950/20">
                <div className="text-xs font-semibold text-teal-300 uppercase flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-teal-400" />
                  Apprentissages acquis
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedProject.learnings}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Fermer
              </button>

              {selectedProject.interactiveDemoId && (
                <a
                  href="#lab-stats"
                  onClick={() => setSelectedProject(null)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Accéder au laboratoire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
