import React, { useState } from 'react';
import { X, Printer, Download, ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'pdf' | 'html'>('pdf');

  if (!isOpen) return null;

  const pdfUrl = PERSONAL_INFO.cvPdfUrl || '/cv_mame_assane_ndoye.pdf';

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `CV Mame Assane Ndoye
Étudiant en Licence 2 Statistique et Informatique Décisionnelle (SID)
EMIA (Liberté 6, Dakar) · Dakar, Sénégal
E-mail: ${PERSONAL_INFO.email} · Tél: ${PERSONAL_INFO.phoneDisplay}
Portfolio en ligne: ${PERSONAL_INFO.publicAppUrl}

FORMATION:
- Licence 2 Statistique et Informatique Décisionnelle — EMIA — Liberté 6 (en cours)
- Licence 1 Mathématique Physique Informatique (MPI) — UCAD — Dakar (2024-2025)
- Licence Sciences Informatiques et Mathématiques de la Cybersécurité — UNCHK (2025 - en cours)
- Baccalauréat série S2 — Lycée Blaise Diagne — Dakar (2023-2024)

EXPÉRIENCES:
- Responsable section Junior (3 ans et 2 mois) — Vovinam Viet Vo Dao (Gendarmerie Nationale, depuis 01/2023)
- Professeur particulier de mathématiques (1 an et 5 mois) — Freelance, Dakar (depuis 10/2024)

COMPÉTENCES CLÉS:
- Utilisation très poussée de l'IA (Prompt engineering avancé, accélération de code et d'analyse)
- Statistique descriptive, interprétation de données, SQL fondamentaux
- HTML5, CSS3, création de sites web simples
- Diagnostic pannes matérielles & logicielles, Windows, dépannage réseau Wi-Fi`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl text-left my-4 overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="no-print p-3 sm:px-6 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-teal-400" />
              CV Officiel de Mame Assane Ndoye
            </span>

            {/* Tab switchers */}
            <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  activeTab === 'pdf'
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Document PDF
              </button>
              <button
                onClick={() => setActiveTab('html')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  activeTab === 'html'
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Version Texte & Impression
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="CV_de_Mame_Assane_Ndoye.pdf"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center gap-1.5 transition-colors shadow-sm"
              title="Télécharger le fichier PDF original"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger le PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Ouvrir dans un nouvel onglet"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopySummary}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hidden sm:flex items-center gap-1.5 transition-colors"
              title="Copier le résumé texte pour candidatures"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copié !' : 'Copier texte'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Fermer le CV"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {activeTab === 'pdf' ? (
          <div className="flex-1 w-full bg-slate-950 flex flex-col items-center justify-center p-2 min-h-[500px] overflow-hidden">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="CV de Mame Assane Ndoye (PDF)"
              className="w-full h-[76vh] rounded-lg border border-slate-800 bg-white"
            />
            <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-3">
              <span>Le PDF ne s'affiche pas dans votre navigateur ?</span>
              <a
                href={pdfUrl}
                download="CV_de_Mame_Assane_Ndoye.pdf"
                className="text-teal-400 hover:underline font-semibold"
              >
                Cliquez ici pour télécharger le PDF directement
              </a>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 overflow-y-auto bg-white text-slate-900 print:p-0 print:m-0 print:overflow-visible">
            {/* CV Header */}
            <div className="border-b-2 border-slate-900 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Mame Assane NDOYE
                  </h1>
                  <p className="text-sm font-semibold text-teal-700 mt-1 uppercase tracking-wide">
                    Étudiant en Informatique | Analyse de Données | Support Informatique | Développement Web
                  </p>
                  <p className="text-xs text-slate-600 mt-1 max-w-xl">
                    Étudiant en Licence 2 Statistique et Informatique Décisionnelle à l'EMIA. Curieux, organisé et motivé pour contribuer à des projets data et transformation numérique.
                  </p>
                </div>

                <div className="text-xs text-slate-700 space-y-1 font-mono shrink-0 sm:text-right">
                  <div>Colobane, 11241 Dakar</div>
                  <div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-700 hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div>{PERSONAL_INFO.phoneDisplay}</div>
                  <div className="text-[11px] text-slate-500 pt-0.5">
                    Portfolio : <span className="text-teal-700 font-semibold">{PERSONAL_INFO.publicAppUrl}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CV Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 text-xs">
              <div className="md:col-span-8 space-y-4">
                {/* Formation */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Formation
                  </h2>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-xs font-bold text-slate-900">
                          Licence 2 Statistique et Informatique Décisionnelle
                        </strong>
                        <span className="font-mono text-slate-600">En cours</span>
                      </div>
                      <div className="text-teal-800 font-semibold">EMIA — Liberté 6 · Dakar</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-xs font-bold text-slate-900">
                          Licence 1 Mathématique Physique Informatique (MPI), sciences fondamentales
                        </strong>
                        <span className="font-mono text-slate-600">2024 – 2025</span>
                      </div>
                      <div className="text-slate-700 font-medium">UCAD — Dakar</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-xs font-bold text-slate-900">
                          Licence Sciences Informatiques et Mathématiques de la Cybersécurité
                        </strong>
                        <span className="font-mono text-slate-600">2025 – En cours</span>
                      </div>
                      <div className="text-slate-700 font-medium">UNCHK (ex UVS) — Dakar</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-xs font-bold text-slate-900">
                          Baccalauréat série S2
                        </strong>
                        <span className="font-mono text-slate-600">2023 – 2024</span>
                      </div>
                      <div className="text-slate-700 font-medium">Lycée Blaise Diagne — Dakar</div>
                    </div>
                  </div>
                </div>

                {/* Expériences */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Expérience
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-xs font-bold text-slate-900">
                          Responsable section Junior (3 ans et 2 mois)
                        </strong>
                        <span className="font-mono text-slate-600">Depuis 01/2023</span>
                      </div>
                      <div className="text-slate-700 font-medium">
                        Vovinam Viet Vo Dao — Gendarmerie Nationale · Volontariat, Dakar
                      </div>
                      <p className="text-slate-600 mt-0.5">
                        Encadrement de 50 jeunes, discipline, sécurité et gestion des cotisations.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-xs font-bold text-slate-900">
                          Professeur particulier de mathématiques (1 an et 5 mois)
                        </strong>
                        <span className="font-mono text-slate-600">Depuis 10/2024</span>
                      </div>
                      <div className="text-slate-700 font-medium">Freelance · Dakar</div>
                      <p className="text-slate-600 mt-0.5">
                        Soutien scolaire personnalisé pour élèves de 4e, 3e et Seconde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 space-y-4">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Compétences Clés
                  </h2>
                  <div className="space-y-1.5 text-slate-700">
                    <div>
                      <strong className="block text-teal-800">Intelligence Artificielle</strong>
                      Utilisation très poussée de l'IA générative et prompt engineering.
                    </div>
                    <div>
                      <strong className="block text-slate-900">Statistiques & Données</strong>
                      Statistique descriptive, analyse de données, SQL de base.
                    </div>
                    <div>
                      <strong className="block text-slate-900">Développement Web</strong>
                      HTML, CSS (création de sites web simples), bases Python, C, C++.
                    </div>
                    <div>
                      <strong className="block text-slate-900">Systèmes & Réseaux</strong>
                      Windows, diagnostic matériel/logiciel, Cisco Packet Tracer.
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Centres d'intérêt & Langues
                  </h2>
                  <div className="space-y-1 text-slate-700">
                    <div>· Vovinam Viet Vo Dao (8 ans)</div>
                    <div>· Cinéma & Nouvelles technologies</div>
                    <div className="pt-1"><strong>Français :</strong> Bilingue</div>
                    <div><strong>Anglais :</strong> Avancé — C1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="no-print mt-6 pt-3 border-t border-slate-300 flex justify-end">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer cette fiche</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
