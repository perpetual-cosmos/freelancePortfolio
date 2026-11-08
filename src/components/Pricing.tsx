"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, ShieldCheck, Wrench, Clock } from 'lucide-react';
import Link from 'next/link';
import {
  priceCategories,
  alwaysIncluded,
  notIncluded,
  maintenance,
  fixing,
  paymentTerms,
  taxNote,
} from '@/data/pricing';
import { useCurrency } from '@/lib/useCurrency';

const Pricing = ({ variant = 'home' }: { variant?: 'home' | 'full' }) => {
  const { currency, ready } = useCurrency();
  const [catId, setCatId] = useState(priceCategories[0].id);
  const category = priceCategories.find((c) => c.id === catId) ?? priceCategories[0];
  const packages = category.packages.filter((p) => currency === 'INR' || p.usd);
  const addOn = category.addOns?.[currency];

  return (
    <section id="pricing" className="bg-white relative overflow-hidden py-12 sm:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 max-w-[640px] mx-auto">
          <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold tracking-tight leading-[1.1] font-display text-on-surface mb-3 sm:mb-4">
            Clear prices. Scope in writing.
          </h2>
          <p className="text-on-surface-variant text-[0.88rem] sm:text-[0.95rem] font-medium leading-relaxed">
            Every package lists exactly what you get. Before you pay anything, you receive a written quote with the
            full scope, timeline and payment plan.
          </p>
        </div>

        {/* Currency + categories */}
        <div className="flex flex-col items-center gap-4 mb-8 sm:mb-10">
          <span className={`text-[0.75rem] font-bold text-on-surface-variant px-3 py-1.5 rounded-lg bg-[rgba(0,0,0,0.04)] transition-opacity ${ready ? 'opacity-100' : 'opacity-0'}`}>
            {currency === 'INR' ? 'Prices in Indian rupees (₹) for clients in India' : 'Prices in US dollars ($) for international clients'}
          </span>
          <div role="tablist" aria-label="Service" className="flex flex-wrap justify-center gap-2">
            {priceCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={c.id === catId}
                onClick={() => setCatId(c.id)}
                className={`px-3.5 py-2 rounded-lg text-[0.75rem] sm:text-[0.8rem] font-bold border transition-colors ${
                  c.id === catId
                    ? 'bg-on-surface text-white border-on-surface'
                    : 'bg-white text-on-surface-variant border-[rgba(0,0,0,0.08)] hover:border-on-surface/30'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="text-[0.82rem] text-on-surface-muted font-medium text-center">{category.intro}</p>
        </div>

        {/* Package cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch transition-opacity duration-200 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {packages.map((p, i) => {
            const price = currency === 'INR' ? p.inr : p.usd!;
            const note = p.priceNote?.[currency];
            return (
              <motion.div
                key={`${currency}-${p.code}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`flex flex-col p-5 sm:p-6 h-full rounded-2xl border ${
                  p.popular ? 'border-primary/30 bg-white shadow-md' : 'border-[rgba(0,0,0,0.07)] bg-surface-muted/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-[1rem] sm:text-[1.08rem] font-bold text-on-surface leading-tight font-display">{p.name}</h3>
                    <p className="text-[0.74rem] text-on-surface-muted font-medium mt-1">{p.forWho}</p>
                  </div>
                  {p.popular && (
                    <span className="text-[0.6rem] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wider shrink-0">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mb-4 pb-4 border-b border-[rgba(0,0,0,0.06)]">
                  <div className="text-[1.5rem] sm:text-[1.7rem] font-black font-display text-on-surface leading-tight">{price}</div>
                  {note && <div className="text-[0.72rem] text-on-surface-muted font-medium mt-1">{note}</div>}
                </div>

                <div className="text-[0.62rem] font-bold uppercase tracking-wider text-on-surface-muted mb-2">What you get</div>
                <ul className="flex-1 mb-4 space-y-2">
                  {p.includes.map((f) => (
                    <li key={f} className="flex gap-2 items-start text-[0.8rem] text-on-surface-variant">
                      <Check size={15} strokeWidth={2.5} className="mt-0.5 text-primary shrink-0" />
                      <span className="font-medium leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {p.bugFixDays && (
                  <div className="flex items-center gap-2 text-[0.74rem] text-on-surface-variant font-medium mb-4">
                    <ShieldCheck size={15} className="text-primary shrink-0" />
                    Free bug fixes for {p.bugFixDays} days after launch
                  </div>
                )}

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl font-bold text-[0.8rem] transition-colors no-underline ${
                    p.popular ? 'bg-on-surface text-white hover:bg-primary' : 'bg-[rgba(0,0,0,0.05)] text-on-surface hover:bg-on-surface hover:text-white'
                  }`}
                >
                  Get a written quote <ArrowRight size={14} className="opacity-60" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {addOn && (
          <p className="mt-5 text-center text-[0.78rem] text-on-surface-variant font-medium">
            <span className="font-bold text-on-surface">Add-ons:</span> {addOn}
          </p>
        )}

        {/* Included / not included */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="rounded-2xl border border-[rgba(0,0,0,0.07)] p-5 sm:p-6">
            <h3 className="text-[0.95rem] font-bold text-on-surface font-display mb-3">Every package includes</h3>
            <ul className="space-y-2">
              {alwaysIncluded.map((t) => (
                <li key={t} className="flex gap-2 items-start text-[0.8rem] text-on-surface-variant font-medium">
                  <Check size={15} strokeWidth={2.5} className="mt-0.5 text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[rgba(0,0,0,0.07)] p-5 sm:p-6">
            <h3 className="text-[0.95rem] font-bold text-on-surface font-display mb-3">Not included in package prices</h3>
            <ul className="space-y-2">
              {notIncluded.map((t) => (
                <li key={t} className="flex gap-2 items-start text-[0.8rem] text-on-surface-variant font-medium">
                  <X size={15} strokeWidth={2.5} className="mt-0.5 text-on-surface-muted shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {variant === 'full' && (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="rounded-2xl border border-[rgba(0,0,0,0.07)] p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-[0.95rem] font-bold text-on-surface font-display mb-1">
                <Clock size={16} className="text-primary" /> Monthly maintenance
              </h3>
              <p className="text-[0.74rem] text-on-surface-muted font-medium mb-3">
                Updates, backups and small edits after the free bug-fix period.
                {currency === 'INR' ? ' Yearly plans get 2 months free.' : ''}
              </p>
              <table className="w-full text-[0.78rem]">
                <tbody>
                  {maintenance
                    .filter((m) => currency === 'INR' || m.USD)
                    .map((m) => (
                      <tr key={m.service} className="border-t border-[rgba(0,0,0,0.05)]">
                        <td className="py-2 pr-3 font-bold text-on-surface align-top">{m.service}</td>
                        <td className="py-2 text-on-surface-variant font-medium">{currency === 'INR' ? m.INR : m.USD}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl border border-[rgba(0,0,0,0.07)] p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-[0.95rem] font-bold text-on-surface font-display mb-1">
                <Wrench size={16} className="text-primary" /> Fixes and changes
              </h3>
              <p className="text-[0.74rem] text-on-surface-muted font-medium mb-3">
                For sites without a maintenance plan, or after the free bug-fix period. Price agreed before work starts.
              </p>
              <table className="w-full text-[0.78rem]">
                <tbody>
                  {fixing.map((f) => (
                    <tr key={f.label} className="border-t border-[rgba(0,0,0,0.05)]">
                      <td className="py-2 pr-3 font-bold text-on-surface align-top">{f.label}</td>
                      <td className="py-2 text-on-surface-variant font-medium">{f[currency]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Terms */}
        <div className="mt-8 max-w-[860px] mx-auto text-center space-y-1.5">
          <p className="text-[0.76rem] text-on-surface-variant font-medium">
            <span className="font-bold text-on-surface">Payment:</span> {paymentTerms[currency]}
          </p>
          <p className="text-[0.76rem] text-on-surface-variant font-medium">{taxNote[currency]}</p>
          {variant === 'home' && (
            <Link href="/pricing" className="inline-flex items-center gap-1.5 mt-2 text-[0.8rem] font-bold text-primary no-underline hover:underline">
              See maintenance plans and fixing rates <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
