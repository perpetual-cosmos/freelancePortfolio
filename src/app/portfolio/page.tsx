"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { ExternalLink, ArrowRight, Sparkles, Code2, Layout } from 'lucide-react';
import { GithubLogo as Github } from '@phosphor-icons/react';

const additionalProjects = [
  {
    slug: "alexink-tattoo-website",
    title: "Tattoo Studio Web",
    category: "FRONTEND • CREATIVE",
    image: "/projects/TattooWebsite.webp",
    desc: "Sleek and attractive client website for modern tattoo artists.",
    metrics: "High Conversion",
    link: "https://demo-tattoo-website.vercel.app/"
  },
  {
    slug: "inkmaster-tattoo-website",
    title: "Neon Tattoo Site",
    category: "FRONTEND • STYLISH",
    image: "/projects/TattooWebsite2.webp",
    desc: "Modern, neon-themed stylish tattoo website with stunning visuals.",
    metrics: "Performance",
    link: "https://demo-tattoo-website2.vercel.app/"
  },
  {
    title: "Journal Platform",
    category: "FULL STACK • CMS",
    image: "/projects/Journal.webp",
    desc: "Professional, responsive WordPress website for UJMRID academic journal.",
    metrics: "SEO Optimized",
    link: "https://ujmrid.com/"
  },
  {
    title: "Spice E-Commerce",
    category: "FULL STACK • E-COM",
    image: "/projects/Spice.webp",
    desc: "Custom WooCommerce-based B2C spice e-commerce platform.",
    metrics: "Sales Growth",
    link: "https://spicesusa.com/"
  },
  {
    title: "Modern E-Commerce",
    category: "FULL STACK • WEBGL",
    image: "/projects/E-commerce.webp",
    desc: "Interactive React e-commerce site featuring a Three.js 3D product viewer.",
    metrics: "Immersive",
    link: "https://ecommerce-frontend-five-sand.vercel.app/"
  },
  {
    slug: "cozycafe-branding-website",
    title: "Cozy Cafe Website",
    category: "CREATIVE • NEXT.JS",
    image: "/projects/CozyCafe.webp",
    desc: "Highly converting premium website experience built for cafes.",
    metrics: "Brand Growth",
    link: "https://demo-cafes-website.vercel.app/"
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 lg:pb-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[0.6rem] tracking-[0.15em] uppercase mb-4 sm:mb-5"
          >
            <Sparkles size={12} /> <span>Our Work</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold tracking-tighter leading-[0.95] mb-3 sm:mb-4 font-display text-white"
          >
            Digital Products{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Built for Scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-white/45 text-[0.88rem] sm:text-[0.95rem] font-medium leading-relaxed max-w-[520px] mx-auto"
          >
            Mission-critical applications and high-performance products engineered for ambitious businesses.
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <Portfolio showCTA={false} />

      {/* Additional Projects Grid */}
      <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
          {/* Header */}
          <header className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.6rem] tracking-[0.15em] uppercase mb-3">
                <Sparkles size={11} /> More Projects
              </div>
              <h2 className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-extrabold text-on-surface tracking-tight leading-[1.1] font-display">
                Other <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Select Builds.</span>
              </h2>
            </div>
            <p className="text-on-surface-variant text-[0.82rem] sm:text-[0.88rem] max-w-[300px] font-medium opacity-75 leading-relaxed">
              R&D experiments, client demos, and specialized enterprise modules.
            </p>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {additionalProjects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group flex flex-col bg-white border border-[rgba(0,0,0,0.05)] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
                   <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                   <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md text-[0.5rem] font-bold text-white/80 tracking-wider uppercase border border-white/8">
                      {p.metrics}
                   </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 space-y-2">
                  <div className="text-[0.55rem] font-bold text-primary tracking-[0.12em] uppercase">{p.category}</div>
                  <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold text-on-surface font-display tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-on-surface-muted text-[0.75rem] sm:text-[0.78rem] leading-relaxed font-medium opacity-70">{p.desc}</p>
                  
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {p.slug && (
                      <Link href={`/case-study/${p.slug}`} className="flex items-center gap-1 text-[0.68rem] font-bold text-on-surface hover:text-primary transition-colors no-underline">
                        <Layout size={12} /> Case Study
                      </Link>
                    )}
                    <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[0.68rem] font-bold text-on-surface-muted hover:text-primary transition-colors no-underline">
                      <ExternalLink size={12} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-14 p-6 sm:p-8 lg:p-10 rounded-2xl bg-on-surface text-white relative overflow-hidden flex flex-col sm:flex-row items-center gap-5 sm:gap-8"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,0,226,0.1),transparent_70%)] pointer-events-none" />
             <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-primary shrink-0">
                <Code2 size={22} />
             </div>
             <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[1.05rem] sm:text-[1.15rem] font-bold font-display tracking-tight mb-1">
                   Have a vision for <span className="text-primary">something new?</span>
                </h3>
                <p className="text-white/50 text-[0.78rem] sm:text-[0.82rem] font-medium">
                   Let's discuss how we can build your next competitive advantage.
                </p>
             </div>
             <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 bg-primary text-white rounded-xl font-bold text-[0.78rem] sm:text-[0.82rem] no-underline hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 shrink-0">
                Start a Project <ArrowRight size={14} className="opacity-60" />
             </Link>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
