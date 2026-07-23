'use client';

import { useRef, useState } from 'react';

export function AiRfqUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) setFiles(Array.from(e.dataTransfer.files));
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  return (
    <section className="py-20 md:py-28 px-[var(--gutter)] bg-gradient-to-br from-[rgba(222,90,63,0.04)] to-transparent border-t border-[var(--color-primary-18)] border-b border-[var(--color-primary-18)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="bg-gradient-to-br from-[rgba(222,90,63,0.08)] to-[rgba(30,41,59,0.04)] border border-[var(--color-primary-18)] rounded-[var(--radius)] p-10 md:p-12 text-center relative overflow-hidden order-2 lg:order-1">
            <div className="w-[140px] h-[260px] md:w-[180px] md:h-[320px] mx-auto mb-6 bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-light)] rounded-3xl relative shadow-lg flex items-center justify-center text-5xl overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[var(--color-text-main)] rounded" />
              <div className="absolute left-[10%] right-[10%] h-0.5 bg-[var(--color-primary)] rounded animate-[scanAnim_2s_ease-in-out_infinite] shadow-[0_0_12px_var(--color-primary-50)]" />
              🤖
            </div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
              AI scans your BOQ, drawings &amp; images
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">AI-Powered RFQ</span>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)] mb-4">
              Upload Your BOQ.<br />
              <em className="not-italic text-[var(--color-primary)]">Get Quotes in Minutes.</em>
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Drop your Bill of Quantities, drawings, or material list. Our AI extracts every line item and generates a ready-to-share RFQ — no manual data entry required.
            </p>

            <div
              role="button"
              tabIndex={0}
              onClick={() => inputRef.current?.click()}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-[var(--color-primary-18)] rounded-[var(--radius)] p-8 text-center cursor-pointer hover:border-[var(--color-primary)] hover:bg-[rgba(222,90,63,0.04)] transition-colors"
            >
              <span className="text-4xl block mb-3">📄</span>
              <span className="block font-serif text-sm font-semibold text-[var(--color-text-main)] mb-1">
                {files.length > 0 ? `${files.length} file(s) selected` : 'Tap to upload or drag & drop'}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                BOQ (XLS, PDF) · Drawings · Images
              </span>
              <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
                {['.xls', '.xlsx', '.pdf', '.png', '.jpg', '.dwg'].map((fmt) => (
                  <span key={fmt} className="px-2.5 py-1 text-[10px] font-mono border border-[var(--color-primary-18)] text-[var(--color-text-muted)] rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                    {fmt}
                  </span>
                ))}
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*,.pdf,.xls,.xlsx"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <button
              disabled={files.length === 0}
              onClick={() => window.open('https://wa.me/919032514441?text=Hi%20Srikar%2C%20I%27ve%20uploaded%20my%20BOQ%20and%20would%20like%20a%20quote.', '_blank')}
              className="mt-5 w-full px-6 py-3.5 text-sm font-medium bg-[var(--color-primary)] text-white rounded-[var(--radius)] hover:bg-[var(--color-primary-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors border-0"
            >
              {files.length > 0 ? `Generate RFQ (${files.length} files)` : 'Upload a file to get started'}
            </button>

            {files.length > 0 && (
              <div className="mt-4 space-y-1.5">
                {Array.from(files).map((f, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-surface-alt)] px-3 py-1.5 rounded">
                    <span className="truncate max-w-[240px]">{f.name}</span>
                    <button
                      onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                      className="text-[var(--color-primary)] hover:underline ml-2 border-0 bg-transparent cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
