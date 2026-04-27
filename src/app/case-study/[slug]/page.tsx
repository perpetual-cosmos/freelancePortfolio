import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Terminal, Quote } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} Case Study | TheUnipick`,
    description: study.tagline,
    openGraph: {
      images: [study.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-64 lg:pb-32 overflow-hidden border-b border-white/5 noise-overlay">
        <div className="absolute inset-0 z-0">
          <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary rounded-full text-[0.7rem] font-black tracking-[0.2em] uppercase mb-8 border border-primary/20 shadow-[0_0_20px_rgba(99,0,226,0.3)]">
              {study.industry}
            </div>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tighter leading-[0.9] text-white font-display mb-8">
              {study.title}
            </h1>
            <p className="text-white/60 text-[1.2rem] lg:text-[1.8rem] leading-relaxed font-medium">
              {study.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {study.stats.map((stat, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <div className="text-[2.5rem] lg:text-[3.5rem] font-black text-primary mb-2 font-display">{stat.value}</div>
                <div className="text-[0.8rem] font-black tracking-[0.2em] text-white/40 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 lg:py-40 relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-[3rem] lg:text-[4.5rem] font-black text-white leading-none tracking-tighter font-display">
                The <span className="text-gradient">Challenge.</span>
              </h2>
              <p className="text-white/60 text-[1.2rem] leading-relaxed">
                {study.challenge.description}
              </p>
              <div className="space-y-4">
                {study.challenge.painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-white/80 text-[1.1rem] leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={study.heroImage} alt="Challenge context" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-40 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[3rem] lg:text-[4.5rem] font-black text-white text-center leading-none tracking-tighter font-display mb-24">
            Our <span className="text-gradient">Approach.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {study.approach.map((step, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-[1.5rem] font-bold text-white mb-4 tracking-tight">{step.phase}</h3>
                <p className="text-white/60 text-[1rem] leading-relaxed mb-6">{step.description}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-[0.8rem] uppercase tracking-widest">
                  <Clock size={16} /> {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Gallery */}
      <section className="py-24 lg:py-40 relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
            <div>
              <h2 className="text-[3rem] lg:text-[4.5rem] font-black text-white leading-none tracking-tighter font-display mb-12">
                The <span className="text-gradient">Results.</span>
              </h2>
              <div className="space-y-6">
                {study.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(99,0,226,0.8)]" />
                    <p className="text-white/80 text-[1.1rem] leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {study.gallery.map((img, i) => (
                <div key={i} className={`rounded-[2rem] overflow-hidden border border-white/10 ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & Tech Stack */}
      <section className="py-24 lg:py-40 relative bg-white rounded-t-[4rem] text-[#050505]">
        <div className="max-w-[1440px] mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center mb-32">
            <Quote className="w-16 h-16 mx-auto text-primary/20 mb-10" />
            <p className="text-[1.8rem] lg:text-[2.5rem] font-medium leading-tight tracking-tight mb-12">
              "{study.testimonial.quote}"
            </p>
            <div className="flex items-center justify-center gap-6">
              <img src={study.testimonial.image} alt={study.testimonial.author} className="w-16 h-16 rounded-full object-cover border border-[#050505]/10" />
              <div className="text-left">
                <div className="font-black text-[1.2rem]">{study.testimonial.author}</div>
                <div className="text-[#050505]/60 font-medium text-[0.9rem] uppercase tracking-widest">{study.testimonial.role}</div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-[1.5rem] font-black uppercase tracking-[0.2em] text-[#050505]/40 mb-10">
              <Terminal className="inline-block mr-2 -mt-1" size={24} /> Technologies Used
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {study.technologies.map((tech, i) => (
                <span key={i} className="px-6 py-3 rounded-xl bg-[#050505]/5 border border-[#050505]/10 font-bold text-[0.9rem] uppercase tracking-widest">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-40 p-12 lg:p-32 rounded-[4rem] bg-[#050505] text-white text-center">
            <h2 className="text-[3rem] lg:text-[5rem] font-black font-display tracking-tighter leading-none mb-8">
              Let's Start Something <span className="text-primary">Amazing.</span>
            </h2>
            <p className="text-white/60 text-[1.2rem] lg:text-[1.4rem] max-w-2xl mx-auto mb-16">
              Ready to transform your business like we did for {study.client}?
            </p>
            <Link href="/#contact" className="px-16 py-6 bg-primary text-white rounded-full font-black text-[1rem] uppercase tracking-[0.3em] shadow-2xl shadow-primary/40 hover:scale-105 hover:shadow-primary/60 transition-all duration-500 inline-block">
              Initiate System Build
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
