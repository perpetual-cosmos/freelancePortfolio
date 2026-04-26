"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LucideArrowUp as ArrowUp, LucideSend as Send, Sparkles, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { TwitterLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-[rgba(99,0,226,0.06)]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Main Grid: Standard Professional 5-Column Distribution */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand Identity */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-[1.1rem] font-black shadow-lg shadow-primary/20">
                U
              </div>
              <span className="text-[1.5rem] font-black text-[#1a1a2e] tracking-tight font-display">
                TheUnipick
              </span>
            </div>
            <p className="text-[#565677] text-[0.95rem] leading-relaxed font-medium mb-8 pr-4 opacity-80">
              Full-stack developer for Indian startups — web, Shopify, AI automation, and SEO that actually converts.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <TwitterLogo size={20} weight="fill" />, href: 'https://x.com/perpetual_cosmos' },
                { icon: <LinkedinLogo size={20} weight="fill" />, href: 'https://www.linkedin.com/in/perpetual-cosmos/' },
                { icon: <GithubLogo size={20} weight="fill" />, href: 'https://github.com/perpetual-cosmos' }
              ].map((s, i) => (
                <motion.a 
                  key={i} 
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-[#8e8ea8] hover:text-primary transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="font-black text-[0.7rem] mb-8 text-[#1a1a2e] tracking-[0.2em] uppercase opacity-40 font-mono">/ SERVICES</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Web Development', href: '/services/web-development' },
                { label: 'Shopify Development', href: '/services/shopify-development' },
                { label: 'AI Automation', href: '/services/ai-automation' },
                { label: 'SEO Services', href: '/services/seo-services' },
                { label: 'WordPress / CMS', href: '/services' },
              ].map(item => (
                <a key={item.label} href={item.href} className="text-[0.9rem] text-[#565677] font-bold hover:text-primary transition-colors no-underline">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col">
            <h4 className="font-black text-[0.7rem] mb-8 text-[#1a1a2e] tracking-[0.2em] uppercase opacity-40 font-mono">/ RESOURCES</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Free Website Audit', href: '/audit' },
                { label: 'Developer Glossary', href: '/learn' },
                { label: 'Blog / Insights', href: '/blog' },
                { label: 'Case Studies', href: '/portfolio' },
                { label: 'Pricing', href: '/pricing' },
              ].map(item => (
                <a key={item.label} href={item.href} className="text-[0.9rem] text-[#565677] font-bold hover:text-primary transition-colors no-underline">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Company */}
          <div className="flex flex-col">
            <h4 className="font-black text-[0.7rem] mb-8 text-[#1a1a2e] tracking-[0.2em] uppercase opacity-40 font-mono">/ COMPANY</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'About', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Industries', href: '/industries/ecommerce' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book a Call', href: '/contact' },
              ].map(item => (
                <a key={item.label} href={item.href} className="text-[0.9rem] text-[#565677] font-bold hover:text-primary transition-colors no-underline">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 5: Newsletter Terminal */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <h4 className="font-black text-[0.7rem] mb-8 text-[#1a1a2e] tracking-[0.2em] uppercase opacity-40 font-mono">/ NEWSLETTER</h4>
            <p className="text-[#565677] text-[0.85rem] mb-6 font-medium leading-relaxed opacity-80">
               Engineering insights and architectural deep-dives.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-[#f8f7ff] border border-[rgba(99,0,226,0.08)] px-5 py-3.5 rounded-xl text-[0.9rem] text-[#1a1a2e] outline-none transition-all focus:border-primary focus:bg-white" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-secondary transition-colors">
                <Send size={16} />
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[0.6rem] font-black text-[#8e8ea8] uppercase tracking-widest opacity-60">
               <Sparkles size={12} className="text-primary" /> System: Stable
            </div>
          </div>
        </div>

        {/* Footer Bottom: Clean Baseline Alignment */}
        <div className="pt-10 border-t border-[rgba(99,0,226,0.06)] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4 text-[0.75rem] font-black text-[#8e8ea8] tracking-widest uppercase">
            <div className="flex items-center gap-2 text-[#1a1a2e]">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
               © 2026 THEUNIPICK
            </div>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <div className="flex items-center gap-4 opacity-40">
               <ShieldCheck size={16} />
               <Globe size={16} />
               <Cpu size={16} />
            </div>
          </div>
          
          <motion.button 
            onClick={scrollToTop} 
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[0.7rem] hover:text-[#1a1a2e] transition-colors"
          >
            TOP <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute -bottom-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
    </footer>
  );
};

export default Footer;
