import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { documentOptions } from '../../data/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { DocumentViewerModal } from './DocumentViewerModal';

export const DocumentSection: React.FC = () => {
  const { t, loc, locList } = useLanguage();
  const [docType, setDocType] = useState<'resume' | 'cv'>('resume');
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const currentDoc = documentOptions[docType];

  return (
    <section id="documents" className="py-20 md:py-28 bg-slate-50/70 dark:bg-slate-900/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('documents.badge')}
          badgeIcon={<FileText className="w-3.5 h-3.5" />}
          title={t('documents.title')}
          subtitle={t('documents.subtitle')}
          align="center"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setDocType('resume')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                docType === 'resume'
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              {t('documents.resumeTab')}
            </button>

            <button
              onClick={() => setDocType('cv')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                docType === 'cv'
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              {t('documents.cvTab')}
            </button>
          </div>
        </div>

        {/* Selected Document Overview Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={docType}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              hoverEffect={false}
              className="p-6 sm:p-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Info (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={docType === 'resume' ? 'cyan' : 'emerald'} size="sm">
                      {docType === 'resume' ? '1-Page ATS Ready' : 'Academic & Multi-Page'}
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">
                      Updated: {currentDoc.lastUpdated}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {loc(currentDoc.title)}
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">
                    {loc(currentDoc.subtitle)}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {loc(currentDoc.description)}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                      {t('documents.highlightsTitle')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {locList(currentDoc.highlights).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Box (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8" />
                  </div>

                  <p className="text-xs font-mono text-slate-500 mb-1">
                    {currentDoc.filename}
                  </p>
                  <p className="text-xs text-slate-400 mb-6">
                    Formatted PDF • Instant Preview
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                      variant="primary"
                      size="md"
                      className="flex-1"
                      icon={<Eye className="w-4 h-4" />}
                      onClick={() => setIsViewerOpen(true)}
                    >
                      {t('documents.viewOnline')}
                    </Button>

                    <a
                      href={currentDoc.pdfUrl}
                      download={currentDoc.filename}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="md"
                        className="w-full"
                        icon={<Download className="w-4 h-4" />}
                      >
                        {t('documents.downloadPdf')}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive In-Browser Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        activeDocType={docType}
        onSelectDocType={setDocType}
      />
    </section>
  );
};
