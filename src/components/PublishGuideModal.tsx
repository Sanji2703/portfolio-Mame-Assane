import React, { useState } from 'react';
import { X, Copy, Check, Globe, ExternalLink, MessageSquare, Mail } from 'lucide-react';
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

  const shareText = `Découvrez le portfolio professionnel de Mame Assane Ndoye : ${publicUrl}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-[#0d1629] p-6 sm:p-7 shadow-2xl text-left my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-teal-400 uppercase">
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>Lien Public</span>
            </div>
            <h3 className="mt-1 text-lg sm:text-xl font-bold text-white tracking-tight">
              Lien public du portfolio
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Link Box */}
        <div className="mt-5 space-y-4">
          <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/30">
            <div className="text-xs text-teal-300 font-mono mb-2 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Adresse officielle en ligne :
            </div>

            <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800">
              <input
                type="text"
                readOnly
                value={publicUrl}
                className="flex-1 bg-transparent text-xs sm:text-sm font-mono text-teal-300 px-2 py-1 outline-none select-all truncate font-semibold"
              />

              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copié !' : 'Copier'}</span>
              </button>

              <a
                href={publicUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-md text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0"
                title="Ouvrir dans un nouvel onglet"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sharing Buttons */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 px-3 text-center text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Partager sur WhatsApp</span>
            </a>

            <a
              href={`mailto:?subject=${encodeURIComponent('Portfolio de Mame Assane Ndoye')}&body=${encodeURIComponent(shareText)}`}
              className="flex-1 py-2 px-3 text-center text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Envoyer par E-mail</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
