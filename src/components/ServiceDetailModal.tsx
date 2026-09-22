import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Banner with Hero Image */}
        <div className="relative h-60 sm:h-72 shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:text-amber-400 border border-slate-700"
            aria-label="Close Service Details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              PresidentCore Specialized Division
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
              Operational Scope & Capability
            </h4>
            <p className="leading-relaxed text-slate-300">
              {service.fullDescription}
            </p>
          </div>

          {/* What We Provide (Capabilities) */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>What We Provide</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div>
            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Target Sectors & Industries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.industries.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs uppercase"
            >
              Back to Overview
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
            >
              <span>Request Quote for {service.shortTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
