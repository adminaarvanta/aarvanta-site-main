import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      content="These terms govern your use of AARVANTA products and services. Replace this placeholder with your full terms of service before launch."
    />
  );
}
