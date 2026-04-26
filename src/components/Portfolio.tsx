"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubLogo } from "@phosphor-icons/react";

const projects = [
  {
    title: "FinEdge Analytics",
    category: "FINTECH • AI",
    year: "2024",
    desc: "A high-performance financial intelligence platform that processes millions of transactions in real-time. Built with a focus on predictive modeling and institutional-grade security.",
    stats: [{ label: "Efficiency", value: "+42%" }, { label: "Latency", value: "18ms" }],
    image: "/portfolio_fintech.png",
    color: "#6300e2",
    tags: ["Next.js", "TypeScript", "Python", "AWS"]
  },
  {
    title: "LuxeCart Global",
    category: "E-COMMERCE • MOBILE",
    year: "2023",
    desc: "Redefining digital luxury through a hyper-personalized shopping experience. Features include ultra-fast product discovery and an immersive, frictionless checkout flow.",
    stats: [{ label: "Conversion", value: "8.4%" }, { label: "Active Users", value: "120K" }],
    image: "/portfolio_ecommerce.png",
    color: "#d946ef",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "MediSync Cloud",
    category: "HEALTHCARE • SAAS",
    year: "2023",
    desc: "A mission-critical healthcare ecosystem connecting providers and patients. HIPAA-compliant architecture with integrated AI diagnostic assistance and secure records management.",
    stats: [{ label: "Hospitals", value: "450+" }, { label: "Uptime", value: "99.99%" }],
    image: "/portfolio_ai_healthcare.png",
    color: "#2dd4bf",
    tags: ["React", "Go", "PostgreSQL", "Docker"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const isEven = index % 2 === 0;

  const btnPrimaryClass = "relative inline-flex items-center gap-3 px-12 py-5 rounded-full text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-primary/40 active:scale-95 overflow-hidden group";

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-20 lg:gap-32 items-center ${!isEven ? 'lg:grid-cols-[1.1fr,1fr]' : ''}`}
    >
      {/* Content Column */}
      <div className={`space-y-10 ${!isEven ? 'lg:order-2' : ''}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[0.75rem] font-black tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10" style={{ color: project.color }}>
              {project.category}
            </span>
            <div className="h-[1px] w-8 bg-[rgba(99,0,226,0.12)]" />
            <span className="text-[0.8rem] font-bold text-on-surface-muted">
              {project.year}
            </span>
          </div>
          <h3 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] font-display text-on-surface">
            {project.title}
          </h3>
        </div>

        <p className="text-[1.2rem] leading-relaxed text-on-surface-variant font-medium opacity-90 max-w-[560px]">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-5 py-2 bg-white border border-[rgba(99,0,226,0.12)] rounded-xl text-[0.75rem] font-black text-on-surface-muted uppercase tracking-widest hover:text-primary transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-12 py-10 border-y border-[rgba(99,0,226,0.06)]">
          {project.stats.map(stat => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-[2.5rem] font-black font-display leading-none text-on-surface" style={{ color: project.color }}>
                {stat.value}
              </span>
              <span className="text-[0.7rem] font-black text-on-surface-muted tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-10 pt-4">
          <button 
            className={btnPrimaryClass}
            style={{ backgroundColor: project.color }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Case Study <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
          </button>
          <div className="flex gap-8">
            <a href="#" className="text-on-surface-muted transition-all hover:text-primary hover:-translate-y-1" aria-label="GitHub Repository">
              <GithubLogo size={28} weight="fill" />
            </a>
            <a href="#" className="text-on-surface-muted transition-all hover:text-primary hover:-translate-y-1" aria-label="Live Demo">
              <ExternalLink size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
        <div className="relative group perspective-[2000px]">
          <motion.div 
            style={{ y }} 
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 aspect-[16/11] bg-surface-muted transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
            />
            {/* Dynamic Overlay */}
            <div 
              className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40 pointer-events-none" 
              style={{ background: `linear-gradient(135deg, ${project.color} 0%, transparent 100%)` }} 
            />
            
            {/* Reveal on Hover */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
               <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <ExternalLink size={32} />
               </div>
            </div>
          </motion.div>

          {/* Decorative Back Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] blur-[120px] opacity-10 -z-10 transition-opacity duration-700 group-hover:opacity-20"
            style={{ background: project.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const btnSecondaryClass = "inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-primary font-display font-black border border-[rgba(99,0,226,0.12)] shadow-sm transition-all duration-500 hover:bg-surface-muted hover:-translate-y-1.5 hover:border-primary active:scale-95 group";

  return (
    <section id="portfolio" className="py-32 lg:py-48 bg-white relative overflow-hidden noise-overlay">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <header className="mb-32 lg:text-left text-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles size={16} /> <span>Selected Deployments</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] font-display text-on-surface"
          >
            Case Studies in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Engineering.</span>
          </motion.h2>
        </header>

        <div className="space-y-48 lg:space-y-64">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-[rgba(99,0,226,0.06)] flex flex-col items-center text-center"
        >
          <h4 className="text-[1.8rem] font-bold mb-8 font-display">Want to see our full infrastructure portfolio?</h4>
          <button className={btnSecondaryClass}>Access Repository Archive</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
