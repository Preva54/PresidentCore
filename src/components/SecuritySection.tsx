import React from 'react';
import { 
  Camera, 
  Network, 
  Server, 
  HardDrive, 
  ShieldCheck, 
  Headphones, 
  ArrowRight,
  Lock,
  Wifi,
  Sparkles
} from 'lucide-react';

interface SecuritySectionProps {
  onRequestQuote: (featureTitle: string) => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({
  onRequestQuote
}) => {
  const securityFeatures = [
    {
      title: 'CCTV & Surveillance',
      desc: '4K AI bullet and dome cameras with perimeter intrusion detection, license plate recognition, and multi-site remote monitoring.',
      icon: Camera,
      tag: 'Perimeter Defense'
    },
    {
      title: 'Networking',
      desc: 'High-throughput enterprise routing, managed PoE switches, VLAN segmentation, and enterprise Wi-Fi 6 wireless fabrics.',
      icon: Network,
      tag: 'Infrastructure'
    },
    {
      title: 'IT Infrastructure',
      desc: 'Structured fiber optic backbones, 42U server rack enclosures, uninterruptible power supplies (UPS), and cooling mitigation.',
      icon: Server,
      tag: 'Datacenter Ready'
    },
    {
      title: 'Hardware Supply',
      desc: 'Bulk sourcing of business desktops, field laptops, multifunction printers, barcode scanners, and peripheral accessories.',
      icon: HardDrive,
      tag: 'Procurement'
    },
    {
      title: 'Security Equipment',
      desc: 'Biometric facial access terminals, turnstile integration, electric perimeter fencing interfaces, and alarm telemetry.',
      icon: ShieldCheck,
      tag: 'Access Control'
    },
    {
      title: 'Technical Support',
      desc: 'Dedicated preventative SLA contracts, scheduled firmware patching, network audits, and on-site emergency callout dispatch.',
      icon: Headphones,
      tag: '24/7 SLA Support'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#050C18] text-white relative overflow-hidden border-t border-slate-800">
      {/* Visual Ambient Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Lock className="w-3 h-3 text-amber-400" />
            <span>INTEGRATED SECURITY & CONNECTIVITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            SECURE. CONNECTED. <br />
            <span className="text-blue-500">READY.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Build a more connected and secure environment with technology solutions tailored to your operational needs.
          </p>
        </div>

        {/* Feature Cards Grid (6 Requested Cards) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/40 text-blue-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onRequestQuote(feat.title)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request Solution Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
