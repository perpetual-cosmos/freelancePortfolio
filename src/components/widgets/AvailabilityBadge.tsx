"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AvailabilityBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center gap-[0.45rem] px-3 py-1.5 bg-tech-teal/10 rounded-full border border-tech-teal/20 cursor-default whitespace-nowrap max-w-full"
    >
      {/* Pulsing dot */}
      <div className="relative w-2 h-2 shrink-0">
        <div className="w-full h-full bg-tech-teal rounded-full" />
        <motion.div
          animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 bg-tech-teal rounded-full -z-10"
        />
      </div>

      {/* Label */}
      <span className="text-[clamp(0.65rem,1.2vw,0.75rem)] font-extrabold text-tech-teal tracking-tight uppercase truncate">
        Available for 3 new projects
      </span>
    </motion.div>
  );
};

export default AvailabilityBadge;
