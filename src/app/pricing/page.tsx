"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

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
  }
];

export default function PricingPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <Navbar />
      
      {/* Header */}
      <section style={{ 
        paddingTop: '12rem', 
        paddingBottom: '8rem', 
        background: 'var(--gradient-mesh)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'var(--on-surface)', lineHeight: 1.1 }}
          >
            Investment <span className="text-gradient">Transparency.</span>
          </motion.h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
            Fixed-fee engineering solutions built for predictability. No hidden costs, no vendor lock-in, just production-grade results.
          </p>
        </div>
      </section>

      {/* Main Pricing Component */}
      <Pricing />

      {/* Comparison Table / Detailed FAQ */}
      <section style={{ padding: '10rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Pricing <span className="text-gradient">Questions</span></h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>Everything you need to know about partnering with TheUnipick.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium"
                style={{ padding: '2.5rem', background: 'white' }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800 }}>{faq.q}</h3>
                    <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, fontSize: '1.05rem' }}>{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '8rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--on-surface-variant)', marginBottom: '2.5rem' }}>Need a completely custom enterprise solution?</p>
            <button className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
              Book an Architectural Review
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
