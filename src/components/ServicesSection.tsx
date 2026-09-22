import React from 'react';
import { 
  Factory, 
  Wrench, 
  Building2, 
  Monitor, 
  Truck, 
  Boxes, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
  onRequestQuoteForService
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return Factory;
      case 'Wrench':
        return Wrench;
      case 'Building2':
        return Building2;
      case 'Monitor':
        return Monitor;
      case 'Truck':
        return Truck;
      case 'Boxes':
      default:
        return Boxes;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#070F1E] text-white relative overflow-hidden">
      {/* Subtle Grid and Glow Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTEGRATED CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            OUR CORE SOLUTIONS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Practical expertise and reliable support across multiple industries.
          </p>

          <div className="w-16 h-1 bg-amber-400 mx-auto my-6 rounded-full" />
        </div>

        {/* 6 Large Service Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Background Image Container with Gradient Overlay */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  
                  {/* Number Tag & Icon Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-950/80 text-amber-400 border border-amber-400/30 backdrop-blur-md">
                      0{index + 1}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-blue-400 group-hover:text-amber-400 group-hover:border-amber-400/60 transition-colors backdrop-blur-md shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">
                      PresidentCore Division
                    </span>
                    <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors uppercase mt-0.5">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Capabilities Preview Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {service.capabilities.slice(0, 2).map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      id={`btn-learn-more-${service.id}`}
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-amber-400 transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      id={`btn-quote-service-${service.id}`}
                      onClick={() => onRequestQuoteForService(service.title)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition-colors border border-slate-700 hover:border-amber-400"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Subtle Gold Accent Bottom Line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
