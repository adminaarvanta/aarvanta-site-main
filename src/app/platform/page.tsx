import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.platform;

export const metadata: Metadata = {
  title: "Platform",
  description: page.subtitle,
};

export default function PlatformPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
