"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Sparkles, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

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

const TestimonialCard = ({ t, i, isSlider = false }: { t: typeof testimonies[0], i: number, isSlider?: boolean }) => (
  <motion.div
    initial={isSlider ? false : { opacity: 0, y: 20 }}
    whileInView={isSlider ? {} : { opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08 }}
    className={`bg-white rounded-xl border border-[rgba(0,0,0,0.05)] p-5 sm:p-6 group hover:border-[rgba(99,0,226,0.1)] hover:shadow-md transition-all duration-500 relative overflow-hidden flex flex-col h-full ${!isSlider ? 'hover:-translate-y-1' : ''}`}
  >
    {/* Top Row */}
    <div className="mb-4 flex justify-between items-start">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm"
        style={{ color: 'white', background: t.color }}
      >
        <Quote size={16} fill="white" />
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, si) => (
          <Star key={si} size={11} fill={t.color} color={t.color} className="opacity-70" />
        ))}
      </div>
    </div>

    {/* Quote */}
    <p className="text-on-surface-variant text-[0.82rem] sm:text-[0.88rem] leading-relaxed font-medium italic mb-5 flex-1 opacity-85 group-hover:opacity-100 transition-opacity">
      "{t.quote}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,0,0,0.04)]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-[0.75rem] shadow-sm group-hover:scale-105 transition-transform"
        style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}dd)` }}
      >
        {t.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-[0.82rem] text-on-surface leading-tight mb-0.5 truncate font-display tracking-tight flex items-center gap-1.5">
          {t.author}
          {t.link && (
            <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
              <ExternalLink size={12} />
            </a>
          )}
        </div>
        <div className="text-[0.6rem] sm:text-[0.65rem] text-on-surface-muted font-bold tracking-wider uppercase truncate opacity-60">
          {t.role}
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonies.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="bg-white py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 blur-[140px] rounded-full -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] uppercase mb-4"
          >
            <Sparkles size={12} /> <span>Client Feedback</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold tracking-tight leading-[1.1] font-display text-on-surface"
          >
            Validated by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Digital Leaders.</span>
          </motion.h2>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonies.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>

        {/* Mobile Slider (Visible only on Mobile) */}
        <div className="sm:hidden relative h-[320px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                if (info.offset.x > 50) prev();
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <TestimonialCard t={testimonies[index]} i={index} isSlider={true} />
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots for mobile slider */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
            {testimonies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-4' : 'bg-primary/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-muted border border-[rgba(0,0,0,0.04)] text-[0.72rem] sm:text-[0.78rem] font-bold text-on-surface-variant">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4].map(j => (
                <div key={j} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
              ))}
            </div>
            Join 50+ founders who trust our engineering.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
