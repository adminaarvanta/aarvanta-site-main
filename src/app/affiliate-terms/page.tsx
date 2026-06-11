import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { affiliateTermsSections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Affiliate Terms",
  description:
    "Terms for the Aarvanta affiliate program, including commission eligibility and prohibited activities.",
};

export default function AffiliateTermsPage() {
  return (
    <LegalPage
      title="Affiliate Terms"
      lastUpdated={legalLastUpdated}
      sections={affiliateTermsSections}
    />
  );
}
