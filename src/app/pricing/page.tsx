"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight, Shield, Star } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: "How do you determine project timelines?",
    a: "We use a milestone-based approach. Once we scope the project, we provide a detailed timeline with weekly sprints. A standard MVP typically takes 6–10 weeks."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every package includes a standard support period. We also offer monthly maintenance and retainer models for ongoing feature development and scaling."
  },
  {
    q: "Can I upgrade my package mid-project?",
    a: "Absolutely. We build in an agile manner, allowing for scope adjustments. We'll simply adjust the milestones and pricing transparently."
  },
  {
    q: "What payment structures do you accept?",
    a: "Typically, we work on a 40/40/20 model: 40% initial, 40% at mid-point milestone, and 20% upon final delivery and sign-off."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We've delivered products used in 70+ countries. Communication is in English, and we align to your timezone for daily standups if needed."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a
    }
  }))
};

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border border-[rgba(0,0,0,0.05)] rounded-xl overflow-hidden bg-white hover:border-[rgba(0,0,0,0.08)] transition-colors"
    >
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <HelpCircle size={16} className="text-primary shrink-0" />
          <span className="text-[0.85rem] sm:text-[0.9rem] font-bold text-on-surface truncate">{faq.q}</span>
        </div>
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
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-11 sm:pl-12">
              <p className="text-[0.8rem] sm:text-[0.85rem] text-on-surface-variant leading-relaxed font-medium">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 lg:pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent pointer-events-none" />
        <div className="max-w-[600px] mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.6rem] tracking-[0.15em] uppercase mb-4"
          >
            <Star size={12} /> Transparent Pricing
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold tracking-tight leading-[1.05] font-display text-on-surface mb-3 sm:mb-4"
          >
            Investment <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transparency.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-[0.88rem] sm:text-[0.95rem] font-medium leading-relaxed opacity-80"
          >
            Fixed-fee engineering solutions built for predictability. No hidden costs, no vendor lock-in.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* FAQ Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-[700px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-extrabold tracking-tight font-display text-on-surface mb-2">
              Common <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-on-surface-muted text-[0.82rem] sm:text-[0.88rem] font-medium">Everything you need to know about working with TheUnipick.</p>
          </div>

          <div className="flex flex-col gap-2 sm:gap-2.5">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-on-surface-muted text-[0.8rem] font-medium mb-4">Need a completely custom enterprise solution?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-on-surface text-white font-bold text-[0.82rem] no-underline hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Book a Discovery Call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
