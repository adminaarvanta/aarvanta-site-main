import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.fluentra;

export const metadata: Metadata = {
  title: "Fluentra",
  description: page.subtitle,
};

export default function FluentraPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
