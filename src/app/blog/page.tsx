"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Why Full-Spectrum Engineering Beats Patchwork Vendors",
    excerpt: "The hidden costs of managing multiple specialized vendors and how a unified studio approach accelerates delivery.",
    category: "STRATEGY",
    date: "April 22, 2026",
    readTime: "8 min read",
    color: "var(--primary)"
  },
  {
    id: 2,
    title: "Node.js vs. Spring Boot: Choosing Your Backend for 2026",
    excerpt: "A deep dive into performance, ecosystem maturity, and developer velocity for modern enterprise applications.",
    category: "ENGINEERING",
    date: "April 18, 2026",
    readTime: "12 min read",
    color: "var(--secondary)"
  },
  {
    id: 3,
    title: "How to Pragmatically Integrate LLMs into Your SaaS Product",
    excerpt: "Moving beyond chat boxes: using RAG and vector databases to create real user value with AI.",
    category: "AI & ML",
    date: "April 12, 2026",
    readTime: "10 min read",
    color: "#a855f7"
  },
  {
    id: 4,
    title: "The 2026 Guide to Headless CMS Architecture",
    excerpt: "Why decoupling your content from your presentation layer is the only way to scale multi-channel experiences.",
    category: "CMS",
    date: "April 05, 2026",
    readTime: "7 min read",
    color: "#3b82f6"
  },
  {
    id: 5,
    title: "Optimizing Core Web Vitals in Next.js 16",
    excerpt: "A step-by-step guide to achieving sub-second LCP and zero CLS in the latest Next.js environment.",
    category: "PERFORMANCE",
    date: "March 28, 2026",
    readTime: "15 min read",
    color: "#14b8a6"
  },
  {
    id: 6,
    title: "Infrastructure as Code: Terraform vs. Pulumi for Startups",
    excerpt: "Evaluating the modern DevOps landscape for teams that need to move fast without compromising security.",
    category: "DEVOPS",
    date: "March 20, 2026",
    readTime: "9 min read",
    color: "#64748b"
  }
];

export default function BlogPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <Navbar />
      
      {/* Header */}
      <section style={{ 
        paddingTop: '12rem', 
        paddingBottom: '8rem', 
        background: 'var(--gradient-mesh)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.3rem', marginBottom: '1.5rem' }}
              >
                THE ARCHIVE
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'var(--on-surface)', lineHeight: 1.1 }}
              >
                Engineering <br />
                <span className="text-gradient">Insights.</span>
              </motion.h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                Deep dives into software architecture, AI strategy, and the future of full-spectrum development.
              </p>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div className="card-premium" style={{ background: 'white', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--outline-variant)' }}>
                <Search size={20} color="var(--on-surface-variant)" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '1.1rem', padding: '1rem 0' }}
                />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                {['Engineering', 'Architecture', 'AI Strategy', 'CMS', 'DevOps'].map(tag => (
                  <span key={tag} style={{ padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', background: 'var(--surface-container-low)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--on-surface-variant)', cursor: 'pointer' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '3rem' 
          }}>
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-premium"
                style={{ background: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Tag size={16} style={{ color: post.color }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--on-surface-variant)', letterSpacing: '0.1em' }}>{post.category}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--on-surface-muted)', fontSize: '0.8rem' }}>
                      <Clock size={14} /> {post.readTime}
                    </div>
                  </div>

                  <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', lineHeight: 1.3, fontWeight: 800 }}>{post.title}</h2>
                  <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginBottom: '3rem', flex: 1 }}>{post.excerpt}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid var(--outline-variant)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--on-surface-muted)', fontWeight: 600 }}>{post.date}</span>
                    <motion.a 
                      href={`/blog/${post.id}`}
                      whileHover={{ x: 5 }}
                      style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      Read Article <ArrowRight size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '8rem' }}>
            <button className="btn-secondary" style={{ padding: '1.25rem 4rem' }}>
              Load More Insights
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
