import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { aiPolicySections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "AI Usage & Responsible AI Policy",
  description:
    "Guidelines for responsible use of Aarvanta AI services, including limitations and prohibited uses.",
};

export default function AiPolicyPage() {
  return (
    <LegalPage
      title="AI Usage & Responsible AI Policy"
      lastUpdated={legalLastUpdated}
      sections={aiPolicySections}
    />
  );
}
