"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, Award, Users } from 'lucide-react';

const stats = [
  { label: 'Projects Shipped', value: '30+', sub: 'Real clients, real results', icon: <Zap size={18} /> },
  { label: 'Experience', value: '3 years', sub: 'Full-stack + SEO', icon: <Award size={18} /> },
  { label: 'SaaS Users', value: '1K+', sub: 'Dear Valentine platform', icon: <Users size={18} /> },
  { label: 'Countries', value: '70+', sub: 'Global users', icon: <ShieldCheck size={18} /> },
];

const About = () => {
  return (
    <section id="about" className="bg-white relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[rgba(99,0,226,0.08)] aspect-[4/4] sm:aspect-[4/5] max-h-[320px] sm:max-h-[400px] lg:max-h-[460px]">
            <img
              src="/about_engineering.png"
              alt="TheUnipick — Full-Stack Development Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

            {/* Overlay Quote */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <Users size={12} />
                </div>
                <span className="text-white/70 font-black text-[0.5rem] sm:text-[0.55rem] lg:text-[0.6rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase">TheUnipick · Engineering Team</span>
              </div>
              <p className="text-white text-[0.85rem] sm:text-[1rem] lg:text-[1.15rem] font-bold leading-snug font-display tracking-tight italic">
                "Everything we build is live, real, and engineered for performance."
              </p>
            </div>
          </div>

          {/* Floating Badge — smaller */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-5 lg:-right-6 bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg sm:shadow-xl px-3 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-xl sm:rounded-2xl z-20"
          >
            <div className="text-primary font-black text-[1.4rem] sm:text-[1.7rem] lg:text-[2rem] font-display leading-none">30+</div>
            <div className="text-on-surface-muted font-black text-[0.45rem] sm:text-[0.5rem] lg:text-[0.55rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-0.5 sm:mt-1">
              Projects Shipped
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.6rem] sm:text-[0.65rem] lg:text-[0.7rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5 lg:mb-6">
              <Cpu size={12} /> <span>About Us</span>
            </div>
            <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-5 lg:mb-6 text-on-surface font-display">
              TheUnipick — <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Builders First.</span>
            </h2>
            <p className="text-on-surface-variant text-[0.9rem] sm:text-[0.95rem] lg:text-[1.05rem] mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium opacity-85">
              We are a full-stack development and SEO powerhouse. Over 3 years, we've shipped 30+ live products — from SaaS platforms with global reach, to e-commerce stores ranking #1, to production codebases rescued under pressure. We build and we ship.
            </p>
          </motion.div>

          {/* Stats — single row on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-3 mb-6 sm:mb-8 lg:mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-surface-muted rounded-lg sm:rounded-xl border border-[rgba(99,0,226,0.06)] p-2.5 sm:p-3 lg:p-4 group hover:border-[rgba(99,0,226,0.12)] hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div className="text-primary/30 group-hover:text-primary transition-colors duration-500 mb-1 sm:mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-[1.1rem] sm:text-[1.25rem] lg:text-[1.4rem] font-black font-display text-on-surface leading-none mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-on-surface font-bold text-[0.5rem] sm:text-[0.55rem] lg:text-[0.6rem] tracking-wider sm:tracking-widest uppercase leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            <button className="relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-display font-black text-[0.75rem] sm:text-[0.8rem] lg:text-[0.85rem] shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/40 active:scale-95 overflow-hidden group">
              <span className="relative z-10">Learn My Process</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
            </button>
            <div className="hidden sm:block h-[1px] flex-1 bg-[rgba(99,0,226,0.08)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
