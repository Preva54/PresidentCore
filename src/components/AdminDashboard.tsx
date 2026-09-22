import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Package, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  FileText, 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  LogOut, 
  Settings, 
  X,
  ExternalLink,
  Download,
  AlertCircle
} from 'lucide-react';
import { 
  QuoteRequest, 
  ProductItem, 
  ServiceItem, 
  ProjectItem, 
  CompanySettings, 
  ProductCategory 
} from '../types';
import { storageService } from '../services/storageService';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshData?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  onRefreshData
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active sub-tab in Admin
  const [activeTab, setActiveTab] = useState<'overview' | 'quotes' | 'products' | 'services' | 'settings'>('overview');

  // Local state for management
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [settings, setSettings] = useState<CompanySettings>(storageService.getSettings());
  const [quoteFilter, setQuoteFilter] = useState<string>('all');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  // New product form modal state
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<ProductItem, 'id'>>({
    name: '',
    category: 'Computers',
    subcategory: '',
    industry: 'Corporate & Engineering',
    description: '',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD'],
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  });
  const [specsInput, setSpecsInput] = useState('Intel Core i7, 16GB RAM, 512GB SSD');

  useEffect(() => {
    if (isOpen) {
      const auth = storageService.isAdmin();
      setIsAuthenticated(auth);
      loadAllData();
    }
  }, [isOpen]);

  const loadAllData = () => {
    setQuotes(storageService.getQuotes());
    setProducts(storageService.getProducts());
    setServices(storageService.getServices());
    setSettings(storageService.getSettings());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default authorized passcode for management demonstration
    if (passwordInput.trim() === 'admin2026' || passwordInput.trim() === 'presidentcore' || passwordInput.trim() === 'admin') {
      storageService.setAdmin(true);
      setIsAuthenticated(true);
      setLoginError('');
      loadAllData();
    } else {
      setLoginError('Invalid access passcode. (Tip: Use "admin" or "admin2026")');
    }
  };

  const handleLogout = () => {
    storageService.setAdmin(false);
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  const handleStatusChange = (quoteId: string, status: QuoteRequest['status']) => {
    storageService.updateQuoteStatus(quoteId, status);
    loadAllData();
    if (selectedQuote && selectedQuote.id === quoteId) {
      setSelectedQuote({ ...selectedQuote, status });
    }
  };

  const handleDeleteQuote = (quoteId: string) => {
    if (window.confirm('Delete this quote submission record?')) {
      storageService.deleteQuote(quoteId);
      loadAllData();
      if (selectedQuote?.id === quoteId) {
        setSelectedQuote(null);
      }
    }
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Remove this product from the public catalogue?')) {
      storageService.deleteProduct(productId);
      loadAllData();
      if (onRefreshData) onRefreshData();
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const specsArray = specsInput.split(',').map(s => s.trim()).filter(Boolean);
    storageService.addProduct({
      ...newProduct,
      specs: specsArray
    });
    setIsAddingProduct(false);
    setNewProduct({
      name: '',
      category: 'Computers',
      subcategory: '',
      industry: 'Corporate & Engineering',
      description: '',
      specs: [],
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      featured: false,
      inStock: true
    });
    loadAllData();
    if (onRefreshData) onRefreshData();
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    storageService.saveSettings(settings);
    alert('Company settings and contact information updated successfully.');
    if (onRefreshData) onRefreshData();
  };

  const exportQuotesCSV = () => {
    const headers = ['Ref', 'Date', 'Full Name', 'Company', 'Email', 'Phone', 'Service', 'Quantity', 'Status', 'Details'];
    const rows = quotes.map(q => [
      q.referenceNumber,
      new Date(q.createdAt).toLocaleDateString(),
      `"${q.fullName}"`,
      `"${q.companyName}"`,
      q.email,
      q.phone,
      `"${q.serviceCategory}"`,
      `"${q.quantity || '1'}"`,
      q.status,
      `"${q.projectDetails.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PresidentCore_Quotes_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[94vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold uppercase text-white tracking-tight">
                  PresidentCore CMS & Operations Portal
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-900/60 text-blue-300 border border-blue-700/60">
                  v2.6 Secure
                </span>
              </div>
              <p className="text-xs text-slate-400">
                PRESIDENTCORE PROJECTS (PTY) LTD • Centralized Lead & Asset Control
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="flex-1 flex items-center justify-center p-6 bg-slate-950">
            <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-extrabold text-white uppercase">
                  Staff Authentication Required
                </h4>
                <p className="text-xs text-slate-400">
                  Enter authorized administrator credentials to manage quote requests, catalogue inventory, and website configuration.
                </p>
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Security Passcode
                  </label>
                  <input
                    type="password"
                    placeholder="Enter passcode (e.g. admin or admin2026)"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Unlock Admin Dashboard
                </button>
              </form>

              <div className="p-3 rounded-xl bg-slate-950 text-[11px] text-slate-400 border border-slate-800 text-center">
                Demo Admin Access: Passcode is <strong className="text-amber-400 font-mono">admin</strong> or <strong className="text-amber-400 font-mono">admin2026</strong>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Tabs */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-950">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-56 bg-slate-900 border-r border-slate-800 p-3 sm:p-4 flex md:flex-col gap-1 overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-colors whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('quotes')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-colors whitespace-nowrap ${
                  activeTab === 'quotes'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" />
                  <span>Quotes</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-800 text-amber-400">
                  {quotes.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-colors whitespace-nowrap ${
                  activeTab === 'products'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4" />
                  <span>Catalogue</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300">
                  {products.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-colors whitespace-nowrap ${
                  activeTab === 'services'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Services ({services.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-colors whitespace-nowrap ${
                  activeTab === 'settings'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Company Info</span>
              </button>
            </div>

            {/* Main Tab View */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-extrabold uppercase text-white tracking-tight">
                      Operational Dashboard Overview
                    </h4>
                    <p className="text-xs text-slate-400">
                      Summary of B2B client quote flow and live inventory status.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Total Quotes
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        {quotes.length}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {quotes.filter(q => q.status === 'new').length} newly submitted
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                        Under Review
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        {quotes.filter(q => q.status === 'in_review').length}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Site inspection / engineering phase
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Active Products
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        {products.length}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Hardware & equipment catalogue
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                        Core Solutions
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        {services.length}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Active service departments
                      </div>
                    </div>
                  </div>

                  {/* Recent Quotes Quick Table */}
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-base font-bold text-white uppercase">
                        Recent Quote Submissions
                      </h5>
                      <button
                        onClick={() => setActiveTab('quotes')}
                        className="text-xs font-bold text-amber-400 hover:underline"
                      >
                        View All Quotes →
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                            <th className="pb-3">Ref</th>
                            <th className="pb-3">Client</th>
                            <th className="pb-3">Service</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {quotes.slice(0, 5).map((q) => (
                            <tr key={q.id} className="hover:bg-slate-800/40">
                              <td className="py-3 font-mono font-bold text-amber-400">{q.referenceNumber}</td>
                              <td className="py-3 text-white font-medium">{q.fullName} ({q.companyName})</td>
                              <td className="py-3 text-slate-300">{q.serviceCategory}</td>
                              <td className="py-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                  q.status === 'new' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                                  q.status === 'in_review' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                                  q.status === 'quoted' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                                  'bg-slate-800 text-slate-400'
                                }`}>
                                  {q.status}
                                </span>
                              </td>
                              <td className="py-3">
                                <button
                                  onClick={() => {
                                    setSelectedQuote(q);
                                    setActiveTab('quotes');
                                  }}
                                  className="text-amber-400 hover:text-amber-300 font-bold"
                                >
                                  Inspect
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: QUOTES MANAGEMENT */}
              {activeTab === 'quotes' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-extrabold uppercase text-white tracking-tight">
                        Client Quotation Enquiries
                      </h4>
                      <p className="text-xs text-slate-400">
                        Manage submitted B2B quote inquiries, review technical requests, and change operational status.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={exportQuotesCSV}
                        className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase flex items-center gap-1.5 transition-colors border border-slate-700"
                      >
                        <Download className="w-3.5 h-3.5 text-amber-400" />
                        <span>Export CSV</span>
                      </button>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-2 text-xs">
                    {(['all', 'new', 'in_review', 'quoted', 'closed'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setQuoteFilter(st)}
                        className={`px-3 py-1.5 rounded-lg font-bold uppercase transition-colors ${
                          quoteFilter === st
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>

                  {/* Quotes List / Detail Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-6 space-y-3">
                      {quotes
                        .filter(q => quoteFilter === 'all' || q.status === quoteFilter)
                        .map((q) => (
                          <div
                            key={q.id}
                            onClick={() => setSelectedQuote(q)}
                            className={`p-4 rounded-xl border transition-all cursor-pointer ${
                              selectedQuote?.id === q.id
                                ? 'bg-slate-800/90 border-amber-400 shadow-md'
                                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-mono font-bold text-amber-400">{q.referenceNumber}</span>
                              <span className="text-slate-400">{new Date(q.createdAt).toLocaleDateString()}</span>
                            </div>

                            <div className="mt-2">
                              <div className="font-bold text-white text-sm">{q.fullName}</div>
                              <div className="text-xs text-slate-400">{q.companyName}</div>
                            </div>

                            <div className="mt-2 text-xs text-blue-300 font-medium">
                              {q.serviceCategory} {q.productName && `• ${q.productName}`}
                            </div>

                            <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-slate-800/80">
                              <span className="text-slate-400">Pref: {q.preferredContact}</span>
                              <span className={`px-2 py-0.5 rounded font-bold uppercase ${
                                q.status === 'new' ? 'bg-amber-500/20 text-amber-400' :
                                q.status === 'in_review' ? 'bg-blue-500/20 text-blue-400' :
                                q.status === 'quoted' ? 'bg-emerald-500/20 text-emerald-400' :
                                'bg-slate-800 text-slate-400'
                              }`}>
                                {q.status}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Selected Quote Inspector Pane */}
                    <div className="lg:col-span-6">
                      {selectedQuote ? (
                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 sticky top-4">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div>
                              <span className="text-xs font-mono text-amber-400 font-bold">
                                {selectedQuote.referenceNumber}
                              </span>
                              <h5 className="text-lg font-bold text-white mt-0.5">
                                {selectedQuote.fullName}
                              </h5>
                              <p className="text-xs text-slate-400">
                                {selectedQuote.companyName}
                              </p>
                            </div>

                            <button
                              onClick={() => handleDeleteQuote(selectedQuote.id)}
                              className="p-2 rounded-lg bg-slate-800 text-red-400 hover:bg-red-950/60 transition-colors"
                              title="Delete Submission"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="space-y-3 text-xs">
                            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
                              <div>
                                <span className="text-slate-400 block">Email:</span>
                                <a href={`mailto:${selectedQuote.email}`} className="text-amber-400 font-medium">
                                  {selectedQuote.email}
                                </a>
                              </div>
                              <div>
                                <span className="text-slate-400 block">Phone:</span>
                                <a href={`tel:${selectedQuote.phone}`} className="text-white font-mono">
                                  {selectedQuote.phone}
                                </a>
                              </div>
                            </div>

                            <div>
                              <span className="text-slate-400 block font-bold uppercase text-[10px]">Service & Scope:</span>
                              <div className="text-white text-sm font-semibold mt-0.5">{selectedQuote.serviceCategory}</div>
                              {selectedQuote.productName && (
                                <div className="text-amber-400 text-xs mt-0.5">Item: {selectedQuote.productName}</div>
                              )}
                              {selectedQuote.quantity && (
                                <div className="text-slate-300 text-xs mt-0.5">Quantity / Scope: {selectedQuote.quantity}</div>
                              )}
                            </div>

                            <div>
                              <span className="text-slate-400 block font-bold uppercase text-[10px]">Project Description:</span>
                              <p className="mt-1 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 leading-relaxed">
                                {selectedQuote.projectDetails || 'No additional details provided.'}
                              </p>
                            </div>

                            {selectedQuote.fileName && (
                              <div>
                                <span className="text-slate-400 block font-bold uppercase text-[10px]">Attached Document:</span>
                                <div className="mt-1 text-xs text-blue-400 flex items-center gap-1.5">
                                  <FileText className="w-4 h-4" />
                                  <span>{selectedQuote.fileName}</span>
                                </div>
                              </div>
                            )}

                            {/* Status Changer */}
                            <div className="pt-3 border-t border-slate-800">
                              <label className="block text-slate-300 font-bold uppercase text-[10px] mb-1.5">
                                Change Quote Status:
                              </label>
                              <div className="grid grid-cols-4 gap-2">
                                {(['new', 'in_review', 'quoted', 'closed'] as const).map((st) => (
                                  <button
                                    key={st}
                                    onClick={() => handleStatusChange(selectedQuote.id, st)}
                                    className={`py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors ${
                                      selectedQuote.status === st
                                        ? 'bg-amber-500 text-slate-950'
                                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                                    }`}
                                  >
                                    {st}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-xs">
                          Select a quote enquiry from the left list to view specifications, client contact details, or update its status.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PRODUCTS MANAGEMENT */}
              {activeTab === 'products' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-extrabold uppercase text-white tracking-tight">
                        Equipment & Technology Catalogue
                      </h4>
                      <p className="text-xs text-slate-400">
                        Add, manage or delete products available for client quotation requests.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsAddingProduct(true)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5 transition-colors shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Equipment</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3"
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-16 h-16 object-cover rounded-lg bg-slate-800 shrink-0"
                          />
                          <div>
                            <span className="text-[10px] font-bold text-blue-400 uppercase">
                              {prod.category}
                            </span>
                            <h6 className="text-xs font-bold text-white line-clamp-1">
                              {prod.name}
                            </h6>
                            <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                              {prod.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-[10px] text-emerald-400 font-bold uppercase">
                            {prod.inStock ? 'In Stock' : 'On Order'}
                          </span>

                          <button
                            onClick={() => handleDeleteProduct(prod.id)}
                            className="text-red-400 hover:text-red-300 text-xs font-semibold flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Product Modal */}
                  {isAddingProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                      <div className="bg-slate-900 border border-slate-700 max-w-lg w-full rounded-2xl p-6 space-y-4 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <h5 className="text-base font-bold text-white uppercase">
                            Add Equipment to Catalogue
                          </h5>
                          <button onClick={() => setIsAddingProduct(false)} className="text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <form onSubmit={handleSaveProduct} className="space-y-3 text-xs">
                          <div>
                            <label className="block text-slate-300 font-bold uppercase mb-1">Equipment Name *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. 24-Port Gigabit Industrial Switch"
                              value={newProduct.name}
                              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-slate-300 font-bold uppercase mb-1">Category *</label>
                              <select
                                value={newProduct.category}
                                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as ProductCategory })}
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
                              >
                                {['Computers', 'Laptops', 'Printers', 'Networking', 'CCTV', 'Storage', 'Servers', 'IT Accessories', 'Office Equipment', 'Security Equipment'].map((c, i) => (
                                  <option key={i} value={c}>{c}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-slate-300 font-bold uppercase mb-1">Subcategory</label>
                              <input
                                type="text"
                                placeholder="e.g. Managed Switches"
                                value={newProduct.subcategory}
                                onChange={(e) => setNewProduct({ ...newProduct, subcategory: e.target.value })}
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-slate-300 font-bold uppercase mb-1">Short Description</label>
                            <textarea
                              rows={2}
                              value={newProduct.description}
                              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-300 font-bold uppercase mb-1">Key Specs (Comma-separated)</label>
                            <input
                              type="text"
                              value={specsInput}
                              onChange={(e) => setSpecsInput(e.target.value)}
                              placeholder="e.g. 24 PoE Ports, 10G Uplink, IP50 Metal Housing"
                              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-300 font-bold uppercase mb-1">Image URL</label>
                            <input
                              type="text"
                              value={newProduct.image}
                              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white text-[11px]"
                            />
                          </div>

                          <div className="pt-3 flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setIsAddingProduct(false)}
                              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl uppercase"
                            >
                              Save to Catalogue
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: SERVICES OVERVIEW */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-extrabold uppercase text-white tracking-tight">
                      Core Solutions Configuration
                    </h4>
                    <p className="text-xs text-slate-400">
                      View the 6 primary multidisciplinary service divisions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((srv) => (
                      <div key={srv.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                            {srv.shortTitle}
                          </span>
                          <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                            {srv.category}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-white uppercase">{srv.title}</h5>
                        <p className="text-xs text-slate-400 leading-relaxed">{srv.description}</p>
                        <div className="pt-2 border-t border-slate-800/80">
                          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Key Capabilities:</span>
                          <ul className="text-[11px] text-slate-300 space-y-1">
                            {srv.capabilities.slice(0, 3).map((c, i) => (
                              <li key={i}>• {c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h4 className="text-xl font-extrabold uppercase text-white tracking-tight">
                      Company Information & Dispatch Details
                    </h4>
                    <p className="text-xs text-slate-400">
                      Configure public telephone, WhatsApp, emails, address and corporate brand messaging.
                    </p>
                  </div>

                  <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-bold uppercase mb-1">Company Registered Name</label>
                      <input
                        type="text"
                        disabled
                        value={settings.companyName}
                        className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-400 cursor-not-allowed font-semibold"
                      />
                      <span className="text-[10px] text-amber-400/80 mt-1 block">Branding Rule: Always exact uppercase format.</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-300 font-bold uppercase mb-1">Primary Phone</label>
                        <input
                          type="text"
                          value={settings.phone}
                          onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-bold uppercase mb-1">WhatsApp Line</label>
                        <input
                          type="text"
                          value={settings.whatsapp}
                          onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-300 font-bold uppercase mb-1">General Email</label>
                        <input
                          type="email"
                          value={settings.email}
                          onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-bold uppercase mb-1">Quote Inquiries Email</label>
                        <input
                          type="email"
                          value={settings.quoteEmail}
                          onChange={(e) => setSettings({ ...settings, quoteEmail: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold uppercase mb-1">Headquarters & Dispatch</label>
                      <input
                        type="text"
                        value={settings.headquarters}
                        onChange={(e) => setSettings({ ...settings, headquarters: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold uppercase mb-1">Business Hours</label>
                      <input
                        type="text"
                        value={settings.businessHours}
                        onChange={(e) => setSettings({ ...settings, businessHours: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                      >
                        Save Company Settings
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
