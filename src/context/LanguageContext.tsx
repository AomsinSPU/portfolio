import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language, LocalizedString, LocalizedList } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  loc: (obj?: LocalizedString) => string;
  locList: (obj?: LocalizedList) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'en' || saved === 'th') return saved;
    return 'en'; // Default to English as requested
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    if (current && typeof current === 'object' && current[language] !== undefined) {
      return current[language];
    }
    return typeof current === 'string' ? current : path;
  };

  const loc = (obj?: LocalizedString): string => {
    if (!obj) return '';
    return obj[language] || obj.en || '';
  };

  const locList = (obj?: LocalizedList): string[] => {
    if (!obj) return [];
    return obj[language] || obj.en || [];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t, loc, locList }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
