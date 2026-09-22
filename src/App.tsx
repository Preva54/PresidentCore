/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { ServicesSection } from './components/ServicesSection';
import { ITSolutionsSection } from './components/ITSolutionsSection';
import { SecuritySection } from './components/SecuritySection';
import { HeavyMachinerySection } from './components/HeavyMachinerySection';
import { WhyPresidentCore } from './components/WhyPresidentCore';
import { ProductCatalogue } from './components/ProductCatalogue';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { HowWeWork } from './components/HowWeWork';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutView } from './components/AboutView';
import { AdminDashboard } from './components/AdminDashboard';
import { storageService } from './services/storageService';
import { ServiceItem, ProductItem, ProductCategory, CompanySettings } from './types';

export default function App() {
  // App views
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Quote prefilled context
  const [quotePrefilledProduct, setQuotePrefilledProduct] = useState<string>('');
  const [quotePrefilledService, setQuotePrefilledService] = useState<string>('');

  // Sourced Data from LocalStorage/CMS
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [projects, setProjects] = useState(storageService.getProjects());
  const [settings, setSettings] = useState<CompanySettings>(storageService.getSettings());
  const [selectedProductCategory, setSelectedProductCategory] = useState<ProductCategory>('All');

  const refreshData = () => {
    setServices(storageService.getServices());
    setProducts(storageService.getProducts());
    setProjects(storageService.getProjects());
    setSettings(storageService.getSettings());
  };

  useEffect(() => {
    refreshData();
  }, []);

  // Listen to hash changes for deep linking (e.g., #admin, #about)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'admin') {
        setIsAdminOpen(true);
      } else if (hash === 'about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash) {
        setCurrentView('home');
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Navigation handlers
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'about') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
  };

  // Quote Triggers
  const openQuoteModal = (options?: { product?: string; service?: string }) => {
    setQuotePrefilledProduct(options?.product || '');
    setQuotePrefilledService(options?.service || '');
    setIsQuoteModalOpen(true);
  };

  // Select category from IT solutions section and jump to product catalogue
  const handleSelectTechCategory = (category: ProductCategory) => {
    setSelectedProductCategory(category);
    if (currentView !== 'home') setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#070F1E] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Global Top Navigation */}
      <Navbar
        settings={settings}
        activeSection={currentView === 'about' ? 'about' : activeSection}
        onNavigate={handleNavigate}
        onRequestQuote={() => openQuoteModal()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isAdmin={storageService.isAdmin()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'about' ? (
          <AboutView
            settings={settings}
            onRequestQuote={() => openQuoteModal()}
            onBackToHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero
              settings={settings}
              onRequestQuote={() => openQuoteModal()}
              onExploreServices={() => handleNavigate('services')}
            />

            {/* 2. Trust & Positioning Intro */}
            <TrustIntro
              settings={settings}
              onReadMoreAbout={() => handleNavigate('about')}
              onRequestQuote={() => openQuoteModal()}
            />

            {/* 3. Core Multidisciplinary Services */}
            <ServicesSection
              services={services}
              onSelectService={(srv) => setSelectedServiceDetail(srv)}
              onRequestQuoteForService={(srvTitle: string) => openQuoteModal({ service: srvTitle })}
            />

            {/* 4. IT & Technology Solutions (Flyer #2 Inspiration) */}
            <ITSolutionsSection
              onSelectCategory={handleSelectTechCategory}
              onRequestQuote={(catName) => openQuoteModal({ service: 'IT Solutions', product: catName })}
            />

            {/* 5. IT & Security Section (Secure. Connected. Ready.) */}
            <SecuritySection
              onRequestQuote={(featureTitle) => openQuoteModal({ service: 'CCTV & Security Equipment', product: featureTitle })}
            />

            {/* 6. Heavy Machinery & Industrial Plant Support */}
            <HeavyMachinerySection
              onExploreIndustrial={() => handleNavigate('services')}
              onRequestQuote={() => openQuoteModal({ service: 'Heavy Machinery Support' })}
            />

            {/* 7. Why PresidentCore (4 Core Pillars) */}
            <WhyPresidentCore />

            {/* 8. Products / Equipment Showcase Catalogue */}
            <ProductCatalogue
              products={products}
              selectedCategory={selectedProductCategory}
              onSelectCategory={setSelectedProductCategory}
              onRequestQuoteForProduct={(product) => openQuoteModal({ product: product.name, service: product.category })}
            />

            {/* 9. Projects & Solutions Case Studies */}
            <ProjectsShowcase
              projects={projects}
              onRequestQuote={() => openQuoteModal()}
            />

            {/* 10. How We Work (4-Phase Methodology) */}
            <HowWeWork />

            {/* 11. Call to Action Banner */}
            <CTASection
              settings={settings}
              onRequestQuote={() => openQuoteModal()}
              onContactUs={() => handleNavigate('contact')}
            />

            {/* 12. Contact & Quotation Enquiry Section */}
            <ContactSection
              settings={settings}
            />
          </>
        )}
      </main>

      {/* Corporate Global Footer */}
      <Footer
        settings={settings}
        onNavigate={handleNavigate}
        onRequestQuote={() => openQuoteModal()}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefilledProduct={quotePrefilledProduct}
        prefilledService={quotePrefilledService}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onRequestQuote={(serviceTitle) => openQuoteModal({ service: serviceTitle })}
      />

      {/* Admin / CMS Operations Portal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => {
          setIsAdminOpen(false);
          if (window.location.hash === '#admin') {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        onRefreshData={refreshData}
      />

    </div>
  );
}
