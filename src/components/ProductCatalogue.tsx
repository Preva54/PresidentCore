import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Building,
  CheckCircle2
} from 'lucide-react';
import { ProductItem, ProductCategory } from '../types';

interface ProductCatalogueProps {
  products: ProductItem[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onRequestQuoteForProduct: (product: ProductItem) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onRequestQuoteForProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');

  const categories: ProductCategory[] = [
    'All',
    'Computers',
    'Laptops',
    'Printers',
    'Networking',
    'CCTV',
    'Storage',
    'Servers',
    'IT Accessories',
    'Office Equipment',
    'Security Equipment'
  ];

  const industries = [
    'All Industries',
    'Corporate & Engineering',
    'Mining, Industrial & Construction',
    'Data Centers & IT Infrastructure',
    'Commercial & Industrial Security',
    'Warehousing & Logistics',
    'Executive Boardrooms & Training Centers'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesIndustry = selectedIndustry === 'All Industries' || p.industry === selectedIndustry;
      return matchesCategory && matchesSearch && matchesIndustry;
    });
  }, [products, selectedCategory, searchQuery, selectedIndustry]);

  return (
    <section id="products" className="py-24 lg:py-32 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ENTERPRISE CATALOGUE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            EQUIPMENT & TECHNOLOGY
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            B2B hardware sourcing and equipment procurement directly supported by PresidentCore technical teams.
          </p>

          <div className="w-16 h-1 bg-amber-400 mx-auto my-5 rounded-full" />
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-12 bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-4 shadow-xl">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment, specs, models, or networking hardware..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Industry Filter Dropdown */}
          <div className="w-full md:w-72">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors"
            >
              {industries.map((ind, idx) => (
                <option key={idx} value={ind} className="bg-slate-900 text-white">
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all uppercase ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-slate-950/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-base">No equipment matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('All Industries');
                  onSelectCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/70 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-blue-900/90 text-blue-200 text-[10px] font-bold uppercase tracking-wider border border-blue-700/60 backdrop-blur-md">
                      {product.category}
                    </span>
                  </div>

                  {product.inStock && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30 backdrop-blur-md">
                        Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {product.subcategory && (
                      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                        {product.subcategory}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mt-0.5 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Spec Chips */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Technical Specs:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.specs.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] border border-slate-800 font-mono"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Request Quote */}
                  <div className="pt-3 border-t border-slate-800">
                    <button
                      id={`btn-quote-product-${product.id}`}
                      onClick={() => onRequestQuoteForProduct(product)}
                      className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
