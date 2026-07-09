export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** Primary header navigation — order matches Website 2.0 mockup */
export const primaryNav: NavGroup[] = [
  {
    label: "Products",
    href: "/business-os",
    children: [
      { label: "Business OS", href: "/business-os", description: "Run your entire business" },
      { label: "Orbit", href: "/orbit", description: "Marketing & growth operating system" },
      { label: "Fluentra", href: "/fluentra", description: "Study abroad & immigration" },
      { label: "Nuri", href: "/nuri", description: "Neurodivergent care companion" },
      { label: "All Features", href: "/features", description: "Browse every capability" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "All Solutions", href: "/solutions", description: "Solutions by business type" },
      { label: "Industries", href: "/industries", description: "Sector-specific workflows" },
      { label: "Startups", href: "/solutions/startups", description: "Launch fast, scale smart" },
      { label: "Enterprise", href: "/solutions/enterprise", description: "Governance at scale" },
      { label: "Agencies", href: "/solutions/agencies", description: "Multi-client operations" },
      { label: "E-commerce", href: "/solutions/ecommerce", description: "Sell and fulfil globally" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform", description: "The complete Aarvanta platform" },
      { label: "Architecture", href: "/platform/architecture", description: "How the ecosystem connects" },
      { label: "Security", href: "/security", description: "Enterprise-grade protection" },
      { label: "Integrations", href: "/platform/integrations", description: "Connect your existing tools" },
      { label: "Automation", href: "/features/automation", description: "Workflows and triggers" },
      { label: "Developers", href: "/developers", description: "APIs, SDKs, and webhooks" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Resource Hub", href: "/resources", description: "Guides, templates, and more" },
      { label: "Blog", href: "/blog", description: "Insights and updates" },
      { label: "Case Studies", href: "/case-studies", description: "Customer success stories" },
      { label: "Documentation", href: "/resources/documentation", description: "Product documentation" },
      { label: "Academy", href: "/resources/academy", description: "Learn the platform" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    children: [
      { label: "Partner Program", href: "/partners", description: "Grow with Aarvanta" },
      { label: "Referral Program", href: "/partners/referral", description: "Earn by referring businesses" },
      { label: "Reseller Program", href: "/partners/reseller", description: "Sell under your brand" },
      { label: "Become a Partner", href: "/partners/apply", description: "Apply to join" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/about", description: "Our story and mission" },
      { label: "Careers", href: "/careers", description: "Join the team" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
      { label: "Security", href: "/security", description: "Trust centre" },
      { label: "Legal", href: "/terms", description: "Terms and policies" },
    ],
  },
];

/** Left icon rail — matches mockup quick-access icons */
export const sideNavLinks = [
  { label: "Home", href: "/", icon: "dashboard" as const },
  { label: "Business OS", href: "/business-os", icon: "business" as const },
  { label: "Analytics", href: "/features/analytics", icon: "analytics" as const },
  { label: "Inventory", href: "/features/inventory", icon: "inventory" as const },
  { label: "Fluentra", href: "/fluentra", icon: "education" as const },
  { label: "Partners", href: "/partners", icon: "users" as const },
  { label: "AI Workforce", href: "/features/ai-workforce", icon: "ai" as const },
  { label: "Automation", href: "/features/automation", icon: "workflow" as const },
  { label: "Industries", href: "/industries", icon: "building" as const },
];

/** Orbit cards around the hero sphere (static positions per mockup) */
export const orbitCards = [
  {
    name: "Orbit",
    tagline: "Marketing to Growth",
    color: "#2563EB",
    href: "/orbit",
    top: "4%",
    left: "52%",
  },
  {
    name: "Fluentra",
    tagline: "Education & Immigration",
    color: "#16A34A",
    href: "/fluentra",
    top: "38%",
    left: "72%",
  },
  {
    name: "Nuri",
    tagline: "Neurodivergent Care",
    color: "#7C3AED",
    href: "/nuri",
    top: "68%",
    left: "18%",
  },
  {
    name: "Business OS",
    tagline: "Run your entire business",
    color: "#1D4ED8",
    href: "/business-os",
    top: "32%",
    left: "2%",
  },
];

export const aiWorkforceBadge = {
  label: "AI Workforce",
  tagline: "Automate • Assist • Accelerate",
  href: "/features/ai-workforce",
};

/** @deprecated use orbitCards */
export const ecosystemProducts = orbitCards.map((c, i) => ({
  ...c,
  angle: i * 90,
}));

/** Homepage module cards */
export const platformModuleLinks = [
  { title: "Operations", description: "Streamline workflows, tasks, and daily business processes.", color: "moduleBlue" as const, href: "/features/workflows" },
  { title: "Finance", description: "Invoicing, accounting, and financial reporting in one place.", color: "moduleGreen" as const, href: "/features/accounting" },
  { title: "HR & Payroll", description: "Manage teams, payroll, and compliance effortlessly.", color: "modulePurple" as const, href: "/features/payroll" },
  { title: "CRM", description: "Track leads, nurture relationships, and close deals faster.", color: "moduleOrange" as const, href: "/features/crm" },
  { title: "Inventory", description: "Real-time stock management and supply chain visibility.", color: "moduleTeal" as const, href: "/features/inventory" },
  { title: "Analytics", description: "Data-driven insights to power smarter decisions.", color: "modulePink" as const, href: "/features/analytics" },
];

export const featurePages: Record<string, { title: string; description: string; product: string }> = {
  crm: {
    title: "CRM",
    description: "Capture leads, manage contacts, track opportunities, and strengthen customer relationships.",
    product: "Business OS",
  },
  accounting: {
    title: "Accounting",
    description: "Record transactions, generate invoices, reconcile payments, and prepare financial reports.",
    product: "Business OS",
  },
  payroll: {
    title: "Payroll & HR",
    description: "Manage employees, attendance, leave, salaries, deductions, and statutory contributions.",
    product: "Business OS",
  },
  inventory: {
    title: "Inventory",
    description: "Track stock levels, warehouses, purchase orders, transfers, and inventory valuation.",
    product: "Business OS",
  },
  analytics: {
    title: "Analytics",
    description: "Access dashboards, reports, KPIs, and operational insights from across the business.",
    product: "Business OS",
  },
  workflows: {
    title: "Operations & Workflows",
    description: "Replace repetitive manual work with configurable workflows, triggers, and approvals.",
    product: "Business OS",
  },
  automation: {
    title: "Automation",
    description: "Automate repetitive tasks across departments with intelligent triggers and notifications.",
    product: "Business OS",
  },
  "ai-workforce": {
    title: "AI Workforce",
    description: "Deploy intelligent assistants that draft content, analyse data, and accelerate routine work.",
    product: "Business OS",
  },
};

export const hubPages = {
  platform: {
    title: "The Aarvanta Platform",
    subtitle: "One connected ecosystem to run, grow, and transform your business — from operations to marketing, education, and care.",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Business OS", href: "/business-os" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "Developers", href: "/developers" },
    ],
  },
  businessOs: {
    title: "Business Operating System",
    subtitle: "Run CRM, finance, HR, inventory, projects, automation, communication, analytics, and more from one connected workspace.",
    links: [
      { label: "CRM", href: "/features/crm" },
      { label: "Finance & Accounting", href: "/features/accounting" },
      { label: "HR & Payroll", href: "/features/payroll" },
      { label: "Inventory", href: "/features/inventory" },
      { label: "Automation", href: "/features/automation" },
      { label: "AI Workforce", href: "/features/ai-workforce" },
    ],
  },
  orbit: {
    title: "Orbit — Growth Operating System",
    subtitle: "Marketing, content, campaigns, funnels, and analytics — unified for agencies and growth teams.",
    links: [
      { label: "Overview", href: "/orbit" },
      { label: "Content Studio", href: "/orbit/content-studio" },
      { label: "Campaign Automation", href: "/orbit/campaigns" },
      { label: "Analytics", href: "/features/analytics" },
    ],
  },
  fluentra: {
    title: "Fluentra",
    subtitle: "AI platform for study abroad consultants, immigration businesses, and education agencies.",
    links: [
      { label: "Student CRM", href: "/fluentra/student-crm" },
      { label: "IELTS Hub", href: "/fluentra/ielts" },
      { label: "Visa Management", href: "/fluentra/visa" },
      { label: "Agent Portal", href: "/fluentra/agents" },
    ],
  },
  nuri: {
    title: "Nuri",
    subtitle: "AI companion for neurodivergent children — supporting parents, schools, and therapists.",
    links: [
      { label: "For Parents", href: "/nuri/parents" },
      { label: "For Schools", href: "/nuri/schools" },
      { label: "Activities", href: "/nuri/activities" },
      { label: "Privacy & Safety", href: "/nuri/safety" },
    ],
  },
  features: {
    title: "Features",
    subtitle: "Every capability your business needs — each designed to work together inside the Aarvanta ecosystem.",
    links: Object.entries(featurePages).map(([slug, f]) => ({
      label: f.title,
      href: `/features/${slug}`,
    })),
  },
  resources: {
    title: "Resources",
    subtitle: "Guides, case studies, documentation, and learning paths to help you succeed with Aarvanta.",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Academy", href: "/resources/academy" },
    ],
  },
  partners: {
    title: "Partners",
    subtitle: "Referral, reseller, implementation, and technology partner programs for agencies and consultants.",
    links: [
      { label: "Partner Program", href: "/partners" },
      { label: "Referral Program", href: "/partners/referral" },
      { label: "Reseller Program", href: "/partners/reseller" },
      { label: "Apply to Partner", href: "/partners/apply" },
    ],
  },
  company: {
    title: "Company",
    subtitle: "Building business infrastructure for the next generation of companies.",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
  developers: {
    title: "Developers",
    subtitle: "APIs, SDKs, webhooks, and documentation to extend the Aarvanta platform.",
    links: [
      { label: "Getting Started", href: "/developers" },
      { label: "API Reference", href: "/developers/api" },
      { label: "Webhooks", href: "/developers/webhooks" },
      { label: "Marketplace", href: "/developers/marketplace" },
    ],
  },
};

export const footerNav = {
  products: [
    { label: "Business OS", href: "/business-os" },
    { label: "Orbit", href: "/orbit" },
    { label: "Fluentra", href: "/fluentra" },
    { label: "Nuri", href: "/nuri" },
    { label: "Features", href: "/features" },
  ],
  platform: [
    { label: "Platform Overview", href: "/platform" },
    { label: "Integrations", href: "/platform/integrations" },
    { label: "Developers", href: "/developers" },
    { label: "Security", href: "/security" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Academy", href: "/resources/academy" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

/** Child pages for dynamic route generation */
export const subPages: Record<string, Record<string, { title: string; description: string }>> = {
  platform: {
    architecture: {
      title: "Platform Architecture",
      description: "A modular, connected architecture designed to scale with your business across products and regions.",
    },
    integrations: {
      title: "Integrations",
      description: "Connect Aarvanta with your existing tools through APIs, webhooks, and pre-built integrations.",
    },
  },
  solutions: {
    startups: {
      title: "Solutions for Startups",
      description: "Launch quickly with essential business tools — CRM, finance, and automation in one workspace.",
    },
    enterprise: {
      title: "Enterprise Solutions",
      description: "Governance, security, APIs, and scalability for large distributed organisations.",
    },
    agencies: {
      title: "Solutions for Agencies",
      description: "Manage multiple clients, campaigns, and workflows from one connected platform.",
    },
    ecommerce: {
      title: "E-commerce Solutions",
      description: "Inventory, orders, marketing, and customer management for online retailers.",
    },
  },
  partners: {
    referral: {
      title: "Referral Program",
      description: "Earn rewards by referring businesses to the Aarvanta ecosystem.",
    },
    reseller: {
      title: "Reseller Program",
      description: "Offer Aarvanta products under your brand with white-label infrastructure.",
    },
    apply: {
      title: "Become a Partner",
      description: "Apply to join the Aarvanta partner network as a referral, reseller, or implementation partner.",
    },
  },
  resources: {
    documentation: {
      title: "Documentation",
      description: "Product guides, setup instructions, and technical reference for the Aarvanta platform.",
    },
    academy: {
      title: "Aarvanta Academy",
      description: "Structured learning paths to help your team adopt and master the platform.",
    },
  },
  orbit: {
    "content-studio": {
      title: "Content Studio",
      description: "Create, schedule, and publish content across channels from one creative workspace.",
    },
    campaigns: {
      title: "Campaign Automation",
      description: "Build and automate multi-channel marketing campaigns with Orbit.",
    },
  },
  fluentra: {
    "student-crm": {
      title: "Student CRM",
      description: "Manage student leads, applications, and communications in one place.",
    },
    ielts: {
      title: "IELTS Hub",
      description: "Tools and workflows for IELTS preparation and student progress tracking.",
    },
    visa: {
      title: "Visa Management",
      description: "Track visa applications, documents, and compliance across your pipeline.",
    },
    agents: {
      title: "Agent Portal",
      description: "Empower your agent network with shared tools, reporting, and collaboration.",
    },
  },
  nuri: {
    parents: {
      title: "Nuri for Parents",
      description: "Support neurodivergent children with guided activities and progress tracking at home.",
    },
    schools: {
      title: "Nuri for Schools",
      description: "Tools for educators to support inclusive learning and early intervention.",
    },
    activities: {
      title: "Activities",
      description: "Engaging, adaptive activities designed for neurodivergent learners.",
    },
    safety: {
      title: "Privacy & Safety",
      description: "How Nuri protects children, families, and sensitive information.",
    },
  },
  developers: {
    api: {
      title: "API Reference",
      description: "REST APIs to integrate Aarvanta with your applications and workflows.",
    },
    webhooks: {
      title: "Webhooks",
      description: "Receive real-time events from the Aarvanta platform in your systems.",
    },
    marketplace: {
      title: "Marketplace",
      description: "Publish extensions, templates, and integrations to the Aarvanta marketplace.",
    },
  },
};
