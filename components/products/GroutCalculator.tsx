'use client';

import { useState } from 'react';

type GroutType = 'cement' | 'epoxy';

export function GroutCalculator() {
  const [length, setLength] = useState(60);
  const [width, setWidth] = useState(60);
  const [jointWidth, setJointWidth] = useState(3);
  const [depth, setDepth] = useState(10);
  const [area, setArea] = useState(10);
  const [type, setType] = useState<GroutType>('cement');

  const tileArea = (length / 1000) * (width / 1000);
  const tilesPerSqm = tileArea > 0 ? 1 / tileArea : 0;
  const jointLengthPerSqm = tilesPerSqm * (2 * ((length + width) / 1000));
  const groutVolumePerSqm = jointLengthPerSqm * (jointWidth / 1000) * (depth / 1000);
  const groutVolume = groutVolumePerSqm * area;
  const density = type === 'cement' ? 1.5 : 1.8;
  const weightKg = groutVolume * density * 1000;
  const packSize = type === 'cement' ? 20 : 5;
  const packsNeeded = Math.ceil(weightKg / packSize);

  return (
    <div className="max-w-lg mx-auto bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] p-6 md:p-8 text-left">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {([
          ['Tile Length (cm)', length, setLength, 60],
          ['Tile Width (cm)', width, setWidth, 60],
          ['Joint Width (mm)', jointWidth, setJointWidth, 3],
          ['Joint Depth (mm)', depth, setDepth, 10],
          ['Total Area (m²)', area, setArea, 10],
        ] as const).map(([label, val, set, def]) => (
          <div key={label}>
            <label className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">{label}</label>
            <input
              type="number"
              value={val}
              onChange={(e) => set(Number(e.target.value) || 0)}
              className="w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-3 py-2 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]"
            />
          </div>
        ))}
        <div>
          <label className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">Grout Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as GroutType)}
            className="w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-3 py-2 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]"
          >
            <option value="cement">Cement Grout</option>
            <option value="epoxy">Epoxy Grout</option>
          </select>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-[var(--color-primary-10)]">
        <div className="text-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Required</span>
          <p className="font-serif text-2xl font-extrabold text-[var(--color-primary)]">
            {weightKg.toFixed(1)} kg
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            {packsNeeded} × {type === 'cement' ? '20kg' : '5kg'} pack{type === 'cement' ? 's' : 's'}
          </p>
        </div>
      </div>

      <p className="text-[10px] text-[var(--color-text-muted)] mt-4 text-center">
        Estimates are approximate. Actual consumption may vary based on application technique and substrate condition.
      </p>
    </div>
  );
}
