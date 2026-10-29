// Central content for the site. Edit copy here rather than in the page templates.

export const brand = '#23b573'

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Consulting', to: '/consulting' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' }
]

export const links = {
  companyLinkedIn: 'https://www.linkedin.com/company/inspirilabcom',
  reneLinkedIn: 'https://www.linkedin.com/in/connectwithrene/',
  // TODO: add the company enquiry email; the contact page shows an email button once this is set
  email: ''
}

export const address = ['Level 3, Wisma Suria', 'Jalan Teknokrat 6', 'Cyberjaya 63000', 'Malaysia']

export interface Service {
  slug: string
  icon: string
  title: string
  summary: string
  points: string[]
}

export const services: Service[] = [
  {
    slug: 'saas-ai',
    icon: 'i-heroicons-cpu-chip',
    title: 'SaaS & AI Products',
    summary: 'We design, build and run software products end to end, from the first prototype to a live, paying product.',
    points: [
      'Web apps and SaaS platforms',
      'AI-powered tools and automation',
      'Integrations with third-party APIs and data sources',
      'Hosting, monitoring and ongoing maintenance'
    ]
  },
  {
    slug: 'web',
    icon: 'i-heroicons-globe-alt',
    title: 'Websites & Migrations',
    summary: 'Fast, modern websites, and migrations off costly or outdated platforms onto lean, low-maintenance hosting.',
    points: [
      'Company and product websites',
      'E-commerce and content-managed sites',
      'Migrations from WordPress and site builders',
      'Cloudflare hosting to cut running costs'
    ]
  },
  {
    slug: 'blockchain',
    icon: 'i-heroicons-cube',
    title: 'Blockchain & Decentralised AI',
    summary: 'Practical blockchain and decentralised AI solutions that solve real business problems.',
    points: [
      'Product authenticity and anti-counterfeiting',
      'Tamper-proof certificates and records',
      'Decentralised AI infrastructure (Morpheus)',
      'Web3 product strategy and development'
    ]
  },
  {
    slug: 'consulting',
    icon: 'i-heroicons-light-bulb',
    title: 'IT Consulting & Solution Design',
    summary: 'Independent advice on which technology to use, how to architect it and how to roll it out.',
    points: [
      'Technology and innovation strategy',
      'Solution architecture and technical reviews',
      'Workshops, training and speaking',
      'Led by our Vice President, Rene Fischer-Bernard'
    ]
  }
]

export interface Project {
  name: string
  url?: string
  category: string
  service: string // matches Service.slug
  description: string
  tags: string[]
}

// TODO: add Storesini / SafeGate once its description and link are confirmed
export const projects: Project[] = [
  {
    name: 'PakcikLocation GBP Audit',
    url: 'https://auditgbp.my',
    category: 'SaaS & AI',
    service: 'saas-ai',
    description: 'An AI-powered audit tool that analyses Google Business Profiles and gives businesses a clear report on how to improve their local search visibility.',
    tags: ['AI', 'SaaS', 'Cloudflare']
  },
  {
    name: 'BrandTag',
    url: 'https://brandtag.io',
    category: 'Blockchain SaaS',
    service: 'blockchain',
    description: 'A blockchain-powered SaaS that lets brands engage consumers with product stories and authenticity proofs via NFC and QR codes.',
    tags: ['Blockchain', 'SaaS', 'NFC/QR']
  },
  {
    name: 'LuxTag',
    url: 'https://luxtag.io',
    category: 'Blockchain · Website',
    service: 'blockchain',
    description: 'Blockchain-based anti-counterfeiting and digital certificate solutions. We rebuilt its website and moved it off WordPress onto Cloudflare.',
    tags: ['Blockchain', 'Migration', 'Cloudflare']
  },
  {
    name: 'The Jungle Coffee',
    url: 'https://thejunglecoffee.com',
    category: 'Website',
    service: 'web',
    description: 'Website for a specialty coffee brand sourcing from Indonesia, re-platformed onto Cloudflare to cut hosting costs.',
    tags: ['Website', 'Migration', 'Cloudflare']
  }
]

export const partners = [
  { name: 'MOR.org', url: 'https://mor.org', description: 'Our flagship open-source project focused on decentralized AI and blockchain solutions.' },
  { name: 'Morpheus.asia', url: 'https://morpheus.asia', description: 'Advanced AI and blockchain infrastructure for the Asia-Pacific region.' }
]
