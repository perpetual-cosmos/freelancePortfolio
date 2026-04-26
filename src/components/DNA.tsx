"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Terminal } from 'lucide-react';

const DNA = () => {
  return (
    <section id="engineering" className="bg-surface-muted py-24 lg:py-32 relative overflow-hidden noise-overlay">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-secondary font-black text-[0.8rem] tracking-[0.3em] mb-6 uppercase">
            <Cpu size={16} /> Engineering Philosophy
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold mb-8 tracking-tight text-on-surface leading-[1.05] font-display">
            Our DNA is <span className="text-gradient">Pure Code</span>.
          </h2>
          <p className="text-on-surface-variant text-[1.15rem] mb-12 max-w-[540px] leading-relaxed font-medium">
            We don't just build apps; we architect digital ecosystems. From micro-nanoseconds in backend logic to fluid 120Hz frontend interactions, every pixel is engineered for extreme performance.
          </p>
          
          <div className="flex gap-12 flex-wrap">
            <div className="group">
              <div className="text-[2.2rem] text-secondary font-black font-display leading-none transition-all group-hover:scale-110 duration-500 flex items-baseline gap-1">
                1.2<span className="text-[1rem]">ms</span>
              </div>
              <div className="text-[0.8rem] text-on-surface font-black uppercase tracking-widest mt-2 opacity-60">P99 Latency</div>
            </div>
            <div className="group">
              <div className="text-[2.2rem] text-secondary font-black font-display leading-none transition-all group-hover:scale-110 duration-500">
                O(1)
              </div>
              <div className="text-[0.8rem] text-on-surface font-black uppercase tracking-widest mt-2 opacity-60">Architectural Focus</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-premium h-[240px] lg:h-[300px] flex flex-col justify-between group"
          >
            <div className="w-10 h-10 rounded-lg bg-tech-teal/10 flex items-center justify-center text-tech-teal mb-4 group-hover:scale-110 transition-transform">
              <Shield size={20} />
            </div>
            <div className="font-black font-display text-[1.2rem] lg:text-[1.5rem] uppercase tracking-tighter leading-none">
              Resilient<br />Security
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-premium h-[240px] lg:h-[300px] bg-primary text-white flex flex-col justify-between group shadow-primary/20 hover:shadow-primary/40"
          >
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform">
              <Zap size={20} />
            </div>
            <div className="font-black font-display text-[1.2rem] lg:text-[1.5rem] uppercase tracking-tighter leading-none text-right">
              High-Velocity<br />Output
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-premium h-[240px] lg:h-[300px] bg-on-surface text-white flex flex-col justify-between group col-span-2"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                <Terminal size={20} />
              </div>
              <div className="text-[0.65rem] font-mono text-white/40 bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-widest">
                System Log: Production_Ready
              </div>
            </div>
            <div className="font-black font-display text-[1.5rem] lg:text-[2.2rem] uppercase tracking-tighter leading-none">
              Production-Grade<br /><span className="text-primary">Reliability</span>
            </div>
          </motion.div>

          {/* Floating Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 blur-[80px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default DNA;
