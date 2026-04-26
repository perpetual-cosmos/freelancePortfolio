"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const recentPosts = [
  {
    title: "How I Built a WhatsApp Automation SaaS from Scratch",
    category: "Case Study",
    slug: "what-is-n8n",
    date: "April 2026"
  },
  {
    title: "Next.js vs React: When You Actually Need Next.js",
    category: "Web Development",
    slug: "what-is-nextjs",
    date: "April 2026"
  },
  {
    title: "Core Web Vitals: What a 95 Score Means for Business",
    category: "SEO",
    slug: "what-is-core-web-vitals",
    date: "March 2026"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden noise-overlay">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.7rem] tracking-[0.2em] uppercase mb-6"
            >
              <BookOpen size={14} /> <span>Insights & Resources</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-on-surface font-display"
            >
              Field Notes from <br className="hidden md:block" /> the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Frontlines.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link href="/learn" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline group">
              View all articles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href={`/learn/${post.slug}`}
                className="group block h-full bg-surface-muted border border-[rgba(99,0,226,0.06)] rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="text-[0.65rem] font-black text-primary uppercase tracking-widest mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-display text-on-surface leading-tight mb-8 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-on-surface-muted">{post.date}</span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
