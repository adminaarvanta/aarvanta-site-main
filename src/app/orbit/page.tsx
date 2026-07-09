import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.orbit;

export const metadata: Metadata = {
  title: "Orbit",
  description: page.subtitle,
};

export default function OrbitPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
