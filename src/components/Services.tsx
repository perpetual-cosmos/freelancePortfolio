"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import {
  Code2, Server, Brain, Cloud, BarChart3,
  ArrowRight, Cpu, Layers, Globe,
  Fingerprint, Activity
} from 'lucide-react';

const services = [
  {
    id: 'SVC-001',
    title: 'Web Development',
    desc: 'High-performance Next.js and MERN stack applications built for speed and scale.',
    icon: <Code2 />,
    color: '#6300e2',
    size: 'large',
    detail: 'We build production-ready web products—from seed-stage MVPs to Series A scale. Focus on Next.js 15, Supabase, and custom API integrations.',
    metric: { label: 'PAGE_LOAD', value: '<1s' },
    tags: ['Next.js 15', 'MERN Stack', 'TypeScript']
  },
  {
    id: 'SVC-002',
    title: 'Shopify Development',
    desc: 'Custom Shopify themes and apps for D2C brands that actually convert.',
    icon: <Server />,
    color: '#10b981',
    size: 'small',
    detail: 'Specializing in custom Liquid themes and headless Shopify builds. We optimize for conversion and page speed (90+ score guaranteed).',
    metric: { label: 'CONVERSION', value: '+40%' },
    tags: ['Shopify Liquid', 'Headless', 'D2C']
  },
  {
    id: 'SVC-003',
    title: 'AI Automation',
    desc: 'Eliminate repetitive tasks with custom n8n and Make.com workflows.',
    icon: <Brain />,
    color: '#8b5cf6',
    size: 'small',
    detail: 'We build automated pipelines for lead routing, WhatsApp bots, and CRM syncing. Save 20+ hours of manual work every week.',
    metric: { label: 'TIME_SAVED', value: '20h/wk' },
    tags: ['n8n', 'Make.com', 'APIs']
  },
  {
    id: 'SVC-004',
    title: 'SEO & Performance',
    desc: 'Data-driven SEO strategies that drive organic revenue, not just traffic.',
    icon: <BarChart3 />,
    color: '#f43f5e',
    size: 'medium',
    detail: 'Technical SEO audits, keyword clustering, and content strategy designed to rank on Page 1 for high-intent commercial keywords.',
    metric: { label: 'ORGANIC_LIFT', value: '340%' },
    tags: ['Technical SEO', 'Audit', 'Growth']
  },
  {
    id: 'SVC-005',
    title: 'WordPress / CMS',
    desc: 'Secure, scalable, and easy-to-manage WordPress solutions for businesses.',
    icon: <Globe />,
    color: '#0ea5e9',
    size: 'small',
    detail: 'From custom theme development to headless WordPress setups. We ensure your CMS is a tool for growth, not a technical hurdle.',
    metric: { label: 'SECURITY_SLA', value: '100%' },
    tags: ['WordPress', 'Headless', 'PHP']
  },
  {
    id: 'SVC-006',
    title: 'LMS / EdTech',
    desc: 'Custom course platforms and education portals built for engagement.',
    icon: <Cpu />,
    color: '#7c6fff',
    size: 'small',
    detail: 'Building scalable learning management systems with custom progress tracking, quizzes, and certificate generation.',
    metric: { label: 'ENGAGEMENT', value: '85%' },
    tags: ['EdTech', 'LMS', 'Next.js']
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section 
      id="services" 
      onMouseMove={handleMouseMove}
      className="bg-[#050505] relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseXSpring}px ${mouseYSpring}px, black, transparent 80%)`,
            maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseXSpring}px ${mouseYSpring}px, black, transparent 80%)`
          }}
        />
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(500px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(99, 0, 226, 0.12), transparent 80%)`,
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[0.7rem] tracking-[0.3em] uppercase mb-6"
            >
              <Fingerprint size={14} /> <span>CORE_SERVICES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold tracking-tighter leading-[0.95] text-white font-display"
            >
              What We Build. <br /> <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">Production-Ready.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-[1.1rem] font-medium leading-relaxed max-w-[380px]"
          >
            Every service we offer, we've already shipped in production — no experiments on your budget.
          </motion.p>
        </div>

        {/* Compact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative group flex flex-col rounded-2xl p-8 lg:p-10 overflow-hidden border transition-all duration-500
                ${s.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}
                ${s.size === 'medium' ? 'md:col-span-2 lg:col-span-1' : ''}
                ${hoveredIndex === idx ? 'border-primary/30 -translate-y-1 shadow-[0_0_30px_rgba(99,0,226,0.1)]' : 'border-white/[0.06] bg-white/[0.02]'}
              `}
            >
              {/* Internal Glass */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl -z-10" />

              {/* Hover Glow */}
              <motion.div
                animate={{ opacity: hoveredIndex === idx ? 0.15 : 0 }}
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${s.color}, transparent 70%)` }}
              />

              {/* Header Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}aa)` }}
                  >
                    {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 22 })}
                  </div>
                  <div>
                    <h3 className="text-[1.25rem] lg:text-[1.4rem] font-extrabold text-white leading-tight font-display tracking-tight group-hover:text-primary transition-colors duration-500">
                      {s.title}
                    </h3>
                    <div className="text-[0.6rem] font-black text-white/25 tracking-[0.15em] mt-0.5">{s.id}</div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-primary font-black text-[1.1rem] font-display leading-none">{s.metric.value}</div>
                  <div className="text-[0.5rem] font-black text-white/30 tracking-[0.1em] uppercase">{s.metric.label}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 text-[0.95rem] leading-relaxed font-medium mb-5 group-hover:text-white/70 transition-colors">
                {s.desc}
              </p>

              {/* Expandable Detail */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-white/35 text-[0.85rem] font-medium leading-relaxed mb-5 border-l-2 border-primary/20 pl-4"
                  >
                    {s.detail}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Footer */}
              <div className="mt-auto pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[0.6rem] font-black text-white/40 uppercase tracking-widest group-hover:border-primary/20 group-hover:text-primary/70 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-white/40 font-black text-[0.7rem] uppercase tracking-[0.2em] group/btn hover:text-primary transition-all">
                  Details <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Bottom Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 py-10 border-t border-white/[0.06]"
        >
          {[
            { icon: <Cpu size={20} />, label: "Performance First" },
            { icon: <Layers size={20} />, label: "Modular Architecture" },
            { icon: <Globe size={20} />, label: "Global Delivery" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-white/40 font-black text-[0.7rem] uppercase tracking-[0.2em] group-hover:text-white/70 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
