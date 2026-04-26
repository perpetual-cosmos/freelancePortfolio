import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Free Website & SEO Audit | TheUnipick',
  description: 'Get a free 20-point technical, SEO, and conversion audit for your website. Delivered in 48 hours.',
};

export default function AuditPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
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
    </main>
  );
}
