export type TestimonialAccent = 'coral' | 'lime' | 'blue'

export type Testimonial = {
  id: string
  headline: string
  quote: string
  metric: string
  metricLabel: string
  name: string
  role: string
  company: string
  href?: string
  accent: TestimonialAccent
  layout: 'featured' | 'compact' | 'stat'
  gridColumn: string
  gridRow: string
}

export const testimonialStats = [
  { value: '14+', label: 'Projects shipped' },
  { value: '3', label: 'Countries' },
  { value: '6', label: 'Industries' },
]

export const testimonials: Testimonial[] = [
  {
    id: 'wyngo',
    headline: 'How Wyngo went from concept to a live transport app on Google Play',
    quote:
      'Pixy built Wyngo into a public transport app people actually rely on — fast, clear, and shipped without the usual agency drag.',
    metric: 'Live',
    metricLabel: 'on Google Play',
    name: 'Bilel R.',
    role: 'Founder',
    company: 'Wyngo',
    href: 'https://wyngo.co',
    accent: 'coral',
    layout: 'featured',
    gridColumn: '1 / span 7',
    gridRow: '1 / span 2',
  },
  {
    id: 'renklar',
    headline: 'How renklar.dk turned a local cleaning service into a brand that books',
    quote:
      'Our site finally looks as professional as our cleaning. Bookings went up within the first month.',
    metric: '+40%',
    metricLabel: 'booking inquiries',
    name: 'Mette H.',
    role: 'Client',
    company: 'renklar.dk',
    href: 'https://www.renklar.dk',
    accent: 'lime',
    layout: 'compact',
    gridColumn: '8 / -1',
    gridRow: '1',
  },
  {
    id: 'lumara',
    headline: 'How Lumara earned trust online in a market that expects local proof',
    quote:
      'Pixy gave Lumara a digital presence that matches the quality of our cleaning — trusted, local, and easy to book.',
    metric: 'HU',
    metricLabel: 'market launch',
    name: 'Katalin N.',
    role: 'Client',
    company: 'lumara.hu',
    href: 'https://lumara.hu',
    accent: 'blue',
    layout: 'compact',
    gridColumn: '8 / -1',
    gridRow: '2',
  },
  {
    id: 'onecrew',
    headline: 'How OneCrew aligned two brands under one sharp digital identity',
    quote:
      'One studio, two domains, one voice. Pixy made both properties feel like the same company overnight.',
    metric: '2×',
    metricLabel: 'brand surfaces',
    name: 'Client',
    role: 'Founder',
    company: 'onecrew.pro',
    href: 'https://onecrew.pro',
    accent: 'coral',
    layout: 'compact',
    gridColumn: '1 / span 4',
    gridRow: '3',
  },
  {
    id: 'iconmaker',
    headline: 'How iconmaker.pro ships polished app icons without the design overhead',
    quote:
      'Clean product, clear positioning, fast iteration. Exactly what a micro-SaaS needs to look credible on day one.',
    metric: '<24h',
    metricLabel: 'first draft',
    name: 'Maker',
    role: 'Founder',
    company: 'iconmaker.pro',
    href: 'https://iconmaker.pro',
    accent: 'lime',
    layout: 'compact',
    gridColumn: '5 / span 4',
    gridRow: '3',
  },
  {
    id: 'takwira',
    headline: 'How Takwira launched with a site built for mobile-first audiences',
    quote:
      'They understood the audience immediately and built something that feels native to how people actually use their phones.',
    metric: 'Mobile',
    metricLabel: 'first build',
    name: 'Founder',
    role: 'Product',
    company: 'Takwira',
    href: 'https://takwira.com',
    accent: 'blue',
    layout: 'stat',
    gridColumn: '9 / -1',
    gridRow: '3',
  },
]
