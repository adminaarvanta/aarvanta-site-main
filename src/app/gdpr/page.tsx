import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "GDPR" };

export default function GdprPage() {
  return (
    <LegalPage
      title="GDPR Compliance"
      content="AARVANTA LTD processes personal data in compliance with UK GDPR and the Data Protection Act 2018. Replace this placeholder with your full GDPR documentation before launch."
    />
  );
}
