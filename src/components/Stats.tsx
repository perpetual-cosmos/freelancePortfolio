"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[0.8fr,1.2fr] gap-16 lg:gap-24 items-center relative z-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black text-[0.8rem] tracking-[0.3em] uppercase mb-4"
          >
            // BY THE NUMBERS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-6 tracking-tight text-on-surface leading-[1.1] font-display"
          >
            Emphasis on Excellence, Delivered at Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-[1.1rem] leading-relaxed font-medium opacity-80"
          >
            Our infrastructure powers millions of interactions every day, built on a foundation of reliability and elite engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
          {[
            { label: "Successful Deployments", value: "250+", color: "#6300e2" },
            { label: "Expert Engineers", value: "85+", color: "#d946ef" },
            { label: "Partner Enterprises", value: "40+", color: "#2dd4bf" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div 
                className="text-[clamp(2.5rem,5vw,3.5rem)] font-black font-display leading-none mb-3 transition-transform group-hover:scale-110 group-hover:translate-x-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="h-[2.5px] w-12 mb-4 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: stat.color }} />
              <div className="text-on-surface font-black text-[0.75rem] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
