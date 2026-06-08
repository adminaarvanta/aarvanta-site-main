import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated, privacySections } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aarvanta Ltd collects, uses, stores, and protects personal data in compliance with UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={legalLastUpdated}
      sections={privacySections}
    />
  );
}
