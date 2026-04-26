"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, Target, Shield } from 'lucide-react';

const tiers = [
  {
    name: "MVP TRACK",
    subtitle: "Ideal for early-stage founders",
    price: "$5,000+",
    icon: <Target size={24} />,
    features: ["Modular Next.js Architecture", "Typescript-First Core", "90%+ Lighthouse Performance", "Core API & Auth Layer", "Vercel/AWS Deployment"],
    highlight: false
  },
  {
    name: "SCALE TRACK",
    subtitle: "Architected for high-growth",
    price: "$12,000+",
    icon: <Zap size={24} />,
    features: ["Event-Driven Backend", "Automated Testing Suite", "Full CI/CD Pipeline Setup", "External API Integrations", "Performance Monitoring Hub", "Priority Engineering Support"],
    highlight: true
  },
  {
    name: "ENTERPRISE",
    subtitle: "Dedicated core infrastructure",
    price: "Custom",
    icon: <Shield size={24} />,
    features: ["Microservices Migration", "Custom AI/ML Workflows", "Security & Compliance Audit", "Dedicated Dev Environment", "24/7 SLA Guarantees", "Legacy Code Refactoring"],
    highlight: false
  }
];

const Pricing = () => {
  const btnPrimaryClass = "relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-primary/40 active:scale-95 overflow-hidden group/btn";
  const btnSecondaryClass = "inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-primary font-display font-black border border-[rgba(99,0,226,0.12)] shadow-sm transition-all duration-500 hover:bg-surface-muted hover:-translate-y-1.5 hover:border-primary active:scale-95 group/btn";
  const cardBaseClass = "rounded-[2rem] border border-[rgba(99,0,226,0.06)] shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group hover:-translate-y-2 hover:shadow-lg hover:scale-[1.01] card-hover-gradient";

  return (
    <section id="pricing" className="bg-white relative overflow-hidden py-32 lg:py-48 noise-overlay">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-24 max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8"
          >
            <Star size={16} /> <span>Investment Structure</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] font-display text-on-surface"
          >
            Premium Engineering <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Packages.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant mt-8 text-[1.2rem] font-medium leading-relaxed opacity-80"
          >
            Transparent, fixed-fee engineering solutions with zero hidden costs. <br className="hidden lg:block" /> Professional delivery, guaranteed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {tiers.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} 
              className={`
                flex flex-col p-12 lg:p-16 h-full transition-all duration-700
                ${cardBaseClass}
                ${t.highlight ? 'border-2 border-primary shadow-[0_0_40px_rgba(99,0,226,0.1)] bg-white ring-4 ring-primary/5' : 'bg-surface-muted/50 border-outline'}
              `}
            >
              {t.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 text-[0.75rem] font-black rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 tracking-widest z-20">
                  <Star size={14} fill="white" /> MOST POPULAR
                </div>
              )}
              
              <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${t.highlight ? 'bg-primary text-white shadow-lg' : 'bg-primary/10 text-primary'}`}>
                  {t.icon}
                </div>
                <div className="text-[0.8rem] font-black text-on-surface/10 font-mono tracking-tighter uppercase">0{i+1}</div>
              </div>

              <div className="mb-10">
                <h3 className="text-[1.8rem] font-black text-on-surface mb-2 font-display uppercase tracking-tight leading-none">
                  {t.name}
                </h3>
                <div className="text-[0.9rem] text-on-surface-muted font-bold tracking-wide">
                  {t.subtitle}
                </div>
              </div>
              
              <div className="mb-12 py-8 border-y border-[rgba(99,0,226,0.06)]">
                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[clamp(2.5rem,5vw,4rem)] font-black font-display leading-none mb-1 inline-block">
                  {t.price}
                </div>
                <div className="text-[0.7rem] font-black text-on-surface-muted tracking-[0.2em] uppercase">Starting Investment</div>
              </div>
              
              <div className="flex-1 mb-16 space-y-6">
                {t.features.map((f, fi) => (
                  <div key={fi} className="flex gap-4 items-start text-[1rem] text-on-surface-variant group/feat transition-all">
                    <div className="mt-1 text-tech-teal shrink-0 group-hover/feat:scale-125 transition-transform">
                      <Check size={20} strokeWidth={3} />
                    </div>
                    <span className="font-medium group-hover/feat:text-on-surface transition-colors">{f}</span>
                  </div>
                ))}
              </div>
              
              <button className={t.highlight ? btnPrimaryClass : btnSecondaryClass}>
                <span className="relative z-10 flex items-center gap-2">
                  Select Engagement <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
                </span>
                {t.highlight && <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />}
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Footnote */}
        <div className="mt-20 text-center">
          <p className="text-on-surface-muted font-bold text-[0.9rem] flex items-center justify-center gap-3">
            <Shield size={18} className="text-tech-teal" /> All packages include comprehensive handover docs and 30-day post-launch support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
