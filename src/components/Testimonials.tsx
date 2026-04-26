"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles, ExternalLink } from 'lucide-react';

const testimonies = [
  { 
    quote: "Tarun rescued our entire production codebase in 48 hours. Professional, fast, and the code is actually clean.", 
    author: "Client", 
    role: "Alumnipp", 
    avatar: "AL",
    color: "#6300e2",
    link: "https://alumnipp.com"
  },
  { 
    quote: "Our tattoo studio website now ranks #1 in Udaipur for tattoo searches. Worth every rupee.", 
    author: "Owner", 
    role: "BlackArt Tattoo", 
    avatar: "BA",
    color: "#d946ef",
    link: "https://www.blackarttattoo.in/"
  },
  { 
    quote: "He understood what we needed for our WhatsApp automation SaaS without us having to explain twice. Rare.", 
    author: "Dhruv", 
    role: "Founder, Wavo.digital", 
    avatar: "DH",
    color: "#2dd4bf",
    link: "https://wavo.digital"
  }
];

const Testimonials = () => {
  const cardClass = "bg-white rounded-2xl border border-[rgba(99,0,226,0.06)] shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden p-12 lg:p-14 group hover:-translate-y-2 hover:border-[rgba(99,0,226,0.12)] hover:shadow-lg hover:scale-[1.01] card-hover-gradient";

  return (
    <section id="testimonials" className="bg-white py-32 lg:py-48 relative overflow-hidden noise-overlay">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[160px] rounded-full -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-6"
          >
            <Sparkles size={16} /> <span>Client Feedback</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] font-display text-on-surface"
          >
            Validated by <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Digital Leaders.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonies.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={cardClass}
            >
              <div className="mb-10 flex justify-between items-start relative z-10">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md"
                  style={{ color: 'white', background: t.color }}
                >
                  <Quote size={20} fill="white" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} fill={t.color} color={t.color} className="opacity-80" />
                  ))}
                </div>
              </div>
              
              <p className="text-on-surface-variant text-[1.1rem] lg:text-[1.25rem] leading-relaxed font-medium italic mb-12 flex-1 opacity-90 group-hover:opacity-100 transition-opacity relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-5 pt-10 border-t border-[rgba(99,0,226,0.06)] relative z-10">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform" 
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}dd)` }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-[1.1rem] text-on-surface leading-tight mb-1 truncate font-display tracking-tight flex items-center gap-2">
                    {t.author}
                    {t.link && (
                      <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <div className="text-[0.75rem] text-on-surface-muted font-black tracking-widest uppercase truncate opacity-70">
                    {t.role}
                  </div>
                </div>
              </div>
              
              {/* Dynamic Accent */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundImage: `linear-gradient(to bottom left, ${t.color}10, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Trust Highlight */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface-muted border border-[rgba(99,0,226,0.06)] text-[0.9rem] font-bold text-on-surface-variant">
             <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(j => (
                   <div key={j} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                ))}
             </div>
             Join 50+ founders who trust our engineering core.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
