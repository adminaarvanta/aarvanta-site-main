import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.partners;

export const metadata: Metadata = {
  title: "Partners",
  description: page.subtitle,
};

export default function PartnersPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
