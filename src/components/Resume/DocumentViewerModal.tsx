import React from 'react';
import { Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { documentOptions, personalInfo } from '../../data/portfolio';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDocType: 'resume' | 'cv';
  onSelectDocType: (type: 'resume' | 'cv') => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  activeDocType,
  onSelectDocType,
}) => {
  const { t, loc, locList } = useLanguage();
  const doc = documentOptions[activeDocType];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={loc(doc.title)}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Document Type Selector Tabs inside Modal */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl">
            <button
              onClick={() => onSelectDocType('resume')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeDocType === 'resume'
                  ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('documents.resumeTab')}
            </button>
            <button
              onClick={() => onSelectDocType('cv')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeDocType === 'cv'
                  ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('documents.cvTab')}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href={doc.pdfUrl}
              download={doc.filename}
              className="inline-flex"
            >
              <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                {t('documents.downloadPdf')}
              </Button>
            </a>
          </div>
        </div>

        {/* Document Highlights */}
        <div className="bg-primary-50/50 dark:bg-slate-800/50 border border-primary-100 dark:border-slate-700/60 rounded-xl p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t('documents.highlightsTitle')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {locList(doc.highlights).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Realistic In-Browser Document Preview Sheet */}
        <div className="rounded-xl border border-slate-300 dark:border-slate-700 shadow-2xl bg-white text-slate-900 p-6 sm:p-10 font-sans max-h-[55vh] overflow-y-auto">
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-slate-900">
                {personalInfo.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 font-mono mt-0.5">
                {activeDocType === 'resume' ? 'FULL-STACK DEVELOPER' : 'SOFTWARE INNOVATION & FULL-STACK ENGINEER'}
              </p>
            </div>
            <div className="text-right text-[11px] text-slate-600 font-mono space-y-0.5">
              <p>{personalInfo.location.en} • {personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.github.replace('https://', '')} • {personalInfo.linkedin.replace('https://', '')}</p>
            </div>
          </div>

          {/* Document Content Blocks */}
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-800">
            {/* Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-900">
                PROFESSIONAL SUMMARY
              </h3>
              <p className="text-slate-700 text-xs sm:text-[13px]">
                Highly analytical and detail-oriented Full-Stack Developer with a strong academic foundation in Computer Science and Software Innovation (GPAX 3.82). Proven capability in designing, developing, and deploying scalable web applications using React.js, Node.js, and ASP.NET Core MVC (C#). Adept at implementing hybrid database architectures (MS SQL, MySQL, MongoDB).
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-900">
                TECHNICAL SKILLS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-700">
                <p><strong className="text-slate-900">Languages:</strong> C#, JavaScript (ES6+), TypeScript, SQL (T-SQL, MySQL), HTML5, CSS3</p>
                <p><strong className="text-slate-900">Frameworks:</strong> React.js, Node.js, Express.js, ASP.NET Core MVC</p>
                <p><strong className="text-slate-900">Databases:</strong> MS SQL Server, MySQL, MongoDB, Firebase</p>
                <p><strong className="text-slate-900">Tools:</strong> Git, GitHub, RESTful APIs, OOP, MVC Architecture, Postman, Docker</p>
              </div>
            </div>

            {/* Core Technical Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-900">
                TECHNICAL PROJECTS
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                    <span>Warehouse Management System (WMS)</span>
                    <span className="font-mono text-xs font-normal text-slate-600">Full-Stack Developer</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                    <li>Co-developed responsive web application for inventory tracking, real-time stock reporting, and analysis.</li>
                    <li>Constructed scalable RESTful APIs utilizing Node.js &amp; Express to seamlessly handle stock adjustments.</li>
                    <li>Implemented optimized relational database schemas in MySQL ensuring strict ACID transactional integrity.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                    <span>Badminton Court Booking &amp; Management System</span>
                    <span className="font-mono text-xs font-normal text-slate-600">Full-Stack Developer</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                    <li>Engineered web app for court reservations using ASP.NET Core MVC (C#) and MS SQL Server.</li>
                    <li>Built zero-collision scheduling algorithms eliminating double-booking conflicts across court slots.</li>
                  </ul>
                </div>

                {activeDocType === 'cv' && (
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                      <span>Sports Venue &amp; Matchmaking Application</span>
                      <span className="font-mono text-xs font-normal text-slate-600">Full-Stack Developer</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                      <li>Engineered hybrid database architecture combining SQL (venues) and NoSQL/MongoDB (match feeds).</li>
                      <li>Developed intuitive real-time user browsing interface using React.js and Tailwind CSS.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Work & Practical Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-900">
                PRACTICAL &amp; PROFESSIONAL EXPERIENCE
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Part-Time Retail &amp; Logistics Associate — Nitori Retail</span>
                    <span className="font-mono text-slate-600 font-normal">May 2025 – Jul 2025</span>
                  </div>
                  <p className="text-slate-700">Managed warehouse inventory flow and precision stock placement; applied operational principles to WMS project.</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Freelance 3D Template &amp; Asset Designer — Digital Content</span>
                    <span className="font-mono text-slate-600 font-normal">May 2023 – Dec 2023</span>
                  </div>
                  <p className="text-slate-700">Modeled optimized 3D assets and textures for real-time game engines with polygon budget constraints.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-900">
                EDUCATION
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Sripatum University (SPU) — B.Sc. Computer Science &amp; Software Innovation</span>
                  <span className="font-mono text-primary-700">GPAX: 3.82 (Grad: 2027)</span>
                </div>
                {activeDocType === 'cv' && (
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Siam Technological College (Siamtech) — High Vocational Certificate in Digital Graphics</span>
                    <span className="font-mono text-slate-600">GPAX: 3.72 (Mar 2023)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex justify-between">
              <span><strong>Military Status:</strong> Exempted (ผ่านการตรวจเลือกทหารเรียบร้อยแล้ว)</span>
              <span><strong>Languages:</strong> Thai (Native), English (Technical / Working)</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
