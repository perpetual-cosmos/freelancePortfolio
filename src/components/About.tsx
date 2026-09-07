"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, User, Globe } from 'lucide-react';
import Link from 'next/link';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const stats = [
  { label: 'PROJECTS SHIPPED', value: '50+', icon: <Rocket size={22} className="text-[#7C3AED]" /> },
  { label: 'YEARS EXPERIENCE', value: '3+', icon: <User size={22} className="text-[#7C3AED]" /> },
  { label: 'SAAS USERS', value: '1K+', icon: <Code2 size={22} className="text-[#7C3AED]" /> },
  { label: 'COUNTRIES', value: '70+', icon: <Globe size={22} className="text-[#7C3AED]" /> },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#FAF8FE]">
      {/* Background Soft Ornaments */}
      <div className="absolute top-[-60px] right-[-60px] w-[500px] h-[500px] bg-[#E9D8FD]/60 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[450px] h-[450px] bg-[#F3E8FF]/60 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Photo Frame & Floating Glass Badges (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-start"
        >
          {/* Top-Left Purple Dot Grid Ornament */}
          <div className="absolute -top-6 -left-6 z-0 grid grid-cols-5 gap-2 opacity-60 pointer-events-none">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div key={idx} className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
            ))}
          </div>

          {/* Left Handwritten Annotation: Ideas / Code / Impact */}
          <div className="hidden sm:flex flex-col items-center absolute -left-16 sm:-left-20 top-1/4 z-30 pointer-events-none select-none text-[#7C3AED]">
            <span className={`${caveat.className} text-xl sm:text-2xl leading-tight rotate-[-12deg] text-center font-bold`}>
              Ideas <br /> Code <br /> Impact
            </span>
            <svg className="w-9 h-9 text-[#7C3AED] mt-1 rotate-[-15deg]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M 6 6 Q 24 14 20 28 M 14 24 L 20 28 L 24 20" />
            </svg>
          </div>

          <div className="relative w-full max-w-[400px] lg:max-w-[440px]">
            {/* Rotated Purple Backdrop Card */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rotate-[-6deg] scale-[1.03] shadow-[0_20px_50px_rgba(124,58,237,0.25)]" />

            {/* Main Photo Frame */}
            <div className="relative z-10 rounded-[28px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(124,58,237,0.35)] border-4 border-white bg-slate-100 aspect-[4/5] w-full">
              <img
                src="/TarunSingh.png"
                alt="Tarun Singh — Principal Full-Stack Engineer and Technical SEO Lead"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            {/* Floating Badge 1: Top Right (50+ Projects Delivered) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 top-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-purple-100/70 shadow-[0_15px_35px_rgba(124,58,237,0.18)] p-3 px-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Code2 size={20} />
              </div>
              <div>
                <div className="text-lg font-extrabold font-display text-slate-900 leading-none">50+</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1 whitespace-nowrap">Projects Delivered</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom Left (3+ Years Building Digital Products) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute z-20 -bottom-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-purple-100/70 shadow-[0_15px_35px_rgba(124,58,237,0.18)] p-3 px-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <User size={20} />
              </div>
              <div>
                <div className="text-lg font-extrabold font-display text-slate-900 leading-none">3+ Years</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1 whitespace-nowrap">Building Digital Products</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content & Metrics (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 text-left"
        >
          {/* Top Pill Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEE4FD] border border-[#E2D2FB] text-[#7C3AED] font-extrabold text-[0.72rem] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
              <span>ABOUT ME</span>
            </div>
            <div className="h-[1.5px] w-20 bg-[#E2D5F8]" />
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(2.5rem,4.8vw,4.5rem)] font-black text-slate-900 leading-tight font-display tracking-tight mb-2">
            Tarun <span className="text-[#6D28D9]">Singh</span>
          </h2>

          {/* Subheadline */}
          <h3 className="text-xl sm:text-2xl lg:text-[1.8rem] font-extrabold text-slate-900 tracking-tight leading-snug mb-5 font-display">
            Building Digital Products That{" "}
            <span className="text-[#6D28D9] block sm:inline">
              Perform, Scale & Lead.
            </span>
          </h3>

          {/* Bio Description */}
          <p className="text-slate-600 text-base sm:text-[1.05rem] font-normal leading-relaxed max-w-[620px] mb-8">
            I am a principal full-stack engineer and technical SEO specialist leading TheUniPick Studio. Over 3+ years, I have architected and shipped 50+ live products from SaaS platforms with global reach to #1 ranking Shopify e-commerce stores. I lead every technical build and collaborate with a vetted network of specialist freelancers to deliver complete digital systems.
          </p>

          {/* 4 Metric Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mb-9">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#F4EDFF]/90 p-4 sm:p-4.5 rounded-2xl border border-[#E7DBFC] flex flex-col items-start gap-1.5 transition-all duration-300 hover:bg-[#EFE5FF] hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="p-1 rounded-lg">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-[1.65rem] font-extrabold font-display text-slate-900 leading-none mt-1">
                  {stat.value}
                </div>
                <div className="text-[0.6rem] sm:text-[0.62rem] font-bold text-slate-500 tracking-wider uppercase leading-tight mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA & Handwritten Annotation */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 relative">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_-5px_rgba(124,58,237,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(124,58,237,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Learn My Journey <ArrowRight size={18} />
            </Link>

            {/* Handwritten Right Annotation */}
            <div className="hidden sm:flex items-center gap-2 text-[#7C3AED] select-none">
              <div className="flex flex-col">
                <span className={`${caveat.className} text-xl sm:text-2xl font-bold leading-tight rotate-[-4deg]`}>
                  Let's Build <br /> Something Great
                </span>
              </div>
              <svg className="w-8 h-8 text-[#7C3AED] rotate-[15deg] -mt-2" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M 4 8 Q 20 4 22 24 M 14 20 L 22 24 L 26 16" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

