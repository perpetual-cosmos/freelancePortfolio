"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Users, Zap, Star, User } from 'lucide-react';
import Link from 'next/link';

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

const Hero = () => {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9FE] via-[#F6F3FE] to-white">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-300/35 via-fuchsia-200/25 to-transparent blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-purple-200/25 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 items-center">
        {/* Left Column (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 xl:col-span-5 text-left"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-[#9333EA] font-extrabold text-[0.68rem] sm:text-[0.74rem] tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="text-[#9333EA]" />
            <span>TARUN SINGH • FREELANCE FULL STACK ENGINEER & SEO LEAD</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.3rem,4.5vw,4.1rem)] font-black text-[#0F172A] leading-[1.05] font-display tracking-tight mb-5">
            We Build Websites <br />
            That{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] via-[#C026D3] to-[#D946EF]">
                Rank, Convert
              </span>

              {/* 1. Curved Underline Stroke directly below Rank, Convert */}
              <svg
                className="absolute -bottom-3.5 left-0 w-full h-4 text-[#A855F7] overflow-visible pointer-events-none"
                viewBox="0 0 240 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 3 7 C 60 16, 170 16, 237 6"
                  stroke="#A855F7"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              {/* 2. Radiating 3 Burst Lines above the top-right of Convert */}
              <svg
                className="w-6 h-6 absolute -top-3.5 -right-3 text-[#C026D3] overflow-visible pointer-events-none select-none"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 5 15 L 1 7"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 12 13 L 12 2"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 19 15 L 23 7"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            & Scale.
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-[540px] mb-8">
            From Next.js web apps to custom Shopify stores, n8n AI automations to Technical SEO  Tarun Singh & TheUnipick Studio ship high-performing digital products built for revenue growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#D946EF] text-white font-bold text-sm tracking-wide shadow-[0_10px_30px_-5px_rgba(147,51,234,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(147,51,234,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get Free Website Audit <ArrowRight size={18} />
            </Link>
            <Link
              href="/hire"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-sm border border-slate-200/90 shadow-sm hover:border-purple-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Hire Tarun <User size={18} className="text-slate-600" />
            </Link>
          </div>

          {/* Proof Metrics Row */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 lg:gap-5 pt-6 sm:pt-8 border-t border-slate-200/70 mb-8">
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center shrink-0 shadow-sm">
                <Rocket size={18} />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black font-display text-slate-900 leading-none">50+</div>
                <div className="text-[0.58rem] sm:text-[0.62rem] font-extrabold tracking-wider text-slate-400 uppercase mt-1">PROJECTS DELIVERED</div>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-[1px] bg-slate-200 shrink-0" />

            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 shadow-sm">
                <Users size={18} />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black font-display text-slate-900 leading-none">70+</div>
                <div className="text-[0.58rem] sm:text-[0.62rem] font-extrabold tracking-wider text-slate-400 uppercase mt-1">HAPPY CLIENTS</div>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-[1px] bg-slate-200 shrink-0" />

            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#FAE8FF] text-[#C026D3] flex items-center justify-center shrink-0 shadow-sm">
                <Zap size={18} />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black font-display text-slate-900 leading-none">1K+</div>
                <div className="text-[0.58rem] sm:text-[0.62rem] font-extrabold tracking-wider text-slate-400 uppercase mt-1">ACTIVE RESELLERS</div>
              </div>
            </div>
          </div>

          {/* Rating & Social Proof Row */}
          <div className="flex items-center gap-3.5">
            <div className="flex -space-x-2.5 overflow-hidden">
              {avatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Client avatar"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-500 mt-0.5">
                Trusted by business owners worldwide
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Larger & Fully Responsive Showcase Image (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
        >
          <div className="relative w-full max-w-[760px] lg:max-w-none lg:w-[114%] xl:w-[122%] 2xl:w-[128%] lg:-mr-12 xl:-mr-20 2xl:-mr-28">
            <img
              src="/herosectionimage.png"
              alt="TheUniPick Full-Stack Web Application and Technical SEO Dashboard Showcase"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:scale-[1.015] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
