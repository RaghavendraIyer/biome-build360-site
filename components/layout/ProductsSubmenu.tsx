'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { ProductCategory } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface ProductsSubmenuProps {
  categories: ProductCategory[];
}

const hasGroups = (cat: ProductCategory) => (cat.groups?.length ?? 0) > 0;
const hasBrands = (cat: ProductCategory) => (cat.brands?.length ?? 0) > 0;
const hasChildren = (cat: ProductCategory) => hasGroups(cat) || hasBrands(cat);

export function ProductsSubmenu({ categories }: ProductsSubmenuProps) {
  const [flyoutCategory, setFlyoutCategory] = useState<string | null>(null);
  const [flyoutGroup, setFlyoutGroup] = useState<string | null>(null);

  const handleCategoryOpen = (label: string) => {
    setFlyoutCategory(label);
    setFlyoutGroup(null);
  };

  const active = categories.find(c => c.label === flyoutCategory);
  const activeGroup = active?.groups?.find(g => g.label === flyoutGroup);

  return (
    <>
      <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-56">
        {categories.map((cat, idx) => {
          const clickable = hasChildren(cat);
          return (
            <Link
              key={idx}
              href={cat.href}
              className={cn(
                'flex items-center justify-between px-4 py-2 text-sm no-underline transition-colors',
                clickable
                  ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)]'
                  : 'text-[var(--color-text-muted)] cursor-default pointer-events-none'
              )}
              onMouseEnter={() => clickable && handleCategoryOpen(cat.label)}
              onClick={(e) => {
                if (!clickable) e.preventDefault();
              }}
            >
              {cat.label}
              {clickable && (
                <ChevronRight size={14} className="text-[var(--color-text-muted)] shrink-0" />
              )}
            </Link>
          );
        })}
      </div>

      {active && hasGroups(active) && (
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-48 ml-2 self-start">
          <div className="px-4 py-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {active.label}
            </span>
          </div>
          {active.groups!.map((group, i) => (
            <Link
              key={i}
              href={group.href}
              className="flex items-center justify-between px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)] no-underline transition-colors"
              onMouseEnter={() => (group.brands?.length ?? 0) > 0 && setFlyoutGroup(group.label)}
            >
              {group.label}
              {(group.brands?.length ?? 0) > 0 && (
                <ChevronRight size={14} className="text-[var(--color-text-muted)] shrink-0" />
              )}
            </Link>
          ))}
        </div>
      )}

      {active && activeGroup && (
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-48 ml-2 self-start">
          <div className="px-4 py-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {activeGroup.label}
            </span>
          </div>
          {activeGroup.brands!.map((brand, i) => (
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

      {active && !hasGroups(active) && hasBrands(active) && (
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-48 ml-2 self-start">
          <div className="px-4 py-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {active.label}
            </span>
          </div>
          {active.brands!.map((brand, i) => (
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
