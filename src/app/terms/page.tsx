import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated, termsSections } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing access to and use of aarvanta.co, Aarvanta OS, and services provided by Aarvanta Ltd.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Website Terms & Conditions"
      lastUpdated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
