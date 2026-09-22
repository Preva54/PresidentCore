import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Upload, 
  FileText, 
  AlertCircle,
  ShieldCheck,
  Package,
  Layers
} from 'lucide-react';
import { QuoteRequest } from '../types';
import { storageService } from '../services/storageService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
  prefilledService?: string;
  onQuoteCreated?: (newQuote: QuoteRequest) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct,
  prefilledService,
  onQuoteCreated
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: prefilledService || 'IT Solutions',
    productName: prefilledProduct || '',
    quantity: '1',
    projectDetails: '',
    preferredContact: 'Email' as 'Email' | 'Phone' | 'WhatsApp',
    fileName: ''
  });

  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, productName: prefilledProduct }));
    }
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceCategory: prefilledService }));
    }
  }, [prefilledProduct, prefilledService]);

  if (!isOpen) return null;

  const serviceCategories = [
    'Industrial Solutions',
    'Maintenance Services',
    'Construction Services',
    'IT Solutions',
    'CCTV & Security Equipment',
    'Heavy Machinery Support',
    'Supply Chain & Hardware Procurement',
    'Other Multi-disciplinary Requirement'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, fileName: `${file.name} (${(file.size / 1024).toFixed(1)} KB)` }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData(prev => ({ ...prev, fileName: `${file.name} (${(file.size / 1024).toFixed(1)} KB)` }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete required fields (Name, Email, and Phone number).');
      return;
    }

    setIsSubmitting(true);

    try {
      const newQuote = storageService.addQuote({
        fullName: formData.fullName,
        companyName: formData.companyName || 'Private / Unspecified',
        email: formData.email,
        phone: formData.phone,
        serviceCategory: formData.serviceCategory,
        productName: formData.productName || undefined,
        quantity: formData.quantity || '1',
        projectDetails: formData.projectDetails,
        preferredContact: formData.preferredContact,
        fileName: formData.fileName || undefined
      });

      setSubmittedQuote(newQuote);
      if (onQuoteCreated) {
        onQuoteCreated(newQuote);
      }
    } catch {
      setErrorMsg('Failed to record your quote. Please call our team directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedQuote(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceCategory: 'IT Solutions',
      productName: '',
      quantity: '1',
      projectDetails: '',
      preferredContact: 'Email',
      fileName: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-white tracking-tight">
                Request a Formal Quotation
              </h3>
              <p className="text-xs text-slate-400">
                PRESIDENTCORE PROJECTS (PTY) LTD • Nationwide B2B Delivery
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submittedQuote ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-extrabold uppercase text-white tracking-tight">
                Thank You. Your Enquiry Has Been Received.
              </h4>

              <div className="inline-block px-4 py-2 rounded-xl bg-slate-950 border border-amber-500/40 text-amber-300 font-mono text-sm font-bold">
                Reference Code: {submittedQuote.referenceNumber}
              </div>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your request has been routed to our corporate sales and technical engineering desk. 
                You will receive a formal itemized quotation via <strong>{submittedQuote.preferredContact}</strong>.
              </p>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johan Botha"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rand Mining Holdings"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="j.botha@company.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 83 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Service & Product Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Service / Solution Category *
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {serviceCategories.map((cat, idx) => (
                      <option key={idx} value={cat} className="bg-slate-900 text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Estimated Quantity / Machines
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10 Units / Fleet of 4 / Plant-wide"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Specific Product (if prefilled) */}
              <div>
                <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                  Specific Product / Hardware (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 48-Port PoE Switch / CCTV 4K Bullet Cameras / Heavy Duty Copier"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1">
                  Project Description & Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your site details, required delivery timeline, power constraints, or hardware specs..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Email', 'Phone', 'WhatsApp'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: method })}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all uppercase ${
                        formData.preferredContact === method
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional File Upload Dropzone */}
              <div>
                <label className="block text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-1.5">
                  Optional Bill of Materials / Scope Document (PDF, DWG, XLSX, Images)
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-4 text-center transition-colors cursor-pointer ${
                    dragActive 
                      ? 'border-amber-400 bg-amber-500/10' 
                      : 'border-slate-700 bg-slate-950/60 hover:border-slate-500'
                  }`}
                  onClick={() => document.getElementById('quote-file-input')?.click()}
                >
                  <input
                    id="quote-file-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  {formData.fileName ? (
                    <div className="flex items-center justify-center gap-2 text-amber-400 font-medium">
                      <FileText className="w-4 h-4" />
                      <span>{formData.fileName}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData(prev => ({ ...prev, fileName: '' }));
                        }}
                        className="ml-2 text-slate-400 hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-slate-400 text-xs">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span>Drag & drop files here or click to browse</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-amber-300/40 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'GENERATING REQUEST...' : 'SUBMIT QUOTE REQUEST'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
