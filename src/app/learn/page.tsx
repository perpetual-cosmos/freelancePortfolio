import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Developer Glossary & Learning Center | TheUnipick',
  description: 'Understand the technical terms behind modern web development and AI automation.',
};

const glossaryTerms = [
  { slug: 'what-is-nextjs', title: 'What is Next.js?', category: 'Web Development' },
  { slug: 'what-is-headless-cms', title: 'What is a Headless CMS?', category: 'Architecture' },
  { slug: 'what-is-n8n', title: 'What is n8n Workflow Automation?', category: 'AI Automation' },
  { slug: 'what-is-core-web-vitals', title: 'What are Core Web Vitals?', category: 'SEO' },
];

export default function LearnIndexPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.7rem] uppercase tracking-widest mb-6 border border-primary/10">
             <BookOpen size={14} /> Knowledge Base
          </div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold font-display leading-[1.05] tracking-tight text-on-surface mb-6">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Glossary.</span>
          </h1>
          <p className="text-on-surface-variant text-[1.4rem] font-medium leading-relaxed max-w-[800px] mx-auto">
            Clear, non-technical explanations of the technologies driving modern business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((term) => (
            <Link 
              href={`/learn/${term.slug}`} 
              key={term.slug}
              className="bg-surface-muted border border-outline rounded-3xl p-8 hover:-translate-y-1 transition-all hover:border-primary/50 group"
            >
              <div className="text-xs font-bold text-primary mb-3 uppercase tracking-widest">{term.category}</div>
              <h3 className="text-2xl font-bold font-display text-on-surface mb-4 group-hover:text-primary transition-colors">
                {term.title}
              </h3>
              <div className="flex items-center text-on-surface-muted group-hover:text-primary transition-colors font-bold text-sm">
                Read explanation <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
