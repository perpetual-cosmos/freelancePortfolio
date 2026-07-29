"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Star, Globe, ShieldCheck, Rocket } from 'lucide-react';
import { trustPulses, TrustPulseItem } from '@/data/trustpulse';

const DURATION = 8000;

const renderPulseIcon = (type: TrustPulseItem['iconType']) => {
  switch (type) {
    case 'check': return <CheckCircle size={16} />;
    case 'users': return <Users size={16} />;
    case 'star': return <Star size={16} />;
    case 'globe': return <Globe size={16} />;
    case 'rocket': return <Rocket size={16} />;
    case 'shield': return <ShieldCheck size={16} />;
    default: return <CheckCircle size={16} />;
  }
};

const TrustPulse = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => setIsVisible(true), 4000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % trustPulses.length);
        setIsVisible(true);
      }, 900);
    }, DURATION + 1000);

    return () => { clearTimeout(initialTimer); clearInterval(interval); };
  }, []);

  const pulse = trustPulses[index];

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 min-[360px]:bottom-4 min-[360px]:left-4 z-[9998]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="p-3.5 sm:px-4 sm:py-3.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.35)] border border-[rgba(99,0,226,0.25)] bg-[#0f0f1e]/90 text-white backdrop-blur-2xl relative overflow-hidden w-[min(290px,calc(100vw-3rem))] sm:w-[310px]"
          >
            {/* Icon + content row */}
            <div className="flex items-start gap-3">
              <div 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                style={{ background: `linear-gradient(135deg, ${pulse.color}25, ${pulse.color}10)`, color: pulse.color }}
              >
                {renderPulseIcon(pulse.iconType)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <span className="text-[0.62rem] sm:text-[0.65rem] font-bold text-violet-400 tracking-wide uppercase font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Studio Milestone
                  </span>
                  <span className="text-[0.62rem] sm:text-[0.68rem] text-white/40 font-medium whitespace-nowrap">
                    {pulse.time}
                  </span>
                </div>
                <div className="text-[0.82rem] sm:text-[0.86rem] font-bold text-white/90 leading-snug">
                  {pulse.text}
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="bg-none border-none text-white/40 cursor-pointer text-[1.1rem] leading-none px-0.5 shrink-0 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-[2.5px] w-full bg-white/10 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: DURATION / 1000, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>

            {/* Watermark */}
            <div className="absolute -top-2 -right-2 opacity-[0.07] pointer-events-none">
              <ShieldCheck size={68} className="text-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrustPulse;
