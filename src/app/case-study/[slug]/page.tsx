import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import ArchitectureFlow from '@/components/ArchitectureFlow';
import CaseStudyFAQ from '@/components/CaseStudyFAQ';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Terminal,
  Quote,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Compass,
  Cpu,
  Target,
  Rocket,
  Check,
  FileText,
  Lightbulb,
  Building,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];
  if (!study) return { title: 'Case Study Not Found | TheUnipicks' };

  const metaTitle = study.seo?.metaTitle || `${study.title} Case Study | TheUnipicks`;
  const metaDescription = study.seo?.metaDescription || study.tagline;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: study.seo?.secondaryKeywords || [study.industry, ...study.technologies],
    openGraph: {
      title: study.seo?.openGraphTitle || metaTitle,
      description: study.seo?.openGraphDescription || metaDescription,
      images: [{ url: study.heroImage, width: 1200, height: 630, alt: study.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [study.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  // Calculate next case study for navigation footer
  const studyKeys = Object.keys(caseStudies);
  const currentIndex = studyKeys.indexOf(slug);
  const nextSlug = studyKeys[(currentIndex + 1) % studyKeys.length];
  const nextStudy = caseStudies[nextSlug];

  // Construct JSON-LD Structured Data Graph for SEO & GEO
  const jsonLdGraph: Record<string, any>[] = [
    {
      '@type': 'Article',
      '@id': `https://theunipicks.vercel.app/case-study/${slug}#article`,
      'headline': study.seo?.metaTitle || study.title,
      'description': study.seo?.metaDescription || study.tagline,
      'image': `https://theunipicks.vercel.app${study.heroImage}`,
      'author': {
        '@type': 'Organization',
        'name': 'TheUnipicks',
        'url': 'https://theunipicks.vercel.app',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'TheUnipicks',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://theunipicks.vercel.app/logo.png',
        },
      },
      'mainEntityOfPage': `https://theunipicks.vercel.app/case-study/${slug}`,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theunipicks.vercel.app/case-study/${slug}#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://theunipicks.vercel.app',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Portfolio',
          'item': 'https://theunipicks.vercel.app/portfolio',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': study.title,
          'item': `https://theunipicks.vercel.app/case-study/${slug}`,
        },
      ],
    },
  ];

  if (study.faqs && study.faqs.length > 0) {
    jsonLdGraph.push({
      '@type': 'FAQPage',
      '@id': `https://theunipicks.vercel.app/case-study/${slug}#faq`,
      'mainEntity': study.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    });
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': jsonLdGraph,
  };

  // Helper for initial avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-primary/20 selection:text-white">
      {/* Dynamic SEO JSON-LD Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Navbar />

      {/* Top Header Navigation & Breadcrumbs */}
      <div className="pt-28 lg:pt-32 pb-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/50 overflow-hidden">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors shrink-0 font-medium"
            >
              <ArrowLeft size={14} /> Portfolio
            </Link>
            <ChevronRight size={14} className="shrink-0 text-white/20" />
            <span className="truncate text-white/80 font-medium">{study.title}</span>
          </div>

          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary text-xs font-semibold tracking-wide transition-all shadow-[0_0_12px_rgba(99,0,226,0.15)]"
            >
              Visit Live Platform <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-white/5 noise-overlay">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">

          {/* Industry Tag & Title */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/15 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-primary/25 shadow-[0_0_15px_rgba(99,0,226,0.2)]">
              <Sparkles size={13} />
              {study.industry}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white font-display mb-6">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mb-8">
              {study.tagline}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/25"
              >
                Request Similar System <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-sm font-medium transition-all"
              >
                All Case Studies
              </Link>
            </div>
          </div>

          {/* Project Meta Specifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Briefcase size={13} className="text-primary" /> Client
              </div>
              <div className="text-sm sm:text-base font-semibold text-white truncate">{study.client}</div>
            </div>

            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layers size={13} className="text-primary" /> Industry
              </div>
              <div className="text-sm sm:text-base font-semibold text-white truncate">{study.industry}</div>
            </div>

            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Zap size={13} className="text-primary" /> Role & Scope
              </div>
              <div className="text-sm sm:text-base font-semibold text-white truncate">
                {study.role || "Lead Engineer & UX Architect"}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar size={13} className="text-primary" /> Duration
              </div>
              <div className="text-sm sm:text-base font-semibold text-white truncate">
                {study.timeline || "Full Production Lifecycle"}
              </div>
            </div>
          </div>

          {/* Hero Feature Showcase Card */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] max-h-[500px]">
            <img
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {study.stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[0.7rem] font-bold">
                      <TrendingUp size={11} /> {stat.trend}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/60 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Executive Summary Callout (if available) */}
      {study.executiveSummary && (
        <section className="py-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-primary/30 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/30">
                <FileText size={24} />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                  Executive Summary
                </div>
                <p className="text-base text-neutral-200 leading-relaxed font-medium">
                  {study.executiveSummary}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About The Client Section (if available) */}
      {study.aboutClient && (
        <section className="py-16 sm:py-20 relative border-b border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                <Building size={14} /> Commercial Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
                About <span className="text-gradient">{study.client}</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {study.aboutClient}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* The Challenge Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Target size={14} /> Problem Statement
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                  The Core <span className="text-gradient">Challenge</span>
                </h2>
              </div>

              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                {study.challenge.description}
              </p>

              <div className="pt-2 space-y-3">
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                  Key Pain Points & Technical Constraints:
                </div>
                {study.challenge.painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/80 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              {study.overview && !study.executiveSummary && (
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" /> Project Overview
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {study.overview}
                  </p>
                </div>
              )}

              {study.keyHighlights && study.keyHighlights.length > 0 && (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                    Architectural Solutions:
                  </div>
                  {study.keyHighlights.map((highlight, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all">
                      <div className="text-sm font-bold text-white mb-1">{highlight.title}</div>
                      <div className="text-xs sm:text-sm text-neutral-400">{highlight.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Discovery Process & Strategic Rationale (if available) */}
      {(study.discoveryProcess || study.strategyRationale) && (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-white/[0.015] border-y border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              
              {study.discoveryProcess && (
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6 border border-primary/20">
                    <Compass size={20} />
                  </div>
                  <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                    Discovery & Research
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-4">
                    The Discovery Process
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {study.discoveryProcess}
                  </p>
                </div>
              )}

              {study.strategyRationale && (
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6 border border-primary/20">
                    <Cpu size={20} />
                  </div>
                  <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                    Architectural Choices
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-4">
                    Engineering Strategy Rationale
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {study.strategyRationale}
                  </p>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Interactive System Architecture Flow Diagram */}
      <section className="py-12 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <ArchitectureFlow
            flow={study.architectureFlow}
            technologies={study.technologies}
            title={`${study.title} System Architecture`}
          />
        </div>
      </section>

      {/* Challenges & Solutions Matrix (if available) */}
      {study.challengesAndSolutions && study.challengesAndSolutions.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 relative border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Engineering Resilience
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                Challenges & <span className="text-gradient">Architectural Solutions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {study.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all grid md:grid-cols-3 gap-6 items-center"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                      Technical Challenge
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {item.challenge}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                      Engineered Solution
                    </div>
                    <div className="text-sm text-neutral-300">
                      {item.solution}
                    </div>
                  </div>

                  <div className="space-y-1 md:border-l md:border-white/10 md:pl-6">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      Business Outcome
                    </div>
                    <div className="text-sm text-neutral-300">
                      {item.businessBenefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Execution Strategy Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-white/[0.015] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              Execution Timeline
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
              Structured <span className="text-gradient">Phase Execution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.approach.map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-primary/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold text-sm border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                      0{i + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.75rem] font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      <Clock size={12} /> {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{step.phase}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Visual Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Measured Impact
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
                  Delivered <span className="text-gradient">Outcomes</span>
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Concrete business and performance results achieved upon production deployment:
                </p>
              </div>

              <div className="space-y-3">
                {study.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_8px_rgba(99,0,226,0.8)]" />
                    <p className="text-sm sm:text-base text-white/90 leading-snug">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider">
                  Visual Showcase & Interface Highlights
                </div>
                <span className="text-xs text-white/40">Click image to expand</span>
              </div>
              <CaseStudyGallery gallery={study.gallery} title={study.title} />
            </div>

          </div>
        </div>
      </section>

      {/* Client Value & Long-Term Business Impact (if available) */}
      {(study.clientValueLongTerm || (study.keyTakeaways && study.keyTakeaways.length > 0)) && (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-white/[0.015] border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              
              {study.clientValueLongTerm && (
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
                    <Rocket size={20} />
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
                    Commercial Asset
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-4">
                    Long-Term Client Value
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {study.clientValueLongTerm}
                  </p>
                </div>
              )}

              {study.keyTakeaways && study.keyTakeaways.length > 0 && (
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6 border border-primary/20">
                    <Lightbulb size={20} />
                  </div>
                  <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                    Engineering Insights
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-4">
                    Key Architecture Takeaways
                  </h3>
                  <div className="space-y-3">
                    {study.keyTakeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Future Roadmap Section (if available) */}
      {study.futureRoadmap && study.futureRoadmap.length > 0 && (
        <section className="py-12 border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                System Evolution
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Future Platform Roadmap
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {study.futureRoadmap.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-bold text-primary mb-1 font-mono">Phase 0{i + 2}</div>
                    <div className="text-sm text-neutral-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion Component Section */}
      <CaseStudyFAQ faqs={study.faqs} projectTitle={study.title} />

      {/* Client Testimonial & Tech Stack Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-white/5 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* Testimonial Card */}
          <div className="max-w-3xl mx-auto text-center mb-16 p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl relative overflow-hidden">
            <Quote className="w-12 h-12 mx-auto text-primary/30 mb-6" />
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight mb-8 text-neutral-100 italic">
              "{study.testimonial.quote}"
            </p>
            <div className="flex items-center justify-center gap-4">
              {study.testimonial.image && !study.testimonial.image.endsWith('.gif') ? (
                <img
                  src={study.testimonial.image}
                  alt={study.testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold font-mono text-sm flex items-center justify-center">
                  {getInitials(study.testimonial.author)}
                </div>
              )}
              <div className="text-left">
                <div className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                  {study.testimonial.author}
                  {study.testimonial.verified && (
                    <span className="inline-flex items-center gap-0.5 text-emerald-400 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <ShieldCheck size={12} /> Verified Client
                    </span>
                  )}
                </div>
                <div className="text-white/50 font-medium text-xs uppercase tracking-wider">
                  {study.testimonial.role}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 flex items-center justify-center gap-2">
              <Terminal size={16} /> Stack & Infrastructure Used
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {study.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 font-medium text-xs text-neutral-200 tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Next Case Study Banner */}
      <section className="py-12 border-t border-white/5 bg-[#080808]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <Link
            href={`/case-study/${nextSlug}`}
            className="group block p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                  Next Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors font-display">
                  {nextStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl line-clamp-1">
                  {nextStudy.tagline}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                Read Case Study <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-[#050505] to-[#0a0614]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight leading-tight mb-4">
              Ready to Scope Your Next <span className="text-primary font-display">Digital System?</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              We design and build production-grade web platforms, SaaS applications, and scalable architectures.
            </p>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-wide shadow-xl shadow-primary/30 hover:scale-105 hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              Book Technical Scoping Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
