'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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

        <DesktopNav links={navLinks} />

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
        <MobileNav links={navLinks} onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
