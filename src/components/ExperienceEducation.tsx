import React from 'react';
import { EXPERIENCES_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="parcours" className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0a0f1d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
            04. Expériences & Formation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Responsabilité, rigueur et cursus académique
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Encadrement de terrain, transmission pédagogique et apprentissage théorique structuré.
          </p>
        </div>

        {/* 2-Column Split: Expériences (Left) & Formations (Right) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column 1: Expériences Pratiques */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Briefcase className="w-4 h-4 text-teal-400" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Expériences concrètes & Responsabilités
              </h3>
            </div>

            <div className="space-y-4">
              {EXPERIENCES_DATA.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 sm:p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1 text-teal-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="text-xs font-medium text-slate-300 mt-0.5">
                    {exp.organization}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Missions */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                    <ul className="space-y-1 text-xs text-slate-300">
                      {exp.missions.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Strengths */}
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.keyStrengths.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] text-teal-300 bg-teal-950/40 border border-teal-500/20 px-2 py-0.5 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Formation Académique */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Formation Universitaire
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-4 sm:p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-semibold text-teal-300 mt-0.5">
                    {edu.institution}
                  </div>

                  {/* Status Banner */}
                  <div className="mt-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-200 border border-slate-700 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    <span>{edu.statusLabel}</span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold text-slate-200 uppercase mb-1">
                      Points forts :
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Note d'honnêteté académique */}
              <div className="p-3.5 rounded-lg border border-slate-800 bg-[#0f172a]/60 text-xs text-slate-400">
                <span className="font-semibold text-white block mb-0.5">Transparence académique :</span>
                <p>
                  1ère année SID validée à l'<strong>EMIA</strong>. L'admission à l'<strong>UN-CHK</strong> correspond à une sélection validée sans prétendre à un diplôme non encore obtenu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
