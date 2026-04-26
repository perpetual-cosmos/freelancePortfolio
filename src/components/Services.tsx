"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import {
  Code2, Server, Brain, Cloud, BarChart3,
  ArrowRight, Cpu, Layers, Globe, Zap, Sparkles,
  ShieldCheck, Terminal, Fingerprint, Activity
} from 'lucide-react';

const services = [
  {
    id: 'SVC-001',
    title: 'Frontend Architecture',
    desc: 'Engineering sub-second interfaces with atomic state precision and edge-rendered logic.',
    icon: <Code2 />,
    color: '#6300e2',
    size: 'large',
    detail: 'We specialize in Next.js 15, Turbopack, and custom React hook systems that handle extreme concurrency.',
    metric: { label: 'INTERACTION_FID', value: '12ms' },
    tags: ['Next.js 15', 'TypeScript', 'Zustand']
  },
  {
    id: 'SVC-002',
    title: 'Distributed Systems',
    desc: 'Elastic Node.js environments with event-driven resilience.',
    icon: <Server />,
    color: '#10b981',
    size: 'small',
    detail: 'Microservice orchestration with gRPC and automated elastic scaling.',
    metric: { label: 'UPTIME_SLA', value: '99.9%' },
    tags: ['NestJS', 'Postgres']
  },
  {
    id: 'SVC-003',
    title: 'Cognitive Pipelines',
    desc: 'Production-ready LLM agents and RAG infrastructure.',
    icon: <Brain />,
    color: '#8b5cf6',
    size: 'small',
    detail: 'Integrating vector embeddings with real-time data ingestion for context-aware AI.',
    metric: { label: 'INFERENCE', value: '0.8s' },
    tags: ['OpenAI', 'Pinecone']
  },
  {
    id: 'SVC-004',
    title: 'Cloud Core / DevOps',
    desc: 'Immutable infrastructure with zero-downtime CI/CD pipelines.',
    icon: <Cloud />,
    color: '#0ea5e9',
    size: 'medium',
    detail: 'Terraform-led AWS deployments with automated rollback and comprehensive monitoring.',
    metric: { label: 'BUILD_TIME', value: '140s' },
    tags: ['AWS', 'Terraform']
  },
  {
    id: 'SVC-005',
    title: 'System Strategy',
    desc: 'Strategic refactoring and technical debt elimination for enterprises.',
    icon: <BarChart3 />,
    color: '#f43f5e',
    size: 'medium',
    detail: 'Bridging the gap between business vision and technical execution through rigorous audits.',
    metric: { label: 'LEGACY_REDUCTION', value: '65%' },
    tags: ['Audit', 'Scale']
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
      className="bg-[#050505] relative py-32 lg:py-64 overflow-hidden"
    >
      {/* Hyper-Tech Background */}
      <div className="absolute inset-0 z-0">
        {/* Base Grid (Static) */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#6300e2_1px,transparent_1px),linear-gradient(to_bottom,#6300e2_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Cursor Glow Grid */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#6300e2_1px,transparent_1px),linear-gradient(to_bottom,#6300e2_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            WebkitMaskImage: useMotionTemplate`radial-gradient(450px circle at ${mouseXSpring}px ${mouseYSpring}px, black, transparent 80%)`,
            maskImage: useMotionTemplate`radial-gradient(450px circle at ${mouseXSpring}px ${mouseYSpring}px, black, transparent 80%)`
          }}
        />

        {/* Cursor Radial Glow */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseXSpring}px ${mouseYSpring}px,
                rgba(99, 0, 226, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Dynamic Light Rays */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,rgba(99,0,226,0.15),transparent_70%)] blur-[120px] pointer-events-none"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32 lg:mb-48">
          <div className="max-w-[850px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[0.75rem] tracking-[0.3em] uppercase mb-10"
            >
              <Fingerprint size={16} /> <span>INFRASTRUCTURE_MODULE_04</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold tracking-tighter leading-[0.9] text-white font-display"
            >
              Specialized Stacks <br /> <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">Engineered to Scale.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/60 text-[1.2rem] lg:text-[1.4rem] font-medium leading-relaxed max-w-[420px]">
              We translate complex business logic into hardened, performant software systems.
            </p>
            <div className="flex items-center gap-4 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase">
              <Activity size={18} className="animate-pulse" /> SYSTEM_LATENCY: OPTIMAL
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative group flex flex-col min-h-[480px] lg:min-h-[520px] rounded-[3rem] p-12 lg:p-14 overflow-hidden border transition-all duration-700
                ${s.size === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-1' : ''}
                ${hoveredIndex === idx ? 'border-primary/40 shadow-[0_0_50px_rgba(99,0,226,0.15)] -translate-y-2' : 'border-white/10 bg-white/5'}
              `}
            >
              {/* Internal Glass Background */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl -z-10" />

              {/* Dynamic Glow Overlay */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === idx ? 0.2 : 0,
                  scale: hoveredIndex === idx ? 1 : 0.8
                }}
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${s.color}, transparent 70%)` }}
              />

              {/* Card Header */}
              <div className="flex justify-between items-start mb-12">
                <div
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-[2rem] flex items-center justify-center text-white relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}aa)` }}
                >
                  {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                  <div className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity" style={{ background: s.color }} />
                </div>

                <div className="text-right">
                  <div className="text-[0.65rem] font-black text-white/30 tracking-[0.2em] mb-1">{s.id}</div>
                  <div className="text-primary font-black text-[1.4rem] font-display leading-none">{s.metric.value}</div>
                  <div className="text-[0.55rem] font-black text-white/40 tracking-[0.1em] uppercase">{s.metric.label}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <h3 className="text-[2rem] lg:text-[2.6rem] font-extrabold text-white leading-none mb-6 font-display tracking-tight group-hover:text-primary transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-white/60 text-[1.15rem] leading-relaxed font-medium mb-8 opacity-80 group-hover:opacity-100 transition-opacity max-w-[480px]">
                  {s.desc}
                </p>

                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-white/40 text-[0.95rem] font-medium leading-relaxed mb-8 border-l-2 border-primary/20 pl-6"
                    >
                      {s.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[0.65rem] font-black text-white/50 uppercase tracking-widest group-hover:border-primary/20 group-hover:text-primary transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-3 text-white font-black text-[0.8rem] uppercase tracking-[0.3em] group/btn hover:text-primary transition-all">
                  Deep_Dive <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Global Capabilities Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 py-20 border-y border-white/10"
        >
          {[
            { icon: <Cpu size={24} />, label: "Bare Metal Engine", val: "Rust / Go Optimized" },
            { icon: <Layers size={24} />, label: "Atomic Integration", val: "Microservice Core" },
            { icon: <Globe size={24} />, label: "Global Presence", val: "Multi-Cloud Ops" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-8 group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 text-primary flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                {item.icon}
              </div>
              <div>
                <div className="text-white font-black text-[1.2rem] font-display mb-1">{item.val}</div>
                <div className="text-white/40 font-black text-[0.7rem] uppercase tracking-[0.2em]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
