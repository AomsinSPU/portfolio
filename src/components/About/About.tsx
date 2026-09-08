import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Compass, Sparkles, GraduationCap, Layers, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      key: 'gpax',
      icon: <Award className="w-5 h-5 text-accent-cyan" />,
      value: t('about.stats.gpax.value'),
      label: t('about.stats.gpax.label'),
      detail: 'Sripatum University',
    },
    {
      key: 'projects',
      icon: <Layers className="w-5 h-5 text-primary-500" />,
      value: t('about.stats.projects.value'),
      label: t('about.stats.projects.label'),
      detail: 'WMS, Booking, Matches',
    },
    {
      key: 'tech',
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      value: t('about.stats.tech.value'),
      label: t('about.stats.tech.label'),
      detail: 'Full-Stack Ecosystem',
    },
    {
      key: 'grad',
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
      value: t('about.stats.grad.value'),
      label: t('about.stats.grad.label'),
      detail: 'B.Sc. Software Innovation',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('about.badge')}
          badgeIcon={<User className="w-3.5 h-3.5" />}
          title={t('about.title')}
          subtitle={t('about.lead')}
          align="center"
        />

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Card hoverEffect className="text-center p-5 sm:p-6 h-full flex flex-col justify-between">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  {stat.detail}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <Card hoverEffect={false} className="p-6 sm:p-8 h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary-500" />
                The Engineering Journey
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
              </div>

              {/* Unique edge: Graphic Design + Software Engineering */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/20">
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-300 uppercase tracking-wider mb-1">
                  Unique Technical Blend
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                  Background in 3D Digital Graphics (GPAX 3.72) brings superior spatial intuition and visual polish to frontend development, while Computer Science training delivers architectural rigor to backend APIs and relational database models.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Career Objective & Focus (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Career Objective Card */}
            <Card hoverEffect className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-primary-500 mb-2">
                <Award className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  {t('about.careerObjTitle')}
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('about.careerObjective')}
              </p>
            </Card>

            {/* Current Focus Card */}
            <Card hoverEffect className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-accent-cyan mb-2">
                <Sparkles className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  {t('about.currentFocusTitle')}
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('about.currentFocus')}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Open for 2026/2027 Opportunities</span>
                <a href="#contact" className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold gap-1">
                  Connect <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
