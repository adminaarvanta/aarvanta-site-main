import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.features;

export const metadata: Metadata = {
  title: "Features",
  description: page.subtitle,
};

export default function FeaturesHubPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
