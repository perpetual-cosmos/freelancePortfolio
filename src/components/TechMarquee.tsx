"use client";
import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "NEXT.JS 15", "NODE.JS", "TYPESCRIPT", "POSTGRESQL",
  "MONGODB", "SUPABASE", "DOCKER", "TAILWIND V4", "REACT",
  "STRIPE API", "N8N", "LARAVEL", "PHP", "SHOPIFY LIQUID", "VERCEL"
];

const TechMarquee = () => {
  return (
    <div className="bg-white py-6 border-b border-[rgba(99,0,226,0.06)] overflow-hidden whitespace-nowrap w-full relative select-none">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="inline-flex gap-20 items-center px-10"
      >
        {Array(4).fill(techs).flat().map((tech, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-[0.75rem] font-black text-on-surface/30 tracking-[0.3em] font-mono hover:text-primary transition-colors">
              {tech}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/10 shrink-0" />
          </div>
        ))}
      </motion.div>

      {/* High-Fidelity Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default TechMarquee;
