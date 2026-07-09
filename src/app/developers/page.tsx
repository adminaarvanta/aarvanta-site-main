import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.developers;

export const metadata: Metadata = {
  title: "Developers",
  description: page.subtitle,
};

export default function DevelopersPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
