import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Layers, Compass, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col justify-between font-sans">
      <Navbar />

      <section className="py-24 sm:py-32 flex-1 flex items-center justify-center relative overflow-hidden px-4">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[170px] rounded-full pointer-events-none" />

        <div className="max-w-lg w-full text-center relative z-10 bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          <span className="font-mono text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight mt-4 mb-3">
            Page Not Found
          </h1>

          <p className="text-white/60 text-sm leading-relaxed mb-8">
            The page or resource you are looking for has been moved, renamed, or is undergoing scheduled optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#6300e2] to-[#8b5cf6] text-white font-bold text-xs flex items-center justify-center gap-2 no-underline shadow-md hover:scale-[1.01] transition-all"
            >
              <Home size={14} /> Back to Home
            </Link>

            <Link
              href="/services"
              className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 no-underline hover:bg-white/10 transition-all"
            >
              <Layers size={14} /> View Services
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-white/50">
            <Link href="/portfolio" className="hover:text-white transition-colors no-underline">Portfolio</Link>
            <span>•</span>
            <Link href="/hire" className="hover:text-white transition-colors no-underline">Hire Developer</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors no-underline">Contact</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
