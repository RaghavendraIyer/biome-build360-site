'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import type { NavLink, ProductsNavLink } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  links: NavLink[];
  onClose: () => void;
}

export function MobileNav({ links, onClose }: MobileNavProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const renderChildren = (link: NavLink) => {
    if (link.type === 'products') {
      return (
        <div className="pl-4 pb-2 space-y-1">
          {link.categories.map((cat, idx) => {
            const hasCatChildren = (cat.brands?.length ?? 0) > 0 || (cat.groups?.length ?? 0) > 0;
            return (
              <div key={idx}>
                <button
                  className={cn(
                    'flex items-center justify-between w-full py-2 text-sm text-left no-underline transition-colors',
                    hasCatChildren
                      ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                      : 'text-[var(--color-text-muted)] cursor-default'
                  )}
                  onClick={() => {
                    if (hasCatChildren) {
                      setExpandedCategory(expandedCategory === cat.label ? null : cat.label);
                    }
                  }}
                >
                  {cat.label}
                  {hasCatChildren && (
                    <ChevronRight
                      size={14}
                      className={cn(
                        'text-[var(--color-text-muted)] shrink-0 transition-transform',
                        expandedCategory === cat.label && 'rotate-90'
                      )}
                    />
                  )}
                </button>
                {expandedCategory === cat.label && hasCatChildren && (
                  <div className="pl-4 space-y-1 pb-2">
                    {cat.brands && cat.brands.length > 0 && (
                      cat.brands.map((brand, i) => (
                        <Link
                          key={i}
                          href={brand.href}
                          className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
                          onClick={onClose}
                        >
                          {brand.label}
                        </Link>
                      ))
                    )}
                    {cat.groups && cat.groups.length > 0 && (
                      cat.groups.map((group, gi) => {
                        const hasGroupBrands = (group.brands?.length ?? 0) > 0;
                        return (
                          <div key={gi}>
                            {hasGroupBrands ? (
                              <button
                                className="flex items-center justify-between w-full py-2 text-sm text-left text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] no-underline transition-colors"
                                onClick={() =>
                                  setExpandedGroup(expandedGroup === group.label ? null : group.label)
                                }
                              >
                                {group.label}
                                <ChevronRight
                                  size={14}
                                  className={cn(
                                    'text-[var(--color-text-muted)] shrink-0 transition-transform',
                                    expandedGroup === group.label && 'rotate-90'
                                  )}
                                />
                              </button>
                            ) : (
                              <Link
                                href={group.href}
                                className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
                                onClick={onClose}
                              >
                                {group.label}
                              </Link>
                            )}
                            {hasGroupBrands && expandedGroup === group.label && (
                              <div className="pl-4 space-y-1 pb-2">
                                {group.brands!.map((brand, i) => (
                                  <Link
                                    key={i}
                                    href={brand.href}
                                    className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
                                    onClick={onClose}
                                  >
                                    {brand.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (link.type === 'dropdown') {
      return (
        <div className="pl-4 pb-2 space-y-1">
          {link.children.map((child, idx) => (
            <Link
              key={idx}
              href={child.href}
              className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="lg:hidden fixed inset-0 top-0 bg-[var(--color-bg-app)] z-40 overflow-y-auto pt-16">
      <nav className="flex flex-col px-[var(--gutter)] py-6" aria-label="Mobile navigation">
        {links.map((link) => (
          <div key={link.label}>
            <Link
              href={link.href}
              className="block py-3 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] no-underline transition-colors"
              onClick={(e) => {
                if (link.type === 'dropdown' || link.type === 'products') {
                  e.preventDefault();
                }
                onClose();
              }}
            >
              {link.label}
            </Link>
            {(link.type === 'products' || link.type === 'dropdown') && renderChildren(link)}
          </div>
        ))}
        <hr className="my-4 border-[var(--color-border-light)]" />
        <Link
          href="/partners"
          className="block mt-2 py-3 px-4 text-center text-base font-medium bg-[#1E293B] text-white rounded-[var(--radius)] hover:bg-[#0F172A] no-underline transition-colors"
          onClick={onClose}
        >
          Partner Signup
        </Link>
        <a
          href="https://wa.me/919032514441"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-3 py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] no-underline transition-colors"
          onClick={onClose}
        >
          <Phone size={16} />
          +91 90325 14441
        </a>
      </nav>
    </div>
  );
}
