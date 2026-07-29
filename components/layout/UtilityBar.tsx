import Link from 'next/link';
import { Mail } from 'lucide-react';

export function UtilityBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] h-9 bg-[var(--color-primary)] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-[var(--gutter)] flex items-center justify-between">
        <a
          href="mailto:info@build360.online"
          className="flex items-center gap-1.5 text-xs text-white/85 hover:text-white transition-colors no-underline"
        >
          <Mail size={12} />
          info@build360.online
        </a>

        <div className="flex items-center gap-3 text-xs text-white/85">
          <div className="flex items-center gap-3">
            <span className="w-px h-4 bg-white/25 rounded-full" />
            <Link
              href="/bid"
              className="text-white/80 hover:text-white no-underline transition-colors"
            >
              Login
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-px h-4 bg-white/25 rounded-full" />
            <Link
              href="/partners"
              className="text-white/80 hover:text-white no-underline transition-colors"
            >
              Partner With Us
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-px h-4 bg-white/25 rounded-full" />
            <span className="text-[10px] text-white/50 uppercase tracking-wider">Follow</span>
            <a href="https://www.instagram.com/build360.online/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex" title="Instagram">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/build360online/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex" title="Facebook">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/build360-online/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex" title="LinkedIn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
