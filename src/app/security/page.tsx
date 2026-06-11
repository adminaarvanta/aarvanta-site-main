import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { securityPolicySections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Security Policy",
  description:
    "Security controls and incident response practices protecting Aarvanta customer data and platform infrastructure.",
};

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security Policy"
      lastUpdated={legalLastUpdated}
      sections={securityPolicySections}
    />
  );
}
