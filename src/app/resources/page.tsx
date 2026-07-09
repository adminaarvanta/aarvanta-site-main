import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.resources;

export const metadata: Metadata = {
  title: "Resources",
  description: page.subtitle,
};

export default function ResourcesPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
