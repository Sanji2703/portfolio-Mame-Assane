import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, ExternalLink, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0a0f1d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
            06. Contact & Opportunités
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Prendre contact directement
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Disponible immédiatement pour échanger au sujet d'un stage ou d'une collaboration à Dakar ou à distance.
          </p>
        </div>

        {/* Contact Methods Cards - Compact */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Direct */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Adresse E-mail</h3>
              <p className="mt-0.5 text-xs text-slate-400 font-mono break-all">
                {PERSONAL_INFO.email}
              </p>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Réponse assurée sous 24h ouvrées.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Opportunité de stage - Mame Assane Ndoye`}
                className="flex-1 py-1.5 px-2.5 text-center text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
              >
                Écrire un e-mail
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                title="Copier l'adresse e-mail"
              >
                {copiedType === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Téléphone & Appel */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Téléphone mobile</h3>
              <p className="mt-0.5 text-xs text-slate-400 font-mono">
                {PERSONAL_INFO.phoneDisplay}
              </p>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Appels directs du lundi au samedi.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex-1 py-1.5 px-2.5 text-center text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                Appeler
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                title="Copier le numéro"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">WhatsApp Professionnel</h3>
              <p className="mt-0.5 text-xs text-slate-400 font-mono">
                {PERSONAL_INFO.phoneDisplay}
              </p>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Échange instantané et rapide.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-1.5 px-2.5 text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Ouvrir sur WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Emplacements Réseaux - Compact */}
        <div className="mt-6 p-4 rounded-xl border border-slate-800 bg-[#0f172a]/60 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <h4 className="font-semibold text-white flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Dakar, Sénégal
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Mobile sur toute la presqu'île de Dakar et disponible pour du télétravail partiel ou total.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white flex items-center gap-1.5 mb-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Réseaux professionnels
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Profils <strong>LinkedIn</strong> et <strong>GitHub</strong> en cours de finalisation avec mes derniers projets universitaires.
            </p>
          </div>
        </div>

        {/* Toast confirmation feedback */}
        {copiedType && (
          <div className="fixed bottom-5 right-5 z-50 p-2.5 rounded-lg bg-teal-900 border border-teal-500 text-teal-100 text-xs shadow-xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4 text-teal-300" />
            <span>
              {copiedType === 'email' ? 'Adresse e-mail copiée !' : 'Numéro de téléphone copié !'}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
