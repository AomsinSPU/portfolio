import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolio';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface HeroProps {
  onOpenDocuments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDocuments }) => {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary-600/15 dark:bg-primary-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <div className="mb-4">
              <Badge
                variant="cyan"
                size="md"
                icon={<span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping mr-1" />}
              >
                {t('hero.badge')}
              </Badge>
            </div>

            {/* Greeting & Name */}
            <div className="mb-2">
              <span className="text-sm sm:text-base font-mono text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">
                {t('hero.greeting')}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mt-1">
                {language === 'th' ? personalInfo.thaiName : personalInfo.name}
                <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-violet mt-1">
                  ({language === 'th' ? personalInfo.thaiNickname : personalInfo.nickname})
                </span>
              </h1>
            </div>

            {/* Title / Specialization */}
            <div className="mt-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <Terminal className="w-4 h-4 text-primary-500" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {t('hero.roleTag')}
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {t('hero.bio')}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-8">
              <a href="#projects">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {t('hero.viewProjects')}
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
                onClick={onOpenDocuments}
              >
                {t('hero.viewDocuments')}
              </Button>

              <a href="#contact">
                <Button
                  variant="ghost"
                  size="lg"
                  icon={<Mail className="w-4 h-4 text-accent-cyan" />}
                >
                  {t('hero.contactMe')}
                </Button>
              </a>
            </div>

            {/* Social Links & Quick Tagline */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800 w-full justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-red-500 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Send Email"
                  title="Send Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Bangkok, TH (GMT+7)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Portrait & Floating Elements (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] max-w-sm">
              {/* Outer decorative neon border frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary-600 via-accent-cyan to-accent-violet opacity-30 blur-lg animate-pulseSubtle" />

              {/* Portrait Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-2xl group">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">
                        {personalInfo.name}
                      </p>
                      <p className="text-[11px] text-accent-cyan font-mono">
                        GPAX 3.82 • High Honors
                      </p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-primary-500/20 text-primary-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill 1: Full-Stack / C# */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 backdrop-blur-sm z-20"
              >
                <div className="p-1 rounded-md bg-indigo-500/20 text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Backend</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">ASP.NET &amp; Node</p>
                </div>
              </motion.div>

              {/* Floating Tech Pill 2: Databases */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 backdrop-blur-sm z-20"
              >
                <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Data Tier</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">SQL &amp; NoSQL</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
