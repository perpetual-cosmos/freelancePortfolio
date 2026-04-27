"use client";

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, ChevronRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Code2, ShoppingCart, Brain, BarChart3, Globe, Palette } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { getServiceBySlug, getAllServiceSlugs, type ServiceData } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  'web-development': <Code2 size={22} />,
  'shopify-development': <ShoppingCart size={22} />,
  'ai-automation': <Brain size={22} />,
  'seo-services': <BarChart3 size={22} />,
  'cms-platforms': <Globe size={22} />,
  'design-branding': <Palette size={22} />,
};

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[rgba(0,0,0,0.05)] rounded-xl overflow-hidden bg-white hover:border-[rgba(0,0,0,0.08)] transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
      >
        <span className="text-[0.85rem] sm:text-[0.9rem] font-bold text-on-surface">{faq.q}</span>
        <ChevronDown size={16} className={`text-on-surface-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-[0.8rem] sm:text-[0.85rem] text-on-surface-variant leading-relaxed font-medium">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicePage() {
  const params = useParams();
  const slug = params.service as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const icon = iconMap[slug] || <Code2 size={22} />;

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-on-surface-muted hover:text-primary transition-colors mb-5 no-underline">
            <ArrowLeft size={14} /> All Services
          </Link>

          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
              style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
            >
              {icon}
            </div>
            <div>
              <h1 className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-extrabold tracking-tight leading-[1.05] font-display text-on-surface">
                {service.title}
              </h1>
              <p className="text-[0.72rem] sm:text-[0.78rem] text-on-surface-muted font-medium">{service.tagline}</p>
            </div>
          </div>

          <p className="text-on-surface-variant text-[0.88rem] sm:text-[0.95rem] leading-relaxed font-medium opacity-80 mb-5">
            {service.description}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.7rem] sm:text-[0.75rem]">
            {service.pricing}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-10 lg:py-14">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr] gap-6 sm:gap-8">
            {/* Features */}
            <div>
              <h2 className="text-[1rem] sm:text-[1.1rem] font-bold font-display text-on-surface mb-4 sm:mb-5">What's Included</h2>
              <div className="space-y-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={15} strokeWidth={2.5} className="mt-0.5 text-tech-teal shrink-0" />
                    <div>
                      <span className="text-[0.82rem] sm:text-[0.88rem] font-bold text-on-surface">{f.title}</span>
                      <span className="text-[0.78rem] sm:text-[0.82rem] text-on-surface-muted font-medium"> — {f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-[0.65rem] font-bold text-on-surface-muted tracking-[0.15em] uppercase mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {service.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-surface-muted border border-[rgba(0,0,0,0.04)] rounded-lg text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-wider">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.entries(service.specs).map(([key, val]) => (
                  <div key={key} className="bg-surface-muted rounded-xl p-3 text-center">
                    <div className="text-[0.5rem] font-bold text-on-surface-muted tracking-[0.15em] uppercase mb-1">{key}</div>
                    <div className="text-[0.82rem] font-bold text-on-surface">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Outcome Card */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 sm:p-5">
                <div className="text-[0.55rem] font-bold text-primary uppercase tracking-[0.15em] mb-2">
                  <Sparkles size={10} className="inline mr-1" />Real Client Outcome
                </div>
                <p className="text-on-surface font-bold text-[0.82rem] sm:text-[0.88rem] leading-relaxed italic">"{service.outcome}"</p>
              </div>

              {/* CTA Card */}
              <div className="bg-white border border-[rgba(0,0,0,0.05)] rounded-xl p-4 sm:p-5">
                <h3 className="text-[0.95rem] font-bold text-on-surface mb-1.5">Ready to start?</h3>
                <p className="text-[0.78rem] text-on-surface-muted font-medium mb-4">
                  Let's discuss how this can accelerate your business.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-on-surface text-white font-bold text-[0.78rem] sm:text-[0.82rem] no-underline hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  Get Started <ArrowRight size={14} className="opacity-60" />
                </Link>
              </div>

              {/* Free Audit */}
              <Link href="/audit" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-primary/15 text-primary font-bold text-[0.78rem] no-underline hover:bg-primary/5 transition-all">
                Or get a free audit first <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="py-8 sm:py-10 lg:py-14">
          <div className="max-w-[700px] mx-auto px-4 sm:px-8">
            <h2 className="text-[1rem] sm:text-[1.1rem] font-bold font-display text-on-surface mb-4 sm:mb-5">Frequently Asked</h2>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              {service.faq.map((item, i) => (
                <FAQItem key={i} faq={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
      <Footer />
    </main>
  );
}
