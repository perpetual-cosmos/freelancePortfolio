"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, Award, Users } from 'lucide-react';

const stats = [
  { label: 'Live Projects Shipped', value: '10+', sub: 'Real clients, real results', icon: <Zap size={24} /> },
  { label: 'Experience', value: '18mo', sub: 'Full-stack + SEO practice', icon: <Award size={24} /> },
  { label: 'SaaS Users', value: '1K+', sub: 'Dear Valentine platform', icon: <Users size={24} /> },
  { label: 'Countries Reached', value: '70+', sub: 'Products with global users', icon: <ShieldCheck size={24} /> },
];

const About = () => {
  const cardClass = "bg-white rounded-2xl border border-[rgba(99,0,226,0.06)] shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden p-10 group hover:-translate-y-2 hover:border-[rgba(99,0,226,0.12)] hover:shadow-lg hover:scale-[1.01] card-hover-gradient";
  const glassClass = "bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl";
  const btnPrimaryClass = "relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-primary/40 active:scale-95 overflow-hidden group";

  return (
    <section id="about" className="bg-white relative overflow-hidden py-32 lg:py-48 noise-overlay">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-20 lg:gap-32 items-center">
        {/* Left: Interactive Visual Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: -20 }} 
          whileInView={{ opacity: 1, scale: 1, x: 0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-[rgba(99,0,226,0.12)] aspect-[4/5] lg:aspect-auto lg:h-[650px]">
            <img 
              src="/about_engineering.png" 
              alt="Elite Engineering Culture"
              className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
            
            {/* Overlay Quote */}
            <div className="absolute bottom-12 left-10 right-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Users size={18} />
                </div>
                <div className="text-white/80 font-black text-[0.7rem] tracking-[0.2em] uppercase">Tarun Singh · TheUnipick</div>
              </div>
              <p className="text-white text-[1.4rem] lg:text-[1.8rem] font-bold leading-tight font-display tracking-tight italic">
                "I don't take on projects I can't ship. Everything in my portfolio is live, real, and built from scratch."
              </p>
            </div>
          </div>

          {/* Floating Experience Badge */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`${glassClass} absolute -top-8 -right-8 lg:-right-12 p-8 lg:p-12 rounded-[2.5rem] z-20 border border-white/50`}
          >
            <div className="text-primary font-black text-[3rem] lg:text-[4.5rem] font-display leading-none mb-2">08</div>
            <div className="text-on-surface-muted font-black text-[0.75rem] tracking-[0.3em] uppercase leading-tight">
              Years of <br /> Elite Engineering
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Narrative & Stats Column */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8">
              <Cpu size={16} /> <span>The Engineering DNA</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight mb-10 text-on-surface font-display">
              Tarun Singh — <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Builder First.</span>
            </h2>
            <p className="text-on-surface-variant text-[1.2rem] lg:text-[1.4rem] mb-12 leading-relaxed font-medium opacity-90">
              I'm a full-stack developer and SEO specialist based in Kanpur, India. Over the past 18 months I've shipped 10+ live products — from a SaaS with 1,000+ users, to Shopify stores now ranking #1, to production codebases rescued under pressure. I don't subcontract. I don't ghost clients. I build and I ship.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cardClass}
              >
                <div className="text-primary/20 group-hover:text-primary transition-colors duration-500 mb-6 group-hover:scale-110 group-hover:rotate-6 inline-block">
                  {stat.icon}
                </div>
                <div className="text-[2.2rem] lg:text-[2.8rem] font-black font-display text-on-surface leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-on-surface font-black text-[0.8rem] tracking-widest uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-on-surface-muted text-[0.7rem] font-bold uppercase tracking-tight opacity-60">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.5 }}
            className="mt-16 flex items-center gap-6"
          >
            <button className={btnPrimaryClass}>
              <span className="relative z-10">Learn Our Process</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
            </button>
            <div className="hidden sm:block h-[1px] flex-1 bg-[rgba(99,0,226,0.12)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
