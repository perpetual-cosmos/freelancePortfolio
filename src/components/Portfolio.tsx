"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ExternalLink, Sparkles,
  Layout, Database, Zap,
  Code2, Share2, Terminal, Info
} from 'lucide-react';
import { GithubLogo as Github } from '@phosphor-icons/react';
import Link from 'next/link';

const projects = [
  {
    id: "PRJ-001",
    slug: "biryanibabu-website",
    title: "Biryani Babu",
    category: "FULL STACK • E-COMMERCE",
    year: "2024",
    desc: "Kolkata's 1st Biryani QSR - Authentic Barrackpore & Delhi Flavors.",
    stats: [{ label: "Stack", value: "React" }, { label: "Type", value: "QSR" }],
    image: "/projects/biriyanibabu.webp",
    color: "#d946ef",
    tags: ["React", "Vite", "Styled-Components", "TypeScript"],
    link: "https://biryanibabu.in/"
  },
  {
    id: "PRJ-002",
    slug: "blackart-tattoo-studio",
    title: "BlackArt Tattoo Studio",
    category: "FULL STACK • BOOKING",
    year: "2024",
    desc: "Premier Tattoo & Piercing Studio Website in Udaipur. Highly converting premium website with elegant user experience.",
    stats: [{ label: "Stack", value: "Next.js" }, { label: "Type", value: "Studio" }],
    image: "/projects/BlackArtTattoo.webp",
    color: "#6300e2",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    link: "https://www.blackarttattoo.in/"
  },
  {
    id: "PRJ-003",
    slug: "SaaS-Innovation-Platform",
    title: "Creative Agency",
    category: "FRONTEND • PERFORMANCE",
    year: "2023",
    desc: "Award-winning creative agency website with stunning performance and smooth animations.",
    stats: [{ label: "Stack", value: "WordPress" }, { label: "Type", value: "Agency" }],
    image: "/projects/Creative-agency.webp",
    color: "#2dd4bf",
    tags: ["Wordpress", "PHP", "MySQL"],
    link: "https://www.innovacient.com/"
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
            className="relative group/img"
            style={{ perspective: '2000px' }}
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
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-2xl scale-0 group-hover/img:scale-100 duration-500 delay-100">
                    <ExternalLink size={24} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all shadow-2xl scale-0 group-hover/img:scale-100 duration-500 delay-200">
                    <Github size={24} />
                  </a>
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

          <div className="pt-10 flex flex-wrap items-center gap-6 lg:gap-10">
            {project.slug && (
              <Link href={`/case-study/${project.slug}`} className="relative px-8 lg:px-12 py-5 bg-white text-black rounded-full font-black text-[0.8rem] lg:text-[0.9rem] uppercase tracking-[0.2em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-1 group/btn overflow-hidden block">
                <span className="relative z-10 flex items-center gap-3">
                  <Layout size={20} /> View Case Study
                </span>
                <div className="absolute inset-0 bg-black/10 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[150%]" />
              </Link>
            )}

            <a href={project.link} target="_blank" rel="noreferrer" className={`relative px-8 lg:px-12 py-5 ${project.slug ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-black hover:bg-primary hover:text-white'} rounded-full font-black text-[0.8rem] lg:text-[0.9rem] uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 hover:-translate-y-1 group/btn overflow-hidden block`}>
              <span className="relative z-10 flex items-center gap-3">
                View Build <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-black/10 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[150%]" />
            </a>

            <div className="flex gap-6 items-center text-white/40 ml-auto lg:ml-0">
              <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><ExternalLink size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Share2 size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = ({ showCTA = true }: { showCTA?: boolean }) => {
  return (
    <section id="portfolio" className="bg-[#050505] py-32 lg:py-64 relative overflow-hidden">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '100px 100px' }}
      />
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
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Featured Work.</span>
          </motion.h2>
        </header>

        <div className="space-y-16 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Explore All Projects Button */}
        {showCTA && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 lg:mt-24 pb-12"
          >
            <Link href="/portfolio" className="relative px-12 py-5 bg-white text-black rounded-full font-black text-[1rem] uppercase tracking-[0.2em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-1 group overflow-hidden inline-flex items-center gap-3">
              <span className="relative z-10 flex items-center gap-3">
                Explore All Projects <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-black/10 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
