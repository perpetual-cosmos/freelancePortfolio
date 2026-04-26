"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';

const WhatsAppCTA = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const whatsappNumber = "911234567890";
  const message = "Hi! I'm interested in discussing a project with TheUnipick.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 min-[360px]:bottom-4 min-[360px]:right-4 z-[9999] flex items-center">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] min-[360px]:w-[46px] min-[360px]:h-[46px] bg-[#25D366] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.45)] flex items-center justify-center text-white relative cursor-pointer no-underline shrink-0"
      >
        <WhatsappLogo size={30} weight="fill" />

        {/* Online indicator */}
        <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-[13px] h-[13px] bg-white rounded-full flex items-center justify-center z-10">
          <div className="w-[7px] h-[7px] bg-green-500 rounded-full" />
        </div>

        {/* Pulse Effect */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        />
      </motion.a>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ delay: 1.2 }}
            onAnimationComplete={() => {
              setTimeout(() => setTooltipVisible(false), 5000);
            }}
            className="hidden sm:block absolute right-[calc(100%+0.85rem)] top-1/2 -translate-y-1/2 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-outline text-[0.82rem] font-bold text-on-surface whitespace-nowrap pointer-events-none"
          >
            <span>Need a quick estimate? Chat now!</span>
            {/* Arrow */}
            <div className="absolute top-1/2 left-full -translate-y-1/2 border-y-[5px] border-y-transparent border-l-[5px] border-l-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppCTA;
