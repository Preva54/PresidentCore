export type ServiceCategory = 
  | 'Industrial Solutions'
  | 'Maintenance Services'
  | 'Construction Services'
  | 'IT Solutions'
  | 'Heavy Machinery Support'
  | 'Supply Chain Solutions';

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  iconName: string;
  description: string;
  fullDescription: string;
  capabilities: string[];
  industries: string[];
  image: string;
}

export type ProductCategory = 
  | 'All'
  | 'Computers'
  | 'Laptops'
  | 'Printers'
  | 'Networking'
  | 'CCTV'
  | 'Storage'
  | 'Servers'
  | 'IT Accessories'
  | 'Office Equipment'
  | 'Security Equipment';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  industry?: string;
  description: string;
  specs: string[];
  image: string;
  featured?: boolean;
  inStock?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  location: string;
  clientSector: string;
  year: string;
  deliverables: string[];
  image: string;
}

export type QuoteStatus = 'new' | 'in_review' | 'quoted' | 'closed';

export interface QuoteRequest {
  id: string;
  referenceNumber: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  productName?: string;
  quantity?: string;
  projectDetails: string;
  preferredContact: 'Email' | 'Phone' | 'WhatsApp';
  fileName?: string;
  createdAt: string;
  status: QuoteStatus;
  notes?: string;
}

export interface CompanySettings {
  companyName: string;
  tagline: string;
  brandMessage: string;
  registrationNumber: string;
  phone: string;
  whatsapp: string;
  email: string;
  quoteEmail: string;
  headquarters: string;
  serviceCoverage: string;
  businessHours: string;
  emergencySupport: string;
}
