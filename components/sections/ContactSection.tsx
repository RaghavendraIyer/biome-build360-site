export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-[var(--gutter)] bg-[var(--color-bg-surface)] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%)',
        }}
      />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)] mt-6">
              Let&apos;s Discuss{' '}
              <em className="not-italic text-[var(--color-primary)]">Your Project.</em>
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-5">
                <span className="text-2xl shrink-0 mt-0.5">📞</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-main)]">Phone / WhatsApp</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">+91 90325 14441</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-2">
                    Srikar Jaji : Founder · Mon&ndash;Sat 9am&ndash;7pm
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-2xl shrink-0 mt-0.5">📧</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-main)]">Email</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">info@build360.online</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-2">
                    AI Concierge replies in &lt;4 minutes
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-2xl shrink-0 mt-0.5">📍</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-main)]">Location</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">Hyderabad, Telangana</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-2">
                    Pan-India · Enquiries from across the country welcome
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="text-center bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] p-10 lg:p-12 shadow-sm"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-serif text-xl font-bold text-[var(--color-text-main)] mb-3 uppercase tracking-wide">
                Message Us on WhatsApp
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed max-w-sm mx-auto">
                Send your requirements and get a quote in under 4 hours. No forms, no sign-ups.
              </p>
              <a
                href="https://wa.me/919032514441?text=Hi%20Srikar%2C%20I%27d%20like%20to%20inquire%20about%20materials."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-[var(--color-primary)] text-white rounded-[var(--radius)] hover:bg-[var(--color-primary-hover)] transition-colors no-underline"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
