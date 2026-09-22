import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { CompanySettings, QuoteRequest } from '../types';
import { storageService } from '../services/storageService';

interface ContactSectionProps {
  settings: CompanySettings;
  onSuccessSubmission?: (quote: QuoteRequest) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  settings,
  onSuccessSubmission
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'IT Solutions',
    projectDetails: '',
    preferredContact: 'Email' as 'Email' | 'Phone' | 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceCategories = [
    'Industrial Solutions',
    'Maintenance',
    'Construction',
    'IT Solutions',
    'CCTV & Security',
    'Heavy Machinery',
    'Equipment Supply',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please complete all required fields (Name, Email, and Phone).');
      return;
    }

    setIsSubmitting(true);

    try {
      const newQuote = storageService.addQuote({
        fullName: formData.fullName,
        companyName: formData.companyName || 'Not specified',
        email: formData.email,
        phone: formData.phone,
        serviceCategory: formData.serviceRequired,
        projectDetails: formData.projectDetails,
        preferredContact: formData.preferredContact
      });

      setSubmittedRef(newQuote.referenceNumber);
      setSubmitted(true);
      if (onSuccessSubmission) {
        onSuccessSubmission(newQuote);
      }
    } catch {
      setErrorMessage('There was an issue saving your enquiry. Please contact us via phone or WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION & ENQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            LET'S TALK
          </h2>

          <div className="w-16 h-1 bg-amber-400 mx-auto my-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Connect with our technical and procurement specialists for responsive project support.
          </p>
        </div>

        {/* Two-Column Grid: Left Company Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Company Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Head Office & Dispatch
                </span>
                <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                  {settings.companyName}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {settings.registrationNumber}
                </p>
              </div>

              <div className="space-y-4 text-sm pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-800/40 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">Operational Location</div>
                    <div className="text-slate-300 mt-0.5">{settings.headquarters}</div>
                    <div className="text-xs text-amber-400/90 mt-1">{settings.serviceCoverage}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-800/40 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">Direct Telephone</div>
                    <div className="text-slate-200 mt-0.5 font-mono">{settings.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">Official Email Channels</div>
                    <div className="text-slate-200 mt-0.5">{settings.email}</div>
                    <div className="text-slate-400 text-xs">{settings.quoteEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">Working Hours</div>
                    <div className="text-slate-300 mt-0.5">{settings.businessHours}</div>
                    <div className="text-xs text-emerald-400 mt-1">{settings.emergencySupport}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  id="btn-whatsapp-chat"
                  href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20PresidentCore%20Projects,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/30 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* B2B Assurance Note */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-normal">
                Quotes include detailed specifications, verified lead times, and official VAT documentation.
              </p>
            </div>
          </div>

          {/* Right Column: Quote / Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white uppercase">
                    Thank You. Your Enquiry Has Been Received.
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold">
                    Reference ID: {submittedRef}
                  </div>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    A technical representative from PresidentCore Projects will review your requirements and respond via your preferred contact channel within standard business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'IT Solutions',
                        projectDetails: '',
                        preferredContact: 'Email'
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-white uppercase">
                      Request Information or Quotation
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit your project specifications and an account engineer will assist you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Nkosi"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Industrial Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="d.nkosi@company.co.za"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+27 82 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {serviceCategories.map((cat, idx) => (
                        <option key={idx} value={cat} className="bg-slate-900 text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Details / Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe scope, required quantity, site location, or technical equipment specifications..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-send-enquiry"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-amber-300/40 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>{isSubmitting ? 'PROCESSING ENQUIRY...' : 'SEND ENQUIRY'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
