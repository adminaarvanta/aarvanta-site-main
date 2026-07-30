import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import LinkTile from "@/components/ui/sections/LinkTile";
import { featurePages } from "@/lib/site-navigation";
import { colors } from "@/lib/theme";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(featurePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = featurePages[slug];
  if (!feature) return { title: "Feature" };
  return { title: feature.title, description: feature.description };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = featurePages[slug];
  if (!feature) notFound();

  const related = Object.entries(featurePages)
    .filter(([key]) => key !== slug)
    .slice(0, 4)
    .map(([key, f]) => ({
      label: f.title,
      href: `/features/${key}`,
      description: f.description,
    }));

  return (
    <>
      <PageHero mode="marketing" eyebrow={feature.product} title={feature.title} subtitle={feature.description}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          <NavButton href="/book-demo" variant="contained" color="primary" size="large">
            Start Free
          </NavButton>
          <NavButton href="/business-os" variant="outlined" color="primary" size="large">
            Explore Business OS
          </NavButton>
        </Box>
      </PageHero>

      <SectionShell variant="goldEdge" maxWidth="md">
        <Typography
          sx={{
            color: colors.gold,
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Summary
        </Typography>
        <Typography sx={{ color: colors.textDark, lineHeight: 1.85, fontSize: "1.05rem" }}>
          {feature.description} This feature is part of the Aarvanta {feature.product} and connects
          seamlessly with CRM, finance, HR, inventory, automation, and analytics modules.
        </Typography>
      </SectionShell>

      <SectionShell variant="tileGrid" maxWidth={false} containerSx={{ maxWidth: 1000 }}>
        <SectionHeader
          align="left"
          eyebrow="Related"
          title="Explore more capabilities"
          subtitle="Each module shares the same data layer and AI layer."
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
          }}
        >
          {related.map((item, index) => (
            <LinkTile
              key={item.href}
              label={item.label}
              href={item.href}
              description={item.description}
              featured={index === 0}
            />
          ))}
        </Box>
      </SectionShell>
    </>
  );
}
