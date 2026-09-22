import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  Lock
} from 'lucide-react';
import { CompanySettings } from '../types';

interface FooterProps {
  settings: CompanySettings;
  onNavigate: (section: string) => void;
  onRequestQuote: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  onNavigate,
  onRequestQuote,
  onOpenAdmin
}) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'products', label: 'Equipment Catalogue' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const servicesList = [
    { title: 'Industrial Solutions' },
    { title: 'Maintenance Services' },
    { title: 'Construction Services' },
    { title: 'IT Solutions' },
    { title: 'Heavy Machinery Support' },
    { title: 'Supply Chain Solutions' }
  ];

  return (
    <>
      <footer className="bg-[#050C18] text-slate-400 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Col 1: Brand & Identity (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <Logo size="md" onClick={() => onNavigate('home')} />
              
              <p className="text-amber-400 font-bold text-sm tracking-wide mt-2">
                “{settings.brandMessage}”
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                PresidentCore Projects (Pty) Ltd is a South African multidisciplinary solutions and supply company providing industrial, construction, maintenance, IT, heavy machinery, security, equipment and supply-chain solutions.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onRequestQuote}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Request a Quote
                </button>
                <button
                  onClick={scrollToTop}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Scroll to Top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Col 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="hover:text-amber-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Our Solutions
              </h4>
              <ul className="space-y-2 text-xs">
                {servicesList.map((srv, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate('services')}
                      className="hover:text-blue-400 transition-colors text-left"
                    >
                      {srv.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Coverage (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Contact & Dispatch
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-amber-400 font-mono">
                    {settings.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a 
                    href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-300 font-medium"
                  >
                    WhatsApp Chat Support
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a href={`mailto:${settings.email}`} className="hover:text-amber-400 truncate">
                    {settings.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 pt-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>South Africa Nationwide Service Coverage</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="text-[11px] text-slate-400 hover:text-amber-400 inline-flex items-center gap-1 transition-colors"
                >
                  <Lock className="w-3 h-3 text-amber-500" />
                  <span>Administrative Portal</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 <strong>PRESIDENTCORE PROJECTS (PTY) LTD</strong>. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy (POPIA)
              </button>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-slate-300 transition-colors"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* POPIA Privacy Policy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4 text-slate-300 text-sm shadow-2xl">
            <h3 className="text-xl font-extrabold text-white uppercase">
              {modalType === 'privacy' 
                ? 'Protection of Personal Information Policy (POPIA)' 
                : 'Corporate Terms & Conditions of Engagement'}
            </h3>

            {modalType === 'privacy' ? (
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  PresidentCore Projects (Pty) Ltd respects your privacy and is committed to protecting business and personal data in strict compliance with the South African Protection of Personal Information Act (POPIA), Act No. 4 of 2013.
                </p>
                <h4 className="font-bold text-white uppercase text-xs">Information Collection & Purpose</h4>
                <p>
                  Information submitted through our quote and contact forms is solely used to prepare official enterprise quotations, schedule technical site audits, and dispatch technical hardware or maintenance personnel.
                </p>
                <h4 className="font-bold text-white uppercase text-xs">Third-Party Non-Disclosure</h4>
                <p>
                  We never sell, rent, or distribute client contact records or project schematics to unauthorized commercial third parties.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  All quotations, supply contracts, maintenance agreements, and equipment sourcing provided by PresidentCore Projects (Pty) Ltd are subject to our standard commercial B2B terms of trade.
                </p>
                <h4 className="font-bold text-white uppercase text-xs">Quotations & Pricing Validity</h4>
                <p>
                  Hardware pricing and foreign exchange components (e.g. IT server equipment, specialized components) are pegged to supplier rate of exchange on date of formal quotation issue.
                </p>
                <h4 className="font-bold text-white uppercase text-xs">Site Safety & Compliance</h4>
                <p>
                  All industrial and construction operations adhere to strict Occupational Health and Safety (OHS) Act requirements.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
