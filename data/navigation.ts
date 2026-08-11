export interface BrandChild {
  label: string;
  href: string;
}

export interface ProductGroup {
  label: string;
  href: string;
  brands?: BrandChild[];
}

export interface ProductCategory {
  label: string;
  href: string;
  brands?: BrandChild[];
  groups?: ProductGroup[];
}

export interface SimpleNavLink {
  type: 'link';
  label: string;
  href: string;
}

export interface DropdownNavLink {
  type: 'dropdown';
  label: string;
  href: string;
  children: Array<{ label: string; href: string }>;
}

export interface ProductsNavLink {
  type: 'products';
  label: string;
  href: string;
  categories: ProductCategory[];
}

export type NavLink = SimpleNavLink | DropdownNavLink | ProductsNavLink;

export const navLinks: NavLink[] = [
  { type: 'link', label: 'Who We Are', href: '/about' },
  {
    type: 'products',
    label: 'Products',
    href: '/products',
    categories: [
      {
        label: 'Tile Adhesives & Grouts',
        href: '/products/adhesives',
        brands: [
          { label: 'UltraTech Tilefixo', href: '/products/ultratech-tilefixo' },
          { label: 'MYK Laticrete', href: '/products/myk-laticrete' },
          { label: 'Saint Gobain Weber', href: '/products/saint-gobain-weber' },
        ],
      },
      {
        label: 'Cement & Concrete',
        href: '#',
      },
      {
        label: 'Steel & TMT Bars',
        href: '/products/steel',
        groups: [
          {
            label: 'Primary',
            href: '/products/steel#primary',
            brands: [
              { label: 'JSW', href: '/products/steel#primary' },
              { label: 'Vizag', href: '/products/steel#primary' },
              { label: 'SAIL', href: '/products/steel#primary' },
              { label: 'TATA', href: '/products/steel#primary' },
            ],
          },
          {
            label: 'Secondary',
            href: '/products/steel#secondary',
            brands: [
              { label: 'Shree', href: '/products/steel#secondary' },
              { label: 'Radha', href: '/products/steel#secondary' },
              { label: 'Suguna', href: '/products/steel#secondary' },
              { label: 'Vinayaka', href: '/products/steel#secondary' },
              { label: 'Kamadhenu', href: '/products/steel#secondary' },
            ],
          },
        ],
      },
      { label: 'Blocks & Bricks', href: '#' },
      { label: 'Plywood', href: '#' },
      { label: 'Finishing Supplies', href: '#' },
      { label: 'Waterproofing & Sealants', href: '#' },
      {
        label: 'Water Treatment Solutions',
        href: '/products/water-treatment',
        groups: [
          { label: 'Heat Pumps', href: '/products/water-treatment#heat-pumps' },
          { label: 'Water Softeners', href: '/products/water-treatment#water-softeners' },
          { label: 'RO Plants', href: '/products/water-treatment#ro-plants' },
          { label: 'Pressure Pumps', href: '/products/water-treatment#pressure-pumps' },
          { label: 'Geysers', href: '/products/water-treatment#geysers' },
        ],
      },
      {
        label: 'Power Backups & Gensets',
        href: '/products/power-backup',
        groups: [
          { label: 'Genset', href: '/products/power-backup#genset' },
          { label: 'Solar', href: '/products/power-backup#solar' },
        ],
      },
      { label: 'Plumbing & Sanitaryware', href: '#' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Platform',
    href: '/',
    children: [
      { label: 'Consumer Platform', href: '/consumers' },
      { label: 'Business Partners', href: '/partners' },
    ],
  },
  { type: 'link', label: 'Service Providers', href: '/service-providers' },
  { type: 'link', label: 'Bid', href: '/bid' },
  { type: 'link', label: 'Insights', href: '/insights' },
];

export const companyInfo = {
  name: 'Build360.online',
  tagline: 'India\'s Organized Procurement Network',
  phone: '+91 90325 14441',
  email: 'info@build360.online',
  whatsapp: 'https://wa.me/919032514441',
  location: 'Hyderabad, Telangana, India',
  hours: 'Mon–Sat 9am–7pm',
  founded: '2025',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: 'https://www.linkedin.com/company/build360-online/',
    youtube: 'https://www.youtube.com/@build360online',
  },
};
