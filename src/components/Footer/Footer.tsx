import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', labelKey: 'home' },
    { id: 'about', labelKey: 'about' },
    { id: 'skills', labelKey: 'skills' },
    { id: 'projects', labelKey: 'projects' },
    { id: 'experience', labelKey: 'experience' },
    { id: 'education', labelKey: 'education' },
    { id: 'certificates', labelKey: 'certificates' },
    { id: 'documents', labelKey: 'documents' },
    { id: 'contact', labelKey: 'contact' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-xs shadow-md">
                SN
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Saral Nithisombatsakul
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t('footer.brandTag')}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#0077b5] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-1"
                >
                  {t(`nav.${link.labelKey}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Academic & Stack Info (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Software Innovation
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sripatum University • Computer Science
              <br />
              High Vocational in Digital Graphics (Siamtech)
              <br />
              Current GPAX: <span className="text-accent-cyan font-bold">3.82</span>
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                React • Node • .NET • SQL
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.copyright')}</p>

          <p className="flex items-center gap-1.5 text-center">
            {t('footer.designedWith')}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors font-medium"
            aria-label="Scroll back to top"
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
