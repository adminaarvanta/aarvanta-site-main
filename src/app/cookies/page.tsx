import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { cookiePolicySections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Aarvanta Ltd uses cookies and similar technologies on aarvanta.co and Aarvanta OS.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated={legalLastUpdated}
      sections={cookiePolicySections}
    />
  );
}
