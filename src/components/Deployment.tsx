"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Activity, ArrowUpRight } from 'lucide-react';

const deployments = [
  { 
    title: "FinEdge Global", 
    desc: "Real-time banking engine for high-frequency algorithmic trading.", 
    img: "/portfolio_fintech.png", 
    icon: <Terminal size={20} />,
    color: "#6300e2",
    metrics: [{ label: "Latency", value: "1.2ms" }, { label: "Throughput", value: "10k RPS" }] 
  },
  { 
    title: "LuxeCart", 
    desc: "Editorial-first commerce experience for global luxury brands.", 
    img: "/portfolio_ecommerce.png", 
    icon: <Activity size={20} />,
    color: "#d946ef",
    metrics: [{ label: "Uptime", value: "100%" }, { label: "Conversion", value: "+45%" }] 
  },
  { 
    title: "MediSync AI", 
    desc: "Patient data ingestion platform with privacy-first AI diagnostics.", 
    img: "/portfolio_ai_healthcare.png", 
    icon: <Database size={20} />,
    color: "#2dd4bf",
    metrics: [{ label: "Compliance", value: "HIPAA" }, { label: "Inference", value: "2s" }] 
  }
];

const Deployment = () => {
  const cardClass = "bg-white rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group card-hover-gradient shadow-xl";

  return (
    <section id="logs" className="bg-surface-muted py-24 lg:py-40 relative overflow-hidden noise-overlay">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(99,0,226,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 mb-20 lg:mb-32">
          <div className="max-w-[700px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="text-primary font-black text-[0.8rem] tracking-[0.4em] mb-6 uppercase flex items-center gap-4"
            >
              <div className="w-12 h-[2px] bg-primary/20" />
              SYSTEM_DEPLOYMENT_LOGS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-tight text-on-surface leading-[1.1] font-display"
            >
              Engineering <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Case Analytics.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="flex items-center gap-3 text-on-surface-variant font-black text-[0.9rem] cursor-pointer group hover:text-primary transition-all uppercase tracking-widest"
          >
            Full Architecture Docs <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {deployments.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`${cardClass} !p-0 flex flex-col h-full bg-white border border-[rgba(99,0,226,0.06)]`}
            >
              {/* Image Preview */}
              <div className="relative h-[240px] lg:h-[300px] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none opacity-80" />
                
                <div className="absolute top-6 left-6 px-5 py-3 bg-slate-900/75 backdrop-blur-xl rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10">
                  <div style={{ color: p.color }}>{p.icon}</div>
                  <span className="text-[0.7rem] font-black tracking-[0.15em] uppercase text-white/90">STABLE_V4</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-12 flex flex-col flex-1 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[1.8rem] font-bold text-on-surface tracking-tight font-display leading-tight">{p.title}</h3>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e] animate-pulse" />
                </div>
                
                <p className="text-on-surface-variant text-[1.1rem] leading-relaxed mb-12 font-medium opacity-90">
                  {p.desc}
                </p>
                
                {/* Metrics */}
                <div className="mt-auto pt-10 border-t border-[rgba(99,0,226,0.06)] flex justify-between items-center">
                  {p.metrics.map((m, j) => (
                    <div key={j} className="flex flex-col">
                      <div className="text-[1.6rem] font-black text-on-surface font-display leading-none mb-2">{m.value}</div>
                      <div className="text-[0.65rem] text-on-surface-muted font-black uppercase tracking-[0.2em]">{m.label}</div>
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border border-[rgba(99,0,226,0.06)] flex items-center justify-center text-on-surface-muted transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deployment;
