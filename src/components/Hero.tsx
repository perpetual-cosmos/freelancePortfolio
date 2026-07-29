"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Rocket, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } }
  };

  const glassClass = "bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl";
  const glassDarkClass = "bg-slate-900/75 backdrop-blur-xl border border-white/10 shadow-2xl text-white";

  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 flex items-center overflow-hidden bg-background">
      {/* Rich Multi-Layer Architectural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Layer 1: Tech Grid Pattern Mesh with Radial Mask Vignette */}
        <div className="absolute inset-0 bg-tech-grid radial-mask-vignette opacity-80" />

        {/* Layer 2: 3-Point Ambient Color Atmosphere */}
        <div className="absolute -top-[20%] -right-[12%] w-[68vw] h-[68vw] bg-primary/12 blur-[150px] rounded-full animate-orb-float-1 pointer-events-none" />
        <div className="absolute -bottom-[15%] -left-[8%] w-[55vw] h-[55vw] bg-secondary/10 blur-[140px] rounded-full animate-orb-float-2 pointer-events-none" />
        <div className="absolute top-[10%] left-[25%] w-[35vw] h-[35vw] bg-tech-teal/8 blur-[130px] rounded-full animate-pulse-glow pointer-events-none" />

        {/* Layer 3: Top Ambient Light Reflection Beam */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Layer 4: Tactical Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
      </div>

      <div className="max-w-[1440px] my-8 mx-auto px-4 sm:px-8 lg:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* Left: Text Content — Instant SSR paint with vibrant micro-interactions */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
          {/* Handcrafted Human Status Bar */}
          <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-[rgba(99,0,226,0.14)] text-on-surface text-[0.78rem] sm:text-[0.84rem] font-medium mb-5 sm:mb-6 shadow-[0_4px_20px_rgba(99,0,226,0.06)] transition-all hover:border-primary/30 hover:shadow-[0_6px_25px_rgba(99,0,226,0.12)]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-primary/10 text-primary font-bold text-[0.65rem] tracking-wide uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              BUILDERS
            </span>
            <span className="text-on-surface font-semibold">
              Kanpur-based full-stack team <span className="text-on-surface-muted font-normal">— 30+ live products shipped for founders worldwide</span>
            </span>
          </motion.div>

          {/* Headline — Animated Gradient Shift */}
          <motion.h1 variants={itemVariants} className="text-[clamp(2.1rem,6vw,4.8rem)] font-extrabold leading-[0.95] tracking-tighter mb-4 sm:mb-5 lg:mb-6 text-on-surface font-display">
            We Build Websites <br className="hidden sm:block" />That <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent drop-shadow-sm">Rank, Convert</span> <br className="hidden lg:block" />& Scale.
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-on-surface-variant max-w-[540px] mx-auto lg:mx-0 mb-6 sm:mb-8 text-[0.92rem] sm:text-[1rem] lg:text-[1.12rem] leading-relaxed font-medium opacity-90">
            From Shopify stores to Next.js apps, WordPress to AI automations — we ship complete digital products with measurable results. No fluff. Just code that works.
          </motion.p>

          {/* Quick proof points — inline */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 justify-center lg:justify-start mb-6 sm:mb-8 text-on-surface-muted">
            <span className="text-[0.72rem] sm:text-[0.78rem] font-extrabold tracking-tight">Clients from India, USA, UK · Wavo · Alumnipp · BlackArt Tattoo · Dear Valentine</span>
          </motion.div>

          {/* CTA Buttons — Dynamic Sheen & Glow */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12">
            <Link href="/audit" className="relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 lg:px-11 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-primary via-primary-light to-secondary text-white font-display font-black text-[0.8rem] sm:text-[0.85rem] tracking-wide shadow-[0_10px_35px_-5px_rgba(99,0,226,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_45px_-5px_rgba(99,0,226,0.6)] active:scale-95 overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                Get Free Website Audit
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 bg-white/25 -translate-x-full group-hover:animate-shimmer" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 lg:px-11 py-3.5 sm:py-4 rounded-full bg-white/90 backdrop-blur-md text-on-surface font-display font-black text-[0.8rem] sm:text-[0.85rem] border border-[rgba(99,0,226,0.12)] shadow-sm transition-all duration-500 hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-[0_8px_25px_rgba(99,0,226,0.12)] hover:-translate-y-1 active:scale-95 group">
              See Our Work
              <Rocket size={16} className="text-on-surface-muted group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Trust Metrics — Interactive Glass Cards */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5 pt-6 sm:pt-8 border-t border-[rgba(99,0,226,0.08)]">
            {[
              { label: 'Projects Shipped', value: '30+', icon: <Zap size={16} />, color: 'text-amber-500' },
              { label: 'Global Clients', value: '70+', icon: <Globe size={16} />, color: 'text-teal-600' },
              { label: 'Active SaaS Users', value: '1K+', icon: <ShieldCheck size={16} />, color: 'text-secondary' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[rgba(99,0,226,0.08)] shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:bg-white hover:-translate-y-0.5 group">
                <div className={`p-2 rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-on-surface font-black text-[1.1rem] sm:text-[1.25rem] lg:text-[1.35rem] font-display leading-none">{stat.value}</div>
                  <div className="text-on-surface-muted font-extrabold text-[0.55rem] tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Premium 3D Mockup Showcase — Interactive floating depth */}
        <motion.div
          initial={{ opacity: 1, scale: 1, rotateY: -8 }}
          animate={{ opacity: 1, scale: 1, rotateY: -8 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="relative hidden lg:flex lg:h-[520px] xl:h-[600px] items-center justify-end"
          style={{ perspective: '2000px' }}
        >
          <div className="relative group cursor-pointer">
            {/* Ambient Pulsing Aura behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-secondary/15 to-tech-teal/20 blur-[100px] rounded-full -z-10 animate-pulse-glow" />

            {/* Main Visual Frame */}
            <motion.div
              className="relative z-10 rounded-3xl xl:rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(99,0,226,0.25)] border border-white/40 transition-all duration-700 group-hover:shadow-[0_40px_90px_-15px_rgba(99,0,226,0.35)]"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02 }}
            >
              <img src="/hero_premium_dashboard.png" alt="Engineering Interface Showcase" className="w-full max-w-[520px] h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
            </motion.div>

            {/* Floating Badge 1 — Web Vitals 100 */}
            <motion.div
              animate={{ y: [0, -14, 0], rotateZ: [-1.5, 0.5, -1.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`${glassClass} absolute z-20 -top-6 -left-8 xl:-top-8 xl:-left-10 flex items-center gap-3.5 px-4 py-3 xl:px-5 xl:py-3.5 rounded-2xl border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.08)]`}
            >
              <div className="relative w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-tech-teal/15 border-2 border-tech-teal flex items-center justify-center text-[0.85rem] xl:text-[1rem] font-black text-tech-teal shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                100
                <div className="absolute inset-0 rounded-full border border-tech-teal animate-ping opacity-30" />
              </div>
              <div>
                <div className="text-[0.75rem] xl:text-[0.82rem] font-black text-on-surface leading-tight">Web Vitals</div>
                <div className="text-[0.55rem] text-tech-teal font-extrabold tracking-widest uppercase mt-0.5">PERFECT SCORE</div>
              </div>
            </motion.div>

            {/* Floating Badge 2 — Live Radar Status */}
            <motion.div
              animate={{ y: [0, 12, 0], rotateZ: [1.5, -0.5, 1.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`${glassDarkClass} absolute z-20 -bottom-5 -right-6 xl:-bottom-7 xl:-right-8 flex flex-col items-start gap-1 px-5 py-3.5 xl:px-6 xl:py-4 rounded-2xl border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.3)]`}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-2.5 h-2.5">
                  <div className="w-full h-full rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <span className="text-[0.6rem] xl:text-[0.65rem] font-black tracking-[0.2em] text-emerald-400 uppercase">STATUS: LIVE</span>
              </div>
              <div className="text-[0.75rem] xl:text-[0.82rem] text-white font-mono font-black tracking-tight mt-0.5">PRODUCTION_v2.4</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
