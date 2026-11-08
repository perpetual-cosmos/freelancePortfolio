"use client";

import { useEffect, useState } from 'react';
import type { Currency } from '@/data/pricing';

// Currency is set only by where the visitor is: India → INR, anywhere else → USD.
// 1st choice: the visitor's country from their IP (/api/geo, filled by Vercel).
// Fallback (local dev, or the lookup fails): the browser's time zone.
// There is no manual switch, so overseas visitors cannot switch to rupee prices.

let cached: Promise<Currency> | null = null;

function fromTimeZone(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    return tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta' ? 'INR' : 'USD';
  } catch {
    return 'INR';
  }
}

async function detect(): Promise<Currency> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch('/api/geo', { cache: 'no-store', signal: ctrl.signal });
    clearTimeout(timer);
    if (res.ok) {
      const { country } = (await res.json()) as { country: string | null };
      if (country) return country === 'IN' ? 'INR' : 'USD';
    }
  } catch {
    /* network error or timeout: use time zone */
  }
  return fromTimeZone();
}

/** Returns the visitor's currency. `ready` is false until it is known, so prices can stay hidden instead of flashing. */
export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    if (!cached) cached = detect();
    cached.then((c) => {
      if (alive) {
        setCurrency(c);
        setReady(true);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  return { currency, ready };
}
