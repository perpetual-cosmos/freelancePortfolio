"use client";

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Clock, Tag, Calendar, ChevronRight,
  Share2, Copy, Check, BookOpen, ArrowRight, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBlogBySlug, getAllBlogs, type BlogPost } from '@/data/blogs';

/* ---------- helpers ---------- */

interface Section {
  id: string;
  heading: string;
  content: string;
}

function parseScript(script: string): Section[] {
  const blocks = script.split(/\[([A-Z &]+)\]\n+/g).filter(Boolean);
  const sections: Section[] = [];
  for (let i = 0; i < blocks.length; i += 2) {
    const heading = blocks[i].trim();
    const content = (blocks[i + 1] || '').trim();
    if (heading && content) {
      sections.push({
        id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        heading: formatHeading(heading),
        content,
      });
    }
  }
  return sections;
}

function formatHeading(raw: string): string {
  const map: Record<string, string> = {
    'INTRODUCTION': 'Introduction',
    'CORE CONCEPTS': 'Core Concepts',
    'REAL-LIFE EXAMPLES': 'Real-World Examples',
    'ACTIONABLE STEPS': 'Actionable Steps',
    'ENGAGEMENT & SUMMARY': 'Summary & Key Takeaways',
  };
  return map[raw] || raw.split(' ').map(w => w[0] + w.slice(1).toLowerCase()).join(' ');
}

/* ---------- TOC component ---------- */

function TableOfContents({ sections, activeId }: { sections: Section[]; activeId: string }) {
  return (
    <nav className="sticky top-28">
      <div className="text-[0.55rem] font-bold text-on-surface-muted uppercase tracking-[0.15em] mb-3 flex items-center gap-1.5">
        <BookOpen size={11} /> On this page
      </div>
      <ul className="space-y-0.5 list-none p-0 m-0 border-l border-[rgba(0,0,0,0.06)]">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block pl-3 py-1.5 text-[0.72rem] font-medium no-underline transition-all duration-200 border-l-2 -ml-px ${
                activeId === s.id
                  ? 'text-primary border-primary font-bold'
                  : 'text-on-surface-muted border-transparent hover:text-on-surface hover:border-[rgba(0,0,0,0.15)]'
              }`}
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Share button ---------- */

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-muted border border-[rgba(0,0,0,0.04)] text-[0.68rem] font-bold text-on-surface-muted hover:text-primary hover:border-primary/15 transition-all"
    >
      {copied ? <><Check size={12} className="text-green-500" /> Copied!</> : <><Copy size={12} /> Copy Link</>}
    </button>
  );
}

/* ---------- main page ---------- */

export default function BlogReaderPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const sections = parseScript(post.fullScript);
  const allPosts = getAllBlogs().filter(p => p.slug !== slug);
  const related = allPosts.slice(0, 3);

  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <div className="max-w-[760px]">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-on-surface-muted hover:text-primary transition-colors mb-5 no-underline">
            <ArrowLeft size={14} /> All Articles
          </Link>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-2 py-0.5 rounded-md text-[0.55rem] font-bold uppercase tracking-wider text-white" style={{ background: post.color }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[0.65rem] text-on-surface-muted font-medium">
              <Calendar size={11} /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-[0.65rem] text-on-surface-muted font-medium">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.5rem,4vw,2.4rem)] font-extrabold tracking-tight leading-[1.12] font-display text-on-surface mb-4"
          >
            {post.title}
          </motion.h1>

          {/* Hook / Subtitle */}
          <p className="text-on-surface-variant text-[0.9rem] sm:text-[0.95rem] leading-relaxed font-medium opacity-80 mb-5">
            {post.hook}
          </p>

          {/* Tags + Share */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {post.tags.slice(0, 5).map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-surface-muted rounded-md text-[0.55rem] font-bold text-on-surface-muted uppercase tracking-wider border border-[rgba(0,0,0,0.03)]">
                {tag}
              </span>
            ))}
            <div className="ml-auto">
              <ShareButton />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="max-w-[760px]">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.08)] to-transparent" />
        </div>
      </div>

      {/* ─── Content + Sidebar ─── */}
      <section className="py-8 sm:py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex gap-10 lg:gap-14">

            {/* Article Body */}
            <article className="flex-1 max-w-[760px] min-w-0">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.04 }}
                  className="mb-8 sm:mb-10"
                >
                  {/* Section heading */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-1 h-5 rounded-full" style={{ background: post.color }} />
                    <h2 className="text-[1.05rem] sm:text-[1.15rem] font-bold font-display text-on-surface tracking-tight">
                      {section.heading}
                    </h2>
                  </div>

                  {/* Content paragraphs */}
                  <div className="space-y-4 pl-[18px]">
                    {section.content.split('\n\n').map((paragraph, pi) => (
                      <p key={pi} className="text-on-surface-variant text-[0.88rem] sm:text-[0.92rem] leading-[1.8] font-medium">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* ─── Keywords / SEO Box ─── */}
              <div className="mt-10 p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/10">
                <div className="text-[0.55rem] font-bold text-primary uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                  <Tag size={10} /> Related Keywords
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {post.relatedKeywords.map(kw => (
                    <span key={kw} className="px-2.5 py-1 bg-white rounded-lg text-[0.65rem] font-bold text-on-surface-variant border border-primary/5">{kw}</span>
                  ))}
                </div>
              </div>

              {/* ─── CTA ─── */}
              <div className="mt-8 p-5 sm:p-6 rounded-xl bg-on-surface text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,0,226,0.1),transparent_70%)] pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold font-display tracking-tight mb-1">Need help implementing this?</h3>
                    <p className="text-white/50 text-[0.78rem] font-medium">Let's build the right solution for your business.</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-[0.78rem] no-underline hover:shadow-lg hover:shadow-primary/20 transition-all shrink-0">
                    Get in Touch <ArrowRight size={14} className="opacity-60" />
                  </Link>
                </div>
              </div>
            </article>

            {/* ─── Sidebar (TOC) ─── */}
            <aside className="hidden lg:block w-[240px] shrink-0">
              <TableOfContents sections={sections} activeId={activeId} />

              {/* Author Card */}
              <div className="mt-8 p-4 rounded-xl bg-surface-muted border border-[rgba(0,0,0,0.04)]">
                <div className="text-[0.55rem] font-bold text-on-surface-muted uppercase tracking-[0.15em] mb-2.5">Written by</div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-[0.7rem]">TS</div>
                  <div>
                    <div className="text-[0.78rem] font-bold text-on-surface">Tarun Singh</div>
                    <div className="text-[0.6rem] text-on-surface-muted font-medium">Full-Spectrum Engineer</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── Related Posts ─── */}
      {related.length > 0 && (
        <section className="py-10 sm:py-14 bg-surface-muted">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-14">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={13} className="text-primary" />
              <h3 className="text-[0.95rem] font-bold font-display text-on-surface tracking-tight">More Articles</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="no-underline block group">
                  <article className="bg-white rounded-xl border border-[rgba(0,0,0,0.05)] p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-400">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.color }} />
                      <span className="text-[0.5rem] font-bold text-on-surface-muted uppercase tracking-[0.12em]">{r.category}</span>
                      <span className="text-[0.55rem] text-on-surface-muted ml-auto">{r.readTime}</span>
                    </div>
                    <h4 className="text-[0.85rem] sm:text-[0.9rem] font-bold text-on-surface font-display tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-[0.7rem] text-on-surface-muted font-medium opacity-65 leading-relaxed line-clamp-2">
                      {r.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
