'use client';

import { useState } from 'react';

interface FilterBarProps {
  onFilter: (brand: string, category: string) => void;
}

export function FilterBar({ onFilter }: FilterBarProps) {
  const [brand, setBrand] = useState('all');
  const [category, setCategory] = useState('all');

  const handleChange = (newBrand: string, newCategory: string) => {
    setBrand(newBrand);
    setCategory(newCategory);
    onFilter(newBrand, newCategory);
  };

  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] p-6 mb-10">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Brand</label>
          <select
            value={brand}
            onChange={(e) => handleChange(e.target.value, category)}
            className="bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-3 py-2 text-xs text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]"
          >
            <option value="all">All Brands</option>
            <option value="ultratech">UltraTech Tilefixo</option>
            <option value="myk">MYK Laticrete</option>
            <option value="weber">Saint Gobain Weber</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Category</label>
          <select
            value={category}
            onChange={(e) => handleChange(brand, e.target.value)}
            className="bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-3 py-2 text-xs text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]"
          >
            <option value="all">All Categories</option>
            <option value="tile-adhesive">Tile Adhesive</option>
            <option value="epoxy-grout">Epoxy Grout</option>
            <option value="cement-grout">Cement Grout</option>
            <option value="specialty">Specialty</option>
            <option value="cleaner">Cleaner</option>
          </select>
        </div>
      </div>
    </div>
  );
}
