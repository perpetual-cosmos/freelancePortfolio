"use client";
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "WAVO.DIGITAL", "ALUMNIPP.COM", "BLACKARTTATTOO.IN", "DEAR VALENTINE",
  "BIRYANIBABU.COM", "SHOPIFY STORES", "NEXT.JS APPS", "AI AUTOMATIONS"
];

const TrustBar = () => {
  const rowItems = Array(6).fill(brands).flat();

  return (
    <div className="bg-white py-9 sm:py-11 border-y border-slate-100 overflow-hidden relative z-10">
      {/* Ambient Background Radial Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,#9333EA,transparent_70%)]" />

      {/* Label Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 sm:gap-5"
        >
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-purple-300 to-purple-500" />
          <span className="text-[0.72rem] sm:text-[0.8rem] font-extrabold tracking-[0.18em] uppercase text-slate-500">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-black">
              startups & founders
            </span>{" "}
            across{" "}
            <span className="text-slate-900 font-black border-b-2 border-purple-400/60 pb-0.5">
              India, US & UK
            </span>
          </span>
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-purple-300 to-purple-500" />
        </motion.div>
      </div>

      {/* Single-Layer Single Ticker Row with Smooth Center Spotlight Mask */}
      <div
        className="flex overflow-hidden w-full select-none py-2"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, black 35%, black 65%, rgba(0,0,0,0.35) 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, black 35%, black 65%, rgba(0,0,0,0.35) 88%, transparent 100%)',
        }}
      >
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 sm:gap-24 whitespace-nowrap items-center px-8"
        >
          {rowItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 cursor-default">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C026D3] shadow-[0_0_10px_rgba(192,38,211,0.6)]" />
              <span className="text-[1.2rem] sm:text-[1.6rem] font-black tracking-[0.14em] font-display bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />
    </div>
  );
};

export default TrustBar;
