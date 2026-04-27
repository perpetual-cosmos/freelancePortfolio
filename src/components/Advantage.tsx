"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Link, Shield, Crosshair, RefreshCw, Lock, Sparkles } from 'lucide-react';

const edges = [
  { title: "High-Performance First", desc: "Optimized, lightning-fast apps built for scale. Sub-100ms response times and fluid interactions.", icon: <Zap size={20} /> },
  { title: "Zero Integration Gaps", desc: "Same team builds your backend, configures CI/CD, and connects your mobile app — no friction.", icon: <Link size={20} /> },
  { title: "Universal Engineering", desc: "One code style, one architecture, one security posture across every layer of your product.", icon: <Shield size={20} /> },
  { title: "Single Accountability", desc: "One contract, one relationship, one point of contact. We own the full stack.", icon: <Crosshair size={20} /> },
  { title: "Rapid Context Switching", desc: "Need an AI feature on your existing app? No re-briefing — we already know your stack.", icon: <RefreshCw size={20} /> },
  { title: "Hardened Security", desc: "Encryption and threat detection baked into every layer, following global standards.", icon: <Lock size={20} /> }
];

const Advantage = () => {
  return (
    <section id="advantage" className="bg-surface-muted py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div className="max-w-[550px]">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] uppercase mb-4"
            >
              <Sparkles size={12} /> <span>The Unipick Advantage</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-on-surface font-display"
            >
              Full-Spectrum Studio Over{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Patchwork Vendors.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-on-surface-variant text-[0.85rem] sm:text-[0.92rem] max-w-[340px] leading-relaxed font-medium opacity-80"
          >
            The hidden cost of piecing your stack together is integration gaps and blame-shifting. We own the full lifecycle.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {edges.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-xl border border-[rgba(0,0,0,0.05)] p-5 sm:p-6 group hover:-translate-y-1 hover:border-[rgba(99,0,226,0.1)] hover:shadow-md transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center text-primary mb-4 transition-all duration-400 group-hover:bg-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-sm">
                {e.icon}
              </div>
              <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold text-on-surface mb-2 tracking-tight font-display leading-tight">
                {e.title}
              </h3>
              <p className="text-on-surface-variant text-[0.78rem] sm:text-[0.82rem] leading-relaxed font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-on-surface-muted font-bold text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase opacity-50">
            Engineered for stability. Built for scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantage;
