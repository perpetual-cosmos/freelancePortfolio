"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, Target, Shield, BarChart3, Bot, Wrench } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Starter",
    subtitle: "Local businesses & portfolios",
    price: "₹25K+",
    icon: <Target size={20} />,
    features: ["Landing Page / 5-Page Site", "Responsive Design", "Basic SEO Setup", "Contact Form", "30 Days Support"],
    highlight: false
  },
  {
    name: "Startup / SaaS",
    subtitle: "High-growth digital products",
    price: "₹75K+",
    icon: <Zap size={20} />,
    features: ["Full-Stack Next.js App", "Database & Auth", "Technical SEO Strategy", "Custom Dashboard / UI", "Priority Engineering", "60 Days Support"],
    highlight: true
  },
  {
    name: "Shopify / E-com",
    subtitle: "Custom stores that sell",
    price: "₹35K+",
    icon: <Shield size={20} />,
    features: ["Custom Liquid Theme", "CRO Optimization", "Inventory Management", "Payment Gateways", "Performance Assets"],
    highlight: false
  },
  {
    name: "SEO Monthly",
    subtitle: "Organic growth & rankings",
    price: "₹15K/mo",
    icon: <BarChart3 size={20} />,
    features: ["Monthly Technical Audit", "4-8 Blog Posts", "Keyword Tracking", "Backlink Strategy", "Competitor Analysis", "GSC Management"],
    highlight: false
  },
  {
    name: "AI Automation",
    subtitle: "Eliminate manual tasks",
    price: "₹20K+",
    icon: <Bot size={20} />,
    features: ["Process Audit & Mapping", "n8n / Make Workflows", "API Integrations", "WhatsApp / Email Bots", "Testing & Docs"],
    highlight: false
  },
  {
    name: "Maintenance",
    subtitle: "Ongoing peace of mind",
    price: "₹5K/mo",
    icon: <Wrench size={20} />,
    features: ["Weekly Updates", "Daily Backups", "Uptime Monitoring", "Up to 2 Hrs/mo Edits", "Monthly Report"],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white relative overflow-hidden py-14 sm:py-20 lg:py-28">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 max-w-[600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] uppercase mb-4 sm:mb-5"
          >
            <Star size={12} /> <span>Pricing</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold tracking-tight leading-[1.1] font-display text-on-surface mb-3 sm:mb-4"
          >
            Transparent <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Investment Tiers.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-[0.88rem] sm:text-[0.95rem] font-medium leading-relaxed opacity-80"
          >
            Fixed-fee solutions. Zero hidden costs. Professional delivery, guaranteed.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {tiers.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }} 
              className={`
                flex flex-col p-5 sm:p-6 lg:p-7 h-full rounded-2xl border transition-all duration-500 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg
                ${t.highlight 
                  ? 'border-primary/20 bg-white shadow-md ring-2 ring-primary/5' 
                  : 'border-[rgba(0,0,0,0.05)] bg-surface-muted/30 hover:bg-white hover:border-[rgba(0,0,0,0.08)]'}
              `}
            >
              {t.highlight && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              )}
              
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${t.highlight ? 'bg-primary text-white shadow-sm' : 'bg-primary/8 text-primary'}`}>
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold text-on-surface leading-tight font-display">{t.name}</h3>
                    <div className="text-[0.68rem] sm:text-[0.72rem] text-on-surface-muted font-medium">{t.subtitle}</div>
                  </div>
                </div>
                {t.highlight && (
                  <span className="text-[0.55rem] font-bold text-primary bg-primary/8 px-2 py-1 rounded-md uppercase tracking-wider shrink-0">Popular</span>
                )}
              </div>

              {/* Price */}
              <div className="mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-[rgba(0,0,0,0.04)]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] font-black font-display text-on-surface leading-none">{t.price}</span>
                  <span className="text-[0.6rem] font-bold text-on-surface-muted uppercase tracking-wider">starting</span>
                </div>
              </div>
              
              {/* Features */}
              <div className="flex-1 mb-5 sm:mb-6 space-y-2.5 sm:space-y-3">
                {t.features.map((f, fi) => (
                  <div key={fi} className="flex gap-2.5 items-start text-[0.78rem] sm:text-[0.82rem] text-on-surface-variant">
                    <Check size={15} strokeWidth={2.5} className="mt-0.5 text-tech-teal shrink-0" />
                    <span className="font-medium leading-snug">{f}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link 
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl font-bold text-[0.78rem] sm:text-[0.82rem] transition-all duration-300 no-underline ${
                  t.highlight 
                    ? 'bg-on-surface text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/20' 
                    : 'bg-[rgba(0,0,0,0.04)] text-on-surface hover:bg-on-surface hover:text-white'
                }`}
              >
                Get Started <ArrowRight size={14} className="opacity-60" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Footnote */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center flex flex-col items-center gap-3">
          <p className="text-on-surface-muted font-medium text-[0.75rem] sm:text-[0.8rem] flex items-center justify-center gap-2">
            <Shield size={14} className="text-tech-teal" /> All packages include handover docs & post-launch support.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[0.7rem] sm:text-[0.75rem] font-bold text-primary">
            <Check size={14} /> Fixed-price guarantee. Zero hidden costs.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
