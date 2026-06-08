export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "group"; title: string; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export const legalLastUpdated = "8 June 2026";

export const termsSections: LegalSection[] = [
  {
    title: "Introduction",
    blocks: [
      {
        kind: "paragraph",
        text: "These Terms & Conditions govern access to and use of:",
      },
      {
        kind: "list",
        items: [
          "aarvanta.co",
          "Aarvanta OS",
          "Associated applications",
          "Services provided by Aarvanta Ltd",
        ],
      },
      {
        kind: "paragraph",
        text: "By accessing or using our services, you agree to these Terms.",
      },
    ],
  },
  {
    title: "Eligibility",
    blocks: [
      { kind: "paragraph", text: "You must:" },
      {
        kind: "list",
        items: [
          "Be at least 18 years old",
          "Have legal capacity to enter contracts",
          "Provide accurate information",
        ],
      },
    ],
  },
  {
    title: "Account Registration",
    blocks: [
      { kind: "paragraph", text: "Users are responsible for:" },
      {
        kind: "list",
        items: [
          "Maintaining account security",
          "Protecting passwords",
          "Activities conducted under their account",
        ],
      },
      {
        kind: "paragraph",
        text: "You must notify us immediately of unauthorized access.",
      },
    ],
  },
  {
    title: "Services",
    blocks: [
      { kind: "paragraph", text: "Aarvanta may provide:" },
      {
        kind: "list",
        items: [
          "CRM Software",
          "AI Workforce Solutions",
          "Communication Systems",
          "Automation Tools",
          "Analytics Services",
          "White Label Services",
          "Marketplace Features",
          "Professional Services",
        ],
      },
      { kind: "paragraph", text: "Features may change without notice." },
    ],
  },
  {
    title: "Subscription & Billing",
    blocks: [
      { kind: "paragraph", text: "Where applicable:" },
      {
        kind: "list",
        items: [
          "Fees are payable in advance",
          "Payments are processed via approved providers",
          "Failure to pay may result in suspension or termination",
        ],
      },
      {
        kind: "paragraph",
        text: "All fees are exclusive of applicable taxes unless stated otherwise.",
      },
    ],
  },
  {
    title: "Acceptable Use",
    blocks: [
      { kind: "paragraph", text: "Users must not:" },
      {
        kind: "list",
        items: [
          "Violate laws",
          "Infringe intellectual property",
          "Distribute malware",
          "Attempt unauthorized access",
          "Abuse platform resources",
          "Interfere with system operation",
          "Conduct fraudulent activity",
        ],
      },
    ],
  },
  {
    title: "AI Services Disclaimer",
    blocks: [
      { kind: "paragraph", text: "AI-generated outputs:" },
      {
        kind: "list",
        items: [
          "May contain errors",
          "May be incomplete",
          "Should not be relied upon as legal, financial, medical, or professional advice",
        ],
      },
      {
        kind: "paragraph",
        text: "Users remain responsible for reviewing outputs before use.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    blocks: [
      { kind: "paragraph", text: "All rights relating to:" },
      {
        kind: "list",
        items: [
          "Software",
          "Branding",
          "Documentation",
          "Content",
          "Designs",
          "Features",
        ],
      },
      {
        kind: "paragraph",
        text: "remain the exclusive property of Aarvanta Ltd unless otherwise agreed.",
      },
    ],
  },
  {
    title: "User Content",
    blocks: [
      {
        kind: "paragraph",
        text: "Users retain ownership of content they submit.",
      },
      {
        kind: "paragraph",
        text: "Users grant Aarvanta a limited license to process content solely for service delivery.",
      },
    ],
  },
  {
    title: "Confidentiality",
    blocks: [
      {
        kind: "paragraph",
        text: "Both parties agree to protect confidential information disclosed during the course of the relationship.",
      },
    ],
  },
  {
    title: "Availability",
    blocks: [
      {
        kind: "paragraph",
        text: "We do not guarantee uninterrupted availability.",
      },
      {
        kind: "paragraph",
        text: "Services may be modified, suspended, or discontinued.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    blocks: [
      {
        kind: "paragraph",
        text: "To the maximum extent permitted by law:",
      },
      { kind: "paragraph", text: "Aarvanta shall not be liable for:" },
      {
        kind: "list",
        items: [
          "Indirect damages",
          "Loss of profits",
          "Business interruption",
          "Loss of data",
          "Consequential losses",
        ],
      },
      {
        kind: "paragraph",
        text: "Nothing excludes liability that cannot legally be excluded under English law.",
      },
    ],
  },
  {
    title: "Indemnity",
    blocks: [
      {
        kind: "paragraph",
        text: "Users agree to indemnify Aarvanta against claims arising from:",
      },
      {
        kind: "list",
        items: [
          "Misuse of services",
          "Breach of these Terms",
          "Violation of laws",
          "Third-party rights infringement",
        ],
      },
    ],
  },
  {
    title: "Suspension & Termination",
    blocks: [
      {
        kind: "paragraph",
        text: "We may suspend or terminate access where:",
      },
      {
        kind: "list",
        items: [
          "Terms are breached",
          "Fraud is suspected",
          "Security risks arise",
          "Payments remain overdue",
        ],
      },
    ],
  },
  {
    title: "Governing Law",
    blocks: [
      {
        kind: "paragraph",
        text: "These Terms are governed by the laws of England and Wales.",
      },
      {
        kind: "paragraph",
        text: "Courts of England and Wales shall have exclusive jurisdiction.",
      },
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "Introduction",
    blocks: [
      {
        kind: "paragraph",
        text: 'Aarvanta Ltd ("Aarvanta", "we", "us", "our") respects your privacy and is committed to protecting your personal data.',
      },
      {
        kind: "paragraph",
        text: "This Privacy Policy explains how we collect, use, store, disclose, and protect information when you:",
      },
      {
        kind: "list",
        items: [
          "Visit our website",
          "Create an account",
          "Use Aarvanta OS",
          "Contact us",
          "Subscribe to services",
          "Participate in events, webinars, or marketing activities",
          "Engage with our partners or affiliates",
        ],
      },
      { kind: "paragraph", text: "This Policy is designed to comply with:" },
      {
        kind: "list",
        items: [
          "UK GDPR",
          "Data Protection Act 2018",
          "PECR (Privacy and Electronic Communications Regulations)",
        ],
      },
    ],
  },
  {
    title: "Data Controller",
    blocks: [
      { kind: "paragraph", text: "Aarvanta Ltd" },
      { kind: "paragraph", text: "Email: privacy@aarvanta.co" },
      { kind: "paragraph", text: "Website: aarvanta.co" },
      {
        kind: "paragraph",
        text: "For data protection enquiries: privacy@aarvanta.co",
      },
    ],
  },
  {
    title: "Information We Collect",
    blocks: [
      {
        kind: "group",
        title: "Information You Provide",
        items: [
          "Name",
          "Company name",
          "Job title",
          "Email address",
          "Telephone number",
          "Billing information",
          "Account credentials",
          "Support requests",
          "Communications with us",
        ],
      },
      {
        kind: "group",
        title: "Information Collected Automatically",
        items: [
          "IP address",
          "Browser type",
          "Device information",
          "Operating system",
          "Pages visited",
          "Session information",
          "Referral sources",
          "Cookies and analytics data",
        ],
      },
      {
        kind: "group",
        title: "Information Processed Through Aarvanta OS",
        items: [
          "Depending on services used:",
          "CRM records",
          "Customer contacts",
          "Communications",
          "Marketing data",
          "Workflow information",
          "User-generated content",
        ],
      },
    ],
  },
  {
    title: "Lawful Basis for Processing",
    blocks: [
      { kind: "paragraph", text: "We process personal data based on:" },
      {
        kind: "group",
        title: "Contract",
        items: ["Providing services requested by you."],
      },
      {
        kind: "group",
        title: "Legitimate Interests",
        items: ["Business operations, service improvement, fraud prevention."],
      },
      {
        kind: "group",
        title: "Consent",
        items: ["Marketing communications and cookies where required."],
      },
      {
        kind: "group",
        title: "Legal Obligations",
        items: ["Compliance with applicable laws and regulations."],
      },
    ],
  },
  {
    title: "How We Use Information",
    blocks: [
      { kind: "paragraph", text: "We may use information to:" },
      {
        kind: "list",
        items: [
          "Provide services",
          "Manage accounts",
          "Process transactions",
          "Deliver support",
          "Improve products",
          "Communicate updates",
          "Conduct analytics",
          "Prevent fraud",
          "Enforce agreements",
          "Meet legal obligations",
        ],
      },
    ],
  },
  {
    title: "AI & Automation Services",
    blocks: [
      {
        kind: "paragraph",
        text: "Aarvanta OS may use artificial intelligence and automated technologies.",
      },
      {
        kind: "paragraph",
        text: "Information submitted to AI-powered features may be processed to:",
      },
      {
        kind: "list",
        items: [
          "Generate responses",
          "Create content",
          "Analyze business information",
          "Support automation workflows",
        ],
      },
      {
        kind: "paragraph",
        text: "Users remain responsible for reviewing outputs generated by AI systems.",
      },
    ],
  },
  {
    title: "Data Sharing",
    blocks: [
      { kind: "paragraph", text: "We may share information with:" },
      {
        kind: "group",
        title: "Service Providers",
        items: [
          "Including:",
          "Cloud hosting providers",
          "Payment processors",
          "Communication providers",
          "Analytics providers",
        ],
      },
      {
        kind: "group",
        title: "Professional Advisors",
        items: ["Lawyers, accountants, auditors."],
      },
      {
        kind: "group",
        title: "Regulatory Authorities",
        items: ["Where legally required."],
      },
      {
        kind: "group",
        title: "Corporate Transactions",
        items: [
          "In the event of merger, acquisition, restructuring, or sale.",
        ],
      },
    ],
  },
  {
    title: "International Transfers",
    blocks: [
      {
        kind: "paragraph",
        text: "Where information is transferred outside the UK, appropriate safeguards will be implemented including:",
      },
      {
        kind: "list",
        items: [
          "Standard Contractual Clauses",
          "Adequacy Decisions",
          "Equivalent safeguards",
        ],
      },
    ],
  },
  {
    title: "Data Retention",
    blocks: [
      {
        kind: "paragraph",
        text: "We retain information only as long as necessary for:",
      },
      {
        kind: "list",
        items: [
          "Service delivery",
          "Legal obligations",
          "Accounting requirements",
          "Dispute resolution",
        ],
      },
    ],
  },
  {
    title: "Security",
    blocks: [
      {
        kind: "paragraph",
        text: "We implement reasonable technical and organizational measures including:",
      },
      {
        kind: "list",
        items: [
          "Encryption",
          "Access controls",
          "Authentication mechanisms",
          "Monitoring and logging",
          "Secure hosting environments",
        ],
      },
      {
        kind: "paragraph",
        text: "No method of transmission is completely secure.",
      },
    ],
  },
  {
    title: "Your Rights",
    blocks: [
      {
        kind: "paragraph",
        text: "Subject to applicable law, you may have rights to:",
      },
      {
        kind: "list",
        items: [
          "Access your data",
          "Correct inaccurate data",
          "Delete data",
          "Restrict processing",
          "Object to processing",
          "Data portability",
          "Withdraw consent",
        ],
      },
      {
        kind: "paragraph",
        text: "Requests may be sent to: privacy@aarvanta.co",
      },
    ],
  },
  {
    title: "Cookies",
    blocks: [
      {
        kind: "paragraph",
        text: "We use cookies and similar technologies for:",
      },
      {
        kind: "list",
        items: [
          "Website functionality",
          "Analytics",
          "Performance monitoring",
          "User preferences",
        ],
      },
      {
        kind: "paragraph",
        text: "Users may manage cookies through browser settings.",
      },
      {
        kind: "paragraph",
        text: "A separate Cookie Policy may apply.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    blocks: [
      {
        kind: "paragraph",
        text: "Our services are not intended for individuals under 18 years of age.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    blocks: [
      {
        kind: "paragraph",
        text: "We may update this Privacy Policy from time to time.",
      },
      {
        kind: "paragraph",
        text: "Updated versions will be published on our website.",
      },
    ],
  },
  {
    title: "Contact",
    blocks: [
      { kind: "paragraph", text: "Aarvanta Ltd" },
      { kind: "paragraph", text: "privacy@aarvanta.co" },
    ],
  },
];
