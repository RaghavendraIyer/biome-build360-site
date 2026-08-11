import Image from 'next/image';
import { publicImageExists } from '@/lib/image-exists';

interface ProductLineCardProps {
  name: string;
  description: string;
  image?: string;
  chips?: string[];
}

export function ProductLineCard({ name, description, image, chips }: ProductLineCardProps) {
  const hasImage = image ? publicImageExists(image) : false;

  return (
    <div className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] overflow-hidden hover:shadow-md transition-all group">
      <div className="aspect-[4/3] bg-[var(--color-bg-surface-alt)] relative">
        {hasImage ? (
          <Image
            src={image!}
            alt={name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-serif text-2xl font-bold text-[var(--color-text-muted)]">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-sm font-bold text-[var(--color-text-main)] mb-1">{name}</h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
