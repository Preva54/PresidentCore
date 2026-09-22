import React, { useState } from 'react';
import { 
  Laptop, 
  Printer, 
  Network, 
  Camera, 
  HardDrive, 
  Cpu, 
  Server, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ProductCategory } from '../types';

interface ITSolutionsSectionProps {
  onSelectCategory: (category: ProductCategory) => void;
  onRequestQuote: (categoryName?: string) => void;
}

export const ITSolutionsSection: React.FC<ITSolutionsSectionProps> = ({
  onSelectCategory,
  onRequestQuote
}) => {
  const [selectedPill, setSelectedPill] = useState<string>('All');

  const categories = [
    {
      id: 'COMPUTERS',
      targetCategory: 'Computers' as ProductCategory,
      label: 'COMPUTERS',
      icon: Laptop,
      items: ['Business Desktops', 'Field Laptops', 'Executive All-in-Ones', 'CAD Workstations'],
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'PRINTERS',
      targetCategory: 'Printers' as ProductCategory,
      label: 'PRINTERS',
      icon: Printer,
      items: ['Workgroup Multifunction', 'Industrial Barcode & Label', 'Secure Pull-Printing', 'A3 Departmental Copiers'],
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'NETWORKING',
      targetCategory: 'Networking' as ProductCategory,
      label: 'NETWORKING EQUIPMENT',
      icon: Network,
      items: ['PoE+ Managed Switches', 'Enterprise Wi-Fi 6 APs', 'Rackmount Routers', 'Fiber Patch Infrastructure'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'CCTV',
      targetCategory: 'CCTV' as ProductCategory,
      label: 'CCTV EQUIPMENT',
      icon: Camera,
      items: ['4K AI Smart Bullet Cameras', 'PTZ Perimeter Tracking', '32-Channel NVRs', 'Thermal Imaging'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ACCESSORIES',
      targetCategory: 'IT Accessories' as ProductCategory,
      label: 'IT ACCESSORIES',
      icon: HardDrive,
      items: ['Server Racks 42U', 'Online Pure Sine UPS', 'Cat6A Cable Drums', 'KVM Switches & PDUs'],
      image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'SOLUTIONS',
      targetCategory: 'Servers' as ProductCategory,
      label: 'IT SOLUTIONS & SERVERS',
      icon: Server,
      items: ['Enterprise 2U Servers', 'SAN/NAS High Density Storage', 'Disaster Recovery Backups', 'Firewall Appliances'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Inspired by Reference Flyer #2 */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ENTERPRISE HARDWARE & TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-tight">
            ONE SUPPLIER. <br />
            <span className="text-blue-700">MANY TECHNOLOGY SOLUTIONS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            All your IT and security needs under one roof.
          </p>

          <div className="w-16 h-1 bg-amber-500 mx-auto my-5 rounded-full" />
        </div>

        {/* Categories Showcase Grid (The 6 Flyer Categories) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                id={`tech-cat-${cat.id.toLowerCase()}`}
                className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:border-blue-500"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600/90 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                      <Icon className="w-3.5 h-3.5 text-amber-300" />
                      {cat.label}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-extrabold text-white uppercase tracking-tight">
                      {cat.label}
                    </h3>
                  </div>
                </div>

                {/* Content Breakdown */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <ul className="space-y-2">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Dual Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectCategory(cat.targetCategory)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onRequestQuote(cat.label)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Quote This
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Quotation Callout Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 text-white p-8 sm:p-10 shadow-xl border border-blue-800/60 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-2xl relative z-10 text-center md:text-left">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Full SLA & SABS Compliant Equipment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Ready to Upgrade or Equip Your Fleet?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Get an itemized B2B bill-of-materials and wholesale project quotation within hours.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              id="btn-tech-request-quotation"
              onClick={() => onRequestQuote('Technology & IT Equipment')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 border border-amber-300/40"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>REQUEST A QUOTATION</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
