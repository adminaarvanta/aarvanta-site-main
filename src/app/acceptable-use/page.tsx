import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { acceptableUseSections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "Acceptable use requirements for Aarvanta services, platforms, and AI systems.",
};

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      lastUpdated={legalLastUpdated}
      sections={acceptableUseSections}
    />
  );
}
