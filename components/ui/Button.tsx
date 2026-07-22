import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost' | 'solid-primary';
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  variant = 'primary',
  href,
  external,
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-[var(--radius)] transition-all no-underline cursor-pointer';

  const variants: Record<string, string> = {
    primary:
      'bg-[var(--color-whatsapp)] text-white hover:bg-[var(--color-whatsapp-hover)]',
    outline:
      'border border-[var(--color-primary-18)] text-[var(--color-primary)] hover:bg-[var(--color-primary-10)]',
    ghost:
      'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]',
    'solid-primary':
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
