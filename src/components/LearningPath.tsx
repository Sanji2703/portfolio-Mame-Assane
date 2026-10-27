import React from 'react';
import { CERTIFICATION_GOALS } from '../data/portfolioData';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export const LearningPath: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
            05. Apprentissage continu & Certifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Feuille de route & perfectionnement
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Formations suivies en autonomie et objectifs de certification.
          </p>
        </div>

        {/* Goals Grid - Compact */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATION_GOALS.map((goal, idx) => {
            const isAi = goal.title.toLowerCase().includes('ia') || goal.title.toLowerCase().includes('prompting');

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-colors ${
                  isAi
                    ? 'border-emerald-500/40 bg-emerald-950/20'
                    : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>{goal.issuer}</span>
                    <span
                      className={`flex items-center gap-1 font-medium ${
                        isAi ? 'text-emerald-400' : 'text-teal-400'
                      }`}
                    >
                      {isAi ? <Sparkles className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                      <span>{goal.statusLabel}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {goal.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {goal.focusArea}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Progression active</span>
                  <span className="text-teal-300">2026/2027</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-6 p-3.5 rounded-lg border border-slate-800/60 bg-[#0f172a]/40 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            Vous proposez des modules de formation interne ? J'apprends et m'adapte avec une grande réactivité.
          </p>
          <a
            href="#contact"
            className="text-teal-300 hover:text-teal-200 font-medium whitespace-nowrap flex items-center gap-1 shrink-0"
          >
            <span>Me contacter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
