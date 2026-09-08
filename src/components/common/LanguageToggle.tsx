import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
      aria-label="Switch language between English and Thai"
      title="Switch language / เปลี่ยนภาษา"
    >
      <Globe className="w-3.5 h-3.5 text-accent-cyan" />
      <span className={language === 'en' ? 'text-primary-500 font-bold' : 'text-slate-400'}>EN</span>
      <span className="text-slate-400 text-[10px]">|</span>
      <span className={language === 'th' ? 'text-primary-500 font-bold' : 'text-slate-400'}>TH</span>
    </button>
  );
};
