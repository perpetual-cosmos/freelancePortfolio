"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { 
  ArrowRight, CheckCircle2, Zap, Shield, 
  Target, Rocket, Sparkles, Cpu, Code2, 
  Terminal, Database, Activity, Brain,
  ChevronRight, Box, Lock, MousePointer2
} from 'lucide-react';

const services = [
  {
    id: 'SVC-ARCH-01',
    title: 'Frontend Infrastructure',
    tagline: 'Precision Engineering for the Modern Web',
    icon: <Code2 className="w-10 h-10" />,
    color: '#6300e2',
    description: 'We don\'t just build UIs; we architect delivery systems. Our frontend core is focused on sub-200ms TTFB, atomic state management, and flawless edge-caching strategies.',
    features: [
      { title: 'Next.js 15+ Core', desc: 'Leveraging React 19 Server Components for maximum performance.' },
      { title: 'State Orchestration', desc: 'Complex data flow management with Zustand and TanStack Query.' },
      { title: 'Design Systems', desc: 'Building documented, accessible, and themeable UI foundations.' },
      { title: 'Performance Ops', desc: 'Rigorous optimization for LCP, CLS, and INP metrics.' }
    ],
    specs: {
      latency: '< 150ms',
      uptime: '99.99%',
      security: 'Enterprise Grade',
      delivery: 'Edge Distributed'
    },
    stack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind V4', 'Framer Motion'],
    startingPrice: '$4,500'
  },
  {
    id: 'SVC-BACK-02',
    title: 'Distributed Backends',
    tagline: 'Resilient Logic for Global Scale',
    icon: <Terminal className="w-10 h-10" />,
    color: '#10b981',
    description: 'High-concurrency systems built to handle millions of requests. We specialize in event-driven architectures, elastic Node.js environments, and hardened security protocols.',
    features: [
      { title: 'Microservices', desc: 'Decoupled, independently scalable service architectures.' },
      { title: 'Database Ops', desc: 'Advanced PostgreSQL indexing and Redis caching layers.' },
      { title: 'API Engineering', desc: 'Robust, documented REST and GraphQL interfaces.' },
      { title: 'Real-time Flow', desc: 'Bi-directional communication via WebSockets and gRPC.' }
    ],
    specs: {
      latency: '< 80ms',
      uptime: '99.95%',
      security: 'SOC2 Compliant',
      delivery: 'Cloud Native'
    },
    stack: ['Node.js', 'NestJS', 'Go', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    startingPrice: '$7,000'
  },
  {
    id: 'SVC-AI-03',
    title: 'Intelligence Pipelines',
    tagline: 'Practical AI for Production Environments',
    icon: <Brain className="w-10 h-10" />,
    color: '#8b5cf6',
    description: 'Bridging the gap between AI hype and production reality. We deploy custom LLM agents, vector-powered search, and autonomous data ingestion pipelines that provide measurable ROI.',
    features: [
      { title: 'Custom Agents', desc: 'Task-specific LLM agents with tool-calling capabilities.' },
      { title: 'RAG Systems', desc: 'Vector search engines powered by Pinecone and LangChain.' },
      { title: 'Data Ingestion', desc: 'Automated pipelines for processing unstructured enterprise data.' },
      { title: 'Inference Ops', desc: 'Optimized model deployment for speed and cost-efficiency.' }
    ],
    specs: {
      latency: '< 1.2s',
      uptime: '99.9%',
      security: 'Private API',
      delivery: 'Hybrid AI'
    },
    stack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'PyTorch'],
    startingPrice: '$6,500'
  }
];

const ServiceBlock = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.section 
      id={`service-${service.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative mb-32 lg:mb-56 group"
    >
      <div className="bg-white rounded-[4rem] border border-outline shadow-2xl overflow-hidden relative">
        {/* Dynamic Accents */}
        <div className="absolute top-0 right-0 w-[40%] h-[1px] bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[1px] bg-gradient-to-r from-secondary/30 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr]">
          {/* Detailed Content */}
          <div className="p-10 lg:p-24 border-b lg:border-b-0 lg:border-r border-outline">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
              <div 
                className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl relative"
                style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}aa)` }}
              >
                {service.icon}
                <div className="absolute inset-0 blur-3xl opacity-30 -z-10" style={{ background: service.color }} />
              </div>
              <div>
                <div className="text-primary font-black text-[0.8rem] tracking-[0.4em] uppercase mb-2">MOD_ID: {service.id}</div>
                <h2 className="text-[2.8rem] lg:text-[4rem] font-black text-on-surface leading-[0.95] tracking-tighter font-display">
                   {service.title}
                </h2>
              </div>
            </div>

            <p className="text-on-surface-variant text-[1.25rem] lg:text-[1.5rem] font-medium leading-relaxed mb-20 max-w-[800px] opacity-90">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {service.features.map((f, i) => (
                <div key={i} className="space-y-4 group/item">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center text-primary transition-all group-hover/item:bg-primary group-hover/item:text-white">
                         <ChevronRight size={18} />
                      </div>
                      <h4 className="text-[1.2rem] font-black text-on-surface font-display">{f.title}</h4>
                   </div>
                   <p className="text-on-surface-variant text-[1rem] leading-relaxed font-medium pl-11 opacity-80">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Terminal Style */}
          <div className="bg-[#0a0a0a] p-10 lg:p-20 flex flex-col text-white">
            <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/10">
               <span className="text-[0.7rem] font-black tracking-[0.3em] opacity-40 uppercase">System Specs</span>
               <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
               </div>
            </div>

            <div className="space-y-12 flex-1">
               {/* Spec Grid */}
               <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                  {Object.entries(service.specs).map(([key, val]) => (
                    <div key={key}>
                       <div className="text-[0.6rem] font-black text-white/30 tracking-[0.2em] uppercase mb-2">{key.replace('_', ' ')}</div>
                       <div className="text-[1.1rem] font-black font-display text-white">{val}</div>
                    </div>
                  ))}
               </div>

               {/* Tech Stack */}
               <div>
                  <div className="text-[0.6rem] font-black text-white/30 tracking-[0.2em] uppercase mb-6">Technologies</div>
                  <div className="flex flex-wrap gap-2.5">
                     {service.stack.map(tech => (
                       <span key={tech} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[0.7rem] font-black text-white/60 hover:text-primary hover:border-primary/40 transition-all cursor-default uppercase tracking-widest">{tech}</span>
                     ))}
                  </div>
               </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col gap-8">
               <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[0.6rem] font-black text-white/30 tracking-[0.2em] uppercase mb-1">Baseline Investment</div>
                    <div className="text-[2.2rem] font-black font-display text-primary leading-none">{service.startingPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.6rem] font-black text-white/30 tracking-[0.2em] uppercase mb-1">Status</div>
                    <div className="text-[0.8rem] font-black text-green-500 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> AVAILABLE
                    </div>
                  </div>
               </div>

               <button className="w-full py-6 bg-primary text-white rounded-2xl font-black text-[0.9rem] uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(99,0,226,0.3)] hover:scale-[1.02] hover:shadow-primary/50 transition-all duration-500 flex items-center justify-center gap-4 group/btn">
                  Initialize Engagement <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default function ServicesPage() {
  return (
    <main className="bg-surface-muted min-h-screen">
      <Navbar />
      
      {/* Dynamic Header */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-[#050505] noise-overlay">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#6300e2_1px,transparent_1px),linear-gradient(to_bottom,#6300e2_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[0.8rem] tracking-[0.3em] uppercase mb-12">
               <Box size={18} /> <span>UNIPICK_SERVICE_ARCHITECTURE_2024</span>
            </div>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold tracking-tighter leading-[0.9] mb-12 font-display text-white">
               Full-Spectrum <br /> <span className="text-gradient">Engineering Ops.</span>
            </h1>
            <p className="text-white/60 text-[1.4rem] lg:text-[1.8rem] font-medium leading-relaxed max-w-[850px] mx-auto">
               Deep technical expertise across the entire stack. We don't just solve problems; we engineer the systems that eliminate them.
            </p>
          </motion.div>
        </div>

        {/* Floating Decors */}
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full" />
      </section>

      {/* Main Service List */}
      <div className="max-w-[1440px] mx-auto px-6 py-32 lg:py-48">
        {services.map((s, i) => (
          <ServiceBlock key={s.id} service={s} index={i} />
        ))}
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
