import type { Metadata } from "next";
import HubPage from "@/components/ui/HubPage";
import { hubPages } from "@/lib/site-navigation";

const page = hubPages.company;

export const metadata: Metadata = {
  title: "Company",
  description: page.subtitle,
};

export default function CompanyPage() {
  return <HubPage title={page.title} subtitle={page.subtitle} links={page.links} />;
}
