import React from 'react';
import { Target, ShieldCheck, Compass, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0a0f1d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
            01. À propos de moi
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Une approche méthodique combinant statistique, informatique et IA
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Basé à Dakar, j'articule mon parcours autour d'un objectif clair : comprendre et faire parler les données, concevoir des interfaces web utiles et exploiter l'intelligence artificielle pour démultiplier l'efficacité opérationnelle.
          </p>
        </div>

        {/* Narrative & Trajectory Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/30">
              <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                <Target className="w-4 h-4 text-teal-400" />
                Statistique et Informatique Décisionnelle à l'EMIA
              </h3>
              <p>
                En licence SID à l'<strong>EMIA (Dakar)</strong>, j'ai validé ma 1ère année en consolidant mes bases mathématiques et quantitatives : statistique descriptive, probabilités, échantillonnage et modélisation de bases de données. Je conçois les données comme des outils concrets d'aide à la décision.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/30">
              <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Maîtrise approfondie des outils d'Intelligence Artificielle
              </h3>
              <p>
                L'IA n'est pas un gadget pour moi, mais un outil central de productivité et de recherche. J'ai développé une <strong>capacité très poussée à utiliser les modèles d'IA</strong> pour prototyper du code, déboguer, synthétiser des corpus de données volumineux et structurer des flux de travail optimisés.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/30">
              <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Sécurité et systèmes (Admission UN-CHK)
              </h3>
              <p>
                Mon admission en cybersécurité (LSIMAC / SIMAC) à l'Université numérique Cheikh Hamidou Kane complète ma vision en posant les bases de la protection des données et de l'intégrité des architectures numériques.
              </p>
            </div>
          </div>

          {/* Right Highlights: Transversal Qualities */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Atouts & Compétences transversales
            </div>

            {PERSONAL_INFO.strengths.map((strength, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-800/80 bg-[#0f172a]/60 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{strength.label}</h4>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 text-xs text-slate-300">
              <span className="font-semibold text-teal-300 block mb-0.5">
                Objectif de mon stage :
              </span>
              Intégrer une équipe technique ou data à Dakar (ou à distance) pour mettre en pratique mes compétences et progresser activement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
