"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ExternalLink, Sparkles,
  Layout, Share2
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
    stats: [{ label: "Conversion", value: "+40%" }, { label: "New Users", value: "2K+" }],
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
    stats: [{ label: "Organic Lift", value: "3x" }, { label: "Rankings", value: "#1" }],
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
    stats: [{ label: "Load Time", value: "<1s" }, { label: "Performance", value: "99" }],
    image: "/projects/Creative-agency.webp",
    color: "#2dd4bf",
    tags: ["Wordpress", "PHP", "MySQL"],
    link: "https://www.innovacient.com/"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
        
        {/* Image — compact, no parallax */}
        <div className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] aspect-[16/10] bg-[#0a0a0a] group/img cursor-pointer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/img:scale-105 opacity-85 group-hover/img:opacity-100"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <div className="flex gap-3">
                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-xl scale-0 group-hover/img:scale-100 duration-400 delay-100">
                  <ExternalLink size={18} />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all shadow-xl scale-0 group-hover/img:scale-100 duration-400 delay-200">
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            {/* Status badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-xl flex items-center gap-2 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
              <span className="text-[0.6rem] font-black tracking-[0.15em] uppercase text-white/80">{project.id}</span>
            </div>
          </div>
          
          {/* Subtle glow behind image */}
          <div className="absolute -inset-6 blur-[80px] opacity-10 -z-10 rounded-full" style={{ background: project.color }} />
        </div>

        {/* Content — tighter, scannable */}
        <div className={`space-y-6 ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          {/* Meta */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[0.7rem] font-black tracking-[0.2em] uppercase text-primary">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[0.75rem] font-bold text-white/30">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tighter leading-[1] text-white font-display">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/50 text-[1.05rem] leading-relaxed font-medium max-w-[500px]">
            {project.desc}
          </p>

          {/* Stats — inline, compact */}
          <div className="flex gap-8 py-5 border-y border-white/5">
            {project.stats.map(stat => (
              <div key={stat.label} className="space-y-1">
                <div className="text-[1.8rem] font-black font-display text-white leading-none tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[0.6rem] font-black text-white/25 tracking-[0.25em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3.5 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[0.65rem] font-black text-white/35 uppercase tracking-widest hover:text-primary hover:border-primary/30 transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions — compact */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.slug && (
              <Link href={`/case-study/${project.slug}`} className="relative px-7 py-3.5 bg-white text-black rounded-full font-black text-[0.75rem] uppercase tracking-[0.15em] shadow-lg hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-0.5 group/btn overflow-hidden inline-flex items-center gap-2">
                <Layout size={16} /> Case Study
                <div className="absolute inset-0 bg-black/10 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[150%]" />
              </Link>
            )}
            <a href={project.link} target="_blank" rel="noreferrer" className={`relative px-7 py-3.5 ${project.slug ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-black hover:bg-primary hover:text-white'} rounded-full font-black text-[0.75rem] uppercase tracking-[0.15em] shadow-lg transition-all duration-500 hover:-translate-y-0.5 group/btn overflow-hidden inline-flex items-center gap-2`}>
              Live Site <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              <div className="absolute inset-0 bg-black/10 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[150%]" />
            </a>
            <div className="flex gap-4 items-center text-white/25 ml-auto">
              <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Share2 size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = ({ showCTA = true }: { showCTA?: boolean }) => {
  return (
    <section id="portfolio" className="bg-[#050505] py-24 lg:py-40 relative overflow-hidden">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '100px 100px' }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header — more compact */}
        <header className="mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-[0.7rem] tracking-[0.3em] uppercase mb-8"
          >
            <Sparkles size={14} /> <span>PRODUCTION_LOG_2024</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] text-white font-display"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Featured Work.</span>
          </motion.h2>
        </header>

        {/* Project Cards — tighter spacing */}
        <div className="space-y-16 lg:space-y-24">
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
            className="flex justify-center mt-16 lg:mt-24"
          >
            <Link href="/portfolio" className="relative px-10 py-4.5 bg-white text-black rounded-full font-black text-[0.85rem] uppercase tracking-[0.2em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-1 group overflow-hidden inline-flex items-center gap-3">
              <span className="relative z-10 flex items-center gap-3">
                Explore All Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
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
