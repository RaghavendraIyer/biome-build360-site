'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
      if (!target.closest('.desktop-nav-item')) setOpenDropdown(null);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

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
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 -mt-2 pt-2 w-56">
                  <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] shadow-lg py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-10)] no-underline transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919032514441"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[var(--color-whatsapp)] text-white rounded-full hover:bg-[var(--color-whatsapp-hover)] transition-colors no-underline shadow-sm"
          >
            <Phone size={16} />
            <span className="hidden xl:inline text-xs">+91 90325 14441</span>
          </a>
          <Link
            href="/bid"
            className="px-4 py-2 text-sm font-medium border border-[var(--color-primary-18)] text-[var(--color-primary)] rounded-[var(--radius)] hover:bg-[var(--color-primary-10)] transition-colors no-underline"
          >
            Login
          </Link>
          <Link
            href="/partners"
            className="px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded-[var(--radius)] hover:bg-[var(--color-primary-hover)] transition-colors no-underline"
          >
            Partner Signup
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer relative z-[51]"
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
                {link.children && (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="my-4 border-[var(--color-border-light)]" />
            <Link
              href="/bid"
              className="block py-3 text-base font-medium text-[var(--color-primary)] no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/partners"
              className="block mt-2 py-3 px-4 text-center text-base font-medium bg-[var(--color-primary)] text-white rounded-[var(--radius)] no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Partner Signup
            </Link>
            <a
              href="https://wa.me/919032514441"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 py-3 text-sm text-[var(--color-whatsapp)] no-underline"
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
