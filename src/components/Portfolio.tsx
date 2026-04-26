"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ExternalLink, Sparkles,
  Layout, Database, Zap,
  Code2, Share2, Terminal, Info
} from 'lucide-react';
import { GithubLogo as Github } from '@phosphor-icons/react';

const projects = [
  {
    id: "DEP-042",
    title: "FinEdge Analytics",
    category: "FINTECH • AI CORE",
    year: "2024",
    desc: "A high-performance financial intelligence platform processing 2M+ transactions/sec. Engineered with a focus on sub-10ms predictive modeling and institutional security.",
    stats: [{ label: "Throughput", value: "2M/s" }, { label: "Latency", value: "8.5ms" }],
    image: "/portfolio_fintech.png",
    color: "#6300e2",
    tags: ["Next.js 15", "Go", "Python", "AWS"]
  },
  {
    id: "DEP-089",
    title: "LuxeCart Global",
    category: "E-COMMERCE • SCALE",
    year: "2023",
    desc: "Redefining digital luxury through hyper-personalized headless commerce. Featuring ultra-fast product discovery and frictionless checkout for global markets.",
    stats: [{ label: "Conversion", value: "+32%" }, { label: "Load Time", value: "0.4s" }],
    image: "/portfolio_ecommerce.png",
    color: "#d946ef",
    tags: ["React Native", "Node.js", "Redis", "Stripe"]
  },
  {
    id: "DEP-112",
    title: "MediSync Cloud",
    category: "HEALTHCARE • SAAS",
    year: "2023",
    desc: "Mission-critical healthcare ecosystem connecting 500+ clinics. HIPAA-compliant architecture with integrated AI diagnostic assistance and encrypted record sync.",
    stats: [{ label: "Nodes", value: "500+" }, { label: "Security", value: "AES-256" }],
    image: "/portfolio_ai_healthcare.png",
    color: "#2dd4bf",
    tags: ["React", "PostgreSQL", "Docker", "Go"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className={`relative min-h-[70vh] lg:min-h-screen flex items-center mb-32 lg:mb-56`}
    >
      {/* Background Section Ambient Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 -z-10 blur-[150px] rounded-full scale-150"
        style={{ background: project.color }}
      />

      <div className={`grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-16 lg:gap-32 items-center w-full ${!isEven ? 'lg:grid-cols-[1fr,1.1fr]' : ''}`}>

        {/* Visual Content */}
        <div className={`relative order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative perspective-[2000px] group/img"
          >
            {/* Main Image Container */}
            <motion.div
              style={{ y }}
              className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] aspect-[16/10] bg-[#0a0a0a]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover/img:scale-110 opacity-80 group-hover/img:opacity-100"
              />

              {/* Hover Overlay Detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 p-12 flex flex-col justify-end">
                <div className="flex gap-4">
                  <button className="p-4 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-2xl scale-0 group-hover/img:scale-100 duration-500 delay-100">
                    <ExternalLink size={24} />
                  </button>
                  <button className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all shadow-2xl scale-0 group-hover/img:scale-100 duration-500 delay-200">
                    <Github size={24} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Float Decoration / UI Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] hidden lg:flex items-center justify-center -z-10 shadow-2xl"
            >
              <Terminal size={40} className="text-white/20" />
            </motion.div>

            <div
              className="absolute -inset-10 blur-[100px] opacity-10 group-hover/img:opacity-25 transition-opacity -z-20 rounded-full"
              style={{ background: project.color }}
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className={`space-y-12 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-[0.7rem] font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50">
                {project.id}
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
              <span className="text-[0.8rem] font-bold tracking-widest text-primary uppercase">
                {project.category}
              </span>
            </motion.div>

            <h3 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] text-white font-display">
              {project.title}
            </h3>
          </div>

          <p className="text-white/60 text-[1.25rem] lg:text-[1.4rem] leading-relaxed font-medium max-w-[600px] opacity-80 group-hover:opacity-100 transition-opacity">
            {project.desc}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-12 py-12 border-y border-white/5">
            {project.stats.map(stat => (
              <div key={stat.label} className="space-y-2">
                <div className="text-[3rem] lg:text-[3.8rem] font-black font-display text-white leading-none tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[0.7rem] font-black text-white/30 tracking-[0.3em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-5 py-2 bg-white/5 border border-white/5 rounded-xl text-[0.75rem] font-black text-white/40 uppercase tracking-widest hover:text-primary hover:border-primary/30 transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-10 flex items-center gap-10">
            <button className="relative px-12 py-5 bg-white text-black rounded-full font-black text-[0.9rem] uppercase tracking-[0.2em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-1 group/btn overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                View Build <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-black/10 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[150%]" />
            </button>

            <div className="flex gap-6 items-center text-white/40">
              <a href="#" className="hover:text-primary transition-colors"><Info size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Share2 size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#050505] py-32 lg:py-64 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#6300e2_1px,transparent_1px),linear-gradient(to_bottom,#6300e2_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <header className="mb-40 lg:mb-56">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-[0.75rem] tracking-[0.3em] uppercase mb-10"
          >
            <Sparkles size={16} /> <span>PRODUCTION_LOG_2024</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold tracking-tighter leading-[0.9] text-white font-display"
          >
            Case Studies in <br /> <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Full-Stack Scale.</span>
          </motion.h2>
        </header>

        <div className="space-y-32 lg:space-y-56">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action Repository */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-56 p-12 lg:p-24 rounded-[4rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] mx-auto">
            <div className="w-20 h-20 rounded-[2rem] bg-primary flex items-center justify-center text-white mb-10 shadow-2xl shadow-primary/40">
              <Database size={40} />
            </div>
            <h3 className="text-[2.5rem] lg:text-[4rem] font-black text-white leading-none tracking-tighter mb-8 font-display">
              Ready to explore our full system archive?
            </h3>
            <p className="text-white/60 text-[1.2rem] mb-12 max-w-[600px]">
              Access our detailed architecture logs, code snippets, and deployment strategies across 20+ production systems.
            </p>
            <button className="px-16 py-6 bg-white text-black rounded-full font-black text-[1rem] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">
              Access Repository
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
