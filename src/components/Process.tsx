"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket, Sparkles } from 'lucide-react';

const steps = [
  { id: '01', title: 'Architecture', desc: 'Mapping your technical ecosystem, from data schemas to cloud infrastructure.', icon: <Search size={22} /> },
  { id: '02', title: 'Prototyping', desc: 'Low-fidelity builds to validate core logic and user flows before full engineering.', icon: <PenTool size={22} /> },
  { id: '03', title: 'Engineering', desc: 'High-velocity sprints with Typescript-first code and daily CI/CD deployments.', icon: <Code2 size={22} /> },
  { id: '04', title: 'Stress Testing', desc: 'Rigorous automated testing and load tests to ensure extreme production stability.', icon: <ShieldCheck size={22} /> },
  { id: '05', title: 'Deployment', desc: 'Zero-downtime releases with automated rollback safety nets and monitoring.', icon: <Rocket size={22} /> }
];

const Process = () => {
  const glassClass = "bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl";
  const btnPrimaryClass = "relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-primary/40 active:scale-95 overflow-hidden group";

  return (
    <section id="process" className="bg-surface-muted relative overflow-hidden py-32 lg:py-48 noise-overlay">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-28">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles size={16} /> <span>Engineering Lifecycle</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-tight leading-tight font-display text-on-surface"
          >
            How We <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Execute.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Icon Bubble */}
                <div className="relative mb-10">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-primary shadow-xl border border-[rgba(99,0,226,0.06)] transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_0_40px_rgba(99,0,226,0.1)] group-hover:border-[rgba(99,0,226,0.2)] relative z-10">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-on-surface text-white text-[0.75rem] font-black flex items-center justify-center rounded-xl z-20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary">
                    {step.id}
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 bg-primary/10 rounded-[2rem] scale-90 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                </div>

                <h3 className="text-[1.4rem] font-black text-on-surface mb-4 tracking-tighter leading-tight font-display">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-[1rem] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity max-w-[220px]">
                  {step.desc}
                </p>
                
                {/* Mobile/Tablet Connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-gradient-to-b from-primary/20 to-transparent mt-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Process Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className={`mt-32 p-12 lg:p-16 rounded-[3rem] ${glassClass} border border-primary/10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left shadow-2xl`}
        >
          <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
             <Rocket size={40} />
          </div>
          <div className="flex-1">
             <h4 className="text-[1.6rem] font-black font-display mb-3 tracking-tight">Our Zero-Downtime Promise</h4>
             <p className="text-on-surface-variant text-[1.1rem] font-medium leading-relaxed max-w-[800px]">
                Every project we deliver includes automated CI/CD pipelines and rollback safety nets. We don't just launch; we ensure your infrastructure remains stable through every iteration.
             </p>
          </div>
          <button className={btnPrimaryClass}>
            <span className="relative z-10">View Case Analytics</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
