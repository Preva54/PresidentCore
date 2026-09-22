import React from 'react';
import { 
  Layers, 
  MapPin, 
  Briefcase, 
  CheckCircle,
  Building,
  Shield,
  ArrowRight
} from 'lucide-react';
import { CompanySettings } from '../types';

interface TrustIntroProps {
  settings: CompanySettings;
  onReadMoreAbout: () => void;
  onRequestQuote: () => void;
}

export const TrustIntro: React.FC<TrustIntroProps> = ({
  settings,
  onReadMoreAbout,
  onRequestQuote
}) => {
  const statCards = [
    {
      metric: '10+',
      label: 'Solution Categories',
      desc: 'Multidisciplinary portfolio spanning IT, security, industrial, maintenance, civil & supply.',
      icon: Layers,
      highlightColor: 'text-amber-600',
      borderHover: 'hover:border-amber-400'
    },
    {
      metric: 'Nationwide',
      label: 'Service Coverage',
      desc: 'Serving businesses, industrial sites and commercial projects across all South African provinces.',
      icon: MapPin,
      highlightColor: 'text-blue-600',
      borderHover: 'hover:border-blue-400'
    },
    {
      metric: 'B2B',
      label: 'Focused Solutions',
      desc: 'Engineered specifically for corporate enterprises, industrial plants, contractors and institutions.',
      icon: Briefcase,
      highlightColor: 'text-slate-900',
      borderHover: 'hover:border-slate-400'
    },
    {
      metric: 'End-to-End',
      label: 'Project Support',
      desc: 'From consultation, procurement, and deployment to ongoing preventative maintenance.',
      icon: CheckCircle,
      highlightColor: 'text-amber-600',
      borderHover: 'hover:border-amber-400'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-tight">
            BUILT TO DELIVER. <br />
            <span className="text-blue-700">READY TO SUPPORT.</span>
          </h2>

          <div className="w-16 h-1 bg-amber-500 mx-auto my-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <strong>PresidentCore Projects (Pty) Ltd</strong> is a South African multidisciplinary solutions and supply company. 
            We provide integrated industrial, construction, maintenance, IT, heavy machinery, security, equipment, and supply-chain 
            solutions built around the operational realities of modern enterprise and infrastructure.
          </p>
        </div>

        {/* Narrative Split: Company Strengths & Capabilities */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Building className="w-5 h-5 text-blue-600" />
                <span>Single-Vendor Operational Efficiency</span>
              </h3>
              <p className="text-slate-600">
                Managing disparate contractors across IT, plant maintenance, security, and equipment sourcing creates costly administrative friction. 
                PresidentCore Projects functions as a consolidated procurement and technical execution partner—delivering accountable, high-calibre results under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-amber-600" />
                <span>Engineered for South African Business Conditions</span>
              </h3>
              <p className="text-slate-600">
                Whether deploying surge-protected IT server architectures resilient to utility fluctuations, servicing mining and construction machinery on remote sites, or executing precision CCTV surveillance rollouts, our solutions prioritize uninterrupted business continuity.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onReadMoreAbout}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-sm tracking-wide hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm tracking-wide hover:bg-amber-400 transition-colors shadow-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Image & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="PresidentCore Professional Technician and Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 text-white border border-slate-700 backdrop-blur-md">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Corporate Core Values
                </div>
                <div className="text-base font-extrabold text-white mt-0.5">
                  Solutions • Reliability • Excellence
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Trusted B2B partner to South African commercial & industrial sectors.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Statistics / Credibility Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${stat.borderHover} relative overflow-hidden group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.highlightColor}`}>
                    {stat.metric}
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 tracking-tight">
                  {stat.label}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {stat.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
