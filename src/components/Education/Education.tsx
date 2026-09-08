import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { educationData } from '../../data/education';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const Education: React.FC = () => {
  const { t, loc, locList } = useLanguage();

  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('education.badge')}
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          title={t('education.title')}
          subtitle={t('education.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="flex"
            >
              <Card
                hoverEffect
                className="p-6 sm:p-8 flex flex-col justify-between w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-primary-600 dark:text-primary-400">
                      {loc(edu.period)}
                    </span>
                    <Badge variant="cyan" size="sm" icon={<Award className="w-3 h-3 text-accent-cyan" />}>
                      GPAX {edu.gpax}
                    </Badge>
                  </div>

                  {/* Institution & Degree */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {loc(edu.institution)}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {loc(edu.degree)}
                  </div>
                  <div className="text-xs text-primary-500 font-mono mt-1">
                    {loc(edu.major)}
                  </div>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {loc(edu.status)}
                  </p>

                  {/* Coursework */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primary-500" />
                      {t('education.coursework')}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {locList(edu.highlightCoursework).map((course, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements Footer */}
                {edu.achievements && (
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="space-y-1.5">
                      {locList(edu.achievements).map((achieve, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{achieve}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
