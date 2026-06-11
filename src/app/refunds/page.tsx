import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { refundPolicySections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation terms for Aarvanta SaaS subscriptions and professional services.",
};

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      lastUpdated={legalLastUpdated}
      sections={refundPolicySections}
    />
  );
}
