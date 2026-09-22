import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MapPin,
  Briefcase
} from 'lucide-react';
import { CompanySettings } from '../types';

interface AboutViewProps {
  settings: CompanySettings;
  onRequestQuote: () => void;
  onBackToHome: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  settings,
  onRequestQuote,
  onBackToHome
}) => {
  const coreValues = [
    {
      title: 'SOLUTIONS',
      desc: 'Developing pragmatic, engineered answers to complex technical, industrial, and procurement requirements.'
    },
    {
      title: 'RELIABILITY',
      desc: 'Honoring service-level commitments, strict delivery windows, and consistent B2B execution.'
    },
    {
      title: 'EXCELLENCE',
      desc: 'Holding all hardware sourcing, installations, and civil works to rigorous quality benchmarks.'
    }
  ];

  const industries = [
    'Mining & Heavy Resource Extraction',
    'Commercial Real Estate & Corporate Campuses',
    'Manufacturing & Industrial Processing Plants',
    'Logistics, Warehousing & Fleet Freight Corridors',
    'Educational Institutions & Schools',
    'Civil Infrastructure & Construction Projects',
    'Healthcare & Critical Facility Operations'
  ];

  return (
    <div className="bg-[#070F1E] text-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Navigation Breadcrumb / Return */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <button
            onClick={onBackToHome}
            className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
          >
            <span>← Back to Main Website</span>
          </button>
          <span className="text-xs text-slate-400 font-mono">
            PRESIDENTCORE PROJECTS (PTY) LTD
          </span>
        </div>

        {/* Hero Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORPORATE PROFILE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            ABOUT <br />
            <span className="gold-gradient-text">PRESIDENTCORE PROJECTS.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
            A South African multidisciplinary solutions and supply enterprise engineered to streamline operational procurement, infrastructure, and technical execution.
          </p>
        </div>

        {/* Company Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              Company Introduction
            </h2>
            <p>
              <strong>PresidentCore Projects (Pty) Ltd</strong> was established to bridge the gap between fragmented technical vendors and the demanding realities of commercial, industrial, and infrastructure operations across South Africa.
            </p>
            <p>
              Rather than managing multiple disjointed service providers for IT cabling, surveillance, machinery maintenance, construction civil works, and bulk hardware supply, businesses partner with PresidentCore Projects as their single accountable provider.
            </p>
            <p>
              With our operational positioning as <em>“Your IT Partner”</em> and our core brand commitment to <em>“Solutions. Reliability. Excellence.”</em>, we take pride in hands-on technical competence, transparent communication, and rapid turnaround.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs text-slate-300">
                Operating nationwide across Gauteng, Western Cape, KwaZulu-Natal, Mpumalanga, Limpopo, Free State, North West, Eastern Cape, and Northern Cape.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="PresidentCore Industrial Facility Support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs">
                <span className="text-amber-400 font-bold uppercase tracking-wider">Multi-Disciplinary Scope</span>
                <p className="text-slate-200 mt-1">Industrial • Maintenance • Construction • IT • Heavy Machinery • Supply Chain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision (Light Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight">
              Our Mission
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To deliver dependable, multidisciplinary solutions that empower South African businesses, industrial plants, and institutions to operate without interruption—combining high-calibre technical expertise with responsive single-vendor procurement.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800 text-amber-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight">
              Our Vision
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To be recognized as the premier trusted B2B partner across Southern Africa for comprehensive industrial, technology, and project execution services known for absolute reliability and technical excellence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Core Values
            </h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto my-4 rounded-full" />
            <p className="text-slate-400 text-sm">
              The foundational pillars guiding every project, contract, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Value 0{idx + 1}
                </span>
                <h4 className="text-xl font-extrabold uppercase text-white tracking-tight">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Cross-Sector Capability
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-1">
              Industries Served
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our multidisciplinary model enables us to serve varied operational environments with sector-specific compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold">{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Work With PresidentCore */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Why Clients Work with PresidentCore
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              In business, downtime is expensive. Clients choose PresidentCore Projects because we offer practical problem solving, direct access to qualified engineering and procurement specialists, and transparent delivery schedules without bureaucratic delays.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One invoice and single point of accountability for diverse scopes</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nationwide service coverage with rapid response times</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent, competitive B2B quotation structures</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-700/50 space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-bold uppercase text-white">
              Ready to Discuss Your Organization's Needs?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Speak with a technical advisor today or request an itemized quotation for your upcoming project.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onRequestQuote}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={onBackToHome}
                className="px-6 py-3 rounded-xl bg-slate-800 text-white font-bold text-xs uppercase hover:bg-slate-700 transition-colors"
              >
                Explore Homepage
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
