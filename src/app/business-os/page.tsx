import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.businessOs;

export const metadata: Metadata = {
  title: "Business OS",
  description: page.subtitle,
};

export default function BusinessOsPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
