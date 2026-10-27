import React, { useState } from 'react';
import { Menu, X, Share2, FileText, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenPublishGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenPublishGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Démo Données', href: '#lab-stats' },
    { label: 'Expériences & Études', href: '#parcours' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b1120]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm tracking-wider group-hover:border-teal-400 transition-colors">
            MN
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white tracking-tight group-hover:text-teal-300 transition-colors whitespace-nowrap">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-400 font-normal">
              SID · EMIA, Dakar
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single Line, Clean Text with Hover Underline) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-teal-400/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Quick Tools */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPublishGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-teal-300 bg-teal-950/40 hover:bg-teal-900/50 border border-teal-500/30 rounded-lg transition-colors whitespace-nowrap"
            title="Partager le lien public (assaneportfolio.netlify.app)"
          >
            <Share2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Lien public</span>
          </button>

          <button
            onClick={onOpenCv}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-slate-300" />
            <span>Consulter CV</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-teal-950"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Me contacter</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenPublishGuide}
            className="p-1.5 text-teal-300 bg-teal-950/40 border border-teal-500/30 rounded-lg"
            title="Lien public"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu de navigation"
            className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:bg-slate-800/80 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#0f172a] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-100 bg-slate-800 rounded-lg border border-slate-700"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Consulter / Télécharger mon CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-500 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Me contacter directement</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
