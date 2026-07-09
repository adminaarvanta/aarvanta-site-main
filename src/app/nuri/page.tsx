import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.nuri;

export const metadata: Metadata = {
  title: "Nuri",
  description: page.subtitle,
};

export default function NuriPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
