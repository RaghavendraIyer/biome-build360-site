import { existsSync } from 'fs';
import { join } from 'path';
import { publicImages } from '@/lib/public-images.generated';

export function publicImageExists(src: string): boolean {
  if (!src) return false;
  if (publicImages.has(src)) return true;

  // Dev fallback: the manifest is regenerated at build time, so images added
  // mid-session are still detected locally.
  try {
    const clean = src.startsWith('/') ? src.slice(1) : src;
    return existsSync(join(process.cwd(), 'public', clean));
  } catch {
    return false;
  }
}
