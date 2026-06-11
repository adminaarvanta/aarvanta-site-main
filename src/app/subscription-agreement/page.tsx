import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { legalLastUpdated } from "@/lib/legal-content";
import { saasSubscriptionSections } from "@/lib/legal-policies-content";

export const metadata: Metadata = {
  title: "SaaS Subscription Agreement",
  description:
    "Subscription agreement terms for access to Aarvanta SaaS services.",
};

export default function SubscriptionAgreementPage() {
  return (
    <LegalPage
      title="SaaS Subscription Agreement"
      lastUpdated={legalLastUpdated}
      sections={saasSubscriptionSections}
    />
  );
}
