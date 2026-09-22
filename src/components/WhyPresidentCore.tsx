import React from 'react';
import { ShieldCheck, Layers, Award, Sparkles } from 'lucide-react';

export const WhyPresidentCore: React.FC = () => {
  const pillars = [
    {
      title: 'RELIABILITY',
      subtitle: 'Dependable Execution',
      desc: 'Solutions focused on dependable delivery and long-term business needs.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'VERSATILITY',
      subtitle: 'Integrated Scope',
      desc: 'Multiple solution categories under one trusted supplier.',
      icon: Layers,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      title: 'QUALITY',
      subtitle: 'Rigorous Standards',
      desc: 'Professional products, services and project support.',
      icon: Award,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'CONVENIENCE',
      subtitle: 'Single Partner',
      desc: 'One supplier for multiple business requirements.',
      icon: Sparkles,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold tracking-widest uppercase mb-4">
            <span>THE PRESIDENTCORE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            WHY PRESIDENTCORE?
          </h2>

          <div className="w-16 h-1 bg-amber-500 mx-auto my-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A partnership built on accountability, cross-industry expertise, and practical solutions.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} border ${pillar.borderColor} flex items-center justify-center ${pillar.color} mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-950 uppercase tracking-tight mt-1">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Core Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
