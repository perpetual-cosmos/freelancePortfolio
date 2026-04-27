"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Code2, ShoppingCart, Brain, BarChart3, Globe, Palette } from 'lucide-react';
import Link from 'next/link';
import { getAllServices, type ServiceData } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  'web-development': <Code2 size={22} />,
  'shopify-development': <ShoppingCart size={22} />,
  'ai-automation': <Brain size={22} />,
  'seo-services': <BarChart3 size={22} />,
  'cms-platforms': <Globe size={22} />,
  'design-branding': <Palette size={22} />,
};

const ServiceBlock = ({ service, index }: { service: ServiceData, index: number }) => {
  const icon = iconMap[service.slug] || <Code2 size={22} />;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden hover:shadow-lg transition-shadow duration-500"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr]">
        {/* Content Side */}
        <div className="p-5 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
              style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
            >
              {icon}
            </div>
            <div>
              <h2 className="text-[1.05rem] sm:text-[1.15rem] lg:text-[1.25rem] font-bold text-on-surface leading-tight font-display tracking-tight">{service.title}</h2>
              <p className="text-[0.7rem] sm:text-[0.75rem] text-on-surface-muted font-medium">{service.tagline}</p>
            </div>
          </div>

          <p className="text-on-surface-variant text-[0.82rem] sm:text-[0.88rem] leading-relaxed font-medium opacity-80 mb-5 sm:mb-6">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {service.features.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 group/item">
                <div className="w-6 h-6 rounded-md bg-primary/5 flex items-center justify-center text-primary shrink-0 mt-0.5 transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                  <ChevronRight size={13} />
                </div>
                <div>
                  <h4 className="text-[0.78rem] sm:text-[0.82rem] font-bold text-on-surface leading-tight mb-0.5">{f.title}</h4>
                  <p className="text-on-surface-muted text-[0.7rem] sm:text-[0.72rem] leading-snug font-medium opacity-70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Sidebar */}
        <div className="bg-[#0a0a0a] p-5 sm:p-6 lg:p-8 flex flex-col text-white">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/8">
            <span className="text-[0.55rem] font-bold tracking-[0.2em] opacity-30 uppercase">Specs</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-5">
            {Object.entries(service.specs).map(([key, val]) => (
              <div key={key}>
                <div className="text-[0.5rem] font-bold text-white/25 tracking-[0.15em] uppercase mb-1">{key}</div>
                <div className="text-[0.82rem] font-bold font-display text-white">{val}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="mb-5">
            <div className="text-[0.5rem] font-bold text-white/25 tracking-[0.15em] uppercase mb-2.5">Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {service.stack.map(tech => (
                <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[0.6rem] font-bold text-white/50 uppercase tracking-wider">{tech}</span>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-auto pt-5 border-t border-white/8 flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[0.5rem] font-bold text-white/25 tracking-[0.15em] uppercase mb-0.5">Starting at</div>
                <div className="text-[1.4rem] sm:text-[1.6rem] font-black font-display text-primary leading-none">{service.startingPrice}</div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[0.6rem] font-bold text-green-500 uppercase tracking-wider">Available</span>
              </div>
            </div>

            <Link href={`/services/${service.slug}`} className="w-full py-3 sm:py-3.5 bg-primary text-white rounded-xl font-bold text-[0.78rem] sm:text-[0.82rem] hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 no-underline">
              Learn More <ArrowRight size={15} className="opacity-60" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = getAllServices();

  // Extract a short price like "₹25K+" from the pricing string
  const getShortPrice = (pricing: string) => {
    const match = pricing.match(/₹[\d,]+/);
    if (match) {
      const num = parseInt(match[0].replace(/[₹,]/g, ''));
      if (num >= 1000) return `₹${Math.round(num / 1000)}K+`;
      return `₹${num}+`;
    }
    return '';
  };

  return (
    <main className="bg-surface-muted min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 lg:pb-16 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[0.6rem] tracking-[0.15em] uppercase mb-4 sm:mb-5">
               <Sparkles size={12} /> <span>Our Services</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold tracking-tighter leading-[0.95] mb-3 sm:mb-4 font-display text-white">
               Full-Spectrum{' '}
               <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Engineering.</span>
            </h1>
            <p className="text-white/50 text-[0.88rem] sm:text-[0.95rem] font-medium leading-relaxed max-w-[520px] mx-auto">
               Deep technical expertise across the entire stack. We engineer the systems that eliminate problems.
            </p>
          </motion.div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/4 right-[-8%] w-[300px] h-[300px] bg-primary/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-[-8%] w-[300px] h-[300px] bg-secondary/8 blur-[120px] rounded-full" />
      </section>

      {/* Service Blocks */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14 lg:py-20 space-y-5 sm:space-y-6 lg:space-y-8">
        {services.map((s, i) => (
          <ServiceBlock key={s.slug} service={{ ...s, startingPrice: getShortPrice(s.pricing) } as any} index={i} />
        ))}
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
