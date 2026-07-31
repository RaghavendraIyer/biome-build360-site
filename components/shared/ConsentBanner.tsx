'use client';

import { useEffect, useState } from 'react';
import posthog from 'posthog-js';
import Link from 'next/link';

const STORAGE_KEY = 'build360_posthog_consent';

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
        if (typeof posthog?.config === 'undefined') return;
        setVisible(true);
      } catch {
        // never block the site if consent tracking fails
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      posthog.opt_in_capturing({
        captureEventName: 'consent_granted',
        captureProperties: { source: 'banner' },
      });
    } catch {
      // noop
    }
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
      posthog.opt_out_capturing();
    } catch {
      // noop
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-6 md:bottom-6 md:w-[380px]">
      <div className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] shadow-xl p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-2">
          Privacy
        </p>
        <p className="text-sm text-[var(--color-text-main)] leading-relaxed mb-4">
          We use cookies to understand how visitors use the site and improve it. See our{' '}
          <Link href="/privacy" className="underline text-[var(--color-primary)]">
            privacy policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="underline text-[var(--color-primary)]">
            terms
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={decline}
            className="flex-1 px-4 py-2 text-sm font-medium rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 px-4 py-2 text-sm font-medium rounded-[var(--radius)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
