import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Activity, CheckCircle2, Search, BarChart3, MousePointerClick } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Free Website & SEO Audit | TheUnipick',
  description: 'Get a free 20-point technical, SEO, and conversion audit for your website. Delivered in 48 hours.',
};

const auditPoints = [
  { icon: <Search size={18} />, title: 'Technical SEO Scan', desc: 'Meta tags, indexability, sitemaps, canonicals, robots.txt' },
  { icon: <Zap size={18} />, title: 'Core Web Vitals Report', desc: 'LCP, CLS, FID scores with specific improvement actions' },
  { icon: <BarChart3 size={18} />, title: 'Keyword Gap Analysis', desc: 'What you should be ranking for but aren\'t' },
  { icon: <MousePointerClick size={18} />, title: 'Conversion Rate Audit', desc: 'CTA placement, friction points, and quick-win fixes' },
];

export default function AuditPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.7rem] uppercase tracking-widest mb-6 border border-primary/10">
             <Activity size={14} /> 20-Point Technical Review
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold font-display leading-[1.05] tracking-tight text-on-surface mb-6">
            Is your website leaving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">money on the table?</span>
          </h1>
          <p className="text-on-surface-variant text-[1.2rem] font-medium leading-relaxed max-w-[600px] mx-auto">
            Get a comprehensive technical, SEO, and conversion audit delivered in 48 hours. No fluff. No sales pitch. Just actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: What You Get */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black font-display text-on-surface tracking-tight">What's in the Audit</h2>
            <p className="text-on-surface-variant font-medium leading-relaxed">
              I run your site through Lighthouse, Screaming Frog, and manual review. You get a PDF report with prioritized fixes — ranked by impact.
            </p>
            <div className="space-y-4">
              {auditPoints.map((point, i) => (
                <div key={i} className="flex gap-4 p-5 bg-surface-muted rounded-2xl border border-outline/50 group hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <div className="font-black text-on-surface text-[1rem] mb-1">{point.title}</div>
                    <div className="text-on-surface-variant text-[0.9rem] font-medium opacity-80">{point.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 text-[0.9rem] text-on-surface-variant font-medium bg-tech-teal/5 border border-tech-teal/20 rounded-2xl p-5">
              <CheckCircle2 size={20} className="text-tech-teal shrink-0 mt-0.5" />
              <span>Typically identifies <strong className="text-on-surface">3–7 quick wins</strong> that can be implemented in a single week to improve rankings and leads.</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface border border-outline rounded-[2rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form className="relative z-10 flex flex-col gap-6">
              <div>
                <label className="block text-on-surface font-bold text-[0.9rem] mb-2 ml-2 uppercase tracking-widest font-mono">Website URL</label>
                <input 
                  type="url" 
                  placeholder="https://yourwebsite.com" 
                  required
                  className="w-full bg-surface-muted border border-outline rounded-2xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-lg"
                />
              </div>
              <div>
                <label className="block text-on-surface font-bold text-[0.9rem] mb-2 ml-2 uppercase tracking-widest font-mono">Work Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  required
                  className="w-full bg-surface-muted border border-outline rounded-2xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-lg"
                />
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-1 text-lg">
                  Generate My Free Audit <ArrowRight size={20} />
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-outline flex flex-wrap items-center justify-center gap-6 text-on-surface-muted text-sm font-medium">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-tech-teal" /> 100% Free</div>
              <div className="flex items-center gap-2"><Zap size={16} className="text-tech-teal" /> 48-Hour Delivery</div>
              <div className="flex items-center gap-2"><Activity size={16} className="text-tech-teal" /> No credit card needed</div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}

