import type { LegalSection } from "./legal-content";

export const cookiePolicySections: LegalSection[] = [
  {
    title: "Purpose",
    blocks: [
      {
        kind: "paragraph",
        text: "This Cookie Policy explains how Aarvanta Ltd uses cookies and similar technologies on aarvanta.co and Aarvanta OS.",
      },
    ],
  },
  {
    title: "What Are Cookies?",
    blocks: [
      {
        kind: "paragraph",
        text: "Cookies are small text files stored on a user's device that help websites function effectively and provide information to website owners.",
      },
    ],
  },
  {
    title: "Types of Cookies We Use",
    blocks: [
      {
        kind: "group",
        title: "Essential Cookies",
        items: [
          "Required for:",
          "Authentication",
          "Security",
          "Account login",
          "Session management",
        ],
      },
      {
        kind: "paragraph",
        text: "Cannot be disabled.",
      },
      {
        kind: "group",
        title: "Analytics Cookies",
        items: [
          "Used to understand:",
          "Website traffic",
          "User behaviour",
          "Feature usage",
          "Performance",
          "Examples:",
          "Google Analytics",
          "Microsoft Clarity",
        ],
      },
      {
        kind: "group",
        title: "Functional Cookies",
        items: [
          "Remember:",
          "User preferences",
          "Language settings",
          "Dashboard preferences",
        ],
      },
      {
        kind: "group",
        title: "Marketing Cookies",
        items: [
          "Used to:",
          "Measure campaign performance",
          "Support remarketing activities",
          "Improve advertising relevance",
        ],
      },
    ],
  },
  {
    title: "Managing Cookies",
    blocks: [
      {
        kind: "paragraph",
        text: "Users may manage cookies through browser settings.",
      },
      {
        kind: "paragraph",
        text: "Disabling cookies may affect functionality.",
      },
    ],
  },
];

export const dpaSections: LegalSection[] = [
  {
    title: "Parties",
    blocks: [
      { kind: "paragraph", text: 'Aarvanta Ltd ("Processor")' },
      { kind: "paragraph", text: 'Customer ("Controller")' },
    ],
  },
  {
    title: "Scope",
    blocks: [
      {
        kind: "paragraph",
        text: "Applies whenever Aarvanta processes personal data on behalf of customers.",
      },
    ],
  },
  {
    title: "Processor Obligations",
    blocks: [
      { kind: "paragraph", text: "Aarvanta shall:" },
      {
        kind: "list",
        items: [
          "Process data only on documented instructions",
          "Maintain confidentiality",
          "Implement security controls",
          "Assist with GDPR compliance",
          "Notify of data breaches without undue delay",
        ],
      },
    ],
  },
  {
    title: "Security Measures",
    blocks: [
      {
        kind: "list",
        items: [
          "Encryption",
          "Access controls",
          "Audit logging",
          "Role-based permissions",
          "Secure backups",
        ],
      },
    ],
  },
  {
    title: "Sub-Processors",
    blocks: [
      {
        kind: "paragraph",
        text: "Aarvanta may engage approved service providers including:",
      },
      {
        kind: "list",
        items: [
          "Hosting providers",
          "Email providers",
          "Communication providers",
          "Payment processors",
        ],
      },
    ],
  },
  {
    title: "Data Subject Rights",
    blocks: [
      {
        kind: "paragraph",
        text: "Aarvanta shall reasonably assist customers in responding to:",
      },
      {
        kind: "list",
        items: [
          "Access requests",
          "Rectification requests",
          "Erasure requests",
          "Portability requests",
        ],
      },
    ],
  },
  {
    title: "Termination",
    blocks: [
      { kind: "paragraph", text: "Upon termination:" },
      {
        kind: "list",
        items: [
          "Data returned or deleted",
          "Legal retention requirements respected",
        ],
      },
    ],
  },
];

export const acceptableUseSections: LegalSection[] = [
  {
    title: "Illegal Activities",
    blocks: [
      { kind: "paragraph", text: "Users must not:" },
      {
        kind: "list",
        items: [
          "Violate laws",
          "Commit fraud",
          "Misrepresent identities",
        ],
      },
    ],
  },
  {
    title: "Security Violations",
    blocks: [
      {
        kind: "list",
        items: [
          "Attempt unauthorized access",
          "Probe vulnerabilities",
          "Disrupt systems",
        ],
      },
    ],
  },
  {
    title: "Harmful Content",
    blocks: [
      {
        kind: "list",
        items: ["Malware", "Viruses", "Ransomware", "Malicious code"],
      },
    ],
  },
  {
    title: "Abuse",
    blocks: [
      {
        kind: "list",
        items: [
          "Spam",
          "Harassment",
          "Impersonation",
          "Misleading communications",
        ],
      },
    ],
  },
  {
    title: "AI Misuse",
    blocks: [
      {
        kind: "paragraph",
        text: "Users may not use Aarvanta AI systems to:",
      },
      {
        kind: "list",
        items: [
          "Generate illegal content",
          "Conduct fraud",
          "Create deceptive impersonations",
          "Facilitate harmful activities",
        ],
      },
      {
        kind: "paragraph",
        text: "Violation may result in suspension or termination.",
      },
    ],
  },
];

export const aiPolicySections: LegalSection[] = [
  {
    title: "Purpose",
    blocks: [
      {
        kind: "paragraph",
        text: "Aarvanta integrates artificial intelligence to assist users with business operations, automation, communication, and productivity.",
      },
    ],
  },
  {
    title: "AI Limitations",
    blocks: [
      { kind: "paragraph", text: "AI-generated outputs:" },
      {
        kind: "list",
        items: [
          "May contain inaccuracies",
          "May be incomplete",
          "Should be reviewed by users",
        ],
      },
    ],
  },
  {
    title: "Prohibited Uses",
    blocks: [
      { kind: "paragraph", text: "Users may not use AI services to:" },
      {
        kind: "list",
        items: [
          "Break laws",
          "Conduct fraud",
          "Infringe rights",
          "Generate harmful content",
        ],
      },
    ],
  },
  {
    title: "Human Responsibility",
    blocks: [
      {
        kind: "paragraph",
        text: "Users remain responsible for decisions made using AI-generated outputs.",
      },
    ],
  },
  {
    title: "AI Training",
    blocks: [
      {
        kind: "paragraph",
        text: "Customer data will not be used for model training unless explicitly authorized.",
      },
    ],
  },
];

export const gdprComplianceSections: LegalSection[] = [
  {
    title: "Commitment",
    blocks: [
      {
        kind: "paragraph",
        text: "Aarvanta is committed to compliance with:",
      },
      {
        kind: "list",
        items: ["UK GDPR", "Data Protection Act 2018"],
      },
    ],
  },
  {
    title: "Privacy Principles",
    blocks: [
      { kind: "paragraph", text: "Personal data shall be:" },
      {
        kind: "list",
        items: [
          "Lawfully processed",
          "Fairly processed",
          "Transparently processed",
          "Securely protected",
        ],
      },
    ],
  },
  {
    title: "Rights Supported",
    blocks: [
      {
        kind: "list",
        items: [
          "Access",
          "Correction",
          "Deletion",
          "Restriction",
          "Portability",
          "Objection",
        ],
      },
    ],
  },
  {
    title: "Contact",
    blocks: [{ kind: "paragraph", text: "privacy@aarvanta.co" }],
  },
];

export const securityPolicySections: LegalSection[] = [
  {
    title: "Objective",
    blocks: [
      { kind: "paragraph", text: "To protect:" },
      {
        kind: "list",
        items: [
          "Customer Data",
          "Platform Infrastructure",
          "Business Operations",
        ],
      },
    ],
  },
  {
    title: "Security Controls",
    blocks: [
      {
        kind: "group",
        title: "Access Management",
        items: [
          "Role-based permissions",
          "Multi-factor authentication where applicable",
        ],
      },
      {
        kind: "group",
        title: "Encryption",
        items: ["Encryption in transit and at rest where supported."],
      },
      {
        kind: "group",
        title: "Monitoring",
        items: ["Activity monitoring", "Logging", "Incident detection"],
      },
      {
        kind: "group",
        title: "Infrastructure",
        items: ["Hosted on reputable cloud providers."],
      },
    ],
  },
  {
    title: "Incident Response",
    blocks: [
      { kind: "paragraph", text: "Security incidents shall be:" },
      {
        kind: "list",
        items: ["Investigated", "Contained", "Documented", "Reported where required"],
      },
    ],
  },
];

export const refundPolicySections: LegalSection[] = [
  {
    title: "SaaS Subscriptions",
    blocks: [
      {
        kind: "paragraph",
        text: "Subscriptions may be cancelled at any time.",
      },
      {
        kind: "paragraph",
        text: "Cancellation prevents future billing.",
      },
    ],
  },
  {
    title: "Refunds",
    blocks: [
      {
        kind: "paragraph",
        text: "Refunds are generally not provided for:",
      },
      {
        kind: "list",
        items: [
          "Partial subscription periods",
          "Unused services",
          "Change of mind",
        ],
      },
      {
        kind: "paragraph",
        text: "Exceptions may be considered at Aarvanta's discretion.",
      },
    ],
  },
  {
    title: "Professional Services",
    blocks: [
      {
        kind: "paragraph",
        text: "Fees for completed services are non-refundable.",
      },
    ],
  },
  {
    title: "Chargebacks",
    blocks: [
      {
        kind: "paragraph",
        text: "Fraudulent chargebacks may result in account suspension.",
      },
    ],
  },
];

export const partnerProgramTermsSections: LegalSection[] = [
  {
    title: "Eligibility",
    blocks: [
      { kind: "paragraph", text: "Partners must:" },
      {
        kind: "list",
        items: [
          "Be legally capable of entering agreements",
          "Provide accurate information",
          "Maintain professional conduct",
        ],
      },
    ],
  },
  {
    title: "Partner Categories",
    blocks: [
      {
        kind: "list",
        items: [
          "Referral Partner",
          "Growth Partner",
          "Strategic Partner",
          "White Label Partner",
        ],
      },
    ],
  },
  {
    title: "Restrictions",
    blocks: [
      { kind: "paragraph", text: "Partners may not:" },
      {
        kind: "list",
        items: [
          "Misrepresent Aarvanta",
          "Alter pricing",
          "Sign contracts on behalf of Aarvanta",
        ],
      },
    ],
  },
  {
    title: "Commissions",
    blocks: [
      { kind: "paragraph", text: "Subject to:" },
      {
        kind: "list",
        items: [
          "Revenue verification",
          "Partner agreement",
          "Company policies",
        ],
      },
    ],
  },
  {
    title: "Termination",
    blocks: [
      { kind: "paragraph", text: "Aarvanta may terminate participation for:" },
      {
        kind: "list",
        items: ["Misconduct", "Fraud", "Policy breaches"],
      },
    ],
  },
];

export const affiliateTermsSections: LegalSection[] = [
  {
    title: "Program Purpose",
    blocks: [
      {
        kind: "paragraph",
        text: "Affiliates may promote Aarvanta services and earn commissions on qualifying referrals.",
      },
    ],
  },
  {
    title: "Prohibited Activities",
    blocks: [
      { kind: "paragraph", text: "Affiliates may not:" },
      {
        kind: "list",
        items: [
          "Mislead customers",
          "Use spam",
          "Bid on restricted brand keywords",
          "Make false claims",
        ],
      },
    ],
  },
  {
    title: "Commission Eligibility",
    blocks: [
      { kind: "paragraph", text: "Applies only to:" },
      {
        kind: "list",
        items: [
          "Valid referrals",
          "Collected revenue",
          "Approved transactions",
        ],
      },
    ],
  },
  {
    title: "Fraud",
    blocks: [
      {
        kind: "paragraph",
        text: "Fraudulent activity results in forfeiture of commissions.",
      },
    ],
  },
];

export const saasSubscriptionSections: LegalSection[] = [
  {
    title: "Services",
    blocks: [
      {
        kind: "paragraph",
        text: "Aarvanta grants customers a limited, non-exclusive, non-transferable right to access subscribed services.",
      },
    ],
  },
  {
    title: "Customer Responsibilities",
    blocks: [
      { kind: "paragraph", text: "Customers shall:" },
      {
        kind: "list",
        items: [
          "Maintain account security",
          "Use services lawfully",
          "Provide accurate information",
        ],
      },
    ],
  },
  {
    title: "Subscription Fees",
    blocks: [
      { kind: "paragraph", text: "Fees are:" },
      {
        kind: "list",
        items: [
          "Billed according to selected plans",
          "Payable in advance unless agreed otherwise",
        ],
      },
    ],
  },
  {
    title: "Intellectual Property",
    blocks: [
      { kind: "paragraph", text: "Aarvanta retains ownership of:" },
      {
        kind: "list",
        items: ["Platform", "Software", "Documentation", "Branding"],
      },
    ],
  },
  {
    title: "Service Availability",
    blocks: [
      {
        kind: "paragraph",
        text: "Commercially reasonable efforts will be made to maintain availability.",
      },
      {
        kind: "paragraph",
        text: "No guarantee of uninterrupted service.",
      },
    ],
  },
  {
    title: "Data Ownership",
    blocks: [
      {
        kind: "paragraph",
        text: "Customers retain ownership of their data.",
      },
      {
        kind: "paragraph",
        text: "Aarvanta receives only the rights necessary to provide services.",
      },
    ],
  },
  {
    title: "Confidentiality",
    blocks: [
      {
        kind: "paragraph",
        text: "Both parties shall protect confidential information.",
      },
    ],
  },
  {
    title: "Liability",
    blocks: [
      {
        kind: "paragraph",
        text: "Liability shall be limited to the maximum extent permitted by law.",
      },
    ],
  },
  {
    title: "Termination",
    blocks: [
      { kind: "paragraph", text: "Access may be terminated for:" },
      {
        kind: "list",
        items: ["Non-payment", "Breach of agreement", "Security concerns"],
      },
    ],
  },
  {
    title: "Governing Law",
    blocks: [
      {
        kind: "paragraph",
        text: "England & Wales.",
      },
    ],
  },
];
