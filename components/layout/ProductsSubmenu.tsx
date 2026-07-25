'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { ProductCategory } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface ProductsSubmenuProps {
  categories: ProductCategory[];
}

export function ProductsSubmenu({ categories }: ProductsSubmenuProps) {
  const [flyoutCategory, setFlyoutCategory] = useState<string | null>(null);
  const flyoutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFlyoutOpen = (label: string) => {
    if (flyoutTimeoutRef.current) clearTimeout(flyoutTimeoutRef.current);
    setFlyoutCategory(label);
  };

  const handleFlyoutClose = () => {
    flyoutTimeoutRef.current = setTimeout(() => setFlyoutCategory(null), 200);
  };

  const active = categories.find(c => c.label === flyoutCategory);

  return (
    <>
      <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-56">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => handleFlyoutOpen(cat.label)}
            onMouseLeave={handleFlyoutClose}
          >
            <Link
              href={cat.href}
              className={cn(
                'flex items-center justify-between px-4 py-2 text-sm no-underline transition-colors',
                cat.brands.length > 0
                  ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)]'
                  : 'text-[var(--color-text-muted)] cursor-default pointer-events-none'
              )}
              onClick={(e) => {
                if (cat.brands.length === 0) e.preventDefault();
              }}
            >
              {cat.label}
              {cat.brands.length > 0 && (
                <ChevronRight size={14} className="text-[var(--color-text-muted)] shrink-0" />
              )}
            </Link>
          </div>
        ))}
      </div>

      {flyoutCategory && active && active.brands.length > 0 && (
        <div
          className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-48 ml-2 self-start"
          onMouseEnter={() => handleFlyoutOpen(flyoutCategory)}
          onMouseLeave={handleFlyoutClose}
        >
          <div className="px-4 py-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {active.label}
            </span>
          </div>
          {active.brands.map((brand, i) => (
            <Link
              key={i}
              href={brand.href}
              className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)] no-underline transition-colors"
            >
              {brand.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
