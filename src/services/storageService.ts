import { 
  CompanySettings, 
  ProductItem, 
  ProjectItem, 
  QuoteRequest, 
  ServiceItem 
} from '../types';
import { 
  INITIAL_COMPANY_SETTINGS, 
  INITIAL_PRODUCTS, 
  INITIAL_PROJECTS, 
  INITIAL_QUOTES, 
  INITIAL_SERVICES 
} from '../data/initialData';

const STORAGE_KEYS = {
  SETTINGS: 'pc_company_settings_v1',
  SERVICES: 'pc_services_v1',
  PRODUCTS: 'pc_products_v1',
  PROJECTS: 'pc_projects_v1',
  QUOTES: 'pc_quote_requests_v1',
  AUTH: 'pc_admin_session_v1'
};

export const storageService = {
  // Settings
  getSettings(): CompanySettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : INITIAL_COMPANY_SETTINGS;
    } catch {
      return INITIAL_COMPANY_SETTINGS;
    }
  },
  saveSettings(settings: CompanySettings): void {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  // Services
  getServices(): ServiceItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return data ? JSON.parse(data) : INITIAL_SERVICES;
    } catch {
      return INITIAL_SERVICES;
    }
  },
  saveServices(services: ServiceItem[]): void {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  },

  // Products
  getProducts(): ProductItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      return data ? JSON.parse(data) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  },
  saveProducts(products: ProductItem[]): void {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  },
  addProduct(product: Omit<ProductItem, 'id'>): ProductItem {
    const products = this.getProducts();
    const newProduct: ProductItem = {
      ...product,
      id: `prod-custom-${Date.now()}`
    };
    products.unshift(newProduct);
    this.saveProducts(products);
    return newProduct;
  },
  deleteProduct(id: string): void {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  },

  // Projects
  getProjects(): ProjectItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return data ? JSON.parse(data) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  },
  saveProjects(projects: ProjectItem[]): void {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  // Quotes
  getQuotes(): QuoteRequest[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUOTES);
      return data ? JSON.parse(data) : INITIAL_QUOTES;
    } catch {
      return INITIAL_QUOTES;
    }
  },
  saveQuotes(quotes: QuoteRequest[]): void {
    localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(quotes));
  },
  addQuote(quoteData: Omit<QuoteRequest, 'id' | 'referenceNumber' | 'createdAt' | 'status'>): QuoteRequest {
    const quotes = this.getQuotes();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newQuote: QuoteRequest = {
      ...quoteData,
      id: `quote-${Date.now()}`,
      referenceNumber: `PC-${new Date().getFullYear()}-${randomSuffix}`,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    quotes.unshift(newQuote);
    this.saveQuotes(quotes);
    return newQuote;
  },
  updateQuoteStatus(id: string, status: QuoteRequest['status'], notes?: string): void {
    const quotes = this.getQuotes().map(q => {
      if (q.id === id) {
        return {
          ...q,
          status,
          ...(notes !== undefined ? { notes } : {})
        };
      }
      return q;
    });
    this.saveQuotes(quotes);
  },
  deleteQuote(id: string): void {
    const quotes = this.getQuotes().filter(q => q.id !== id);
    this.saveQuotes(quotes);
  },

  // Admin Auth
  isAdmin(): boolean {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'authenticated';
  },
  setAdmin(status: boolean): void {
    if (status) {
      localStorage.setItem(STORAGE_KEYS.AUTH, 'authenticated');
    } else {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    }
  }
};
