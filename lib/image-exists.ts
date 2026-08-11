import { existsSync } from 'fs';
import { join } from 'path';

export function publicImageExists(src: string): boolean {
  if (!src) return false;
  const clean = src.startsWith('/') ? src.slice(1) : src;
  return existsSync(join(process.cwd(), 'public', clean));
}
