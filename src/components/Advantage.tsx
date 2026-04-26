"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Link, Shield, Crosshair, RefreshCw, Lock, Sparkles } from 'lucide-react';

const edges = [
  { title: "High-Performance First", desc: "Optimized, lightning-fast applications built for scale and extreme velocity. We focus on sub-100ms response times and fluid interactions.", icon: <Zap size={24} /> },
  { title: "Zero Integration Gaps", desc: "The same team that builds your backend also configures your CI/CD and connects your mobile app — no friction in system communication.", icon: <Link size={24} /> },
  { title: "Universal Engineering", desc: "One code style, one architecture philosophy, and one security posture across every layer of your product for long-term maintainability.", icon: <Shield size={24} /> },
  { title: "Single Accountability", desc: "One contract, one relationship, and one point of contact. We own the full stack, so you always know exactly who is responsible for delivery.", icon: <Crosshair size={24} /> },
  { title: "Rapid Context Switching", desc: "When you need to add an AI feature to your existing web app, you don't re-brief. We already know your stack and can execute instantly.", icon: <RefreshCw size={24} /> },
  { title: "Hardened Security", desc: "Baking encryption and threat detection into every layer. We follow global standards to ensure your digital infrastructure is bulletproof.", icon: <Lock size={24} /> }
];

const Advantage = () => {
  const cardClass = "bg-white rounded-2xl border border-[rgba(99,0,226,0.06)] shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden p-10 lg:p-12 group hover:-translate-y-2 hover:border-[rgba(99,0,226,0.12)] hover:shadow-lg hover:scale-[1.01] card-hover-gradient";

  return (
    <section id="advantage" className="bg-surface-muted py-32 lg:py-48 relative overflow-hidden noise-overlay">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 mb-24 lg:mb-32">
          <div className="max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8"
            >
              <Sparkles size={16} /> <span>The Unipick Advantage</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,6vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-on-surface font-display"
            >
              Full-Spectrum Studio Over <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Patchwork Vendors.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-[1.2rem] max-w-[400px] leading-relaxed font-medium opacity-80"
          >
            The hidden cost of piecing your stack together is integration gaps and blame-shifting. We eliminate this by owning the full architectural lifecycle.
          </motion.p>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {edges.map((e, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cardClass}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 group-hover:scale-110 shadow-sm group-hover:shadow-[0_0_20px_rgba(99,0,226,0.3)]">
                {e.icon}
              </div>
              <div>
                <h3 className="text-[1.4rem] lg:text-[1.6rem] font-bold text-on-surface mb-4 tracking-tighter font-display leading-tight">
                  {e.title}
                </h3>
                <p className="text-on-surface-variant text-[1.05rem] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {e.desc}
                </p>
              </div>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-on-surface-muted font-black text-[0.8rem] tracking-[0.3em] uppercase opacity-60">
            Engineered for stability. Built for scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantage;
