import Link from 'next/link';
import { Mail } from 'lucide-react';

export function UtilityBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] h-9 bg-[var(--color-bg-surface-alt)] border-b border-[var(--color-border-light)] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-[var(--gutter)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href="mailto:info@build360.online"
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline"
          >
            <Mail size={12} />
            info@build360.online
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/build360.online/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline" title="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://www.facebook.com/build360online/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline" title="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/build360-online/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.youtube.com/@build360online" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline" title="YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
          <a href="https://wa.me/919032514441" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors no-underline" title="WhatsApp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
          <span className="w-px h-3 bg-[var(--color-border-light)]" />
          <Link
            href="/bid"
            className="text-[9px] font-mono uppercase tracking-[0.12em] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] no-underline transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
