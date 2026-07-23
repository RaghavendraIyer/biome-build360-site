export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'Who We Are', href: '/about' },
  {
    label: 'Platform',
    href: '/',
    children: [
      { label: 'Consumer Platform', href: '/consumers' },
      { label: 'Business Partners', href: '/partners' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Tile Adhesives & Grouts', href: '/products/adhesives' },
      { label: 'UltraTech Tilefixo', href: '/products/ultratech-tilefixo' },
      { label: 'MYK Laticrete', href: '/products/myk-laticrete' },
      { label: 'Saint Gobain Weber', href: '/products/saint-gobain-weber' },
    ],
  },
  { label: 'Bid', href: '/bid' },
  { label: 'Careers', href: '/careers' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/#contact' },
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
