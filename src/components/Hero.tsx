import React from 'react';
import { ArrowRight, FileText, Mail, MapPin, CheckCircle2, Share2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
  onOpenPublishGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenPublishGuide }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 lg:pt-8 lg:pb-14 border-b border-slate-800/60">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-teal-400 mb-3 tracking-wide uppercase">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                Dakar, Sénégal
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-teal-300">SID · EMIA</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Maîtrise poussée de l'IA
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
              Mame Assane Ndoye
              <span className="block mt-1 text-xl sm:text-2xl lg:text-3xl font-normal text-slate-300">
                Statistique, Informatique & <span className="text-teal-400 font-semibold">IA générative avancée</span>
              </span>
            </h1>

            {/* Lead Narrative Body */}
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Étudiant en <strong>Statistique et Informatique Décisionnelle (SID)</strong> à l'<strong>EMIA</strong> (1ère année validée) et admis en <strong>LSIMAC Cybersécurité</strong> à l'Université numérique Cheikh Hamidou Kane.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Pragmatique et rigoureux, j'exploite les technologies web, l'analyse de données et une <strong>capacité très poussée à utiliser l'IA</strong> pour résoudre des problématiques concrètes et accélérer la production technique.
            </p>

            {/* CTAs Cluster */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-sm whitespace-nowrap"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Télécharger mon CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-slate-800 transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Me contacter</span>
              </a>
            </div>

            {/* Public Link Quick Callout */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lien public :</span>
                <a
                  href={PERSONAL_INFO.publicAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-300 hover:text-teal-200 font-mono font-semibold underline underline-offset-4 decoration-teal-400/40"
                >
                  assaneportfolio.netlify.app
                </a>
              </div>
              <button
                onClick={onOpenPublishGuide}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors"
                title="Partager le lien"
              >
                <Share2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Partager</span>
              </button>
            </div>
          </div>

          {/* Right Column: Compact Visual Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm rounded-xl border border-slate-800 bg-[#0d1629]/80 p-4 backdrop-blur-sm shadow-lg">
              {/* Photo Frame */}
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-900 border border-slate-700/60 shadow-inner">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Portrait de Mame Assane Ndoye"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/assets/aistudio/WhatsApp_Image_2026-10-27_at_03.58.02_07ca6d29.jpeg') {
                      target.src = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_03.58.02_07ca6d29.jpeg';
                    }
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1120] to-transparent opacity-85" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-slate-300 font-medium">
                  <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Dakar · SID
                  </span>
                  <span className="bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-teal-300 font-mono">
                    EMIA
                  </span>
                </div>
              </div>

              {/* Verified Credentials Highlights Underneath */}
              <div className="mt-3 space-y-1.5 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white font-medium">1ère Année SID Validée</strong> — EMIA
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white font-medium">Capacité poussée en IA</strong> — Prompt & Productivité
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white font-medium">Admission LSIMAC</strong> — UN-CHK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Compact KPI Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
            <div className="text-xl font-bold text-teal-400 font-mono tabular-nums">1ère Année</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Validée en Statistique (EMIA)</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
            <div className="text-xl font-bold text-emerald-400 font-mono">IA Avancée</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Usage quotidien & prompt engineering</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
            <div className="text-xl font-bold text-cyan-400 font-mono tabular-nums">50+ Élèves</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Encadrés au Vovinam (Gendarmerie)</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
            <div className="text-xl font-bold text-white font-mono">Dakar, SN</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Disponible pour stage junior</div>
          </div>
        </div>
      </div>
    </section>
  );
};
