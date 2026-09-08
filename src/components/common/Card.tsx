import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glow?: 'none' | 'cyan' | 'indigo';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  glow = 'none',
  className = '',
  ...props
}) => {
  const glowStyles = {
    none: '',
    cyan: 'hover:shadow-glow-cyan',
    indigo: 'hover:shadow-glow-indigo',
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl'
          : 'shadow-sm'
      } ${glowStyles[glow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
