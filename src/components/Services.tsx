"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Server, Brain, Cloud, BarChart3,
  ArrowRight, Cpu, Layers, Globe
} from 'lucide-react';

const services = [
  { id: '01', title: 'Next.js & Frontend', desc: 'Performance-first React applications with server-side rendering, edge caching, and a focus on Core Web Vitals.', icon: <Code2 />, color: '#6300e2', size: 'large', tags: ['React', 'TypeScript', 'SEO'] },
  { id: '02', title: 'Node.js Systems', desc: 'Scalable event-driven architectures and robust API layers.', icon: <Server />, color: '#10b981', size: 'small', tags: ['Express', 'GraphQL'] },
  { id: '03', title: 'AI Engineering', desc: 'Integrating LLMs, RAG systems, and custom automation workflows.', icon: <Brain />, color: '#8b5cf6', size: 'small', tags: ['GPT-4', 'LangChain'] },
  { id: '04', title: 'Cloud Infrastructure', desc: 'Automated AWS/GCP deployments with zero-downtime CI/CD pipelines.', icon: <Cloud />, color: '#0ea5e9', size: 'medium', tags: ['Docker', 'Terraform'] },
  { id: '05', title: 'Product Strategy', desc: 'Strategic consulting for MVPs, helping founders avoid technical debt.', icon: <BarChart3 />, color: '#f43f5e', size: 'medium', tags: ['Roadmapping', 'Scalability'] },
];

const Services = () => {
  const cardBaseClass = "bg-white rounded-2xl border border-[rgba(99,0,226,0.06)] shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group hover:-translate-y-2 hover:border-[rgba(99,0,226,0.12)] hover:shadow-lg hover:scale-[1.01] card-hover-gradient";

  return (
    <section id="services" className="bg-surface-muted relative py-32 lg:py-48 overflow-hidden noise-overlay">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-28 max-w-[900px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-primary/20" />
            <span className="text-primary font-black text-[0.8rem] tracking-[0.4em] uppercase whitespace-nowrap">// CORE CAPABILITIES</span>
            <div className="h-[2px] w-12 bg-primary/20" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] mb-10 font-display"
          >
            Specialized Stacks for <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">High-Impact Products.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-[1.2rem] lg:text-[1.4rem] font-medium leading-relaxed opacity-90 max-w-[700px] mx-auto"
          >
            We don't just write code; we architect systems. Our engineering core is focused on extreme performance, long-term scalability, and flawless user experiences.
          </motion.p>
        </div>

        {/* Bento Grid Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
          {services.map((s, idx) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
              className={`
                group flex flex-col h-full
                ${cardBaseClass}
                ${s.size === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-2 shadow-primary/5 hover:shadow-primary/20' : ''}
                ${s.size === 'medium' ? 'md:col-span-2 lg:col-span-1' : ''}
                ${s.size === 'small' ? 'md:col-span-1' : ''}
              `}
            >
              <div className="p-10 lg:p-14 flex flex-col h-full relative z-10">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="relative">
                    <div 
                      className="w-16 h-16 lg:w-20 lg:h-20 rounded-[2rem] flex items-center justify-center shrink-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative z-10"
                      style={{ color: 'white', background: `linear-gradient(135deg, ${s.color}, ${s.color}dd)` }}
                    >
                      {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                    </div>
                    {/* Pulsing Aura */}
                    <div 
                      className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"
                      style={{ background: s.color }}
                    />
                  </div>
                  <span className="text-[1rem] font-black text-on-surface/10 font-mono tracking-tighter group-hover:text-primary/20 transition-colors uppercase">
                    SYS_{s.id}
                  </span>
                </div>

                {/* Content Body */}
                <div className="flex-1">
                  <h3 className="text-[1.8rem] lg:text-[2.2rem] font-black text-on-surface leading-[1.1] mb-6 font-display tracking-tighter group-hover:text-primary transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-on-surface-variant text-[1.1rem] lg:text-[1.2rem] leading-relaxed font-medium mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.desc}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {s.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-xl bg-surface-muted border border-[rgba(99,0,226,0.06)] text-[0.7rem] font-black text-on-surface-muted uppercase tracking-widest group-hover:border-primary/20 group-hover:text-primary transition-all duration-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-auto pt-8 border-t border-[rgba(99,0,226,0.06)]">
                  <a 
                    href={`/services#service-${s.id}`} 
                    className="inline-flex items-center gap-3 text-primary font-black text-[0.85rem] uppercase tracking-[0.25em] no-underline transition-all group-hover:gap-5"
                  >
                    View Infrastructure <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Dynamic Gradient Background for Hover */}
              <div 
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-0 transition-opacity duration-1000 group-hover:opacity-[0.1]"
                style={{ background: s.color }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Global Capabilities Summary */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="mt-24 flex flex-wrap justify-center gap-12 lg:gap-20 border-t border-[rgba(99,0,226,0.06)] pt-16"
        >
          {[
            { icon: <Cpu size={20} />, label: "Bare Metal Performance" },
            { icon: <Layers size={20} />, label: "Atomic System Architecture" },
            { icon: <Globe size={20} />, label: "Global Edge Distribution" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                {item.icon}
              </div>
              <div className="text-on-surface-variant font-black text-[0.75rem] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-all">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
