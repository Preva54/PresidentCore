import React from 'react';
import { Truck, ArrowRight, ShieldCheck, Cog, Gauge, Hammer } from 'lucide-react';

interface HeavyMachinerySectionProps {
  onExploreIndustrial: () => void;
  onRequestQuote: () => void;
}

export const HeavyMachinerySection: React.FC<HeavyMachinerySectionProps> = ({
  onExploreIndustrial,
  onRequestQuote
}) => {
  return (
    <section className="relative py-28 lg:py-36 bg-slate-950 text-white overflow-hidden">
      {/* Cinematic Heavy Machinery Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=2000&q=85"
          alt="PresidentCore Heavy Machinery & Industrial Plant Support"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep Industrial Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070F1E] via-[#070F1E]/95 to-[#070F1E]/70" />
        <div className="absolute inset-0 bg-[#070F1E]/60 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            <Truck className="w-3.5 h-3.5" />
            <span>HEAVY MACHINERY & PLANT SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-lg">
            POWERING DEMANDING <br />
            <span className="text-amber-400">OPERATIONS.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
            From industrial environments to construction sites, PresidentCore Projects provides practical equipment and support solutions for demanding operations.
          </p>

          {/* Core Support Bullets */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/80">
            <div className="flex items-center gap-2.5">
              <Cog className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Hydraulic & Engine Overhauls</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Gauge className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">On-Site Machine Diagnostics</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Hammer className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Wear Parts & Track Servicing</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              id="btn-explore-industrial"
              onClick={onExploreIndustrial}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>EXPLORE INDUSTRIAL SOLUTIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm tracking-wide border border-slate-700 hover:border-slate-500 transition-colors backdrop-blur-md"
            >
              Request Fleet Machinery Support
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
