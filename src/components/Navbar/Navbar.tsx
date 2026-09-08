import React, { useState, useEffect } from 'react';
import { Menu, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ThemeToggle } from '../common/ThemeToggle';
import { LanguageToggle } from '../common/LanguageToggle';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  activeSection: string;
  onOpenDocuments: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenDocuments }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-slate-950/80 glassmorphism border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm shadow-slate-900/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-accent-cyan flex items-center justify-center text-white font-black text-sm shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
              SN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-primary-500 transition-colors">
                Saral<span className="text-accent-cyan">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Full-Stack Dev</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {t(`nav.${link.labelKey}`)}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5" />}
              onClick={onOpenDocuments}
              className="hidden md:inline-flex"
            >
              {t('nav.resumeBtn')}
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        navLinks={navLinks}
        onOpenDocuments={onOpenDocuments}
      />
    </>
  );
};
