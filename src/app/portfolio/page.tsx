"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { ExternalLink, ArrowRight, Sparkles, Code2, Globe, Database, Cpu } from 'lucide-react';
import { GithubLogo as Github } from '@phosphor-icons/react';

const additionalProjects = [
  {
    title: "EcoTrack IoT",
    category: "IoT • CLOUD • DATA",
    image: "/project_eco.png",
    desc: "Real-time environmental monitoring system for smart cities.",
    metrics: "2.4M Events/Day"
  },
  {
    title: "SecureAuth Pro",
    category: "SECURITY • DEV OPS",
    image: "/project_auth.png",
    desc: "Enterprise-grade authentication gateway for distributed systems.",
    metrics: "0.2ms Auth Latency"
  },
  {
    title: "VocalAI Assistant",
    category: "AI • NLP • MOBILE",
    image: "/project_vocal.png",
    desc: "Voice-controlled AI assistant for healthcare professionals.",
    metrics: "94% Accuracy"
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      
      {/* Cinematic Header */}
      <section className="relative pt-64 pb-32 overflow-hidden border-b border-white/5 noise-overlay">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#6300e2_1px,transparent_1px),linear-gradient(to_bottom,#6300e2_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-12"
          >
            <Sparkles size={16} /> <span>Engineering Portfolio 2024</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold tracking-tighter leading-[0.9] mb-12 font-display text-white"
          >
            Digital Products <br /> <span className="text-gradient">Built for Scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-[1.4rem] lg:text-[1.8rem] font-medium leading-relaxed max-w-[850px] mx-auto"
          >
            A technical archive of mission-critical applications, high-throughput systems, and intelligence-driven products engineered for the world's most ambitious ventures.
          </motion.p>
        </div>
      </section>

      {/* Primary Portfolio Showcase */}
      <Portfolio />

      {/* Secondary Project Grid */}
      <section className="py-32 lg:py-56 relative overflow-hidden bg-white rounded-t-[5rem] -mt-20 z-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <header className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
               <div className="text-primary font-black text-[0.8rem] tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-primary" /> ARCHIVE_SELECTS
               </div>
               <h2 className="text-[3rem] lg:text-[5rem] font-black text-on-surface leading-none tracking-tighter font-display">
                  Other <span className="text-gradient">Select Builds.</span>
               </h2>
            </div>
            <p className="text-on-surface-variant text-[1.2rem] max-w-sm font-medium opacity-80 leading-relaxed">
               Exploring technical boundaries through R&D experiments and specialized enterprise modules.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {additionalProjects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-surface-muted border border-outline rounded-[3rem] overflow-hidden p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:border-primary/20"
              >
                <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-[#0a0a0a] mb-10 shadow-xl">
                   <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-[3rem] font-display pointer-events-none group-hover:text-primary/10 transition-colors">
                      {p.title.split(' ')[0]}
                   </div>
                   <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[0.6rem] font-black text-white/60 tracking-widest uppercase">
                      {p.metrics}
                   </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-primary font-black text-[0.7rem] tracking-[0.2em] uppercase mb-2">{p.category}</div>
                    <h3 className="text-[1.8rem] lg:text-[2.2rem] font-black text-on-surface font-display tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
                  </div>
                  <p className="text-on-surface-variant text-[1.05rem] leading-relaxed font-medium opacity-80">{p.desc}</p>
                  
                  <div className="pt-6 flex items-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-on-surface font-black text-[0.8rem] tracking-widest uppercase hover:text-primary transition-all">
                      Demo <ExternalLink size={16} />
                    </a>
                    <a href="#" className="flex items-center gap-2 text-on-surface-variant font-black text-[0.8rem] tracking-widest uppercase hover:text-primary transition-all">
                      Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Vision CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 p-12 lg:p-32 rounded-[4rem] bg-on-surface text-white relative overflow-hidden text-center group"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,0,226,0.1),transparent_70%)] pointer-events-none" />
             <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                   <Code2 size={40} />
                </div>
                <h3 className="text-[3rem] lg:text-[5rem] font-black font-display tracking-tighter leading-none mb-10">
                   Have a vision for <br /> <span className="text-primary">something new?</span>
                </h3>
                <p className="text-white/60 text-[1.2rem] lg:text-[1.4rem] max-w-2xl mb-16">
                   Let's discuss how we can architect your next competitive advantage through elite engineering and strategic digital infrastructure.
                </p>
                <button className="px-16 py-6 bg-primary text-white rounded-full font-black text-[1rem] uppercase tracking-[0.3em] shadow-2xl shadow-primary/40 hover:scale-[1.05] hover:shadow-primary/60 transition-all duration-500">
                   Initiate System Build
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
