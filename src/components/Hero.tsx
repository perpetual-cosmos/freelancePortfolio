"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Rocket, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any } }
  };

  const glassClass = "bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl";
  const glassDarkClass = "bg-slate-900/75 backdrop-blur-xl border border-white/10 shadow-2xl text-white";

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 flex items-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -right-[10%] w-[70vw] h-[70vw] bg-primary blur-[160px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -left-[5%] w-[50vw] h-[50vw] bg-secondary blur-[140px] rounded-full"
        />
        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
          {/* Top Badge — shorter, punchier */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.55rem] sm:text-[0.6rem] lg:text-[0.7rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Full-Stack Development · 3 years · 30+ Shipped Products · Kanpur → Worldwide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-[clamp(1.8rem,6vw,4.8rem)] font-extrabold leading-[0.95] tracking-tighter mb-4 sm:mb-5 lg:mb-6 text-on-surface font-display">
            We Build Websites <br className="hidden sm:block" />That <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">Rank, Convert</span> <br className="hidden lg:block" />& Scale.
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-on-surface-variant max-w-[520px] mx-auto lg:mx-0 mb-6 sm:mb-8 text-[0.88rem] sm:text-[0.95rem] lg:text-[1.1rem] leading-relaxed font-medium opacity-85">
            From Shopify stores to Next.js apps, WordPress to AI automations — we ship complete digital products with measurable results. No fluff. Just code that works.
          </motion.p>

          {/* Quick proof points — inline */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 justify-center lg:justify-start mb-6 sm:mb-8 text-on-surface-muted">
            <span className="text-[0.7rem] sm:text-[0.75rem] font-bold">Clients from India, USA, UK · Wavo · Alumnipp · BlackArt Tattoo · Dear Valentine</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12">
            <Link href="/audit" className="relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black text-[0.8rem] sm:text-[0.85rem] shadow-lg shadow-primary/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/40 active:scale-95 overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                Get Free Website Audit
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full bg-white text-on-surface font-display font-black text-[0.8rem] sm:text-[0.85rem] border border-outline shadow-sm transition-all duration-500 hover:border-primary hover:text-primary hover:-translate-y-1 active:scale-95 group">
              See Our Work
              <Rocket size={16} className="text-on-surface-muted group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>

          {/* Trust Metrics — compact row */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8 border-t border-outline">
            {[
              { label: 'Projects', value: '30+', icon: <Zap size={16} /> },
              { label: 'Countries', value: '70+', icon: <Globe size={16} /> },
              { label: 'SaaS Users', value: '1K+', icon: <ShieldCheck size={16} /> }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 group">
                <span className="text-primary/30 group-hover:text-primary transition-colors duration-500">{stat.icon}</span>
                <div>
                  <div className="text-on-surface font-black text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] font-display leading-none">{stat.value}</div>
                  <div className="text-on-surface-muted font-bold text-[0.5rem] sm:text-[0.55rem] tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Premium Mockup — visible on lg+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: -8 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any, delay: 0.5 }}
          className="relative hidden lg:flex lg:h-[520px] xl:h-[600px] items-center justify-end"
          style={{ perspective: '2000px' }}
        >
          <div className="relative group cursor-pointer">
            {/* Main Visual */}
            <motion.div
              className="relative z-10 rounded-3xl xl:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(99,0,226,0.2)] border border-white/15 transition-all duration-700"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: -4, rotateX: 2, scale: 1.015 }}
            >
              <img src="/hero_premium_dashboard.png" alt="Engineering Interface" className="w-full max-w-[520px] h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-white/5 pointer-events-none mix-blend-overlay" />
            </motion.div>

            {/* Floating Badge — Top Left */}
            <motion.div
              animate={{ y: [0, -18, 0], rotateZ: [-1.5, 0.5, -1.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className={`${glassClass} absolute z-20 -top-6 -left-8 xl:-top-10 xl:-left-12 flex items-center gap-3 px-4 py-3 xl:px-6 xl:py-4 rounded-xl xl:rounded-2xl`}
            >
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-tech-teal/10 border-2 border-tech-teal flex items-center justify-center text-[0.85rem] xl:text-[1.1rem] font-black text-tech-teal shadow-[0_0_15px_rgba(45,212,191,0.3)]">100</div>
              <div>
                <div className="text-[0.75rem] xl:text-[0.85rem] font-black text-on-surface leading-tight">Web Vitals</div>
                <div className="text-[0.55rem] xl:text-[0.6rem] text-on-surface-muted font-bold tracking-widest uppercase">Perfect Score</div>
              </div>
            </motion.div>

            {/* Floating Badge — Bottom Right */}
            <motion.div
              animate={{ y: [0, 15, 0], rotateZ: [1.5, -0.5, 1.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`${glassDarkClass} absolute z-20 -bottom-5 -right-6 xl:-bottom-8 xl:-right-10 flex flex-col items-start gap-1.5 px-5 py-3.5 xl:px-7 xl:py-5 rounded-xl xl:rounded-2xl border border-white/5`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
                <span className="text-[0.6rem] xl:text-[0.65rem] font-black tracking-[0.2em] text-white/80 uppercase">STATUS: LIVE</span>
              </div>
              <div className="text-[0.75rem] xl:text-[0.85rem] text-tech-teal font-mono font-bold tracking-tight">PRODUCTION_v2.4</div>
            </motion.div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/10 blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
