"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { id: '01', title: 'Discovery Call', desc: '30-min deep dive into your goals, audience, and technical needs.', icon: <Search size={18} /> },
  { id: '02', title: 'Proposal & Timeline', desc: 'Transparent scope breakdown, milestones, and fixed-price quote.', icon: <PenTool size={18} /> },
  { id: '03', title: 'Build & Review', desc: 'Weekly sprints with live staging so you see progress in real-time.', icon: <Code2 size={18} /> },
  { id: '04', title: 'Launch & Handover', desc: 'Smooth go-live with training on managing your new digital asset.', icon: <Rocket size={18} /> }
];

const Process = () => {
  return (
    <section id="process" className="bg-surface-muted relative overflow-hidden py-14 sm:py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] uppercase mb-4"
          >
            <Sparkles size={12} /> <span>Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold tracking-tight leading-[1.1] font-display text-on-surface"
          >
            How We <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Execute.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Icon */}
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-md border border-[rgba(99,0,226,0.05)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:border-[rgba(99,0,226,0.15)] relative z-10">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-on-surface text-white text-[0.6rem] sm:text-[0.65rem] font-bold flex items-center justify-center rounded-lg z-20 shadow-sm transition-colors duration-300 group-hover:bg-primary">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-[0.88rem] sm:text-[0.95rem] font-bold text-on-surface mb-1.5 sm:mb-2 tracking-tight leading-tight font-display">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-[0.72rem] sm:text-[0.78rem] leading-relaxed font-medium opacity-75 group-hover:opacity-100 transition-opacity max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 p-5 sm:p-6 lg:p-8 rounded-2xl bg-white border border-[rgba(0,0,0,0.05)] shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
            <Rocket size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[0.95rem] sm:text-[1.05rem] font-bold font-display mb-1 tracking-tight">Zero-Downtime Promise</h4>
            <p className="text-on-surface-variant text-[0.78rem] sm:text-[0.82rem] font-medium leading-relaxed">
              Every project includes automated CI/CD pipelines and rollback safety nets. We don't just launch — we ensure stability through every iteration.
            </p>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-on-surface text-white font-bold text-[0.78rem] shrink-0 no-underline hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            View Work <ArrowRight size={14} className="opacity-60" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
