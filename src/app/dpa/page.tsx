import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { dpaSections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "Data Processing Agreement governing how Aarvanta Ltd processes personal data on behalf of customers.",
};

export default function DpaPage() {
  return (
    <LegalPage
      title="Data Processing Agreement (DPA)"
      lastUpdated={legalLastUpdated}
      sections={dpaSections}
    />
  );
}
