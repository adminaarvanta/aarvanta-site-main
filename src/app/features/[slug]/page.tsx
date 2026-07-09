import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
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

  return (
    <>
      <PageHero title={feature.title} subtitle={feature.description}>
        <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", mt: 1 }}>
          Part of {feature.product}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          <NavButton href="/book-demo" variant="contained" color="primary" size="large">
            Start Free
          </NavButton>
          <NavButton href="/business-os" variant="outlined" color="primary" size="large">
            Explore Business OS
          </NavButton>
        </Box>
      </PageHero>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography sx={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "1.05rem" }}>
            {feature.description} This feature is part of the Aarvanta {feature.product} and connects
            seamlessly with CRM, finance, HR, inventory, automation, and analytics modules.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
