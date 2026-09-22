import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CompanySettings } from '../types';

interface NavbarProps {
  settings: CompanySettings;
  activeSection: string;
  onNavigate: (section: string) => void;
  onRequestQuote: () => void;
  onOpenAdmin: () => void;
  isAdmin: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  activeSection,
  onNavigate,
  onRequestQuote,
  onOpenAdmin,
  isAdmin
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Pre-Header Bar: Contact, WhatsApp & Nationwide Service */}
      <div className="bg-[#050C18] text-slate-300 text-xs border-b border-slate-800/80 py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <strong className="text-white font-medium">South Africa Nationwide Operations</strong>
              <span className="text-slate-400">| B2B Industrial & IT Solutions</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-400 font-semibold tracking-wide">
              {settings.brandMessage}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{settings.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20PresidentCore%20Projects,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <a 
              href={`mailto:${settings.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{settings.email}</span>
            </a>
            <button
              onClick={onOpenAdmin}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-colors border ${
                isAdmin 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30' 
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title="Portal / CMS Administration"
            >
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>{isAdmin ? 'CMS Active' : 'Staff Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070F1E]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#070F1E]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo 
              size="md" 
              onClick={() => handleLinkClick('home')} 
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all relative ${
                      isActive
                        ? 'text-white bg-blue-900/30 border border-blue-500/30 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="btn-nav-request-quote"
                onClick={onRequestQuote}
                className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-amber-300/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  REQUEST A QUOTE
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="btn-mobile-quote-compact"
                onClick={onRequestQuote}
                className="px-3 py-1.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs uppercase shadow-sm"
              >
                Quote
              </button>
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen / Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070F1E] border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-3">
              <button
                id="btn-mobile-request-quote-full"
                onClick={() => {
                  onRequestQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-sm tracking-wider uppercase text-center shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                REQUEST A QUOTE
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-1.5 p-2 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call Office</span>
                </a>
                <a
                  href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    onOpenAdmin();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center justify-center gap-1 mx-auto"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Staff / CMS Login</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
