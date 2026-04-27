"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Code2, Server, Brain, BarChart3, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  { title: 'Web Development', desc: 'Next.js, MERN & TypeScript', icon: <Code2 size={16} />, color: '#6300e2', href: '/services/web-development' },
  { title: 'Shopify Development', desc: 'Custom D2C stores', icon: <Server size={16} />, color: '#10b981', href: '/services/shopify-development' },
  { title: 'AI Automation', desc: 'n8n, Make & workflows', icon: <Brain size={16} />, color: '#a855f7', href: '/services/ai-automation' },
  { title: 'SEO & Performance', desc: 'Rankings & Core Web Vitals', icon: <BarChart3 size={16} />, color: '#f43f5e', href: '/services/seo-services' },
  { title: 'WordPress / CMS', desc: 'Headless & custom builds', icon: <Globe size={16} />, color: '#0ea5e9', href: '/services' },
  { title: 'LMS / EdTech', desc: 'Course & learning platforms', icon: <BookOpen size={16} />, color: '#7c6fff', href: '/services' },
];

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-10">
        <nav className={`
          relative flex justify-between items-center h-12 sm:h-14 px-4 sm:px-5 lg:px-6 rounded-2xl border transition-all duration-500
          ${scrolled 
            ? 'bg-white/85 backdrop-blur-2xl border-[rgba(99,0,226,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.06)]' 
            : 'bg-white/40 backdrop-blur-xl border-transparent'}
        `}>
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-xl flex items-center justify-center text-white text-sm sm:text-base font-black shadow-sm transition-all duration-300 group-hover:shadow-primary/30 group-hover:scale-105">U</div>
            <span className="text-[0.95rem] sm:text-[1.05rem] font-black text-on-surface tracking-tight leading-none font-display">TheUnipick</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {/* Services Dropdown */}
            <div 
              onMouseEnter={() => setShowMegaMenu(true)} 
              onMouseLeave={() => setShowMegaMenu(false)} 
              className="relative"
            >
              <button className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.82rem] font-bold transition-colors ${showMegaMenu ? 'text-primary bg-primary/5' : 'text-on-surface-variant hover:text-on-surface hover:bg-black/[0.03]'}`}>
                Services <ChevronDown size={13} className={`transition-transform duration-300 opacity-50 ${showMegaMenu ? 'rotate-180 opacity-100' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-white rounded-2xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.06)] mt-2 grid grid-cols-2 gap-0.5 z-[1002]"
                  >
                    {services.map((s) => (
                      <a 
                        key={s.title} 
                        href={s.href} 
                        className="px-3.5 py-3 rounded-xl flex items-center gap-3 no-underline transition-all hover:bg-surface-muted group/item"
                      >
                        <div 
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                          style={{ color: 'white', background: s.color }}
                        >
                          {s.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-[0.82rem] text-on-surface group-hover/item:text-primary transition-colors leading-tight">{s.title}</div>
                          <div className="text-[0.7rem] text-on-surface-muted font-medium truncate">{s.desc}</div>
                        </div>
                      </a>
                    ))}
                    <div className="col-span-2 mt-1 pt-2.5 border-t border-[rgba(0,0,0,0.04)] flex justify-between items-center px-3.5 pb-1">
                      <span className="text-[0.65rem] font-bold text-on-surface-muted uppercase tracking-wider">All capabilities</span>
                      <a href="/services" className="text-primary font-bold text-[0.78rem] flex items-center gap-1.5 hover:gap-3 transition-all">
                        View All <ArrowRight size={13} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-3.5 py-2 rounded-xl text-[0.82rem] font-bold text-on-surface-variant no-underline hover:text-on-surface hover:bg-black/[0.03] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Availability — inline dot */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-tech-teal/8 border border-tech-teal/15">
              <div className="relative w-1.5 h-1.5">
                <div className="w-full h-full bg-tech-teal rounded-full" />
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-tech-teal rounded-full"
                />
              </div>
              <span className="text-[0.65rem] font-bold text-tech-teal tracking-tight whitespace-nowrap">Available</span>
            </div>

            <Link href="/audit" className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-on-surface text-white font-bold text-[0.75rem] sm:text-[0.8rem] transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-[0.97]">
              Free Audit
              <ArrowRight size={14} className="opacity-60" />
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-black/[0.03] text-on-surface-variant hover:bg-primary hover:text-white transition-all"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.98 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 overflow-hidden"
            >
              <div className="bg-white rounded-2xl p-3 border border-[rgba(0,0,0,0.06)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col gap-0.5">
                <a href="/services" className="px-4 py-3 rounded-xl text-[0.9rem] font-bold text-on-surface no-underline hover:bg-surface-muted transition-all">Services</a>
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="px-4 py-3 rounded-xl text-[0.9rem] font-bold text-on-surface no-underline hover:bg-surface-muted transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="border-t border-[rgba(0,0,0,0.04)] mt-1 pt-2">
                  <Link href="/audit" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-on-surface text-white font-bold text-[0.85rem] hover:bg-primary transition-all w-full">
                    Get Free Audit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
