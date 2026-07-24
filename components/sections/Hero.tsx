'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';

const slides = [
  {
    badge: 'India\'s Organized Procurement Network',
    heading: <>The Smarter Way to{' '}<em className="not-italic text-[var(--color-primary)]">Procure</em>{' '}Building Supplies.</>,
    body: 'India\'s organized procurement network: connecting contractors, builders, and architects to verified supplier partners. Bulk pricing, project delivery, zero hassle.',
    sub: 'From cement and steel to tiles, adhesives, and finishing supplies — source your entire project through a single verified partner.',
    bg: '/hero/slide-0.jpg',
  },
  {
    badge: 'Verified Brands · India\'s Trusted Procurement Network',
    heading: <>Verified Brands<br />For Every{' '}<em className="not-italic text-[var(--color-primary)]">Specialty Need.</em></>,
    body: 'Your single-source partner for organized construction materials across India. Starting with premium tile adhesives and epoxy grouts, we\'re expanding into cement, steel, blocks, and finishing supplies — all from verified suppliers, all on a single WhatsApp conversation.',
    sub: 'One request. One partner. Full project coverage.',
    bg: '/hero/slide-1.jpg',
  },
  {
    badge: 'WhatsApp-First · Instant Quotes & Delivery',
    heading: <>Procurement<br />As Simple As{' '}<em className="not-italic text-[var(--color-primary)]">Sending a Message.</em></>,
    body: 'One request, one relationship, all materials coordinated. From cement and steel to tiles, adhesives, and finishing supplies : source your entire project through a single verified partner.',
    sub: 'We handle the logistics : you focus on the build.',
    bg: '/hero/slide-2.jpg',
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const startInterval = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const el = sectionRef.current;
    startInterval();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startInterval();
        else stopInterval();
      },
      { threshold: 0 },
    );
    if (el) observer.observe(el);
    return () => {
      stopInterval();
      if (el) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-700"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `linear-gradient(100deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.35) 100%), url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      <div className="absolute inset-0 z-[1] opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="relative z-10 w-full px-[var(--gutter)] py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-primary)] border border-[var(--color-primary-18)] bg-[var(--color-primary-10)] px-4 py-2 rounded-full inline-block mb-6">
            {slides[current].badge}
          </span>
          <h1
            key={`h-${current}`}
            className="font-serif text-[clamp(36px,7vw,64px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-5 animate-[fadeUp_0.5s_ease_both]"
          >
            {slides[current].heading}
          </h1>
          <p
            key={`b-${current}`}
            className="text-sm md:text-[16px] text-white/85 max-w-2xl mx-auto leading-relaxed font-light mb-8 animate-[fadeUp_0.5s_0.1s_ease_both]"
          >
            {slides[current].body}
          </p>
          <p
            key={`s-${current}`}
            className="text-xs md:text-sm text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed mb-10 animate-[fadeUp_0.5s_0.2s_ease_both]"
          >
            {slides[current].sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://wa.me/919032514441" external variant="primary" className="text-base px-8 py-4">
              Order Now
            </Button>
            <Button href="/partners" variant="outline" className="text-base px-8 py-4">
              Partner With Us
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-all duration-300 ${
                  i === current
                    ? 'bg-[var(--color-primary)] w-6'
                    : 'bg-[var(--color-text-muted)]/30 hover:bg-[var(--color-text-muted)]/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
