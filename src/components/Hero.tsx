import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Server, 
  Wrench, 
  Truck, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { CompanySettings } from '../types';

interface HeroProps {
  settings: CompanySettings;
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  settings,
  onRequestQuote,
  onExploreServices
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle animated digital/industrial network particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes representing interconnected South African industrial & IT network
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.65 ? '#F59E0B' : '#3B82F6'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#070F1E]">
      {/* Cinematic Industrial Composite Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85"
          alt="PresidentCore Industrial, Construction and Technology Infrastructure"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-1000"
          style={{ animationDuration: '14s' }}
        />
        {/* Multi-layered Dark Midnight Navy & Royal Blue Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070F1E] via-[#070F1E]/90 to-[#0A192F]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-[#070F1E]/70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      </div>

      {/* Network Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] pointer-events-none opacity-60"
      />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        
        {/* Small Golden Badge Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>{settings.companyName}</span>
        </div>

        {/* Main Heading: ONE SUPPLIER. MANY SOLUTIONS. */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase max-w-5xl leading-[1.05] drop-shadow-md">
          ONE SUPPLIER. <br className="hidden sm:inline" />
          <span className="gold-gradient-text">MANY SOLUTIONS.</span>
        </h1>

        {/* Alternative Supporting Line */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-semibold text-blue-200/95 max-w-3xl tracking-wide leading-snug">
          Industrial, Technology, Construction & Supply Solutions Built Around Your Business.
        </p>

        {/* Paragraph Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          From industrial and maintenance services to IT infrastructure, equipment supply and heavy machinery support, 
          PresidentCore Projects delivers reliable solutions for businesses across South Africa.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="btn-hero-quote"
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-base tracking-wider uppercase shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border border-amber-300/60 flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="btn-hero-explore"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base tracking-wide border border-blue-500/40 hover:border-blue-400/80 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Secondary Small Trust Message */}
        <div className="mt-8 flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-400 bg-slate-950/60 px-5 py-2 rounded-full border border-slate-800/80 backdrop-blur-md">
          <span className="text-amber-400">Solutions</span>
          <span className="text-slate-600">•</span>
          <span className="text-blue-400">Reliability</span>
          <span className="text-slate-600">•</span>
          <span className="text-amber-400">Excellence</span>
        </div>

        {/* Fast Overview Badges at Bottom of Hero */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full text-left">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Industrial & Maintenance</div>
                <div className="text-slate-400 text-xs">Turnkey Engineering</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-950/80 text-amber-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">IT & Security Hub</div>
                <div className="text-slate-400 text-xs">CCTV & Hardware</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Commercial Works</div>
                <div className="text-slate-400 text-xs">Civil & Construction</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-950/80 text-amber-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Nationwide Supply</div>
                <div className="text-slate-400 text-xs">Heavy Machinery & Fleet</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};
