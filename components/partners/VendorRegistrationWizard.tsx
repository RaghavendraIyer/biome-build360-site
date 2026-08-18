'use client';

import { useState, useCallback } from 'react';
import posthog from 'posthog-js';
import { TurnstileWidget } from '@/components/shared/TurnstileWidget';

const SITE_KEY = '0x4AAAAAAD8BznFFwtYj9ED9';
const WHATSAPP = 'https://wa.me/919032514441';

const PRODUCT_CATEGORIES = [
  'Cement & Concrete',
  'Steel & TMT Bars',
  'Blocks & Bricks',
  'Tile Adhesives & Grouts',
  'Waterproofing & Sealants',
  'Plumbing & Sanitaryware',
  'Finishing Supplies',
  'Furniture & Interiors',
  'Water Treatment Solutions',
  'Power Backups & Gensets',
];

interface VendorForm {
  company: string;
  contact_person: string;
  phone: string;
  email: string;
  pincodes: string;
  product_categories: string[];
  brand_affiliations: string;
  gstin: string;
  pan: string;
  udyam: string;
  bank_verified: boolean;
  bis_cert: boolean;
  iso_9001: boolean;
  spcb_consent: boolean;
  eway_bill: boolean;
  legal_metrology: boolean;
  dpdp_consent: boolean;
  esign_date: string;
}

const initialForm: VendorForm = {
  company: '',
  contact_person: '',
  phone: '',
  email: '',
  pincodes: '',
  product_categories: [],
  brand_affiliations: '',
  gstin: '',
  pan: '',
  udyam: '',
  bank_verified: false,
  bis_cert: false,
  iso_9001: false,
  spcb_consent: false,
  eway_bill: false,
  legal_metrology: false,
  dpdp_consent: false,
  esign_date: '',
};

const GSTIN_RE = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const UDYAM_RE = /^UDYAM-[A-Z]{2}-\d{2}-\d{7}$/;

interface VendorRegistrationWizardProps {
  onComplete?: () => void;
}

export function VendorRegistrationWizard({ onComplete }: VendorRegistrationWizardProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<VendorForm>(initialForm);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const set = useCallback(<K extends keyof VendorForm>(key: K, value: VendorForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }, []);

  const toggleCategory = (cat: string) => {
    setForm((f) => ({
      ...f,
      product_categories: f.product_categories.includes(cat)
        ? f.product_categories.filter((c) => c !== cat)
        : [...f.product_categories, cat],
    }));
    setError(null);
  };

  const validateStep1 = useCallback((): string | null => {
    if (!form.company.trim()) return 'Company name is required';
    if (!form.contact_person.trim()) return 'Contact person is required';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10))) return 'Enter a valid 10-digit Indian mobile number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email address';
    const pincodes = form.pincodes.split(',').map((p) => p.trim()).filter(Boolean);
    if (pincodes.length === 0) return 'At least one service pincode is required';
    if (pincodes.some((p) => !/^\d{6}$/.test(p))) return 'Pincodes must be 6-digit numbers, comma separated';
    if (form.product_categories.length === 0) return 'Select at least one product category';
    return null;
  }, [form.company, form.contact_person, form.phone, form.email, form.pincodes, form.product_categories]);

  const validateStep2 = useCallback((): string | null => {
    if (form.gstin && !GSTIN_RE.test(form.gstin.trim().toUpperCase())) return 'GSTIN looks invalid — expected 15 characters (e.g. 36ABCDE1234F1Z5)';
    if (form.pan && !PAN_RE.test(form.pan.trim().toUpperCase())) return 'PAN looks invalid — expected 10 characters (e.g. ABCDE1234F)';
    if (form.udyam && !UDYAM_RE.test(form.udyam.trim().toUpperCase())) return 'Udyam number looks invalid (e.g. UDYAM-AP-00-0000000)';
    return null;
  }, [form.gstin, form.pan, form.udyam]);

  const goNext = () => {
    const v = validateStep1();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    setStep(2);
  };

  const goBack = () => {
    setError(null);
    setStep(1);
  };

  const handleSubmit = useCallback(async () => {
    setError(null);
    const v = validateStep2();
    if (v) {
      setError(v);
      return;
    }
    if (!turnstileToken) {
      setError('Please complete the security check');
      return;
    }

    setSubmitting(true);
    try {
      const pincodes = form.pincodes.split(',').map((p) => p.trim()).filter(Boolean);
      const payload = {
        ...form,
        pincodes,
        source: 'vendor-registration',
        lead_id: `vendor-${Date.now()}`,
        esign_date: form.esign_date || new Date().toISOString().slice(0, 10),
      };

      const resp = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await resp.json();

      if (result.success) {
        posthog.capture('vendor_registration_submitted', {
          company: form.company,
          categories: form.product_categories,
          source: 'vendor-registration',
        });
        setDone(true);
        onComplete?.();
      } else {
        posthog.capture('vendor_registration_failed', { company: form.company });
        setError('We could not submit your registration right now. Please WhatsApp us directly and our team will help.');
      }
    } catch {
      posthog.capture('vendor_registration_failed', { company: form.company });
      setError('We could not submit your registration right now. Please WhatsApp us directly and our team will help.');
    } finally {
      setSubmitting(false);
    }
  }, [form, turnstileToken, onComplete, validateStep2]);

  const inputCls =
    'w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]';
  const labelCls = 'text-xs text-[var(--color-text-muted)] block mb-1.5';

  if (done) {
    return (
      <div className="max-w-2xl mx-auto bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] p-8 md:p-10 text-center shadow-md">
        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-10)] flex items-center justify-center mx-auto mb-5 text-2xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-extrabold text-[var(--color-text-main)] mb-3">
          Registration Received
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed mb-8">
          Thank you, {form.company}. Our team will reach out within{' '}
          <strong className="text-[var(--color-text-main)]">48 hours</strong> to verify your GSTIN, PAN, Udyam, and
          bank details, and complete your onboarding. Meanwhile, explore live RFQs on the Bid board.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/bid"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-primary)] text-white rounded-[var(--radius)] hover:bg-[var(--color-primary-hover)] transition-colors no-underline"
          >
            Explore Live RFQs
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-whatsapp)] text-white rounded-[var(--radius)] hover:bg-[var(--color-whatsapp-hover)] transition-colors no-underline"
          >
            WhatsApp Our Team
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] overflow-hidden shadow-md">
      <div className="flex border-b border-[var(--color-border-light)]">
        {[
          { n: 1, label: 'Company & Contact' },
          { n: 2, label: 'Compliance & Statutory' },
        ].map((s) => (
          <div
            key={s.n}
            className={`flex-1 py-4 text-center text-xs font-mono uppercase tracking-wider ${
              step >= s.n
                ? 'bg-[var(--color-bg-surface)] text-[var(--color-primary)] shadow-[inset_0_-2px_0_var(--color-primary)]'
                : 'bg-[var(--color-bg-surface-alt)] text-[var(--color-text-muted)]'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] ${step > s.n ? 'bg-[var(--color-primary)] text-white' : 'border border-current'}`}>
                {step > s.n ? '✓' : s.n}
              </span>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="p-8">
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Company Name *</label>
              <input type="text" value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Legal company name (as per GSTIN)" className={inputCls} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Contact Person *</label>
                <input type="text" value={form.contact_person} onChange={(e) => set('contact_person', e.target.value)} placeholder="Full name" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Phone Number *</label>
                <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="10-digit mobile" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Email</label>
              <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@company.com" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Service Pincodes *</label>
              <input type="text" value={form.pincodes} onChange={(e) => set('pincodes', e.target.value)} placeholder="e.g. 500081, 500032, 500070" className={inputCls} />
              <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Comma-separated 6-digit pincodes you can deliver to.</p>
            </div>
            <div>
              <label className={labelCls}>Product Categories *</label>
              <div className="flex flex-wrap gap-2">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-full border transition-colors ${
                      form.product_categories.includes(cat)
                        ? 'bg-[var(--color-primary-10)] text-[var(--color-primary)] border-[var(--color-primary-18)]'
                        : 'bg-[var(--color-bg-surface-alt)] text-[var(--color-text-secondary)] border-[var(--color-border-light)] hover:border-[var(--color-primary-18)]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={labelCls}>Brand Affiliations</label>
              <input type="text" value={form.brand_affiliations} onChange={(e) => set('brand_affiliations', e.target.value)} placeholder="e.g. UltraTech, MYK Laticrete (comma separated)" className={inputCls} />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pb-2 border-b border-[var(--color-border-light)]">
              We verify these before you go live as an Active vendor: GSTIN & PAN validation, Udyam/MSME registration,
              bank penny-drop test, BIS/ISO/SPCB certification as applicable, and your digital agreement via Aadhaar eSign.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>GSTIN</label>
                <input type="text" value={form.gstin} onChange={(e) => set('gstin', e.target.value.toUpperCase())} placeholder="36ABCDE1234F1Z5" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>PAN</label>
                <input type="text" value={form.pan} onChange={(e) => set('pan', e.target.value.toUpperCase())} placeholder="ABCDE1234F" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Udyam / MSME Registration No.</label>
              <input type="text" value={form.udyam} onChange={(e) => set('udyam', e.target.value.toUpperCase())} placeholder="UDYAM-AP-00-0000000" className={inputCls} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { key: 'bank_verified', label: 'Bank account verified (penny-drop)' },
                { key: 'bis_cert', label: 'BIS certification (if supplying cement / steel / bricks)' },
                { key: 'iso_9001', label: 'ISO 9001 quality certification' },
                { key: 'spcb_consent', label: 'State Pollution Control Board consent' },
                { key: 'eway_bill', label: 'E-way bill generation enabled' },
                { key: 'legal_metrology', label: 'Legal Metrology (weights & measures) compliant' },
              ].map((c) => (
                <label key={c.key} className="flex items-start gap-2 text-[12px] text-[var(--color-text-secondary)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={Boolean(form[c.key as keyof VendorForm])}
                    onChange={(e) => set(c.key as keyof VendorForm, e.target.checked)}
                    className="mt-0.5 accent-[var(--color-primary)]"
                  />
                  <span>{c.label}</span>
                </label>
              ))}
            </div>

            <div className="pt-3 border-t border-[var(--color-border-light)]">
              <label className="flex items-start gap-2 text-[12px] text-[var(--color-text-secondary)] cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.dpdp_consent}
                  onChange={(e) => set('dpdp_consent', e.target.checked)}
                  className="mt-0.5 accent-[var(--color-primary)]"
                />
                <span>
                  I consent to Build360 collecting and processing my business data under the IT Act &amp; DPDP Act, and
                  agree to execute the vendor agreement via Aadhaar eSign.
                </span>
              </label>
              {form.dpdp_consent && (
                <div className="mt-3">
                  <label className={labelCls}>Agreement Date (Aadhaar eSign)</label>
                  <input type="date" value={form.esign_date} onChange={(e) => set('esign_date', e.target.value)} className={inputCls} />
                </div>
              )}
            </div>
          </div>
        )}

        {error && (
          <p className="text-[11px] text-red-500 text-center mt-4">{error}</p>
        )}

        <div className="mt-6 flex flex-col items-center gap-4">
          {step === 1 ? (
            <button
              onClick={goNext}
              className="w-full py-3 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Continue to Compliance
            </button>
          ) : (
            <>
              <div className="flex justify-center">
                <TurnstileWidget siteKey={SITE_KEY} onToken={setTurnstileToken} id="turnstile-vendor" />
              </div>
              <div className="flex w-full gap-3">
                <button
                  onClick={goBack}
                  disabled={submitting}
                  className="flex-1 py-3 text-sm font-medium border border-[var(--color-border-light)] text-[var(--color-text-secondary)] rounded-lg hover:bg-[var(--color-bg-surface-alt)] transition-colors disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !turnstileToken}
                  className="flex-[2] py-3 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
              <p className="text-[10px] text-[var(--color-text-muted)] text-center">
                We&apos;ll reach out within 48 hours to complete verification. Documents &amp; the eSign agreement are
                exchanged securely over WhatsApp.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
