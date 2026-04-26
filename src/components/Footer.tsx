"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LucideArrowUp as ArrowUp, LucideSend as Send, Sparkles } from 'lucide-react';
import { TwitterLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white border-t border-[rgba(99,0,226,0.06)] py-24 lg:py-32 relative overflow-hidden noise-overlay">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1.5fr] gap-16 lg:gap-24 mb-24 lg:mb-32">
          {/* Brand & Mission */}
          <div className="flex flex-col items-start">
            <div className="text-[2rem] font-black text-on-surface tracking-tighter mb-8 flex items-center gap-3 font-display">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-[1.2rem] shadow-lg shadow-primary/20">U</div>
              TheUnipick
            </div>
            <p className="text-on-surface-variant text-[1.1rem] leading-relaxed mb-10 max-w-[400px] font-medium opacity-80">
              A specialized engineering studio architecting high-performance digital products. We build the full stack, from core logic to global distribution.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <TwitterLogo size={24} weight="fill" />, href: '#' },
                { icon: <LinkedinLogo size={24} weight="fill" />, href: '#' },
                { icon: <GithubLogo size={24} weight="fill" />, href: '#' }
              ].map((s, i) => (
                <motion.a 
                  key={i} 
                  href={s.href} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-surface-muted border border-[rgba(99,0,226,0.06)] flex items-center justify-center text-on-surface-variant transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:border-primary/20 shadow-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="font-black text-[0.8rem] mb-10 text-on-surface tracking-[0.3em] uppercase opacity-40 font-mono">/ NAVIGATION</div>
            <nav className="flex flex-col gap-5">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'About Us', href: '/about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map(item => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  whileHover={{ x: 6, color: 'var(--primary)' }}
                  className="text-[1.05rem] text-on-surface-variant font-bold transition-all no-underline hover:text-on-surface"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Core Expertise */}
          <div className="flex flex-col">
            <div className="font-black text-[0.8rem] mb-10 text-on-surface tracking-[0.3em] uppercase opacity-40 font-mono">/ EXPERTISE</div>
            <div className="flex flex-col gap-5">
              {['Next.js Studio', 'AI Engineering', 'Distributed Systems', 'Cloud DevOps', 'High-Growth MVPs'].map(item => (
                <div 
                  key={item} 
                  className="text-[1.05rem] text-on-surface-variant font-bold opacity-80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="flex flex-col">
            <div className="font-black text-[0.8rem] mb-10 text-on-surface tracking-[0.3em] uppercase opacity-40 font-mono">/ INSIGHTS</div>
            <p className="text-on-surface-variant text-[1rem] mb-8 leading-relaxed font-medium opacity-80">
               Subscribe for architectural deep-dives and engineering updates.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Engineering email..."
                className="w-full bg-surface-muted border border-[rgba(99,0,226,0.06)] px-8 py-5 rounded-2xl text-[1rem] outline-none transition-all focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 font-medium" 
              />
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-focus-within:bg-secondary transition-colors"
              >
                <Send size={18} />
              </motion.button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-[0.7rem] font-black text-on-surface-muted uppercase tracking-widest opacity-60">
               <Sparkles size={12} className="text-primary" /> No spam. Pure technical value.
            </div>
          </div>
        </div>

        {/* Global Signature */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 pt-16 border-t border-[rgba(99,0,226,0.06)] relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-on-surface-muted text-[0.95rem] font-black">
            <span>© 2026 THEUNIPICK STUDIO.</span>
            <div className="hidden sm:block w-2 h-2 rounded-full bg-primary/20" />
            <span className="opacity-50">ENGINEERED FOR PERFORMANCE.</span>
          </div>
          
          <motion.button 
            onClick={scrollToTop} 
            whileHover={{ y: -8 }}
            className="flex items-center gap-4 px-8 py-4 rounded-full bg-surface-muted border border-[rgba(99,0,226,0.06)] text-primary font-black uppercase tracking-[0.2em] text-[0.8rem] transition-all hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl hover:shadow-primary/20"
          >
            TOP <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>

      {/* Decorative Blur Background */}
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
