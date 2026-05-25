import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      content="This website uses essential cookies to ensure proper functionality. Replace this placeholder with your full cookie policy and consent mechanism before launch."
    />
  );
}
