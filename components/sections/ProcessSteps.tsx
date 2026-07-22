import { processSteps } from '@/data/metrics';

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 px-[var(--gutter)]"
      style={{
        background: 'linear-gradient(135deg, #1A0A08 0%, #0A0A0A 50%, #1A0A08 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">
          Procurement Process
        </span>
        <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-14">
          Making Procurement{' '}
          <em className="not-italic text-[var(--color-primary)]">Easier.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-[var(--radius)] text-left"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span className="font-serif text-2xl font-extrabold text-[var(--color-primary)] block mb-3">
                {String(item.step).padStart(2, '0')}
              </span>
              <h4 className="font-serif text-base font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
