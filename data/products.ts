export interface Product {
  id: string;
  brand: 'ultratech' | 'myk' | 'weber' | 'kerakoll';
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
  { id: 'tilefixo-pu-2k', brand: 'ultratech', name: 'Tilefixo PU 2K', description: 'Two-component polyurethane adhesive for extreme bonding.', image: '/adhesives/ultratech-tilefixo-pu2k-1000x1000.webp', specs: { Grade: 'Polyurethane', Application: 'Extreme Bonding' } },
  { id: 'sumo-additive', brand: 'ultratech', name: 'Tilefixo Sumo Additive', description: 'Admixture to enhance standard cement-based adhesive performance.', image: '/adhesives/ultratech-tilefixo-sumo-ct-floor-wall-ceramic-tile-adhesive-500x500.webp', specs: { Grade: 'Additive', Application: 'Performance Enhancement' } },
  { id: 'shine-cleaner', brand: 'ultratech', name: 'Shine Tile Cleaner', description: 'Specialized cleaner for removing grout haze and maintaining tile finish.', image: '/adhesives/ultratech-tilefixo-shine-tile-cleaner-500x500.webp', specs: { Grade: 'Cleaner', Application: 'Post-Installation' } },

  // MYK Laticrete
  { id: 'myk-111-73', brand: 'myk', name: '111 + 73', description: 'Standard tile adhesive system with 111 adhesive and 73 additive for enhanced performance.', image: '/adhesives/myk-111-73.jpg' },
  { id: 'myk-111-4237', brand: 'myk', name: '111 + 4237', description: 'Premium adhesive system with advanced polymer additive for superior adhesion.', image: '/adhesives/myk-111-4237.jpg' },
  { id: 'myk-345', brand: 'myk', name: '345 Super Flex', description: 'Flexible tile adhesive for substrates with movement and thermal expansion.', image: '/adhesives/myk-345.jpg' },
  { id: 'myk-epoxy-grout', brand: 'myk', name: 'LATICRETE Epoxy Grout', description: 'Premium epoxy grout for stain-proof, waterproof, and crack-resistant joints.', image: '/adhesives/LATICRETE%20Epoxy%20Grout%20.png' },
  { id: 'myk-sp-100', brand: 'myk', name: 'SP-100', description: 'Self-leveling underlayment for preparing floors before tiling.', image: '/adhesives/LATICRETE%20Epoxy%20Grout%20.png' },

  // Saint Gobain Weber
  { id: 'weber-set-classic', brand: 'weber', name: 'Weber Set Classic', description: 'Standard cement-based tile adhesive for ceramic tiles in interior applications.', image: '/adhesives/weberset-classic.jpg' },
  { id: 'weber-set-plus', brand: 'weber', name: 'Weber Set Plus White', description: 'White cement-based adhesive for light-coloured natural stone and marble.', image: '/adhesives/weberset-plus-white.jpg' },
  { id: 'weber-set-premier', brand: 'weber', name: 'Weber Set Premier', description: 'Premium grade adhesive with enhanced adhesion and extended open time.', image: '/adhesives/weberset-premier.jpg' },
  { id: 'weber-epoxy', brand: 'weber', name: 'Weber Epoxy Grout', description: 'High-performance epoxy grout for demanding commercial and industrial applications.', image: '/adhesives/weber-epoxy-grout-1000x1000.webp' },
  { id: 'weber-firm', brand: 'weber', name: 'Weber Set Firm', description: 'Non-sag adhesive for heavy and large-format tiles.', image: '/adhesives/weber-set-firm-tile-adhesive-1000x1000.webp' },

  // Kerakoll
  { id: 'kerakoll-superflex', brand: 'kerakoll', name: 'Superflex', description: 'Highly deformable organic mineral adhesive for installation of any covering on any substrate.', specs: { Grade: 'C2TES2', 'Pack Size': '4 kg' } },
  { id: 'kerakoll-h40-gel', brand: 'kerakoll', name: 'H40 Gel', description: 'Multipurpose flexible gel-adhesive for fixing tiles and stones of all types and formats.', specs: { Grade: 'C2TE S1', 'Pack Size': '20 kg' } },
  { id: 'kerakoll-bioflex-s1', brand: 'kerakoll', name: 'Bioflex S1', description: 'High-performance deformable adhesive for bonding large-format tiles and natural stones.', specs: { Grade: 'C2TE S1', 'Pack Size': '25 kg' } },
  { id: 'kerakoll-bioflex', brand: 'kerakoll', name: 'Bioflex', description: 'High-performance adhesive used for fixing large-format tiles and natural stones.', specs: { Grade: 'C2TE', 'Pack Size': '20 kg / 30 kg' } },
  { id: 'kerakoll-biofix', brand: 'kerakoll', name: 'Biofix', description: 'Mineral adhesive for fixing ceramic tiles, vitrified tiles, and stones on the floor and wall.', specs: { Grade: 'C2TE', 'Pack Size': '20 kg / 30 kg' } },
  { id: 'kerakoll-biotile', brand: 'kerakoll', name: 'Biotile', description: 'Adhesive for fixing tiles in indoor and outdoor areas.', specs: { Grade: 'Type 1', 'Pack Size': '20 kg / 30 kg' } },
  { id: 'kerakoll-biotack', brand: 'kerakoll', name: 'Biotack', description: 'Mineral slurry adhesive for fixing tiles and stones using wet-on-wet technique. Open time > 30 min.', specs: { Grade: 'Slurry', 'Pack Size': '25 kg' } },
  { id: 'kerakoll-biocem', brand: 'kerakoll', name: 'Biocem', description: 'Mineral binder for screeds to fix vitrified tiles and natural stones using wet-on-wet technique with Biotack, and as a dry screed for underlay application.', specs: { Grade: 'Binder', 'Pack Size': '25 kg' } },
  { id: 'kerakoll-fugalite-color', brand: 'kerakoll', name: 'Fugalite Color', description: 'Waterproof, stain-proof resin grout for joint widths up to 10 mm. Available in 50 colours.', specs: { Grade: 'Resin Grout', 'Pack Size': '4 kg' } },
  { id: 'kerakoll-fugalite-invisibile', brand: 'kerakoll', name: 'Fugalite Invisibile', description: 'Waterproof, photochromatic resin grout for joint widths up to 3 mm.', specs: { Grade: 'Resin Grout', 'Pack Size': '3 kg' } },
  { id: 'kerakoll-fugabella-eco', brand: 'kerakoll', name: 'Fugabella Eco Porcelana 0-5', description: 'Mineral grout for color-fast joints up to 5 mm. Available in 20 colours.', specs: { Grade: 'Mineral Grout', 'Pack Size': '5 kg / 1 kg' } },
  { id: 'kerakoll-biocolor', brand: 'kerakoll', name: 'Biocolor', description: 'Extra fine mineral grout for joints up to 3 mm. Available in 10 colours.', specs: { Grade: 'Mineral Grout', 'Pack Size': '5 kg / 1 kg' } },
  { id: 'kerakoll-silmat-color', brand: 'kerakoll', name: 'Silmat Color', description: 'Ultra-matt, elastic decorative sealant for joint widths up to 30 mm.', specs: { Grade: 'Sealant', 'Pack Size': '290 ml cartridge' } },
  { id: 'kerakoll-silicone-color', brand: 'kerakoll', name: 'Silicone Color', description: 'Decorative sealant for tiles, mosaics, and swimming pools, with joint widths up to 25 mm. Available in 50 colours.', specs: { Grade: 'Sealant', 'Pack Size': '310 ml cartridge' } },
  { id: 'kerakoll-aquastop-nanoflex', brand: 'kerakoll', name: 'Aquastop Nanoflex', description: 'Single component breathable, anti-alkali and chlorine resistant mineral waterproofing membrane.', specs: { Grade: 'Waterproofing', 'Pack Size': '20 kg' } },
  { id: 'kerakoll-aquastop-p6', brand: 'kerakoll', name: 'Aquastop P6', description: 'Multi-purpose SBR latex, ideal for waterproofing and polymer-modified mortar.', specs: { Grade: 'Latex', 'Pack Size': '1 kg / 5 kg / 25 kg' } },
  { id: 'kerakoll-aquastop-flex', brand: 'kerakoll', name: 'Aquastop Flex', description: 'Two component, cementitious waterproofing membrane for bathrooms and balconies.', specs: { Grade: 'Waterproofing', 'Pack Size': 'Part A 15 kg + Part B 7.5 kg' } },
  { id: 'kerakoll-aquastop-ar1', brand: 'kerakoll', name: 'Aquastop AR1', description: 'Special reinforcing mesh made of alkali-resistant glass fibre to strengthen the waterproofing membrane on horizontal surfaces.', specs: { Grade: 'Reinforcing Mesh', 'Pack Size': '50 m x 1 m' } },
  { id: 'kerakoll-aquastop-120', brand: 'kerakoll', name: 'Aquastop 120', description: 'Flexible NBR waterproof joint for corner treatment of perimeter and fractioning joints.', specs: { Grade: 'Waterproof Joint', 'Pack Size': '50 m x 120 mm' } },
];

export const brands = [
  { id: 'ultratech' as const, name: 'UltraTech Tilefixo', slug: '/products/ultratech-tilefixo', description: 'India\'s leading tile adhesive and grout brand under the UltraTech Cement umbrella. Trusted by contractors nationwide for consistent quality, innovative formulations, and comprehensive project support.', gradient: 'from-zinc-900 to-zinc-800' },
  { id: 'myk' as const, name: 'MYK Laticrete', slug: '/products/myk-laticrete', description: 'A joint venture between MYK India and Laticrete International (USA), bringing global tile installation technology to Indian construction sites.', gradient: 'from-zinc-900 to-zinc-800' },
  { id: 'weber' as const, name: 'Saint Gobain Weber', slug: '/products/saint-gobain-weber', description: 'Part of the global Saint-Gobain group — the world\'s largest building materials company with over 350 years of expertise.', gradient: 'from-zinc-900 to-zinc-800' },
  { id: 'kerakoll' as const, name: 'Kerakoll', slug: '/products/kerakoll', description: 'Italian green-building leader since 1968 — tile adhesives, grouts, sealants, and waterproofing with eco-sustainable formulations.', gradient: 'from-zinc-900 to-zinc-800' },
];
