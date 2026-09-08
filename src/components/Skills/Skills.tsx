import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Layers, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

type CategoryFilter = 'all' | 'languages' | 'frameworks' | 'databases' | 'tools';

export const Skills: React.FC = () => {
  const { t, loc } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const categories: { key: CategoryFilter; icon: React.ReactNode }[] = [
    { key: 'all', icon: <Cpu className="w-3.5 h-3.5" /> },
    { key: 'languages', icon: <Code2 className="w-3.5 h-3.5" /> },
    { key: 'frameworks', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'databases', icon: <Database className="w-3.5 h-3.5" /> },
    { key: 'tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('skills.badge')}
          badgeIcon={<Cpu className="w-3.5 h-3.5" />}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat.icon}
                {t(`skills.categories.${cat.key}`)}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <Card hoverEffect className="p-5 h-full flex flex-col justify-between border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <Badge variant="cyan" size="sm">
                        {skill.tag}
                      </Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {loc(skill.description)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 capitalize">{skill.category}</span>
                    {skill.experience && (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-primary-600 dark:text-primary-400 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {loc(skill.experience)}
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
