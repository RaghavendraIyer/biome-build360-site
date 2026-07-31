'use client';

import posthog from 'posthog-js';

export function AiRfqUpload() {
  return (
    <section className="py-16 md:py-20 px-[var(--gutter)] relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A08 0%, #0A0A0A 50%, #1A0A08 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BC4A3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            {/* WhatsApp Business Mockup */}
            <div className="mx-auto max-w-[340px] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border-light)] bg-white">
              {/* Header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  B
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-semibold truncate">Build360 RFQ</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" className="shrink-0">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-[#25D366] text-[10px] font-medium">Usually replies in under 4 minutes</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="shrink-0 opacity-70">
                  <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                </svg>
              </div>

              {/* Chat messages */}
              <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[380px] relative">
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 max-w-[80%] shadow-xs">
                    <p className="text-[13px] text-[#303030] leading-relaxed">
                      Hi, I need quotes for my project. Can you help?
                    </p>
                    <span className="text-[9px] text-[#667781] mt-1 block text-right">10:32 AM</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#D9FDD3] rounded-lg rounded-br-none px-3.5 py-2.5 max-w-[80%] shadow-xs">
                    <p className="text-[13px] text-[#303030] leading-relaxed">
                      Absolutely! Share your BOQ or material list and I&apos;ll get you competitive quotes from verified suppliers.
                    </p>
                    <span className="text-[9px] text-[#667781] mt-1 block text-right">10:32 AM</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 max-w-[80%] shadow-xs">
                    <p className="text-[13px] text-[#303030] leading-relaxed">
                      I have a BOQ in Excel. Should I send it here?
                    </p>
                    <span className="text-[9px] text-[#667781] mt-1 block text-right">10:33 AM</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#D9FDD3] rounded-lg rounded-br-none px-3.5 py-2.5 max-w-[80%] shadow-xs">
                    <p className="text-[13px] text-[#303030] leading-relaxed">
                      Yes, send it right here. Our AI will extract every line item and generate a ready-to-share RFQ in minutes. No manual data entry required ✨
                    </p>
                    <span className="text-[9px] text-[#667781] mt-1 block text-right">10:33 AM</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 max-w-[75%] shadow-xs">
                    <p className="text-[13px] text-[#303030] leading-relaxed">
                      Great! Sending the file now. How fast can I get pricing?
                    </p>
                    <span className="text-[9px] text-[#667781] mt-1 block text-right">10:34 AM</span>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-3 max-w-[60%] shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#667781] rounded-full animate-bounce" style={{animationDelay:'0ms'}} />
                    <span className="w-1.5 h-1.5 bg-[#667781] rounded-full animate-bounce" style={{animationDelay:'150ms'}} />
                    <span className="w-1.5 h-1.5 bg-[#667781] rounded-full animate-bounce" style={{animationDelay:'300ms'}} />
                  </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ECE5DD] to-transparent pointer-events-none" />
              </div>
            </div>

            <p className="text-center text-[11px] font-mono uppercase tracking-wider text-white/40 mt-4">
              Ready to use RFQ via WhatsApp
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-white/60 mb-3 block">AI-Powered RFQ</span>
            <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white mb-4">
              Upload Your BOQ.<br />
              <em className="not-italic text-[var(--color-primary)]">Get Quotes in Minutes.</em>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Drop your Bill of Quantities, drawings, or material list. Our AI extracts every line item and generates a ready-to-share RFQ — no manual data entry required.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919032514441?text=Hi%20Srikar%2C%20I%27d%20like%20to%20upload%20my%20BOQ%20and%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('whatsapp_rfq_cta_clicked', { section: 'ai_rfq_upload' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#25D366] text-white rounded-[var(--radius)] hover:bg-[#1DA851] transition-colors no-underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start RFQ on WhatsApp
              </a>
              <p className="text-[11px] text-white/40 text-center">
                Send your BOQ, drawings, or material list. AI extracts line items &amp; generates RFQ instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
