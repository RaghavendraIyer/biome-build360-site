'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import type { NavLink } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { ProductsSubmenu } from './ProductsSubmenu';

interface DesktopNavProps {
  links: NavLink[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.desktop-nav-item')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Main navigation">
      {links.map((link) => (
        <div
          key={link.label}
          className="desktop-nav-item relative"
          onMouseEnter={() => {
            if (link.type === 'dropdown' || link.type === 'products') handleOpen(link.label);
          }}
          onMouseLeave={handleClose}
        >
          <Link
            href={link.href}
            className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline"
            onClick={(e) => {
              if (link.type === 'dropdown' || link.type === 'products') {
                e.preventDefault();
                setOpenDropdown(openDropdown === link.label ? null : link.label);
              }
            }}
          >
            {link.label}
            {(link.type === 'dropdown' || link.type === 'products') && (
              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform',
                  openDropdown === link.label && 'rotate-180'
                )}
              />
            )}
          </Link>

          {link.type === 'dropdown' && openDropdown === link.label && (
            <div className="absolute top-full left-0 -mt-2 pt-2 w-64">
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2">
                {link.children.map((child, idx) => (
                  <Link
                    key={idx}
                    href={child.href}
                    className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)] no-underline transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {link.type === 'products' && openDropdown === link.label && (
            <div
              className="absolute top-full left-0 -mt-2 pt-2 flex"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
              }}
              onMouseLeave={handleClose}
            >
              <ProductsSubmenu categories={link.categories} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
