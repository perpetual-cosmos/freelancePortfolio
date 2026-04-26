"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Rocket, Globe } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } }
  };

  const btnPrimaryClass = "relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-primary/40 active:scale-95 overflow-hidden group";
  const btnSecondaryClass = "inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-primary font-display font-black border border-primary/10 shadow-sm transition-all duration-500 hover:bg-surface-muted hover:-translate-y-1.5 hover:border-primary active:scale-95 group";
  const glassClass = "bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl";
  const glassDarkClass = "bg-slate-900/75 backdrop-blur-xl border border-white/10 shadow-2xl text-white";

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-40 pb-24 flex items-center overflow-hidden bg-background relative noise-overlay">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.08, 0.15, 0.08],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -right-[10%] w-[80vw] h-[80vw] bg-primary blur-[160px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.05, 0.1, 0.05],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -left-[5%] w-[60vw] h-[60vw] bg-secondary blur-[140px] rounded-full" 
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
        {/* Left: Text Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span>Full-Stack Developer & SEO Specialist · 18 months · 10+ live products</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-[clamp(2.8rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-tight mb-8 text-on-surface font-display">
            I Build Websites That <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Rank, Convert</span> <br className="hidden lg:block" /> & Scale.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-on-surface-variant max-w-[640px] mx-auto lg:mx-0 mb-12 text-[clamp(1.1rem,1.4vw,1.35rem)] leading-relaxed font-medium opacity-90">
            From Shopify stores to Next.js apps, WordPress sites to AI automations — I deliver complete digital products with measurable business results. No fluff. No templates. Just code that works.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center lg:justify-start mb-4">
            <Link href="/audit" className={btnPrimaryClass}>
              <span className="relative z-10 flex items-center gap-2">
                Get Free Website Audit 
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
            </Link>
            <Link href="/portfolio" className={btnSecondaryClass}>
              See My Work
              <Rocket size={18} className="text-primary/40 group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="text-[0.85rem] text-on-surface-muted font-bold mb-20 lg:mb-28 flex items-center justify-center lg:justify-start gap-2 tracking-wide">
             <ShieldCheck size={18} className="text-primary" /> No long-term contracts. Fixed pricing. Cancel anytime.
          </motion.div>
          
          {/* Trust Metrics */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-20">
            {[
              { label: 'Live Projects', value: '10+', icon: <Zap size={18} /> },
              { label: 'Countries Reached', value: '70+', icon: <ShieldCheck size={18} /> },
              { label: 'SaaS Users', value: '1,000+', icon: <Globe size={18} /> }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start gap-1 group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary/40 group-hover:text-primary transition-colors duration-500">{stat.icon}</span>
                  <div className="text-on-surface font-black text-[1.8rem] font-display leading-none">{stat.value}</div>
                </div>
                <div className="text-on-surface-muted font-black text-[0.65rem] tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Premium Mockup Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }} 
          animate={{ opacity: 1, scale: 1, rotateY: -10 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any, delay: 0.5 }}
          className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
          style={{ perspective: '2000px' }}
        >
          <div className="relative group cursor-pointer">
            {/* Main Visual Container */}
            <motion.div 
              className="relative z-10 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(99,0,226,0.25)] border border-white/20 transition-all duration-700"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
            >
              <img src="/hero_premium_dashboard.png" alt="Engineering Interface" className="w-full max-w-[580px] h-auto block" />
              {/* Gloss Finish */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
            </motion.div>
            
            {/* Floating Contextual Badges */}
            <motion.div 
              animate={{ y: [0, -25, 0], rotateZ: [-2, 1, -2] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className={`${glassClass} absolute z-20 -top-6 lg:-top-16 -left-6 lg:-left-16 flex items-center gap-5 px-6 py-5 lg:px-8 lg:py-7 rounded-[2rem] border border-white/40`}
            >
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-tech-teal/10 border-2 border-tech-teal flex items-center justify-center text-[1.2rem] lg:text-[1.5rem] font-black text-tech-teal shadow-[0_0_20px_rgba(45,212,191,0.4)]">100</div>
              <div>
                <div className="text-[1.1rem] font-black text-on-surface leading-tight">Core Web Vitals</div>
                <div className="text-[0.7rem] text-on-surface-muted font-black tracking-widest uppercase mt-1">Perfect Performance</div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0], rotateZ: [2, -1, 2] }} 
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`${glassDarkClass} absolute z-20 -bottom-8 lg:-bottom-12 -right-6 lg:-right-12 flex flex-col items-start gap-2.5 px-8 py-6 lg:px-10 lg:py-8 rounded-[2rem] border border-white/5`}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e] animate-pulse" />
                <span className="text-[0.75rem] font-black tracking-[0.25em] text-white/90 uppercase">NODE_STATUS: OPTIMAL</span>
              </div>
              <div className="text-[1rem] text-tech-teal font-mono font-bold tracking-tight">STABLE_PRODUCTION_v2.4</div>
            </motion.div>

            {/* Back Glow Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-primary/15 blur-[120px] rounded-full -z-10 animate-pulse transition-opacity duration-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
