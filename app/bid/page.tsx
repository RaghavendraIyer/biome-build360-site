'use client';

import { useState } from 'react';
import { AuthTabs } from '@/components/bid/AuthTabs';
import { VendorDashboard } from '@/components/bid/VendorDashboard';

export default function BidPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <section className="pt-[calc(80px+40px)] pb-10 px-[var(--gutter)] text-center bg-[var(--color-bg-app)]">
        <div className="max-w-3xl mx-auto">
          <div className="px-4 py-2 text-[10px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded-full inline-block mb-4">
            Interactive Preview
          </div>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Approved RFQs.{' '}
            <em className="not-italic text-[var(--color-primary)]">Ranked Reverse Bidding.</em>
          </h1>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            Verified buyer RFQs appear here. Compete in a ranked reverse auction: you see your rank, not competitor prices. Bid lower to move up. Lowest bid wins when the timer ends.
          </p>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            {[
              { label: '80%', sub: 'Faster procurement' },
              { label: '5-10%', sub: 'Cost savings' },
              { label: 'Sealed', sub: 'Bid for high-value' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <strong className="block font-serif text-xl font-extrabold text-[var(--color-primary)]">{s.label}</strong>
                <span className="text-[10px] text-[var(--color-text-muted)]">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-[var(--gutter)]">
        <div className="max-w-5xl mx-auto">
          {!loggedIn ? (
            <div>
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl font-extrabold text-[var(--color-text-main)] mb-2">
                  Sign Up or Log In to View Live RFQs
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Enter demo mode to explore the vendor dashboard.
                </p>
              </div>
              <AuthTabs onLogin={() => setLoggedIn(true)} />
            </div>
          ) : (
            <VendorDashboard />
          )}
        </div>
      </section>

      {!loggedIn && (
        <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)] mb-4">
              Not Registered{' '}
              <em className="not-italic text-[var(--color-primary)]">Yet?</em>
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto mb-8">
              Reach out on WhatsApp and our team will get you set up as a verified vendor on the platform. Ranked reverse bidding: private label margins at 8-12%, far exceeding traditional 2-3%.
            </p>
            <a
              href="https://wa.me/919032514441"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium bg-[var(--color-whatsapp)] text-white rounded-[var(--radius)] hover:bg-[var(--color-whatsapp-hover)] transition-colors no-underline"
            >
              Register on WhatsApp
            </a>
          </div>
        </section>
      )}
    </>
  );
}
