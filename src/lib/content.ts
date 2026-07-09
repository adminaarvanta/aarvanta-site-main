export const siteConfig = {
  name: "AARVANTA",
  tagline: "The Business OS for a Connected World",
  description:
    "AARVANTA unifies operations, finance, CRM, HR, inventory, and AI automation into one intelligent platform — built to run, grow, and transform your entire business.",
  url: "https://aarvanta.com",
};

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

/** @deprecated Use primaryNav from site-navigation.ts */
export const navLinks: NavLink[] = [];

export const homeHero = {
  badge: "The Business OS for a Connected World",
  headline: "Run. Grow. Transform.",
  headlineAccent: "All in One Place.",
  subheadline:
    "Aarvanta unifies every part of your business—from operations and teams to customers and growth—so you can focus on what truly matters.",
  primaryCta: { label: "Explore Platform", href: "/platform" },
  secondaryCta: { label: "How It Works", href: "/business-os" },
};

export const orbitProducts = [] as never[];

export const platformModules = {
  headline: "One Platform. Endless Possibilities.",
  subheadline:
    "Powerful modules, seamless integrations, and intelligent automation working together.",
  modules: [] as { title: string; description: string; color: string; href: string }[],
};

export const platformStats = [
  {
    value: "14,250+",
    label: "Businesses on Aarvanta",
    detail: "Across 120+ Countries",
  },
  {
    value: "2.8M+",
    label: "Processes Automated",
    detail: "+ 32% this month",
    detailColor: "success" as const,
  },
  {
    value: "12.5M+",
    label: "Time Saved",
    detail: "Hours across all businesses",
  },
];

export const brandingPillars = [
  {
    title: "GLOBAL",
    description: "Built for businesses around the world.",
    icon: "globe" as const,
  },
  {
    title: "INTELLIGENT",
    description: "AI-powered automation that drives growth.",
    icon: "chip" as const,
  },
  {
    title: "SECURE",
    description: "Enterprise-grade security you can trust.",
    icon: "shield" as const,
  },
  {
    title: "SCALABLE",
    description: "Designed to grow with your ambition.",
    icon: "chart" as const,
  },
];

export const trustLogos = [
  "Dubai",
  "NHS",
  "EMAAR",
  "UNICEF",
  "IESE",
  "Accenture",
  "Greenpeace",
];

export const trustBarText = "Trusted by businesses worldwide";

export const homePositioning = {
  headline: "More Than AI Tools. Business Infrastructure.",
  disconnected: [
    "One platform for CRM.",
    "Another for communication.",
    "Another for websites.",
    "Another for automation.",
  ],
  closing:
    "AARVANTA brings everything together into one intelligent ecosystem designed to scale modern businesses.",
};

export const uspContent = {
  headline: "Built As One Connected AI Ecosystem.",
  intro:
    "Most AI platforms operate independently. AARVANTA products are designed to communicate with each other seamlessly.",
  body: "A lead generated through LeadOS can automatically trigger WhatsApp conversations, AI voice calls, CRM workflows, analytics tracking, and conversion funnels — without manual intervention.",
};

export const partnerSection = {
  headline: "Build Your Own AI Business Under Your Brand.",
  body: "AARVANTA's white-label infrastructure allows agencies, consultants, and entrepreneurs to offer advanced AI systems under their own branding while we power the backend technology.",
  cta: { label: "Become a Partner", href: "/partners/apply" },
};

export const caseStudiesHeadline = "Focused on Outcomes, Not Buzzwords.";

export const globalSection = {
  headline: "Built in the UK. Designed for Global Scale.",
  body: "AARVANTA combines global infrastructure, AI systems, automation, and scalable architecture to support businesses and partners across international markets.",
};

export const pricingSection = {
  headline: "Flexible for Businesses. Scalable for Partners.",
  disclaimer: "Custom pricing based on scale and requirements.",
};

export const finalCta = {
  headline: "Ready to Run Your Business in One Place?",
  body: "Join thousands of businesses worldwide using AARVANTA to automate operations, unify teams, and scale with confidence.",
  primaryCta: { label: "Start Free", href: "/book-demo" },
  secondaryCta: { label: "Book a Demo", href: "/book-demo" },
};

export const aboutPage = {
  headline: "Building Infrastructure for the AI-Driven Business Era.",
  intro: "AARVANTA was founded with a simple observation:",
  problem:
    "Most businesses are overwhelmed by fragmented software, disconnected systems, and inefficient operations.",
  mission:
    "We're building a connected AI ecosystem designed to simplify growth, automate operations, and create scalable business infrastructure for the next generation of companies.",
};

export const contactPage = {
  headline: "Let's Build Smarter Business Infrastructure.",
  formCta: "Schedule a Strategy Call",
};

export const footerProductLinks = [
  { label: "LeadOS", href: "/products#leados" },
  { label: "WhatsAppOS", href: "/products#whatsappos" },
  { label: "VoiceOS", href: "/products#voiceos" },
  { label: "SiteOS", href: "/products#siteos" },
  { label: "CRMOS", href: "/products#crmos" },
  { label: "ContentOS", href: "/products#contentos" },
];

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Partner Program", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "GDPR", href: "/gdpr" },
  { label: "DPA", href: "/dpa" },
  { label: "Acceptable Use", href: "/acceptable-use" },
  { label: "AI Policy", href: "/ai-policy" },
  { label: "Security", href: "/security" },
  { label: "Refunds", href: "/refunds" },
  { label: "Partner Terms", href: "/partner-terms" },
  { label: "Affiliate Terms", href: "/affiliate-terms" },
  { label: "Subscription Agreement", href: "/subscription-agreement" },
];

export const products = [
  {
    id: "leados",
    name: "Aarvanta LeadOS",
    shortName: "LeadOS",
    description:
      "AI-powered lead generation infrastructure designed to identify, score, and engage high-value prospects automatically.",
    features: [
      "Lead scraping",
      "AI scoring",
      "Outreach automation",
      "CRM syncing",
      "Hyperlocal targeting",
    ],
    icon: "lead",
  },
  {
    id: "whatsappos",
    name: "Aarvanta WhatsAppOS",
    shortName: "WhatsAppOS",
    description:
      "Turn WhatsApp into a fully automated business communication and conversion engine.",
    features: [
      "AI conversations",
      "Smart follow-ups",
      "CRM integration",
      "Appointment booking",
      "Customer memory",
    ],
    icon: "whatsapp",
  },
  {
    id: "voiceos",
    name: "Aarvanta VoiceOS",
    shortName: "VoiceOS",
    description:
      "AI voice agents and reception systems that answer, qualify, and convert customers 24/7.",
    features: [
      "AI receptionist",
      "Multilingual calls",
      "Appointment handling",
      "Emotional intelligence",
      "CRM logging",
    ],
    icon: "voice",
  },
  {
    id: "siteos",
    name: "Aarvanta SiteOS",
    shortName: "SiteOS",
    description:
      "AI-generated business websites engineered for speed, SEO, and conversion.",
    features: [
      "AI content",
      "SEO optimization",
      "Lead funnels",
      "Automation integration",
      "Conversion analytics",
    ],
    icon: "site",
  },
  {
    id: "contentos",
    name: "Aarvanta ContentOS",
    shortName: "ContentOS",
    description:
      "AI-powered social media and content generation system built for growth-focused brands.",
    features: [
      "Reels",
      "Carousels",
      "AI scripts",
      "Content calendars",
      "Trend intelligence",
    ],
    icon: "content",
  },
  {
    id: "crmos",
    name: "Aarvanta CRMOS",
    shortName: "CRMOS",
    description:
      "An intelligent operating system managing leads, teams, sales, finance, automation, and analytics from one dashboard.",
    features: [
      "Unified dashboard",
      "Team management",
      "Sales pipeline",
      "Finance tracking",
      "Automation hub",
      "Analytics",
    ],
    icon: "crm",
  },
];

export const featureGrid = [
  {
    title: "AI Lead Systems",
    description: "Find, qualify, and nurture leads automatically.",
    icon: "lead",
  },
  {
    title: "AI Communication",
    description:
      "WhatsApp AI, Voice AI, and intelligent customer conversations.",
    icon: "communication",
  },
  {
    title: "AI Operations",
    description: "Automate workflows, teams, reporting, and follow-ups.",
    icon: "operations",
  },
  {
    title: "AI Business Websites",
    description:
      "High-converting websites built for growth, not just design.",
    icon: "website",
  },
];

export const industries = [
  {
    title: "Clinics & Healthcare",
    description:
      "Automate appointments, follow-ups, and lead nurturing.",
    icon: "healthcare",
  },
  {
    title: "Real Estate",
    description: "AI lead qualification and automated client engagement.",
    icon: "realestate",
  },
  {
    title: "Education & Coaching",
    description:
      "Scale communication, admissions, and student onboarding.",
    icon: "education",
  },
  {
    title: "Restaurants & Hospitality",
    description: "Bookings, customer engagement, and retention systems.",
    icon: "hospitality",
  },
  {
    title: "Agencies & Consultants",
    description: "White-label AI infrastructure for client delivery.",
    icon: "agency",
  },
  {
    title: "Immigration & Legal",
    description: "AI-powered intake systems and lead workflows.",
    icon: "legal",
  },
];

export const partnerFeatures = [
  "White-label dashboards",
  "Custom domains",
  "Partner pricing",
  "API access",
  "Recurring revenue model",
  "Multi-client management",
];

export const caseStudies = [
  {
    outcome:
      "Reduced missed customer enquiries by 72% using AI communication systems.",
    industry: "Healthcare",
    metric: "72%",
    metricLabel: "Reduction in missed enquiries",
  },
  {
    outcome:
      "Automated lead follow-ups for a consulting business, improving conversions significantly.",
    industry: "Consulting",
    metric: "3.2×",
    metricLabel: "Improvement in conversion rate",
  },
  {
    outcome:
      "Deployed AI voice reception system reducing front-desk workload.",
    industry: "Professional Services",
    metric: "60%",
    metricLabel: "Reduction in front-desk workload",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    description: "For small businesses.",
    features: [
      "Core AI communication tools",
      "Basic automation workflows",
      "Single location support",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For scaling companies.",
    features: [
      "Full product ecosystem access",
      "Advanced automation",
      "Multi-channel integration",
      "Priority support",
      "Analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For multi-location businesses and agencies.",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "Advanced security & compliance",
      "Multi-location management",
      "Custom reporting",
    ],
  },
  {
    name: "White-Label",
    description: "For partners and resellers.",
    features: [
      "Full white-label platform",
      "Partner pricing",
      "API access",
      "Multi-client management",
      "Recurring revenue model",
    ],
  },
];

export const solutions = [
  {
    title: "Lead Generation Infrastructure",
    description:
      "End-to-end systems to find, score, and convert high-value prospects.",
    products: ["LeadOS", "CRMOS"],
  },
  {
    title: "Customer Communication",
    description:
      "Unified AI across WhatsApp, voice, and messaging channels.",
    products: ["WhatsAppOS", "VoiceOS"],
  },
  {
    title: "Digital Presence & Content",
    description:
      "Websites and content systems engineered for growth and conversion.",
    products: ["SiteOS", "ContentOS"],
  },
  {
    title: "Business Operations",
    description:
      "Centralised CRM, automation, and analytics for operational scale.",
    products: ["CRMOS"],
  },
];

export const aboutValues = [
  {
    title: "Practical Innovation",
    description:
      "Technology should solve operational problems, not create complexity.",
  },
  {
    title: "Human-Centered AI",
    description:
      "AI should improve communication and decision-making, not replace authenticity.",
  },
  {
    title: "Scalable Systems",
    description:
      "Every product is designed for long-term operational scale.",
  },
];

export const ecosystemFlow = [
  "LeadOS",
  "CRMOS",
  "WhatsAppOS",
  "VoiceOS",
  "Automation Engine",
  "Analytics",
];

export const blogPosts = [
  {
    slug: "ai-lead-generation-systems",
    title: "Building AI Lead Generation Systems That Actually Convert",
    excerpt:
      "Operational insights on designing lead systems that qualify prospects automatically and integrate with your sales workflow.",
    category: "Lead Generation",
    date: "2026-05-15",
  },
  {
    slug: "whatsapp-automation-guide",
    title: "WhatsApp AI Automation: A Practical Implementation Guide",
    excerpt:
      "How to turn WhatsApp into a conversion engine without losing the human touch in customer conversations.",
    category: "Automation",
    date: "2026-05-08",
  },
  {
    slug: "voice-ai-reception",
    title: "Deploying AI Voice Reception: What Works in Real Businesses",
    excerpt:
      "Case study insights on reducing front-desk workload while improving customer response times.",
    category: "Case Study",
    date: "2026-04-28",
  },
  {
    slug: "white-label-ai-infrastructure",
    title: "White-Label AI Infrastructure for Agencies",
    excerpt:
      "How agencies can build recurring revenue by offering AI systems under their own brand.",
    category: "Partner Program",
    date: "2026-04-20",
  },
];

export const seoKeywords = [
  "AI automation company UK",
  "AI business systems",
  "AI lead generation",
  "WhatsApp AI automation",
  "AI voice receptionist",
  "AI CRM system",
  "white-label AI solutions",
  "AI infrastructure company",
];

export const serviceOptions = [
  "LeadOS",
  "WhatsAppOS",
  "VoiceOS",
  "SiteOS",
  "ContentOS",
  "CRMOS",
  "Full Ecosystem",
  "White-Label Partnership",
];

export const industryOptions = industries.map((i) => i.title);

export const teamSizeOptions = [
  "1–5",
  "6–20",
  "21–50",
  "51–200",
  "200+",
];

/** @alias aboutValues */
export const values = aboutValues;
