"use client";
import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  "WAVO.DIGITAL", "ALUMNIPP.COM", "BLACKARTTATTOO.IN", "DEAR VALENTINE",
  "SHOPIFY STORES", "NEXT.JS APPS", "AI AUTOMATIONS", "SEO RETAINERS"
];

const TrustBar = () => {
  return (
    <div className="bg-white py-20 border-y border-outline/30 overflow-hidden relative z-10 noise-overlay">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,var(--primary),transparent)]" />
      
      {/* Label Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/20" />
          <span className="text-[0.75rem] font-black text-primary uppercase tracking-[0.4em] opacity-80 whitespace-nowrap">
            Powering Global Digital Infrastructure
          </span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/20" />
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="flex overflow-hidden w-full relative select-none">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 sm:gap-40 whitespace-nowrap items-center px-12"
        >
          {Array(5).fill(industries).flat().map((industry, i) => (
            <div 
              key={i} 
              className="group flex items-center gap-6 cursor-default"
            >
              {/* Decorative Dot */}
              <div className="w-2 h-2 rounded-full bg-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(99,0,226,0.4)]" />
              <span className="text-[1.2rem] sm:text-[1.6rem] font-black text-on-surface/10 tracking-[0.15em] font-display transition-all duration-700 group-hover:text-primary group-hover:opacity-100">
                {industry}
              </span>
            </div>
          ))}
        </motion.div>

        {/* High-Fidelity Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </div>
  );
};

export default TrustBar;
