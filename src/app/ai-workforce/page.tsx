import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { aiWorkforceSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Workforce",
  description:
    "Meet your digital team — AI sales, marketing, HR, support, and operations roles available 24/7.",
};

export default function AiWorkforcePage() {
  return (
    <HubPage
      title={aiWorkforceSection.headline}
      subtitle={aiWorkforceSection.subheadline}
      links={aiWorkforceSection.roles.map((role) => ({
        label: role,
        href: "/book-demo",
        description: "Tasks, automation, memory, and reports — available 24/7.",
      }))}
      primaryCta={{ label: "Start Free Trial", href: "/book-demo" }}
      secondaryCta={{ label: "Book Live Demo", href: "/book-demo" }}
    />
  );
}
