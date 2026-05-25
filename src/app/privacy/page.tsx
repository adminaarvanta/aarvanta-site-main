import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      content="AARVANTA LTD is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard personal data in accordance with UK GDPR. Replace this placeholder with your full legal privacy policy before launch."
    />
  );
}
