import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const Experience: React.FC = () => {
  const { t, loc, locList } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('experience.badge')}
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 group-hover:scale-125 transition-transform" />

              {/* Date Badge on Desktop Left Side */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap mb-2 sm:mb-0">
                <span className="inline-flex items-center gap-1 sm:justify-end sm:w-28">
                  <Calendar className="w-3.5 h-3.5 text-primary-500" />
                  {loc(item.period)}
                </span>
              </div>

              {/* Experience Card */}
              <Card hoverEffect className="p-6 bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {loc(item.role)}
                    </h3>
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {loc(item.company)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={item.type === 'freelance' ? 'cyan' : 'secondary'} size="sm">
                      {item.type.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{loc(item.location)}</span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 mb-6">
                  {locList(item.responsibilities).map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
