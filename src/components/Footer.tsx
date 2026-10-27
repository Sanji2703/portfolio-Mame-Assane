import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCv: () => void;
  onOpenPublishGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCv, onOpenPublishGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070b14] py-8 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-teal-400 font-mono">SID / Informatique Décisionnelle</span>
            </div>
            <p className="mt-1 text-slate-400 max-w-md">
              Portfolio professionnel conçu pour la recherche de stages et d'opportunités juniors à Dakar, Sénégal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={onOpenPublishGuide}
              className="hover:text-teal-300 transition-colors flex items-center gap-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Guide Lien Public</span>
            </button>
            <button
              onClick={onOpenCv}
              className="hover:text-teal-300 transition-colors"
            >
              Curriculum Vitae
            </button>
            <a href="#projets" className="hover:text-teal-300 transition-colors">
              Projets
            </a>
            <a href="#lab-stats" className="hover:text-teal-300 transition-colors">
              Démo Interactive
            </a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Mame Assane Ndoye. Tous droits réservés. Dakar, Sénégal.
          </div>

          <div className="flex items-center gap-4">
            <span>Disponibilité immédiate pour stage</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="Retourner en haut de la page"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
