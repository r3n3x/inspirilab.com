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
  color: string // rail line colour
  short: string // line name on the route map
  icon: string
  title: string
  summary: string
  points: string[]
}

export const services: Service[] = [
  {
    slug: 'saas-ai',
    short: 'SaaS & AI',
    color: '#e4002b',
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
    short: 'Websites',
    color: '#23b573',
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
    short: 'Blockchain & DeAI',
    color: '#0072bc',
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
    short: 'Consulting',
    color: '#f5a800',
    icon: 'i-heroicons-light-bulb',
    title: 'IT Consulting & Solution Design',
    summary: 'Independent advice on which technology to use, how to architect it and how to roll it out.',
    points: [
      'Technology and innovation strategy',
      'Solution architecture and technical reviews',
      'Workshops, training and speaking',
      'Led by our Vice President, Rene Fischer-Bernard'
    ]
  },
  {
    slug: 'partners',
    short: 'Partners & Incubation',
    color: '#7b3fa0',
    icon: 'i-heroicons-users',
    title: 'Partner Projects & Incubation',
    summary: 'Ventures we partner with, advise or help incubate, from early idea to running business.',
    points: [
      'Advisory for founding teams',
      'Product and technology support',
      'Partnerships across Malaysia and Indonesia'
    ]
  }
]

export interface Project {
  name: string
  url?: string
  partner?: { name: string; url: string } // collaboration partner, linked in the card
  logo?: string // project logo in /public/logos
  logoOnDark?: boolean // light logo: show it on the ink panel
  category: string
  service: string // matches Service.slug
  also?: string[] // other lines this project appears on in the route map
  status?: string // e.g. go-live note, shown as a badge on the card
  description: string
  tags: string[]
}

// TODO: add Storesini / SafeGate once its description and link are confirmed
export const projects: Project[] = [
  {
    name: 'AuditGBP.my',
    url: 'https://auditgbp.my',
    logo: '/logos/pakciklocation.jpg',
    category: 'SaaS & AI',
    service: 'saas-ai',
    status: 'Go-live Q4/2026',
    description: 'An AI-powered audit tool that analyses Google Business Profiles and gives businesses a clear report on how to improve their local search visibility.',
    partner: { name: 'PakCikLocation', url: 'https://pakciklocation.my' },
    tags: ['AI', 'SaaS', 'Cloudflare']
  },
  {
    name: 'BrandTag',
    url: 'https://brandtag.io',
    logo: '/logos/brandtag.png',
    logoOnDark: true,
    category: 'Blockchain SaaS',
    service: 'blockchain',
    description: 'A blockchain-powered SaaS that lets brands engage consumers with product stories and authenticity proofs via NFC and QR codes.',
    tags: ['Blockchain', 'SaaS', 'NFC/QR']
  },
  {
    name: 'LuxTag',
    url: 'https://luxtag.io',
    logo: '/logos/luxtag.png',
    category: 'Blockchain · Website',
    service: 'web',
    description: 'Blockchain-based anti-counterfeiting and digital certificate solutions. We rebuilt its website and moved it off WordPress onto Cloudflare.',
    tags: ['Blockchain', 'Migration', 'Cloudflare']
  },
  {
    name: 'The Jungle Coffee',
    url: 'https://thejunglecoffee.com',
    logo: '/logos/jungle-coffee.jpg',
    category: 'Partner project',
    service: 'partners',
    description: 'Specialty green coffee sourced from Indonesia. A partner venture; we also built and run its website on Cloudflare.',
    tags: ['Partner', 'Coffee trade', 'Website']
  },
  {
    name: 'ChatterBooth',
    url: 'https://chatterbooth.app',
    logo: '/logos/chatterbooth.png',
    category: 'Partner project',
    service: 'partners',
    description: 'An app for anonymous voice and chat conversations, built by a founding team from Bandung, Indonesia. Rene advises the project.',
    tags: ['Advisory', 'App', 'Wellbeing']
  },
  {
    name: 'Heiko',
    url: 'https://heiko.my',
    logo: '/logos/heiko.png',
    category: 'Partner project',
    service: 'partners',
    description: 'ESG consultancy helping Malaysian SMEs with sustainability compliance and measurable impact.',
    tags: ['Partner', 'ESG', 'Sustainability']
  }
]

export const partners = [
  { name: 'MOR.org', url: 'https://mor.org', description: 'Our flagship open-source project focused on decentralized AI and blockchain solutions.' },
  { name: 'Morpheus.asia', url: 'https://morpheus.asia', description: 'Advanced AI and blockchain infrastructure for the Asia-Pacific region.' }
]

export const rene = {
  name: 'Rene Fischer-Bernard',
  role: 'Vice President, Inspirilab · Executive Director, LuxTag',
  headline: 'Technology consulting for organisations that want to use blockchain, AI and digital innovation properly.',
  bio: [
    'Rene is an international technopreneur with more than 15 years of experience across the blockchain and energy sectors. He co-founded LuxTag in 2017 and has led it since, after earlier work as a consultant and project manager for a range of organisations.',
    'He holds a German engineering diploma in Industrial Engineering from Hochschule Zittau/Görlitz and a HarvardX certificate in Energy Within Environmental Constraints. His focus is using blockchain to create real value, especially in industrial data integrity, renewable energy and sustainability.',
    'He is also active in the Morpheus decentralised AI community and ACCESS Blockchain Association Malaysia.'
  ],
  credentials: [
    '15+ years in blockchain and energy',
    'Co-founder of LuxTag (2017)',
    'Dipl.-Ing. Industrial Engineering, Hochschule Zittau/Görlitz',
    'Keynote speaker, World Blockchain Summit Kuala Lumpur'
  ],
  // photo: '/rene.jpg' // TODO: add once Rene sends a photo
}

export const offerings = [
  { icon: 'i-heroicons-light-bulb', title: 'Innovation & technology strategy', text: "Advice on applying emerging technology to sharpen your organisation's competitive edge." },
  { icon: 'i-heroicons-magnifying-glass', title: 'Web3 & blockchain idea reviews', text: 'A no-frills, honest assessment of your Web3 or blockchain idea before you invest in building it.' },
  { icon: 'i-heroicons-cube', title: 'Blockchain solutions for industry', text: 'Ready-to-deploy blockchain solutions for product authenticity, consumer engagement and tamper-proof certificates.' },
  { icon: 'i-heroicons-shield-check', title: 'Decentralised AI', text: 'Where AI and blockchain meet, and how decentralised AI can work for your organisation.' },
  { icon: 'i-heroicons-currency-dollar', title: 'DeFi advisory', text: 'Understanding decentralised finance and the opportunities it opens for you or your business.' },
  { icon: 'i-heroicons-microphone', title: 'Speaking & training', text: 'Keynotes, panels, workshops and hackathon mentoring on blockchain, crypto, DeFi and innovation.' }
]

export const topics = [
  'Introduction to blockchain & cryptocurrencies',
  'Industrial applications of blockchain',
  'DeFi, cryptocurrencies & stablecoins',
  'Startups & entrepreneurship',
  'Hackathons & innovation workshops'
]

export const talks = [
  { year: '2025', title: 'SuperDeAI Event', place: 'Kuala Lumpur, Malaysia' },
  { year: '2021', title: 'Symbol Hackathon, Mentor', place: 'Online' },
  { year: '2019', title: 'Keynote, World Blockchain Summit', place: 'Kuala Lumpur, Malaysia' },
  { year: '2018', title: 'Intro to Blockchain and Use-Cases', place: 'Moscow, Russia' }
]

// Management team. Roles are taken from each person's LinkedIn headline; confirm wording with them.
export const team = [
  { name: 'Rene Fischer-Bernard', initials: 'RF', role: 'Vice President', note: 'Blockchain, innovation and energy; co-founder of LuxTag', linkedin: 'https://www.linkedin.com/in/connectwithrene/' },
  { name: 'Marcus Toy', initials: 'MT', role: 'Serial founder', note: 'Building software products for 13+ years', linkedin: 'https://www.linkedin.com/in/marcus-toy/' },
  { name: 'Ana Mouratidou', initials: 'AM', role: 'Strategic Partnerships Lead', linkedin: 'https://www.linkedin.com/in/ana-mouratidou/' },
  { name: 'Elmi Haryadi', initials: 'EH', role: 'Strategy, Innovation & Risk Management', note: 'Safegate Labs', linkedin: 'https://www.linkedin.com/in/elmiharyadi/' }
]
