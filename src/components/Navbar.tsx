"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Globe, Code2, Server, Brain, BarChart3, BookOpen, ArrowRight, ShoppingCart, Palette, Settings, Layers, Workflow, PenTool, Monitor, Database, Bot, Plug, FileCode, LayoutTemplate, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
  {
    title: 'Web Development',
    slug: 'web-development',
    icon: <Code2 size={18} />,
    color: '#6300e2',
    items: ['React.js', 'Next.js', 'MERN Stack', 'TypeScript', 'Full-Stack Apps', 'SaaS Products', 'API Development', 'Progressive Web Apps']
  },
  {
    title: 'E-Commerce',
    slug: 'shopify-development',
    icon: <ShoppingCart size={18} />,
    color: '#10b981',
    items: ['Shopify Development', 'WooCommerce', 'Custom Stores', 'Payment Integration', 'D2C Brands', 'Product Catalog', 'Checkout Optimization']
  },
  {
    title: 'CMS & Platforms',
    slug: 'cms-platforms',
    icon: <Layers size={18} />,
    color: '#0ea5e9',
    items: ['WordPress', 'Headless CMS', 'LMS / EdTech', 'Website Migration', 'Blog Systems', 'Custom Dashboards', 'Multi-Language Sites']
  },
  {
    title: 'AI & Automation',
    slug: 'ai-automation',
    icon: <Bot size={18} />,
    color: '#a855f7',
    items: ['AI Automation', 'n8n Workflows', 'Zapier', 'Make.com', 'WhatsApp Bots', 'CRM Integration', 'Lead Routing', 'Chatbots']
  },
  {
    title: 'Design & Branding',
    slug: 'design-branding',
    icon: <Palette size={18} />,
    color: '#f43f5e',
    items: ['UI/UX Design', 'Figma Prototyping', 'Logo Design', 'Brand Identity', 'Landing Pages', 'Design Systems']
  },
  {
    title: 'SEO & Growth',
    slug: 'seo-services',
    icon: <BarChart3 size={18} />,
    color: '#f59e0b',
    items: ['Technical SEO', 'On-Page SEO', 'Core Web Vitals', 'Performance Audit', 'Keyword Strategy', 'Content Marketing', 'Business Consultation']
  }
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-10">
        <nav className={`
          relative flex justify-between items-center h-14 sm:h-16 lg:h-18 px-4 sm:px-6 lg:px-8 rounded-2xl border transition-all duration-500 overflow-hidden
          ${scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-[rgba(99,0,226,0.18)] shadow-[0_12px_40px_rgba(99,0,226,0.12)]'
            : 'bg-white/80 backdrop-blur-2xl border-[rgba(99,0,226,0.12)] shadow-[0_4px_25px_rgba(99,0,226,0.05)]'}
        `}>
          {/* Top Glass Highlight Beam */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />

          {/* Brand */}
          <Link href="/" className="flex items-center no-underline shrink-0 group relative z-10 py-0.5">
            <img src="/theunipicklogo.png" alt="TheUnipick" className="h-10 sm:h-12 lg:h-14 w-auto max-w-[170px] sm:max-w-[210px] lg:max-w-none object-contain transition-all duration-300 group-hover:scale-105" />
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 z-10">
            {/* Services Mega-Menu Trigger */}
            <div
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="relative"
            >
              <button className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.82rem] font-bold transition-all duration-300 ${showMegaMenu ? 'text-primary bg-primary/10 shadow-sm' : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'}`}>
                Services <ChevronDown size={13} className={`transition-transform duration-300 ${showMegaMenu ? 'rotate-180 text-primary' : 'opacity-60'}`} />
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-[0.82rem] font-bold text-on-surface-variant no-underline hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-[0.82rem] font-extrabold text-primary no-underline hover:bg-primary/10 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-10">
            {/* Availability Badge  High-Contrast Cyber Teal Radar Ping */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 shadow-[0_0_12px_rgba(20,184,166,0.15)] transition-all hover:border-teal-500/40">
              <div className="relative w-2 h-2">
                <div className="w-full h-full bg-teal-500 rounded-full shadow-[0_0_8px_#14b8a6]" />
                <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-[0.65rem] font-black text-teal-700 tracking-wider uppercase whitespace-nowrap">Available for Hire</span>
            </div>

            <Link href="/audit" className="hidden sm:inline-flex items-center gap-2 px-4.5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary via-primary-light to-secondary text-white font-black text-[0.78rem] sm:text-[0.82rem] shadow-[0_4px_20px_rgba(99,0,226,0.3)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(99,0,226,0.45)] hover:-translate-y-0.5 active:scale-95 group overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-1.5">
                Free Audit
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-black/[0.03] text-on-surface-variant hover:bg-primary hover:text-white transition-all"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* ===== FULL-WIDTH MEGA MENU ===== */}
        <AnimatePresence>
          {showMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.25 }}
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="hidden lg:block absolute left-0 right-0 top-full mt-1 z-[1001]"
            >
              <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-10">
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.06)] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)] p-6 lg:p-8">
                  {/* Category Grid */}
                  <div className="grid grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="flex flex-col">
                        {/* Category Header */}
                        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[rgba(0,0,0,0.04)]">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ color: 'white', background: cat.color }}
                          >
                            {cat.icon}
                          </div>
                          <span className="text-[0.78rem] font-bold text-on-surface leading-tight">{cat.title}</span>
                        </div>
                        {/* Service Items */}
                        <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <a
                                href={`/services/${cat.slug}`}
                                className="text-[0.75rem] text-on-surface-variant font-medium no-underline hover:text-primary transition-colors block py-0.5 leading-relaxed"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Footer Bar */}
                  <div className="mt-6 pt-5 border-t border-[rgba(0,0,0,0.04)] flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[0.78rem] text-on-surface-muted font-medium max-w-[480px]">
                      Need something custom? We build tailored solutions for startups, D2C brands, and enterprises.
                    </p>
                    <div className="flex items-center gap-4">
                      <Link href="/services" className="text-[0.75rem] font-bold text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5 no-underline">
                        All Services <ArrowRight size={13} />
                      </Link>
                      <Link href="/contact" className="text-[0.75rem] font-bold text-primary flex items-center gap-1.5 no-underline hover:gap-2.5 transition-all">
                        Let's Talk <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 overflow-hidden"
            >
              <div className="bg-white rounded-2xl p-3 border border-[rgba(0,0,0,0.06)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto">
                {/* Services Accordion */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[0.9rem] font-bold text-on-surface hover:bg-surface-muted transition-all text-left"
                >
                  Services
                  <ChevronDown size={16} className={`text-on-surface-muted transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-3 px-3 pb-3">
                        {serviceCategories.map((cat) => (
                          <div key={cat.title} className="bg-surface-muted rounded-xl p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                                style={{ color: 'white', background: cat.color }}
                              >
                                {React.cloneElement(cat.icon as React.ReactElement<{ size?: number }>, { size: 12 })}
                              </div>
                              <span className="text-[0.7rem] font-bold text-on-surface">{cat.title}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                              {cat.items.slice(0, 4).map((item) => (
                                <a key={item} href={`/services/${cat.slug}`} onClick={() => setIsOpen(false)} className="text-[0.65rem] text-on-surface-muted font-medium no-underline hover:text-primary py-0.5">{item}</a>
                              ))}
                              {cat.items.length > 4 && (
                                <span className="text-[0.6rem] text-primary font-bold mt-0.5">+{cat.items.length - 4} more</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-xl text-[0.9rem] font-bold text-on-surface no-underline hover:bg-surface-muted transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/contact#book-a-call"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-[0.9rem] font-bold text-primary no-underline hover:bg-primary/5 transition-all"
                >
                  Book a Call
                </a>
                <div className="border-t border-[rgba(0,0,0,0.04)] mt-1 pt-2">
                  <Link href="/audit" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-on-surface text-white font-bold text-[0.85rem] hover:bg-primary transition-all w-full">
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
