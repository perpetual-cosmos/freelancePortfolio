"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Check, ChevronDown, ArrowLeft, Sparkles, ExternalLink,
  Code2, ShoppingCart, Brain, BarChart3, Globe, Palette, ShieldCheck, Zap, Layers, Rocket
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { type ServiceData } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  'web-development': <Code2 size={24} />,
  'shopify-development': <ShoppingCart size={24} />,
  'ai-automation': <Brain size={24} />,
  'seo-services': <BarChart3 size={24} />,
  'cms-platforms': <Globe size={24} />,
  'design-branding': <Palette size={24} />,
};

function ServiceIllustration({ slug }: { slug: string }) {
  if (slug === 'web-development') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/80 rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden text-left flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-[0.65rem] font-mono text-white/40 ml-2">app/page.tsx — Next.js 16</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[0.6rem] font-mono font-bold">100 Core Web Vitals</span>
        </div>
        <div className="font-mono text-xs space-y-1.5 py-3 text-slate-300">
          <div><span className="text-purple-400">export default async function</span> <span className="text-blue-300">Page</span>() &#123;</div>
          <div className="pl-4 text-slate-400">// Edge SSR with sub-100ms TTFB</div>
          <div className="pl-4"><span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> fetchPlatformData();</div>
          <div className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-emerald-300">ProductionReadyApp</span> data=&#123;data&#125; /&gt;;</div>
          <div>&#125;</div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-[0.55rem] text-white/40 uppercase font-mono">TTFB</div>
            <div className="text-xs font-bold text-emerald-400 font-mono">&lt; 98ms</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-[0.55rem] text-white/40 uppercase font-mono">Lighthouse</div>
            <div className="text-xs font-bold text-purple-400 font-mono">100/100</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-[0.55rem] text-white/40 uppercase font-mono">Security</div>
            <div className="text-xs font-bold text-blue-400 font-mono">A+ SSL</div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'shopify-development') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/80 rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <ShoppingCart size={16} className="text-emerald-400" />
            <span className="text-xs font-bold text-white font-display">Shopify D2C Storefront</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[0.6rem] font-bold">+40% CRO Lift</span>
        </div>
        <div className="space-y-2 py-2">
          <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">⚡</div>
              <div>
                <div className="text-xs font-bold text-white">Bespoke Liquid Theme</div>
                <div className="text-[0.65rem] text-white/50">Zero App Bloat · Instant Cart</div>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-400">95+ Speed</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">💳</div>
              <div>
                <div className="text-xs font-bold text-white">Payment Gateways</div>
                <div className="text-[0.65rem] text-white/50">Razorpay, Stripe & 1-Click UPI</div>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-400">100% Success</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[0.65rem] text-white/40 border-t border-white/10 pt-2 font-mono">
          <span>Checkout Optimization</span>
          <span className="text-emerald-400 font-bold">1-Click Upsell Ready</span>
        </div>
      </div>
    );
  }

  if (slug === 'ai-automation') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/80 rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Brain size={16} className="text-purple-400" />
            <span className="text-xs font-bold text-white font-display">n8n & AI Pipeline</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[0.6rem] font-bold">Save 20h/wk</span>
        </div>
        <div className="flex items-center justify-between gap-2 py-4">
          <div className="flex-1 bg-white/5 p-2.5 rounded-xl text-center border border-white/5">
            <div className="text-[0.6rem] text-white/40 uppercase">Trigger</div>
            <div className="text-xs font-bold text-white mt-1">Lead Form</div>
          </div>
          <div className="text-purple-400 font-bold text-xs">➔</div>
          <div className="flex-1 bg-purple-500/20 p-2.5 rounded-xl text-center border border-purple-500/30">
            <div className="text-[0.6rem] text-purple-300 uppercase">AI Processing</div>
            <div className="text-xs font-bold text-white mt-1">OpenAI LLM</div>
          </div>
          <div className="text-purple-400 font-bold text-xs">➔</div>
          <div className="flex-1 bg-emerald-500/20 p-2.5 rounded-xl text-center border border-emerald-500/30">
            <div className="text-[0.6rem] text-emerald-300 uppercase">Action</div>
            <div className="text-xs font-bold text-white mt-1">WhatsApp Bot</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[0.65rem] text-white/40 border-t border-white/10 pt-2 font-mono">
          <span>Uptime Monitoring</span>
          <span className="text-purple-400 font-bold">100% Automated</span>
        </div>
      </div>
    );
  }

  if (slug === 'seo-services') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-950 to-rose-950/80 rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-rose-400" />
            <span className="text-xs font-bold text-white font-display">Technical SEO Graph</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[0.6rem] font-bold">#1 Google Rank</span>
        </div>
        <div className="space-y-2 py-2">
          <div className="bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="text-[0.65rem] text-rose-400 font-bold mb-1">🔍 Google Search Snippet #1</div>
            <div className="text-xs font-bold text-white">TheUniPick — Premium Full-Stack & SEO Studio</div>
            <div className="text-[0.65rem] text-slate-400 mt-1">Structured JSON-LD schema with rich snippets and top Core Web Vitals.</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center border-t border-white/10 pt-2">
          <div className="bg-white/5 rounded-lg p-1.5 text-[0.65rem] font-mono text-rose-400 font-bold">📈 +340% Traffic</div>
          <div className="bg-white/5 rounded-lg p-1.5 text-[0.65rem] font-mono text-emerald-400 font-bold">✓ Rich Snippets</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/80 rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-sky-400" />
          <span className="text-xs font-bold text-white font-display">{slug === 'design-branding' ? 'Figma Design System' : 'Headless CMS Engine'}</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[0.6rem] font-bold">Scalable Architecture</span>
      </div>
      <div className="grid grid-cols-2 gap-3 py-3">
        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="text-xs font-bold text-white mb-1">Tailwind Specs</div>
          <div className="text-[0.65rem] text-white/50">Pixel-perfect component tokens ready for React.</div>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="text-xs font-bold text-white mb-1">Content API</div>
          <div className="text-[0.65rem] text-white/50">Sanity/Strapi headless content sync.</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[0.65rem] text-white/40 border-t border-white/10 pt-2 font-mono">
        <span>Zero Downtime Migration</span>
        <span className="text-sky-400 font-bold">Production-Ready</span>
      </div>
    </div>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white hover:border-purple-200 transition-colors shadow-xs">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-bold text-slate-900 text-sm sm:text-base"
      >
        <span>{faq.q}</span>
        <ChevronDown size={18} className={`text-purple-600 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
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
            <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicePageClient({ service }: { service: ServiceData }) {
  const icon = iconMap[service.slug] || <Code2 size={24} />;

  const processSteps = [
    { num: '01', title: 'Discovery & Architecture', desc: 'We map out user flows, technical stack, API integrations, and SEO canonical structure.' },
    { num: '02', title: 'High-Performance Build', desc: 'Clean TypeScript code, custom Liquid/React components, and responsive Tailwind styling.' },
    { num: '03', title: 'Web Vitals & Security Audit', desc: 'Comprehensive Lighthouse audit ensuring sub-100ms TTFB, 95+ speed, and SSL security.' },
    { num: '04', title: 'Launch & Growth Support', desc: 'Zero-downtime deployment, Google Indexing submission, and 30-day post-launch support.' },
  ];

  return (
    <main className="bg-[#FAF8FE] min-h-screen text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 relative overflow-hidden bg-gradient-to-b from-purple-100/50 via-[#FAF8FE] to-[#FAF8FE]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors mb-6 no-underline bg-purple-100/80 px-3.5 py-1.5 rounded-full border border-purple-200">
              <ArrowLeft size={14} /> Back to Capabilities
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
              >
                {icon}
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-purple-600 uppercase font-mono">{service.category}</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display text-slate-900">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-slate-700 text-lg font-medium leading-relaxed max-w-2xl mb-6">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 text-purple-800 font-extrabold text-xs sm:text-sm shadow-xs">
                <Sparkles size={14} className="text-purple-600" />
                {service.pricing}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ServiceIllustration slug={service.slug} />
          </div>
        </div>
      </section>

      {/* Detailed Features & Specs Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: What's Included */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h2 className="text-2xl font-black font-display text-slate-900 mb-6 flex items-center gap-2">
                  <Zap className="text-purple-600" size={22} /> What's Included in {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/60 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">{f.title}</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Specs */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase font-mono mb-4">Technology Stack & Specifications</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.stack.map(tech => (
                    <span key={tech} className="px-3.5 py-1.5 rounded-xl bg-purple-100/80 text-purple-900 font-bold text-xs border border-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(service.specs).map(([key, val]) => (
                    <div key={key} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-center">
                      <div className="text-[0.62rem] font-bold text-slate-400 uppercase tracking-wider mb-1">{key}</div>
                      <div className="text-sm font-black text-slate-900 font-display">{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Process Roadmap */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h3 className="text-2xl font-black font-display text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="text-purple-600" size={22} /> Our 4-Step Engineering Delivery Process
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {processSteps.map((step) => (
                    <div key={step.num} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 flex items-start gap-3">
                      <span className="font-mono text-base font-black text-purple-600 bg-purple-100 px-2.5 py-1 rounded-xl">{step.num}</span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Outcomes & CTAs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Real Outcome Card */}
              <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white p-6 rounded-3xl shadow-xl border border-purple-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles size={12} /> Verified Outcome
                </div>
                <p className="text-base font-medium italic leading-relaxed text-purple-100 mb-4">
                  "{service.outcome}"
                </p>
                {service.relatedCaseStudySlug && (
                  <Link
                    href={`/case-study/${service.relatedCaseStudySlug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-white transition-colors underline"
                  >
                    <span>Read {service.relatedCaseStudyTitle || 'Full Case Study'}</span>
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>

              {/* Direct Booking Card */}
              <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-sm text-left">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 font-display">Ready to build this?</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Book a direct 1-on-1 engineering scoping session with Tarun Singh.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-bold text-xs tracking-wide shadow-md hover:scale-[1.01] transition-all no-underline"
                  >
                    Start Project Scoping <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/919451172458"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-emerald-600 text-white font-bold text-xs tracking-wide shadow-md hover:bg-emerald-700 transition-all no-underline"
                  >
                    💬 Chat on WhatsApp (+91 94511 72458)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-t border-purple-100">
          <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-left">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-wider text-purple-600 uppercase font-mono">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 mt-1">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {service.faq.map((item, i) => (
                <FAQItem key={i} faq={item} />
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

