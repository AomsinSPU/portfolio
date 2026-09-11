import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ArrowRight, Star } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ProjectDetailModal } from './ProjectDetailModal';
import { getAssetUrl } from '../../utils/asset';

type ProjectFilter = 'all' | 'fullstack' | 'backend' | 'systems';

export const Projects: React.FC = () => {
  const { t, loc, locList } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { key: ProjectFilter; labelKey: string }[] = [
    { key: 'all', labelKey: 'all' },
    { key: 'fullstack', labelKey: 'fullstack' },
    { key: 'backend', labelKey: 'backend' },
    { key: 'systems', labelKey: 'systems' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'systems') return project.id === 'wms-system' || project.id === 'badminton-booking' || project.id === 'crop-chatbot';
    return project.category === filter;
  });

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('projects.badge')}
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          align="center"
        />

        {/* Featured Project Spotlight Hero (Badminton Court Booking) */}
        {featuredProject && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t('projects.featuredTitle')}
              </span>
            </div>

            <Card
              hoverEffect={false}
              className="p-0 overflow-hidden border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Snapshot (7 cols) */}
                <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 flex items-center justify-center relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
                  <img
                    src={featuredProject.image}
                    alt={loc(featuredProject.title)}
                    className="w-full h-auto max-h-[380px] object-cover rounded-lg shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedProject(featuredProject)}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getAssetUrl('/assets/projects/court-preview.svg');
                    }}
                  />
                  <div className="absolute top-6 left-6">
                    <Badge variant="cyan" size="sm">
                      Full-Stack ASP.NET Core &amp; MySQL
                    </Badge>
                  </div>
                </div>

                {/* Content Side (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-primary-500 font-semibold uppercase">
                        Featured Architecture • CSI402 SPU
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      {loc(featuredProject.title)}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {loc(featuredProject.shortDescription)}
                    </p>

                    {/* Features Snippet */}
                    <div className="mt-4 space-y-2">
                      {locList(featuredProject.features).slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                      onClick={() => setSelectedProject(featuredProject)}
                    >
                      {t('projects.viewModal')}
                    </Button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        <GithubIcon className="w-4 h-4" />
                        {t('projects.github')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          {filters.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {t(`projects.filters.${f.labelKey}`)}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  hoverEffect
                  className="p-0 overflow-hidden flex flex-col justify-between h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 group"
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div
                      className="relative w-full h-48 bg-slate-950 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={loc(project.title)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getAssetUrl('/assets/projects/court-preview.svg');
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" size="sm">
                          {project.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <h4
                        className="text-lg font-bold text-slate-900 dark:text-white leading-snug cursor-pointer hover:text-primary-500 transition-colors"
                        onClick={() => setSelectedProject(project)}
                      >
                        {loc(project.title)}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {loc(project.shortDescription)}
                      </p>

                      {/* Tech Chips */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 inline-flex items-center gap-1"
                    >
                      {t('projects.viewModal')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
