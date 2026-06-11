import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { gdprComplianceSections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "GDPR Compliance",
  description:
    "Aarvanta's commitment to UK GDPR and Data Protection Act 2018 compliance.",
};

export default function GdprPage() {
  return (
    <LegalPage
      title="GDPR Compliance Statement"
      lastUpdated={legalLastUpdated}
      sections={gdprComplianceSections}
    />
  );
}
