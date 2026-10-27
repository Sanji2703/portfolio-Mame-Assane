import React, { useState } from 'react';
import { X, Copy, Check, Globe, Share2, ExternalLink, HelpCircle, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PublishGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublishGuideModal: React.FC<PublishGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const publicUrl = PERSONAL_INFO.publicAppUrl;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-[#0d1629] p-6 sm:p-8 shadow-2xl text-left my-8 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase">
              <Globe className="w-4 h-4 text-teal-400" />
              <span>Publication en ligne & Accès Public</span>
            </div>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
              Votre lien public vérifié pour les recruteurs & Connect Emploi
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer le guide"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Guide Content */}
        <div className="mt-6 space-y-6 overflow-y-auto pr-1 text-sm text-slate-300">
          {/* Main Verified Link Box */}
          <div className="p-5 rounded-2xl border border-teal-500/40 bg-teal-950/30">
            <div className="flex items-center justify-between text-xs text-teal-300 font-mono mb-2">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Lien public actif et accessible mondialement :
              </span>
              <span className="text-slate-400">Gratuit · Sans abonnement</span>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <input
                type="text"
                readOnly
                value={publicUrl}
                className="flex-1 bg-transparent text-xs sm:text-sm font-mono text-teal-300 px-2 py-1 outline-none select-all truncate"
              />

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Lien copié !' : 'Copier le lien'}</span>
                </button>

                <a
                  href={publicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  title="Tester l'ouverture dans un nouvel onglet"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="mt-2.5 text-xs text-slate-400">
              Ce lien fonctionne directement dans n'importe quel navigateur (téléphone, ordinateur, tablette), sans nécessiter de mot de passe ni d'authentification.
            </p>
          </div>

          {/* Guide 1: How to use it on Connect Emploi & CV */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              1. Comment insérer ce lien dans vos candidatures
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <strong className="text-xs font-semibold text-teal-300 block mb-1">
                  Sur Connect Emploi :
                </strong>
                <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1.5">
                  <li>Connectez-vous à votre espace candidat Connect Emploi.</li>
                  <li>Accédez à la section « Profil » ou « Mon CV en ligne ».</li>
                  <li>Collez l'URL dans le champ « Site personnel / Portfolio ».</li>
                  <li>Mentionnez également le lien dans votre lettre de motivation ou message de candidature : <em>« Retrouvez mes réalisations et mon laboratoire d'analyse sur mon portfolio : [coller le lien] »</em>.</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <strong className="text-xs font-semibold text-cyan-300 block mb-1">
                  Sur votre CV (Word / PDF) :
                </strong>
                <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1.5">
                  <li>Ouvrez votre modèle de CV dans Microsoft Word.</li>
                  <li>Sous vos coordonnées (Dakar, E-mail, Tél), ajoutez une ligne :</li>
                  <li className="font-mono text-teal-300">Portfolio : [coller l'adresse]</li>
                  <li>Créez un lien hypertexte cliquable (Ctrl+K) sur le texte pour faciliter la vie du recruteur.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Guide 2: Alternative Free Deployment (GitHub Pages & Vercel) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              2. Solution alternative gratuite et permanente (GitHub & Vercel)
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              Si vous souhaitez avoir un nom de domaine personnalisé gratuit à vie (ex: <code>mameassane.vercel.app</code>) ou héberger le code sur votre propre compte GitHub personnel :
            </p>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-[11px] text-teal-400 shrink-0">
                  1
                </span>
                <div>
                  <strong>Créer un compte GitHub gratuit :</strong> rendez-vous sur <span className="text-teal-300">github.com</span> et créez votre compte avec votre adresse e-mail.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-[11px] text-teal-400 shrink-0">
                  2
                </span>
                <div>
                  <strong>Télécharger le dossier du portfolio :</strong> conservez l'arborescence des fichiers (React / Vite).
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-[11px] text-teal-400 shrink-0">
                  3
                </span>
                <div>
                  <strong>Connexion en 1 clic sur Vercel (gratuit à 100%) :</strong> allez sur <span className="text-teal-300">vercel.com</span>, connectez-vous avec votre compte GitHub, choisissez votre dépôt et cliquez sur <em>Deploy</em>. En 30 secondes, vous obtenez une URL publique gratuite avec certificat SSL sécurisé (HTTPS).
                </div>
              </div>
            </div>
          </div>

          {/* Guide 3: Future Updates */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0f172a]/60 space-y-2 text-xs">
            <strong className="text-slate-200 block text-xs uppercase font-semibold">
              3. Comment faire évoluer votre portfolio dans le futur ?
            </strong>
            <p className="text-slate-400 leading-relaxed">
              Toutes les informations (nouveaux projets, validation de votre diplôme UN-CHK, certifications Cisco obtenues) sont centralisées dans le fichier unique <code>src/data/portfolioData.ts</code>. Vous n'avez pas besoin de toucher au code de design : il vous suffit d'ajouter votre nouveau projet ou de passer le statut d'une certification à « Obtenue ».
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Besoin d'aide ? Vous avez la garantie d'un site prêt à l'emploi.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
          >
            J'ai compris, fermer
          </button>
        </div>
      </div>
    </div>
  );
};
