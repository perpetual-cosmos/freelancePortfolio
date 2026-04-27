"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getAllBlogs } from '@/data/blogs';

export default function BlogPage() {
  const posts = getAllBlogs();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 lg:pb-16 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[0.6rem] tracking-[0.15em] uppercase mb-4 sm:mb-5">
              <Sparkles size={12} /> <span>Engineering Blog</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold tracking-tighter leading-[0.95] mb-3 sm:mb-4 font-display text-white">
              Technical{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Insights.</span>
            </h1>
            <p className="text-white/45 text-[0.88rem] sm:text-[0.95rem] font-medium leading-relaxed max-w-[480px] mx-auto">
              Deep dives into software architecture, AI strategy, and the future of full-spectrum development.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/4 right-[-8%] w-[300px] h-[300px] bg-primary/8 blur-[120px] rounded-full" />
      </section>

      {/* Featured Post */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href={`/blog/${featured.slug}`} className="no-underline block group">
            <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden hover:shadow-lg transition-shadow duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr]">
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 rounded-md text-[0.55rem] font-bold uppercase tracking-wider text-white" style={{ background: featured.color }}>{featured.category}</span>
                    <span className="flex items-center gap-1 text-[0.68rem] text-on-surface-muted font-medium">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span className="text-[0.68rem] text-on-surface-muted font-medium">{featured.date}</span>
                  </div>
                  <h2 className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] font-extrabold text-on-surface font-display tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-on-surface-variant text-[0.85rem] sm:text-[0.9rem] leading-relaxed font-medium opacity-75 mb-5 max-w-[550px]">
                    {featured.hook}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {featured.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-surface-muted rounded-md text-[0.58rem] font-bold text-on-surface-muted uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-primary font-bold text-[0.78rem] group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
                {/* Visual Side */}
                <div className="hidden lg:flex items-center justify-center p-10 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${featured.color}15, ${featured.color}05)` }}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white" style={{ background: featured.color }}>
                      <Tag size={28} />
                    </div>
                    <div className="text-[0.6rem] font-bold text-on-surface-muted uppercase tracking-[0.15em]">Featured Article</div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-[60px] opacity-20" style={{ background: featured.color }} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 pb-14 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/blog/${post.slug}`} className="no-underline block group h-full">
                <article className="bg-white rounded-xl border border-[rgba(0,0,0,0.05)] p-5 sm:p-6 flex flex-col h-full hover:shadow-md hover:-translate-y-1 hover:border-[rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: post.color }} />
                      <span className="text-[0.55rem] font-bold text-on-surface-muted uppercase tracking-[0.12em]">{post.category}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[0.6rem] text-on-surface-muted font-medium opacity-60">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[0.95rem] sm:text-[1.02rem] font-bold text-on-surface font-display tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-on-surface-muted text-[0.75rem] sm:text-[0.78rem] leading-relaxed font-medium opacity-70 mb-4 flex-1">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(0,0,0,0.04)]">
                    <span className="text-[0.6rem] text-on-surface-muted font-medium">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-primary font-bold text-[0.7rem] group-hover:gap-2 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
