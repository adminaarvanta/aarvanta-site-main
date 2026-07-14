/** Homepage + marketing content — AI Operating System brief */

export const siteConfig = {
  name: "AARVANTA",
  tagline: "One AI Operating System for Your Entire Business",
  description:
    "Everything your business needs—CRM, Sales, Marketing, Websites, AI Employees, Automation, Communication, Analytics, and more—in one connected platform.",
  url: "https://aarvanta.co",
};

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

/** @deprecated Use primaryNav from site-navigation.ts */
export const navLinks: NavLink[] = [];

export const homeHero = {
  headline: "Run Your Entire Business on One AI Operating System",
  subheadline:
    "Everything your business needs—CRM, Sales, Marketing, Websites, AI Employees, Automation, Communication, Analytics, and more—in one connected platform.",
  primaryCta: { label: "Start Free Trial", href: "/book-demo" },
  secondaryCta: { label: "Book Live Demo", href: "/book-demo" },
  trustLine: "Trusted by growing businesses",
  trialNote: "No credit card required • 15-day free trial",
};

export const heroFlowSteps = [
  "Website",
  "Lead",
  "CRM",
  "AI Employee",
  "Proposal",
  "Invoice",
  "Analytics",
];

export const problemSection = {
  headline: "Businesses are drowning in disconnected software.",
  intro: "Today, businesses pay for:",
  tools: [
    "CRM",
    "Email Marketing",
    "WhatsApp Tools",
    "Automation",
    "Website Builder",
    "Forms",
    "AI Tools",
    "Scheduling",
    "Analytics",
    "Support",
    "Finance",
    "HR",
  ],
  closing:
    "Each tool has its own login, data, and workflow. That creates chaos.",
};

export const solutionSection = {
  eyebrow: "Meet Aarvanta.",
  pillars: ["One login.", "One database.", "One AI.", "One Operating System."],
  body: "Instead of buying ten different software products, run everything from one platform.",
};

export const businessFlow = [
  "Visitor",
  "Website",
  "LeadOS",
  "CRMOS",
  "AI Sales Executive",
  "Proposal",
  "Invoice",
  "Payment",
  "Customer Success",
  "Analytics",
];

export const coreProducts = [
  {
    name: "LeadOS",
    description: "Capture every opportunity.",
    href: "/features/crm",
  },
  {
    name: "CRMOS",
    description: "Manage customers effortlessly.",
    href: "/features/crm",
  },
  {
    name: "AI Workforce",
    description: "Your AI sales, marketing, HR, and support team.",
    href: "/ai-workforce",
  },
  {
    name: "WebsiteOS",
    description: "Launch stunning websites in minutes.",
    href: "/platform",
  },
  {
    name: "MarketingOS",
    description: "Create and publish content automatically.",
    href: "/orbit",
  },
  {
    name: "FinanceOS",
    description: "Invoices, payments, accounting.",
    href: "/features/accounting",
    comingSoon: true,
  },
  {
    name: "HR OS",
    description: "Recruitment. Attendance. Payroll.",
    href: "/features/payroll",
  },
  {
    name: "Communication Hub",
    description: "Email. WhatsApp. Voice. SMS. One inbox.",
    href: "/platform",
  },
];

export const aiWorkforceSection = {
  headline: "Meet Your Digital Team.",
  subheadline: "Each role comes with tasks, automation, memory, reports — and is available 24/7.",
  roles: [
    "AI Sales Executive",
    "AI Customer Success Manager",
    "AI HR Manager",
    "AI Accountant",
    "AI Marketing Manager",
    "AI Operations Manager",
    "AI Legal Assistant",
    "AI Business Analyst",
  ],
  traits: ["Tasks", "Automation", "Memory", "Reports", "Available 24/7"],
};

export const audienceCards = [
  {
    title: "Startups",
    description: "Launch fast with one platform instead of a stack of tools.",
    href: "/solutions/startups",
  },
  {
    title: "SMEs",
    description: "Run sales, ops, and delivery without tool chaos.",
    href: "/solutions/enterprise",
  },
  {
    title: "Agencies",
    description: "Manage clients and campaigns from one connected workspace.",
    href: "/solutions/agencies",
  },
  {
    title: "Consultants",
    description: "Stay organised, follow up automatically, and never lose a lead.",
    href: "/solutions",
  },
];

export const whyOutcomes = [
  "Save 20+ hours every week.",
  "Replace multiple subscriptions.",
  "Grow without hiring immediately.",
  "Never lose a lead.",
  "Stop doing repetitive work manually.",
  "Scale globally.",
];

export const partnerSection = {
  headline: "Become an Aarvanta Partner.",
  body: "Recurring commissions. Training. Dedicated support. Global opportunities.",
  types: ["Resellers", "White Label", "Consultants", "Franchise Partners"],
  cta: { label: "Become a Partner", href: "/partners/apply" },
};

export const trustSection = {
  headline: "Built for trust.",
  logos: ["Dubai", "NHS", "EMAAR", "UNICEF", "IESE", "Accenture", "Greenpeace"],
  badges: ["Security", "GDPR", "99.9% uptime", "Enterprise-ready"],
  cta: { label: "See case studies", href: "/case-studies" },
};

export const trustLogos = trustSection.logos;
export const trustBarText = "Trusted by growing businesses";

export const pricingSection = {
  headline: "Simple. Transparent.",
  disclaimer: "15-day free trial. No credit card required.",
};

export const pricingTiers = [
  {
    name: "Starter",
    price: "£99",
    period: "/month",
    description: "For small teams getting started.",
    features: [
      "Core CRM & LeadOS",
      "Communication Hub",
      "1 AI Employee",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "£299",
    period: "/month",
    description: "For businesses ready to scale.",
    features: [
      "Full product access",
      "AI Workforce roles",
      "Automation & analytics",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "£699",
    period: "/month",
    description: "For multi-team operations.",
    features: [
      "Advanced AI Workforce",
      "Multi-location support",
      "Custom workflows",
      "Dedicated onboarding",
    ],
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    period: "",
    description: "For organisations that need scale.",
    features: [
      "Custom integrations",
      "Security & compliance",
      "SLA & account manager",
      "White-label options",
    ],
  },
];

export const finalCta = {
  headline: "Ready to Run Your Business Smarter?",
  body: "Join businesses replacing disconnected software with one intelligent operating system.",
  primaryCta: { label: "Start Free Trial", href: "/book-demo" },
  secondaryCta: { label: "Book Demo", href: "/book-demo" },
};

/* —— retained for existing inner pages —— */

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

export const footerLegalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const products = [
  {
    id: "leados",
    name: "Aarvanta LeadOS",
    shortName: "LeadOS",
    description: "Capture every opportunity.",
    features: ["Lead capture", "AI scoring", "Outreach", "CRM sync"],
    icon: "lead",
  },
  {
    id: "crmos",
    name: "Aarvanta CRMOS",
    shortName: "CRMOS",
    description: "Manage customers effortlessly.",
    features: ["Pipeline", "Contacts", "Follow-ups", "Reports"],
    icon: "crm",
  },
  {
    id: "aiworkforce",
    name: "AI Workforce",
    shortName: "AI Workforce",
    description: "Your AI sales, marketing, HR, and support team.",
    features: ["Sales", "Support", "HR", "Ops"],
    icon: "lead",
  },
  {
    id: "websiteos",
    name: "WebsiteOS",
    shortName: "WebsiteOS",
    description: "Launch stunning websites in minutes.",
    features: ["Templates", "SEO", "Forms", "Analytics"],
    icon: "site",
  },
  {
    id: "marketingos",
    name: "MarketingOS",
    shortName: "MarketingOS",
    description: "Create and publish content automatically.",
    features: ["Content", "Social", "Campaigns", "Calendar"],
    icon: "content",
  },
  {
    id: "financeos",
    name: "FinanceOS",
    shortName: "FinanceOS",
    description: "Invoices, payments, accounting. Coming Soon.",
    features: ["Invoices", "Payments", "Accounting"],
    icon: "crm",
  },
];

export const featureGrid = [
  { title: "Never lose a lead.", description: "Every enquiry is captured and followed up.", icon: "lead" },
  { title: "Never lose another customer conversation.", description: "One inbox for email, WhatsApp, voice, and SMS.", icon: "communication" },
  { title: "Stop doing repetitive work manually.", description: "Your digital team handles follow-ups and routines.", icon: "operations" },
  { title: "Launch websites built to convert.", description: "WebsiteOS gets you live in minutes.", icon: "website" },
];

export const industries = [
  { title: "Startups", description: "One platform instead of a stack of tools.", icon: "agency" },
  { title: "SMEs", description: "Run sales and ops without tool chaos.", icon: "realestate" },
  { title: "Agencies", description: "Multi-client delivery from one workspace.", icon: "agency" },
  { title: "Consultants", description: "Stay organised and never lose a lead.", icon: "legal" },
];

export const partnerFeatures = [
  "Resellers",
  "White Label",
  "Consultants",
  "Franchise Partners",
  "Recurring commissions",
  "Training & dedicated support",
];

export const caseStudies = [
  {
    outcome: "Reduced missed customer enquiries by 72% using automated follow-up.",
    industry: "Healthcare",
    metric: "72%",
    metricLabel: "Fewer missed enquiries",
  },
  {
    outcome: "Automated lead follow-ups for a consulting business, improving conversions.",
    industry: "Consulting",
    metric: "3.2×",
    metricLabel: "Conversion lift",
  },
  {
    outcome: "Deployed AI reception, reducing front-desk workload.",
    industry: "Professional Services",
    metric: "60%",
    metricLabel: "Less desk workload",
  },
];

export const caseStudiesHeadline = "Focused on outcomes, not buzzwords.";

export const solutions = [
  {
    title: "Startups",
    description: "Launch fast with one operating system.",
    products: ["LeadOS", "CRMOS", "AI Workforce"],
  },
  {
    title: "SMEs",
    description: "Replace disconnected tools with one platform.",
    products: ["CRMOS", "FinanceOS", "Communication Hub"],
  },
  {
    title: "Agencies",
    description: "Deliver for clients under one connected stack.",
    products: ["MarketingOS", "WebsiteOS", "AI Workforce"],
  },
  {
    title: "Consultants",
    description: "Never lose a lead or a conversation.",
    products: ["LeadOS", "CRMOS", "Communication Hub"],
  },
];

export const aboutValues = [
  {
    title: "Practical Innovation",
    description: "Technology should solve operational problems, not create complexity.",
  },
  {
    title: "Human-Centered AI",
    description: "AI should improve communication and decision-making, not replace authenticity.",
  },
  {
    title: "Scalable Systems",
    description: "Every product is designed for long-term operational scale.",
  },
];

export const ecosystemFlow = businessFlow;

export const blogPosts = [
  {
    slug: "ai-lead-generation-systems",
    title: "Building Lead Systems That Actually Convert",
    excerpt: "How to capture every opportunity and follow up automatically.",
    category: "Lead Generation",
    date: "2026-05-15",
  },
  {
    slug: "whatsapp-automation-guide",
    title: "Never Lose Another Customer Conversation",
    excerpt: "One inbox for WhatsApp, email, voice, and SMS.",
    category: "Communication",
    date: "2026-05-08",
  },
  {
    slug: "voice-ai-reception",
    title: "Your AI Sales Executive Follows Up Automatically",
    excerpt: "How digital team members reduce missed enquiries.",
    category: "AI Workforce",
    date: "2026-04-28",
  },
  {
    slug: "white-label-ai-infrastructure",
    title: "Become an Aarvanta Partner",
    excerpt: "Resellers, white label, and recurring commissions.",
    category: "Partner Program",
    date: "2026-04-20",
  },
];

export const seoKeywords = [
  "AI operating system for business",
  "business OS platform",
  "AI workforce",
  "CRM and sales automation UK",
  "white-label business software",
];

export const serviceOptions = [
  "LeadOS",
  "CRMOS",
  "AI Workforce",
  "WebsiteOS",
  "MarketingOS",
  "FinanceOS",
  "Full Platform",
  "Partner Program",
];

export const industryOptions = industries.map((i) => i.title);

export const teamSizeOptions = ["1–5", "6–20", "21–50", "51–200", "200+"];

export const values = aboutValues;

/** legacy exports kept for older sections */
export const platformModules = {
  headline: "Core Products",
  subheadline: "Everything you need in one connected platform.",
  modules: [] as { title: string; description: string; color: string; href: string }[],
};

export const platformStats = [
  { value: "99.9%", label: "Uptime", detail: "Enterprise-ready", detailColor: undefined as "success" | undefined },
  { value: "15", label: "Day free trial", detail: "No credit card", detailColor: undefined as "success" | undefined },
  { value: "24/7", label: "Digital team", detail: "Always available", detailColor: "success" as const },
];

export const brandingPillars = [
  { title: "GLOBAL", description: "Built for businesses around the world.", icon: "globe" as const },
  { title: "INTELLIGENT", description: "Your digital team works around the clock.", icon: "chip" as const },
  { title: "SECURE", description: "GDPR-ready and enterprise-grade.", icon: "shield" as const },
  { title: "SCALABLE", description: "Designed to grow with your ambition.", icon: "chart" as const },
];

export const homePositioning = {
  headline: problemSection.headline,
  disconnected: problemSection.tools.map((t) => t),
  closing: problemSection.closing,
};

export const uspContent = {
  headline: solutionSection.eyebrow,
  intro: solutionSection.pillars.join(" "),
  body: solutionSection.body,
};

export const globalSection = {
  headline: "Built to scale globally.",
  body: "One platform designed for businesses that operate across teams, markets, and time zones.",
};
