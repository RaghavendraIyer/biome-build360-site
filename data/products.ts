export interface Product {
  id: string;
  brand: 'ultratech' | 'myk' | 'weber';
  name: string;
  description: string;
  image?: string;
  specs?: Record<string, string>;
}

export const products: Product[] = [
  // UltraTech Tilefixo
  { id: 'sumo-ct', brand: 'ultratech', name: 'Sumo CT', description: 'Standard cement-based tile adhesive for ceramic and vitrified tiles.', image: '/adhesives/sumo-ct.jpg', specs: { Grade: 'Standard', Application: 'Wall & Floor' } },
  { id: 'sumo-ct-plus', brand: 'ultratech', name: 'Sumo CT Plus', description: 'Enhanced cement-based adhesive with improved workability and adhesion.', image: '/adhesives/sumo-ct-plus.jpg', specs: { Grade: 'Standard Plus', Application: 'Wall & Floor' } },
  { id: 'aqua-marine-vt', brand: 'ultratech', name: 'Aqua Marine VT', description: 'Water-resistant tile adhesive for wet areas like bathrooms and kitchens.', image: '/adhesives/aqua-marine-vt.jpg', specs: { Grade: 'Water Resistant', Application: 'Wet Areas' } },
  { id: 'aqua-marine-vt-plus', brand: 'ultratech', name: 'Aqua Marine VT Plus', description: 'Advanced water-resistant adhesive with anti-damp properties.', image: '/adhesives/aqua-marine-vt-plus.jpg', specs: { Grade: 'Premium Water Resistant', Application: 'Wet Areas' } },
  { id: 'royal-nt', brand: 'ultratech', name: 'Royal NT', description: 'Non-sag tile adhesive for vertical installations and heavy tiles.', image: '/adhesives/royal-nt.jpg', specs: { Grade: 'Non-Sag', Application: 'Vertical & Heavy' } },
  { id: 'royal-nt-plus', brand: 'ultratech', name: 'Royal NT Plus', description: 'Premium non-sag adhesive with extended open time.', image: '/adhesives/royal-nt-plus.jpg', specs: { Grade: 'Premium Non-Sag', Application: 'Vertical & Heavy' } },
  { id: 'ultima', brand: 'ultratech', name: 'Ultima', description: 'High-performance cement-based adhesive with polymer modification.', image: '/adhesives/ultima.jpg', specs: { Grade: 'High Performance', Application: 'All Substrates' } },
  { id: 'ultima-plus', brand: 'ultratech', name: 'Ultima Plus', description: 'Ultra-premium adhesive with enhanced flexibility and bonding strength.', image: '/adhesives/ultratech-tilefixo-ultima-plus-tile-adhesive-1000x1000.jpeg', specs: { Grade: 'Ultra Premium', Application: 'All Substrates' } },
  { id: 'style-2k', brand: 'ultratech', name: 'STYLE 2K Epoxy Grout', description: 'Two-component epoxy grout for stain-resistant, durable joints.', image: '/adhesives/ultratech-tilefixo-style-epoxy-grout-2k.webp', specs: { Grade: 'Epoxy', Application: 'Floor & Wall Grout' } },
  { id: 'style-3k', brand: 'ultratech', name: 'STYLE Epoxy Grout (3K)', description: 'Three-component epoxy system for commercial-grade grouting.', image: '/adhesives/ultratech-tilefixo-style-epoxy-grout_new.webp', specs: { Grade: 'Epoxy', Application: 'Commercial Grout' } },
  { id: 'grout-cg', brand: 'ultratech', name: 'Grout CG', description: 'Cementitious grout for standard tile joint filling.', image: '/adhesives/ultratech-tilefixo-grout-cg-250x250.webp', specs: { Grade: 'Standard', Application: 'Joint Filling' } },
  { id: 'tilefixo-rapid', brand: 'ultratech', name: 'Tilefixo Rapid', description: 'Fast-setting tile adhesive for quick turnaround projects.', image: '/adhesives/UltraTechTileFixoRapid.webp', specs: { Grade: 'Rapid Set', Application: 'Fast Track' } },
  { id: 'tilefixo-pu-2k', brand: 'ultratech', name: 'Tilefixo PU 2K', description: 'Two-component polyurethane adhesive for extreme bonding.', specs: { Grade: 'Polyurethane', Application: 'Extreme Bonding' } },
  { id: 'sumo-additive', brand: 'ultratech', name: 'Tilefixo Sumo Additive', description: 'Admixture to enhance standard cement-based adhesive performance.', specs: { Grade: 'Additive', Application: 'Performance Enhancement' } },
  { id: 'shine-cleaner', brand: 'ultratech', name: 'Shine Tile Cleaner', description: 'Specialized cleaner for removing grout haze and maintaining tile finish.', specs: { Grade: 'Cleaner', Application: 'Post-Installation' } },

  // MYK Laticrete
  { id: 'myk-111-73', brand: 'myk', name: '111 + 73', description: 'Standard tile adhesive system with 111 adhesive and 73 additive for enhanced performance.', image: '/adhesives/myk-111-73.jpg' },
  { id: 'myk-111-4237', brand: 'myk', name: '111 + 4237', description: 'Premium adhesive system with advanced polymer additive for superior adhesion.', image: '/adhesives/myk-111-4237.jpg' },
  { id: 'myk-345', brand: 'myk', name: '345 Super Flex', description: 'Flexible tile adhesive for substrates with movement and thermal expansion.', image: '/adhesives/myk-345.jpg' },
  { id: 'myk-epoxy-grout', brand: 'myk', name: 'LATICRETE Epoxy Grout', description: 'Premium epoxy grout for stain-proof, waterproof, and crack-resistant joints.' },
  { id: 'myk-sp-100', brand: 'myk', name: 'SP-100', description: 'Self-leveling underlayment for preparing floors before tiling.' },

  // Saint Gobain Weber
  { id: 'weber-set-classic', brand: 'weber', name: 'Weber Set Classic', description: 'Standard cement-based tile adhesive for ceramic tiles in interior applications.', image: '/adhesives/weberset-classic.jpg' },
  { id: 'weber-set-plus', brand: 'weber', name: 'Weber Set Plus White', description: 'White cement-based adhesive for light-coloured natural stone and marble.', image: '/adhesives/weberset-plus-white.jpg' },
  { id: 'weber-set-premier', brand: 'weber', name: 'Weber Set Premier', description: 'Premium grade adhesive with enhanced adhesion and extended open time.', image: '/adhesives/weberset-premier.jpg' },
  { id: 'weber-epoxy', brand: 'weber', name: 'Weber Epoxy Grout', description: 'High-performance epoxy grout for demanding commercial and industrial applications.' },
  { id: 'weber-firm', brand: 'weber', name: 'Weber Set Firm', description: 'Non-sag adhesive for heavy and large-format tiles.', image: '/adhesives/weberset-firm.jpg' },
];

export const brands = [
  { id: 'ultratech' as const, name: 'UltraTech Tilefixo', slug: '/products/ultratech-tilefixo', description: 'India\'s leading tile adhesive and grout brand under the UltraTech Cement umbrella. Trusted by contractors nationwide for consistent quality, innovative formulations, and comprehensive project support.', gradient: 'from-zinc-900 to-zinc-800' },
  { id: 'myk' as const, name: 'MYK Laticrete', slug: '/products/myk-laticrete', description: 'A joint venture between MYK India and Laticrete International (USA), bringing global tile installation technology to Indian construction sites.', gradient: 'from-zinc-900 to-zinc-800' },
  { id: 'weber' as const, name: 'Saint Gobain Weber', slug: '/products/saint-gobain-weber', description: 'Part of the global Saint-Gobain group — the world\'s largest building materials company with over 350 years of expertise.', gradient: 'from-zinc-900 to-zinc-800' },
];
