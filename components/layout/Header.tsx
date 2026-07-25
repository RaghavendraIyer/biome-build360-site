'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [flyoutCategory, setFlyoutCategory] = useState<string | null>(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flyoutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setFlyoutCategory(null);
    }, 150);
  };

  const handleFlyoutOpen = (label: string) => {
    if (flyoutTimeoutRef.current) clearTimeout(flyoutTimeoutRef.current);
    setFlyoutCategory(label);
  };

  const handleFlyoutClose = () => {
    flyoutTimeoutRef.current = setTimeout(() => setFlyoutCategory(null), 200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.desktop-nav-item')) {
        setOpenDropdown(null);
        setFlyoutCategory(null);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const renderDropdown = (link: (typeof navLinks)[number]) => (
    <div className="absolute top-full left-0 -mt-2 pt-2 flex">
      {link.label === 'Products' ? (
        <>
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-56">
            {link.children!.map((child, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleFlyoutOpen(child.label)}
                onMouseLeave={handleFlyoutClose}
              >
                <Link
                  href={child.href}
                  className={cn(
                    'flex items-center justify-between px-4 py-2 text-sm no-underline transition-colors',
                    child.brands && child.brands.length > 0
                      ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)]'
                      : 'text-[var(--color-text-muted)] cursor-default pointer-events-none'
                  )}
                  onClick={(e) => {
                    if (!child.brands || child.brands.length === 0) e.preventDefault();
                  }}
                >
                  {child.label}
                  {child.brands && child.brands.length > 0 && (
                    <ChevronRight size={14} className="text-[var(--color-text-muted)] shrink-0" />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {flyoutCategory && (() => {
            const category = link.children!.find(c => c.label === flyoutCategory);
            if (!category || !category.brands || category.brands.length === 0) return null;
            return (
              <div
                className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2 w-48 ml-2 self-start"
                onMouseEnter={() => handleFlyoutOpen(flyoutCategory)}
                onMouseLeave={handleFlyoutClose}
              >
                <div className="px-4 py-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {category.label}
                  </span>
                </div>
                {category.brands.map((brand, i) => (
                  <Link
                    key={i}
                    href={brand.href}
                    className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)] no-underline transition-colors"
                  >
                    {brand.label}
                  </Link>
                ))}
              </div>
            );
          })()}
        </>
      ) : (
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2">
          {link.children!.map((child, idx) => {
            if (child.type === 'section-header') {
              return (
                <div key={`hdr-${idx}`} className="px-4 py-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {child.label}
                  </span>
                </div>
              );
            }
            return (
              <Link
                key={`lnk-${idx}`}
                href={child.href}
                className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)] no-underline transition-colors"
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header
      className={cn(
        'fixed top-9 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-bg-app)]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto grid grid-cols-[auto_1fr_auto] gap-x-8 items-center px-[var(--gutter)] h-16 md:h-20">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl font-extrabold tracking-tight text-[var(--color-text-main)] no-underline"
        >
          Build<span className="text-[var(--color-primary)]">360</span>.Online
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="desktop-nav-item relative"
              onMouseEnter={() => handleOpen(link.label)}
              onMouseLeave={handleClose}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline"
                onClick={(e) => {
                  if (link.children) {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === link.label ? null : link.label);
                  }
                }}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={14}
                    className={cn(
                      'transition-transform',
                      openDropdown === link.label && 'rotate-180'
                    )}
                  />
                )}
              </Link>
              {link.children && openDropdown === link.label && renderDropdown(link)}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919032514441"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-main)] transition-colors no-underline"
          >
            <Phone size={16} />
            <span className="hidden xl:inline text-xs">+91 90325 14441</span>
          </a>
          <Link
            href="/partners"
            className="px-4 py-2 text-sm font-medium bg-[#1E293B] text-white rounded-[var(--radius)] hover:bg-[#0F172A] transition-colors no-underline"
          >
            Partner Signup
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer relative z-[51] justify-self-end"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-[var(--color-bg-app)] z-40 overflow-y-auto pt-16">
          <nav className="flex flex-col px-[var(--gutter)] py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] no-underline transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && link.label === 'Products' ? (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.children.map((child, idx) => (
                      <div key={idx}>
                        <button
                          className={cn(
                            'flex items-center justify-between w-full py-2 text-sm text-left no-underline transition-colors',
                            child.brands && child.brands.length > 0
                              ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                              : 'text-[var(--color-text-muted)] cursor-default'
                          )}
                          onClick={() => {
                            if (child.brands && child.brands.length > 0) {
                              setMobileExpandedCategory(
                                mobileExpandedCategory === child.label ? null : child.label
                              );
                            }
                          }}
                        >
                          {child.label}
                          {child.brands && child.brands.length > 0 && (
                            <ChevronRight
                              size={14}
                              className={cn(
                                'text-[var(--color-text-muted)] shrink-0 transition-transform',
                                mobileExpandedCategory === child.label && 'rotate-90'
                              )}
                            />
                          )}
                        </button>
                        {mobileExpandedCategory === child.label && child.brands && (
                          <div className="pl-4 space-y-1 pb-2">
                            {child.brands.map((brand, i) => (
                              <Link
                                key={i}
                                href={brand.href}
                                className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {brand.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : link.children && link.label !== 'Products' ? (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.children.map((child, idx) => (
                      <Link
                        key={`lnk-${idx}`}
                        href={child.href}
                        className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <hr className="my-4 border-[var(--color-border-light)]" />
            <Link
              href="/partners"
              className="block mt-2 py-3 px-4 text-center text-base font-medium bg-[#1E293B] text-white rounded-[var(--radius)] hover:bg-[#0F172A] no-underline transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Partner Signup
            </Link>
            <a
              href="https://wa.me/919032514441"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] no-underline transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={16} />
              +91 90325 14441
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
