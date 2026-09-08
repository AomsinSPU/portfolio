import React from 'react';
import type { Project } from '../../types';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArchitectureDiagram } from '../common/ArchitectureDiagram';
import { GithubIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, AlertTriangle, Lightbulb, CheckCircle2, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { t, loc, locList } = useLanguage();
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (project) {
      setSelectedImg(project.image);
    }
  }, [project]);

  if (!project) return null;

  const currentImg = selectedImg || project.image;
  const gallery = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [project.image];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={loc(project.title)}
      maxWidth="4xl"
    >
      <div className="space-y-6 text-slate-800 dark:text-slate-200">
        {/* Top Media Banner & Screenshots Switcher */}
        <div className="space-y-2">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-inner flex items-center justify-center">
            <img
              src={currentImg}
              alt={loc(project.title)}
              className="w-full h-full object-contain object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/projects/wms-preview.svg';
              }}
            />
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <Badge variant="cyan" size="md">
                {project.category.toUpperCase()}
              </Badge>
            </div>
          </div>

          {/* Screenshot Thumbnails (if multiple available) */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto py-1 px-0.5">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImg(imgUrl)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-slate-950 ${
                    currentImg === imgUrl
                      ? 'border-primary-500 scale-105 shadow-md shadow-primary-500/20'
                      : 'border-slate-300 dark:border-slate-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Overview & Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono text-primary-500 uppercase font-semibold">
              {t('projects.modal.overview')}
            </span>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              {loc(project.fullDescription)}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" icon={<GithubIcon className="w-4 h-4" />}>
                  {t('projects.github')}
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                  {t('projects.liveDemo')}
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-xl p-4">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm mb-2">
              <AlertTriangle className="w-4 h-4" />
              {t('projects.modal.problem')}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {loc(project.problem)}
            </p>
          </div>

          <div className="bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl p-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4" />
              {t('projects.modal.solution')}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {loc(project.solution)}
            </p>
          </div>
        </div>

        {/* Architecture Flow Diagram */}
        {project.architecture && (
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary-500" />
              {t('projects.modal.architecture')}
            </h4>
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        )}

        {/* Key Features */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
            {t('projects.modal.features')}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {locList(project.features).map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800/60"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
            {t('projects.modal.techStack')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & What I Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {project.challenges && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {t('projects.modal.challenges')}
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {loc(project.challenges)}
              </p>
            </div>
          )}

          {project.learned && (
            <div className="p-4 rounded-xl bg-primary-50/50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-900/30">
              <div className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Lightbulb className="w-3.5 h-3.5" />
                {t('projects.modal.learned')}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {loc(project.learned)}
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
