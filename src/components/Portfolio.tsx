"use client";
import React from 'react';
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="group"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-10 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
        
        {/* Image */}
        <div className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-lg aspect-[16/10] bg-[#0a0a0a] group/img cursor-pointer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/img:scale-105 opacity-85 group-hover/img:opacity-100"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-400 flex items-end p-4 sm:p-5">
              <div className="flex gap-2">
                <a href={project.link} target="_blank" rel="noreferrer" className="p-2 sm:p-2.5 rounded-lg bg-white text-black hover:bg-primary hover:text-white transition-all shadow-md scale-0 group-hover/img:scale-100 duration-300 delay-75">
                  <ExternalLink size={14} />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" className="p-2 sm:p-2.5 rounded-lg bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all shadow-md scale-0 group-hover/img:scale-100 duration-300 delay-150">
                  <Github size={14} />
                </a>
              </div>
            </div>
            
            {/* Status badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1.5 bg-black/60 backdrop-blur-lg rounded-lg flex items-center gap-1.5 border border-white/8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] animate-pulse" />
              <span className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-white/70">{project.id}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-3 sm:space-y-4 ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          {/* Meta */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.15em] uppercase text-primary">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-[0.62rem] font-bold text-white/25">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-extrabold tracking-tight leading-[1.05] text-white font-display">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/45 text-[0.82rem] sm:text-[0.88rem] leading-relaxed font-medium max-w-[420px]">
            {project.desc}
          </p>

          {/* Stats */}
          <div className="flex gap-6 py-3 border-y border-white/5">
            {project.stats.map(stat => (
              <div key={stat.label} className="space-y-0.5">
                <div className="text-[1.2rem] sm:text-[1.4rem] font-black font-display text-white leading-none tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[0.5rem] font-bold text-white/20 tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[0.55rem] font-bold text-white/30 uppercase tracking-wider hover:text-primary hover:border-primary/30 transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {project.slug && (
              <Link href={`/case-study/${project.slug}`} className="px-4 py-2 sm:py-2.5 bg-white text-black rounded-xl font-bold text-[0.72rem] sm:text-[0.75rem] hover:bg-primary hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-1.5">
                <Layout size={13} /> Case Study
              </Link>
            )}
            <a href={project.link} target="_blank" rel="noreferrer" className={`px-4 py-2 sm:py-2.5 ${project.slug ? 'bg-white/8 text-white hover:bg-white/15' : 'bg-white text-black hover:bg-primary hover:text-white'} rounded-xl font-bold text-[0.72rem] sm:text-[0.75rem] transition-all duration-300 no-underline inline-flex items-center gap-1.5`}>
              Live Site <ArrowRight size={13} className="opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = ({ showCTA = true }: { showCTA?: boolean }) => {
  return (
    <section id="portfolio" className="bg-[#050505] py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Header */}
        <header className="mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-white/40 font-bold text-[0.6rem] tracking-[0.15em] uppercase mb-4"
          >
            <Sparkles size={12} /> <span>Featured Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold tracking-tight leading-[1.1] text-white font-display"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Featured Work.</span>
          </motion.h2>
        </header>

        {/* Projects */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10 sm:mt-12"
          >
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold text-[0.78rem] sm:text-[0.82rem] shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 no-underline">
              Explore All Projects <ArrowRight size={15} className="opacity-60" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
