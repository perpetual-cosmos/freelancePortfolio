"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Code2, ShoppingCart, Brain, BarChart3, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function HireClient() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 relative overflow-hidden bg-[#050505] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[0.65rem] tracking-[0.15em] uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently Available for Select Q3/Q4 Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-[clamp(2.1rem,5vw,4.2rem)] font-extrabold tracking-tighter leading-[1.02] font-display mb-5"
          >
            Hire Tarun Singh — <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Principal Full-Stack & SEO Lead
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-[0.95rem] sm:text-[1.1rem] font-medium leading-relaxed max-w-[680px] mx-auto mb-8"
          >
            Direct 1-on-1 engineering leadership for startups and D2C brands. I architect and execute full-stack Next.js apps, Shopify storefronts, n8n AI workflows, and technical SEO — backed by a vetted specialist network when your project requires scale.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:scale-105 transition-all"
            >
              Book Technical Scoping Call <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/15 transition-all"
            >
              View 50+ Live Builds
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-on-surface mb-3">
            Flexible <span className="text-gradient">Engagement Models</span>
          </h2>
          <p className="text-on-surface-muted text-sm sm:text-base max-w-[540px] mx-auto">
            Choose the model that fits your product timeline, complexity, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Model 1 */}
          <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 font-bold">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold font-display text-on-surface mb-2">Project-Based Build</h3>
            <p className="text-on-surface-muted text-sm leading-relaxed mb-6">
              Ideal for new web applications, Shopify store builds, or landing page overhauls with clear deliverables and milestones.
            </p>
            <div className="space-y-3 mb-8">
              {['Fixed scope & guaranteed timeline', 'Full UI/UX + Next.js / Shopify engineering', '30–60 days post-launch warranty', 'Sub-100ms performance & technical SEO'].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-on-surface font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-[rgba(0,0,0,0.05)] flex items-center justify-between">
              <div>
                <span className="text-xs text-on-surface-muted uppercase font-bold tracking-wider">Starting at</span>
                <div className="text-xl font-black font-display text-primary">₹25,000 / $350</div>
              </div>
              <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-on-surface text-white text-xs font-bold hover:bg-primary transition-colors">
                Scope Project
              </Link>
            </div>
          </div>

          {/* Model 2 */}
          <div className="bg-white border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-wider">
              Popular for Retainers
            </div>
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 font-bold">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold font-display text-on-surface mb-2">Monthly Retainer & Fractional Lead</h3>
            <p className="text-on-surface-muted text-sm leading-relaxed mb-6">
              Ideal for startups and growing brands needing ongoing engineering, feature rollouts, AI automation, and technical SEO growth.
            </p>
            <div className="space-y-3 mb-8">
              {['Dedicated sprint hours per week', 'Continuous technical SEO & Core Web Vitals optimization', 'n8n & WhatsApp automation maintenance', 'Direct Slack/WhatsApp priority communication'].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-on-surface font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-[rgba(0,0,0,0.05)] flex items-center justify-between">
              <div>
                <span className="text-xs text-on-surface-muted uppercase font-bold tracking-wider">Starting at</span>
                <div className="text-xl font-black font-display text-secondary">₹30,000 / mo</div>
              </div>
              <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors">
                Reserve Capacity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="bg-surface-muted py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-on-surface mb-3">
              Core Capabilities <span className="text-gradient">You Can Hire For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-white rounded-xl border border-[rgba(0,0,0,0.04)]">
              <Code2 className="text-primary mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">Next.js & React Apps</h3>
              <p className="text-xs text-on-surface-muted leading-relaxed">Full-stack web apps, sub-100ms TTFB, TypeScript, and edge rendering.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[rgba(0,0,0,0.04)]">
              <ShoppingCart className="text-emerald-500 mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">Shopify E-Commerce</h3>
              <p className="text-xs text-on-surface-muted leading-relaxed">Custom Liquid themes, headless Shopify, Razorpay/Stripe, high conversion rate.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[rgba(0,0,0,0.04)]">
              <Brain className="text-violet-500 mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">AI & n8n Automation</h3>
              <p className="text-xs text-on-surface-muted leading-relaxed">WhatsApp chatbots, automated CRM syncs, n8n pipelines saving 20+ hrs/mo.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[rgba(0,0,0,0.04)]">
              <BarChart3 className="text-rose-500 mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">Technical SEO & Growth</h3>
              <p className="text-xs text-on-surface-muted leading-relaxed">Schema markup, Core Web Vitals 100 score, Search Console growth, rankings.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
