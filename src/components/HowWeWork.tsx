import React from 'react';
import { MessageSquare, Compass, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'CONSULT',
      desc: "Understand the client's requirements, site constraints, and operational goals.",
      icon: MessageSquare,
      accent: 'border-amber-400 text-amber-400'
    },
    {
      step: '02',
      title: 'PLAN',
      desc: 'Develop the appropriate solution, engineering architecture, and itemized procurement schedule.',
      icon: Compass,
      accent: 'border-blue-400 text-blue-400'
    },
    {
      step: '03',
      title: 'DELIVER',
      desc: 'Supply, implement or execute the required solution with certified technical specialists.',
      icon: ShieldCheck,
      accent: 'border-amber-400 text-amber-400'
    },
    {
      step: '04',
      title: 'SUPPORT',
      desc: 'Provide ongoing support where applicable through SLA maintenance, warranty backing, and spares.',
      icon: Headphones,
      accent: 'border-blue-400 text-blue-400'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold tracking-widest uppercase mb-4">
            <span>STRUCTURED METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            HOW WE WORK
          </h2>

          <div className="w-16 h-1 bg-amber-500 mx-auto my-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A transparent four-phase execution model ensuring project predictability, technical accuracy, and reliable results.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="mt-16 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold tracking-tighter text-slate-950 group-hover:text-blue-700 transition-colors">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-950 uppercase tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
                    <span>Phase 0{idx + 1}</span>
                    <span className="text-amber-600">Verified Step</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
