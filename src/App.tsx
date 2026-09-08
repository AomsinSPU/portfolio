import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Certificates } from './components/Certificates/Certificates';
import { DocumentSection } from './components/Resume/DocumentSection';
import { DocumentViewerModal } from './components/Resume/DocumentViewerModal';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

const sectionIds = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'certificates',
  'documents',
  'contact',
];

const PortfolioApp: React.FC = () => {
  const activeSection = useScrollSpy(sectionIds, 120);
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [modalDocType, setModalDocType] = useState<'resume' | 'cv'>('resume');

  const handleOpenDocuments = (type: 'resume' | 'cv' = 'resume') => {
    setModalDocType(type);
    setIsDocumentsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-primary-500/30 selection:text-primary-400">
      {/* Sticky Header Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenDocuments={() => handleOpenDocuments('resume')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenDocuments={() => handleOpenDocuments('resume')} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <DocumentSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick CV / Resume Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={isDocumentsModalOpen}
        onClose={() => setIsDocumentsModalOpen(false)}
        activeDocType={modalDocType}
        onSelectDocType={setModalDocType}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
