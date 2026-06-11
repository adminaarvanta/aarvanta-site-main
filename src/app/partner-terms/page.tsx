import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { partnerProgramTermsSections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Partner Program Terms",
  description:
    "Terms governing participation in the Aarvanta partner program.",
};

export default function PartnerTermsPage() {
  return (
    <LegalPage
      title="Partner Program Terms"
      lastUpdated={legalLastUpdated}
      sections={partnerProgramTermsSections}
    />
  );
}
