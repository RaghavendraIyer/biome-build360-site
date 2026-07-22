import { cn } from '@/lib/utils';

interface SectionTitleProps {
  label?: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionTitle({ label, title, lead, align = 'center', className }: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', 'max-w-2xl', align === 'center' && 'mx-auto', className)}>
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-sm md:text-[15px] text-[var(--color-text-secondary)] leading-relaxed font-light">
          {lead}
        </p>
      )}
    </div>
  );
}
