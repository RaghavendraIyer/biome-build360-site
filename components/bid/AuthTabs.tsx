'use client';

import { useState } from 'react';

interface AuthTabsProps {
  onLogin: () => void;
}

export function AuthTabs({ onLogin }: AuthTabsProps) {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <div className="max-w-md mx-auto bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] overflow-hidden shadow-md">
      <div className="flex border-b border-[var(--color-border-light)]">
        {(['login', 'register'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-4 text-center text-xs font-mono uppercase tracking-wider transition-colors ${
              tab === t
                ? 'bg-[var(--color-bg-surface)] text-[var(--color-primary)] shadow-[inset_0_-2px_0_var(--color-primary)]'
                : 'bg-[var(--color-bg-surface-alt)] text-[var(--color-text-muted)]'
            }`}
          >
            {t === 'login' ? 'Log In' : 'Register'}
          </button>
        ))}
      </div>
      <div className="p-8">
        {tab === 'login' ? (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-[var(--color-text-muted)] block mb-1">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]" />
            </div>
            <button
              onClick={onLogin}
              className="w-full py-3 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Login to Dashboard
            </button>
            <p className="text-[10px] text-[var(--color-text-muted)] text-center">
              This is a preview. Enter any phone number to access the demo dashboard.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-[var(--color-text-muted)] block mb-1">Company Name</label>
              <input type="text" placeholder="Your Company" className="w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]" />
            </div>
            <div>
              <label className="text-xs text-[var(--color-text-muted)] block mb-1">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]" />
            </div>
            <button
              onClick={onLogin}
              className="w-full py-3 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Register & Enter Demo
            </button>
          </div>
        )}
      </div>
      <div className="p-4 text-center border-t border-[var(--color-border-light)]">
        <p className="text-[10px] text-[var(--color-text-muted)]">
          This is a preview environment. No data is stored.
        </p>
      </div>
    </div>
  );
}
