"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, Globe, Code2, Server, Coffee, Brain, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import AvailabilityBadge from './widgets/AvailabilityBadge';

const services = [
  { id: '01', title: 'CMS Architecture', desc: 'Headless CMS & Custom WP', icon: <Globe size={18} />, color: '#3b82f6', href: '/services#cms' },
  { id: '02', title: 'React Systems', desc: 'Next.js & Core Web Vitals', icon: <Code2 size={18} />, color: '#6300e2', href: '/services#react' },
  { id: '03', title: 'Node.js Backend', desc: 'Event-Driven Microservices', icon: <Server size={18} />, color: '#22c55e', href: '/services#node' },
  { id: '04', title: 'Enterprise Core', desc: 'Robust Spring Boot Systems', icon: <Coffee size={18} />, color: '#f59e0b', href: '/services#java' },
  { id: '05', title: 'AI Engineering', desc: 'RAG Systems & LLM Flows', icon: <Brain size={18} />, color: '#a855f7', href: '/services#ai' },
  { id: '06', title: 'Mobile Ecosystems', desc: 'Native Performance Apps', icon: <Smartphone size={18} />, color: '#f43f5e', href: '/services#mobile' },
];

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
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
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className={`
          relative flex justify-between items-center px-8 py-3 rounded-full border transition-all duration-700
          ${scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-outline shadow-xl scale-[0.98]' 
            : 'bg-transparent border-transparent scale-100'}
        `}>
          {/* Brand Identity */}
          <motion.a 
            href="/" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group no-underline"
          >
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 group-hover:shadow-primary/40">U</div>
            <div className="flex flex-col">
               <span className="text-[1.3rem] font-black text-on-surface tracking-tighter leading-none font-display">TheUnipick</span>
               <span className="text-[0.6rem] font-black text-primary tracking-[0.3em] uppercase opacity-60">Studio</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Services Mega-Menu Trigger */}
            <div 
              onMouseEnter={() => setShowMegaMenu(true)} 
              onMouseLeave={() => setShowMegaMenu(false)} 
              className="relative py-2"
            >
              <div className={`text-[0.95rem] font-black flex items-center gap-2 cursor-pointer transition-colors ${showMegaMenu ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                Capabilities <ChevronDown size={14} className={`transition-transform duration-500 ${showMegaMenu ? 'rotate-180' : ''}`} />
              </div>
              
              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 15, scale: 0.98 }} 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-[3rem] p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-outline mt-6 grid grid-cols-2 gap-4 z-[1002]"
                  >
                    {services.map((s) => (
                      <a 
                        key={s.id} 
                        href={s.href} 
                        className="p-5 rounded-[2rem] flex items-center gap-5 no-underline transition-all hover:bg-surface-muted group/item"
                      >
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-6"
                          style={{ color: 'white', background: s.color }}
                        >
                          {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                        </div>
                        <div>
                          <div className="font-black text-[1rem] text-on-surface group-hover/item:text-primary transition-colors tracking-tight font-display">{s.title}</div>
                          <div className="text-[0.8rem] text-on-surface-muted font-medium opacity-80">{s.desc}</div>
                        </div>
                      </a>
                    ))}
                    <div className="col-span-2 pt-6 mt-4 border-t border-outline/50 flex justify-between items-center px-4">
                      <div className="flex items-center gap-2 text-[0.7rem] font-black text-on-surface-muted uppercase tracking-widest">
                         <Sparkles size={12} className="text-primary" /> Core Infrastructure Expertise
                      </div>
                      <a href="/services" className="text-primary font-black text-[0.85rem] flex items-center gap-2 uppercase tracking-[0.2em] hover:gap-4 transition-all">
                        Full Stack <ArrowRight size={16} />
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
                className="text-[0.95rem] font-black text-on-surface-variant no-underline hover:text-primary transition-all relative group/nav"
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary transition-all group-hover/nav:w-full" />
              </a>
            ))}
          </div>

          {/* Action Hub */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:block">
              <AvailabilityBadge />
            </div>
            <button className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/40 active:scale-95 overflow-hidden text-[0.9rem] group">
              <span className="relative z-10 flex items-center gap-2">Initiate Project</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-primary/5 rounded-2xl text-primary hover:bg-primary hover:text-white transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white rounded-[3rem] p-10 border border-outline shadow-2xl flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="px-8 py-5 rounded-2xl text-[1.4rem] font-black text-on-surface no-underline hover:bg-primary/5 hover:text-primary transition-all font-display tracking-tight"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="border-t border-outline/50 pt-8 mt-4">
                  <button className="relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/40 active:scale-95 overflow-hidden w-full text-[1.1rem]">
                    Book a Strategy Call <ArrowUpRight size={22} />
                  </button>
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
