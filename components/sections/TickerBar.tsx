'use client';

import { useEffect, useRef } from 'react';

const items = [
  { type: 'announcement', text: 'Now serving 28 states & UTs across India' },
  { type: 'price', brand: 'UltraTech OPC 53', price: 360, unit: 'bag' },
  { type: 'announcement', text: 'New : UltraTech Tilefixo Sumo CT Plus White now in stock' },
  { type: 'price', brand: 'Ambuja PPC', price: 345, unit: 'bag' },
  { type: 'announcement', text: 'AI-powered RFQ generator : upload handwritten notes or BOQs' },
  { type: 'price', brand: 'Tata Tiscon 550SD', price: 64, unit: 'kg' },
  { type: 'announcement', text: 'B2B bulk pricing available on all tile adhesives & grouts' },
  { type: 'price', brand: 'JSW Neo Steel', price: 61, unit: 'kg' },
  { type: 'announcement', text: 'Bid platform live : vendors compete on your RFQs' },
  { type: 'price', brand: 'Tilefixo Sumo CT', price: 290, unit: 'bag' },
  { type: 'announcement', text: 'Pan-India delivery : metro cities to Tier-2 towns' },
  { type: 'price', brand: 'MYK Laticrete 335', price: 820, unit: 'bag' },
];

function TickerItem({ item }: { item: typeof items[number] }) {
  if (item.type === 'announcement') {
    return (
      <span className="inline-flex items-center gap-3 px-6 whitespace-nowrap text-xs text-[var(--color-text-secondary)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-pulse shrink-0" />
        {item.text}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-3 px-6 whitespace-nowrap text-xs">
      <span className="font-medium text-[var(--color-text-main)]">{item.brand}</span>
      <span className="font-mono text-[var(--color-primary)]">₹{item.price}/{item.unit}</span>
    </span>
  );
}

export function TickerBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let paused = false;
    const speed = 0.5;

    const animate = () => {
      if (!paused) {
        x -= speed;
        const halfway = track.scrollWidth / 2;
        if (Math.abs(x) >= halfway) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    const wrap = track.parentElement;
    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    if (wrap) {
      wrap.addEventListener('mouseenter', onEnter);
      wrap.addEventListener('mouseleave', onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (wrap) {
        wrap.removeEventListener('mouseenter', onEnter);
        wrap.removeEventListener('mouseleave', onLeave);
      }
    };
  }, []);

  return (
    <div className="h-[52px] flex items-center border-t border-[var(--color-primary-18)] border-b border-[var(--color-primary-10)] bg-gradient-to-r from-[rgba(222,90,63,0.03)] via-[var(--color-bg-surface)] to-[rgba(222,90,63,0.03)] overflow-hidden">
      <div className="flex items-center gap-2 shrink-0 h-full px-6 bg-[var(--color-bg-surface)] border-r border-[var(--color-primary-18)] z-[2]">
        <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse shrink-0" />
        <span className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--color-success)]">
          Live Rates
        </span>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div ref={trackRef} className="flex items-center h-full" style={{ willChange: 'transform' }}>
          {[...items, ...items].map((item, i) => (
            <TickerItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
