import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'Rockworth Office Chairs : Build360.online',
  description: 'Rockworth ergonomic and task chairs for modern workspaces — executive, mesh, and task seating — source in bulk.',
};

const ergonomic = [
  { id: 'monte', image: '/images/products/rockworth/monte.jpg', name: 'Monte', description: 'Italian-style executive chair with premium leather and die-cast aluminium base for prestige workspaces.', chips: ['Executive', 'High Back'] },
  { id: 'reef', image: '/images/products/rockworth/reef.jpg', name: 'Reef', description: 'Luxurious executive seating with uniquely designed leather-pad armrests and a chrome finish.', chips: ['Executive'] },
  { id: 'moose', image: '/images/products/rockworth/moose.jpg', name: 'Moose', description: 'Fully ergonomic chair with 3D PU-cushioned armrests, 5-level lumbar support, and recycled nylon structure.', chips: ['3D Arms', 'Recycled Nylon'] },
  { id: 'aero', image: '/images/products/rockworth/aero.jpg', name: 'Aero', description: 'Pressure-relieving ergonomic chair with extended thigh support, forward tilt, and 3D head support.', chips: ['Forward Tilt', '5-Level Arms'] },
  { id: 'morph', image: '/images/products/rockworth/morph.jpg', name: 'Morph', description: 'Design-forward chair with rotational headrest, back-spine support, and flexible elastic back.', chips: ['Rotating Headrest'] },
  { id: 'lotto', image: '/images/products/rockworth/lotto.jpg', name: 'Lotto', description: 'Comfortable task ergonomic chair with fibreglass frame, 2D armrests, and breathable mesh.', chips: ['Mesh', 'Fibreglass Frame'] },
  { id: 'crown', image: '/images/products/rockworth/crown.jpg', name: 'Crown', description: 'Mesh-back ergonomic chair with 9-level lumbar support, 4D armrests, and optimum head support.', chips: ['9-Level Lumbar', '4D Arms'] },
  { id: 'alpha', image: '/images/products/rockworth/alpha.jpg', name: 'Alpha', description: 'Sleek curved-back chair with 4D armrests, extended thigh & back support, and adjustable headrest.', chips: ['4D Arms', '135° Recline'] },
  { id: 'senses', image: '/images/products/rockworth/senses.jpg', name: 'Senses', description: 'Adjustable head support chair with recycled nylon structure, 2D armrests, and 8-level lumbar support.', chips: ['Mesh', '8-Level Lumbar'] },
  { id: 'qm', image: '/images/products/rockworth/qm.jpg', name: 'QM', description: 'Breathable mesh-back chair with robust back design, adjustable lumbar support, and good airflow.', chips: ['Mesh', 'Task+'] },
];

const task = [
  { id: 'vigo', image: '/images/products/rockworth/vigo.jpg', name: 'Vigo', description: 'Foldable and stackable task chair with sliding armrests, optional tablet, and 210° swivel.', chips: ['Foldable', 'Stackable'] },
  { id: 'city', image: '/images/products/rockworth/city.jpg', name: 'City', description: 'Space-optimising chairs with foldable desklet, breathable mesh backrest, and sleek design.', chips: ['Desklet', 'Space Saver'] },
  { id: 'kyle', image: '/images/products/rockworth/kyle.jpg', name: 'Kyle', description: 'Elegant Italian-style task chair with premium leather and aluminium components.', chips: ['Leather', 'Italian Style'] },
  { id: 'exact', image: '/images/products/rockworth/exact.jpg', name: 'Exact', description: 'Fatigue-reducing ergonomic seating with an expanded seat pan that supports knees and legs.', chips: ['Ergonomic'] },
  { id: 'wish', image: '/images/products/rockworth/wish.jpg', name: 'Wish', description: 'Extraordinarily comfortable chair with wide flexible mesh, 3D armrests, and curved seat cushion.', chips: ['Mesh', '3D Arms'] },
  { id: 'flex', image: '/images/products/rockworth/flex.jpg', name: 'Flex', description: 'Flexible seating that reduces muscular strain during prolonged, repetitive tasks.', chips: ['Task'] },
  { id: 'cube2', image: '/images/products/rockworth/cube2.jpg', name: 'Cube2', description: 'Sleek patterned design that brings maximum comfort and aesthetics to the workplace.', chips: ['Task'] },
  { id: 'arti', image: '/images/products/rockworth/arti.jpg', name: 'Arti', description: 'Flexible ergonomic chair that reduces muscular and nerve strain in prolonged sitting.', chips: ['Task'] },
  { id: 'flow', image: '/images/products/rockworth/flow.jpg', name: 'Flow', description: 'New patterned ergonomic design with breathable mesh for maximum workplace comfort.', chips: ['Mesh'] },
  { id: 'win', image: '/images/products/rockworth/win.jpg', name: 'Win', description: 'Humanised design in breathable mesh or leatherette PU back variants.', chips: ['Mesh / PU'] },
  { id: 'ideal', image: '/images/products/rockworth/ideal.jpg', name: 'Ideal', description: 'Innovative seating with excellent balance support for any position.', chips: ['Task'] },
  { id: 'yoo', image: '/images/products/rockworth/yoo.jpg', name: 'Yoo', description: 'Extremely sleek integrated seat-and-back design with fully breathable perforated mesh.', chips: ['Mesh', 'Lightweight'] },
  { id: 'slim2', image: '/images/products/rockworth/slim2.jpg', name: 'Slim2', description: 'Slim, elegant chair with genuine leather, vinyl, or mesh and brushed aluminium alloy base.', chips: ['Slim', 'Aluminium Base'] },
  { id: 'prompt', image: '/images/products/rockworth/prompt.jpg', name: 'Prompt', description: 'Colourful task chair that reflects your identity with support for prolonged sitting.', chips: ['Task', 'Colourful'] },
  { id: 'rio', image: '/images/products/rockworth/rio.jpg', name: 'Rio', description: 'Great-trade mesh-back chair that promotes better posture and reduces strain.', chips: ['Mesh'] },
  { id: 'lucca-lite', image: '/images/products/rockworth/lucca-lite.jpg', name: 'Lucca Lite', description: 'Comfortable chair with a backrest that supports lock adjustment and full directional rotation.', chips: ['Task'] },
  { id: 'libra-lite', image: '/images/products/rockworth/libra-lite.jpg', name: 'Libra Lite', description: 'Advanced gentle mesh backrest that cools your back and lets you concentrate.', chips: ['Mesh'] },
];

export default function RockworthPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2B1B3D 0%, #1A0F26 50%, #2B1B3D 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Rockworth — Office Seating
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Unlock Your Potential.{' '}
            <em className="not-italic text-[var(--color-primary)]">Access Your Best Work.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Ergonomic and task seating from Rockworth — certified ergonomics and sustainability for modern workspaces.
          </p>
        </div>
      </section>

      <section id="ergonomic" className="py-16 px-[var(--gutter)] scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Ergonomic Chairs</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Optimal support and comfort for long periods of seated work — improving posture and productivity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ergonomic.map((line) => (
              <ProductLineCard key={line.id} name={line.name} image={line.image} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section id="task" className="py-16 px-[var(--gutter)] scroll-mt-24 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Task Chairs</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Practical task seating for every role — space-saving, stackable, and ergonomic.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {task.map((line) => (
              <ProductLineCard key={line.id} name={line.name} image={line.image} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Need Bulk Pricing?{' '}
            <em className="not-italic text-[var(--color-primary)]">We&apos;re Here to Help.</em>
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">Send your BOQ or product list — get a competitive quote within 4 hours.</p>
          <Button href="https://wa.me/919032514441" external variant="primary" className="px-8 py-3">
            Get Pricing on WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
