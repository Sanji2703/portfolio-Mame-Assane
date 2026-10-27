import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { DataLabInteractive } from './components/DataLabInteractive';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { LearningPath } from './components/LearningPath';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { PublishGuideModal } from './components/PublishGuideModal';
import { Share2, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isPublishGuideOpen, setIsPublishGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Recruiter Quick Banner */}
      <div className="no-print bg-gradient-to-r from-teal-950/70 via-slate-900 to-cyan-950/70 border-b border-teal-500/20 px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span>
              <strong>Recruteurs & Responsables RH :</strong> Mame Assane Ndoye est disponible pour un stage en Statistique & Informatique Décisionnelle (EMIA · Dakar).
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPublishGuideOpen(true)}
              className="text-teal-300 hover:text-teal-200 underline font-medium flex items-center gap-1"
            >
              <Share2 className="w-3 h-3" />
              <span>Lien public pour Connect Emploi</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={() => setIsCvOpen(true)}
              className="text-slate-300 hover:text-white underline font-medium hidden sm:flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-teal-400" />
              <span>Consulter le CV format A4</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero
          onOpenCv={() => setIsCvOpen(true)}
          onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
        />
        <About />
        <Skills />
        <DataLabInteractive />
        <Projects />
        <ExperienceEducation />
        <LearningPath />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenCv={() => setIsCvOpen(true)}
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <PublishGuideModal
        isOpen={isPublishGuideOpen}
        onClose={() => setIsPublishGuideOpen(false)}
      />
    </div>
  );
}
