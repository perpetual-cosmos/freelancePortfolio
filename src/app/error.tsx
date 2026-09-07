"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, ShieldAlert, Home, MessageSquare } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics or error tracking service silently
    console.error('Unhandled Client Error Captured:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-md w-full text-center relative z-10 bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <ShieldAlert size={32} />
        </div>

        <span className="text-[0.65rem] font-bold tracking-[0.2em] text-purple-400 uppercase font-mono bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          SYSTEM PROTECTION STATUS: ACTIVE
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight mt-4 mb-3">
          Something Went Wrong
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-8">
          We encountered an unexpected request issue. Our automated error logging system has recorded this event to ensure maximum system reliability.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#6300e2] to-[#8b5cf6] text-white font-bold text-xs tracking-wide shadow-lg shadow-purple-900/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer border-0"
          >
            <RefreshCw size={14} /> Try Again
          </button>

          <Link
            href="/"
            className="w-full py-3.5 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 no-underline"
          >
            <Home size={14} /> Return to Homepage
          </Link>

          <Link
            href="/contact"
            className="w-full py-3 px-6 rounded-2xl text-white/50 hover:text-white font-bold text-[0.7rem] tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 no-underline mt-2"
          >
            <MessageSquare size={12} /> Contact Technical Support
          </Link>
        </div>
      </div>
    </div>
  );
}
