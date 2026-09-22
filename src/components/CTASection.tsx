import React from 'react';
import { 
  Sparkles, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CompanySettings } from '../types';

interface CTASectionProps {
  settings: CompanySettings;
  onRequestQuote: () => void;
  onContactUs: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  settings,
  onRequestQuote,
  onContactUs
}) => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#070F1E] via-[#0A192F] to-[#070F1E] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Glows and Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>START YOUR COLLABORATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-4xl mx-auto leading-tight">
          LET'S BUILD A STRONGER <br />
          <span className="gold-gradient-text">FUTURE TOGETHER.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what you need and our team will help you identify the right solution.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="btn-cta-quote"
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-base tracking-wider uppercase shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-amber-300/40"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>REQUEST A QUOTE</span>
          </button>

          <button
            id="btn-cta-contact"
            onClick={onContactUs}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-base tracking-wide border border-blue-500/40 hover:border-blue-400 transition-colors backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        {/* Quick Contact & Verified Points Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Telephone & WhatsApp
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {settings.phone}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-950/80 text-amber-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Direct Email Enquiries
              </div>
              <div className="text-sm font-bold text-white mt-0.5 truncate">
                {settings.email}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Operational Reach
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Nationwide South Africa
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
