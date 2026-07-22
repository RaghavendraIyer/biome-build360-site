import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Users, Phone, Globe, BarChart, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About : Build360.online',
  description: 'About Build360.online — India\'s organized procurement network for construction materials.',
};

const principles = [
  { icon: BarChart, title: 'Transparent Pricing', desc: 'No hidden markups. You see the brand, grade, and price per bag upfront.' },
  { icon: Shield, title: 'Verified Supply Partners', desc: 'Every supplier on our network is verified. You deal with accountable partners.' },
  { icon: Users, title: 'Single Point of Contact', desc: 'One number, one relationship. No juggling multiple vendors.' },
  { icon: Phone, title: 'WhatsApp-First Ordering', desc: 'Place orders, get updates, and confirm deliveries entirely over WhatsApp.' },
  { icon: Globe, title: 'Volume Pricing', desc: 'From single-project homeowners to bulk-procurement contractors.' },
  { icon: MapPin, title: 'Pan-India Network', desc: 'From metro cities to Tier-2 towns.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center text-center px-[var(--gutter)] pt-[calc(var(--total-header,80px)+60px)] pb-16 bg-[var(--color-bg-app)]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Built by Procurement Insiders,{' '}
            <em className="not-italic text-[var(--color-primary)]">for the Building Industry.</em>
          </h1>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            Build360.online was founded by Srikar Jaji — a construction procurement specialist who saw firsthand how fragmented and opaque the supply chain was. Our mission: bring factory-direct transparency to every construction site in India.
          </p>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="shrink-0">
              <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden shadow-md">
                <Image
                  src="/founder-headshot.jpg"
                  alt="Srikar Jaji — Founder of Build360.online"
                  width={280}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--color-text-main)] mb-4">Srikar Jaji</h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Srikar Jaji founded Build360 with a clear conviction: that contractors, developers, and architects across India deserve a bulk-supply partner as organized as the projects they&apos;re building. With deep roots in the construction and distribution ecosystem, he started in Hyderabad and built to scale nationally.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Build360 operates on four founding principles: multi-category convenience, B2B-first pricing, ground-level expertise, and relationship-led delivery. The company maintains direct distribution relationships with quality-vetted manufacturers and is building a pan-India procurement platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">Why Build360</span>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold text-[var(--color-text-main)]">
              What Makes Us{' '}
              <em className="not-italic text-[var(--color-primary)]">Different.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-10)] flex items-center justify-center text-[var(--color-primary)] mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[var(--color-text-main)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
