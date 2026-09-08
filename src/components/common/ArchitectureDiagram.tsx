import React from 'react';
import { ArchitectureFlow } from '../../types';
import { Layout, Server, Database, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ArchitectureDiagramProps {
  architecture?: ArchitectureFlow;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ architecture }) => {
  const { loc } = useLanguage();
  if (!architecture) return null;

  const notesText = loc(architecture.notes);

  return (
    <div className="w-full bg-slate-900/90 dark:bg-slate-950 border border-slate-800 rounded-xl p-5 my-4">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
        <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-accent-cyan" />
          System Architectural Pipeline
        </span>
        <span className="text-[11px] font-mono text-slate-400">RESTful / HTTP(S)</span>
      </div>

      {/* Pipeline Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
        {/* Tier 1: Client */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-primary-500/20 text-primary-400">
              <Layout className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Presentation Layer</span>
          </div>
          <p className="text-xs text-slate-300 font-mono leading-tight">{architecture.client}</p>
        </div>

        {/* Tier 2: API Gateway */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3.5 flex flex-col justify-between relative">
          <div className="hidden md:flex absolute -left-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-500">
            <ArrowRight className="w-4 h-4 text-primary-400" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-cyan-500/20 text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">API Gateway / Auth</span>
          </div>
          <p className="text-xs text-slate-300 font-mono leading-tight">{architecture.apiGateway}</p>
        </div>

        {/* Tier 3: Application Server */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3.5 flex flex-col justify-between relative">
          <div className="hidden md:flex absolute -left-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-500">
            <ArrowRight className="w-4 h-4 text-primary-400" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-violet-500/20 text-violet-400">
              <Server className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Backend Core Services</span>
          </div>
          <p className="text-xs text-slate-300 font-mono leading-tight">{architecture.server}</p>
        </div>

        {/* Tier 4: Database */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3.5 flex flex-col justify-between relative">
          <div className="hidden md:flex absolute -left-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-500">
            <ArrowRight className="w-4 h-4 text-primary-400" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Data Persistence</span>
          </div>
          <p className="text-xs text-slate-300 font-mono leading-tight">{architecture.database}</p>
        </div>
      </div>

      {/* Notes */}
      {notesText && (
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-start gap-2">
          <span className="text-accent-cyan text-xs">ℹ</span>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{notesText}</p>
        </div>
      )}
    </div>
  );
};
