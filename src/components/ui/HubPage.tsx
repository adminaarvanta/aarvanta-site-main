"use client";

import { Box, Container } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import LinkTile from "@/components/ui/sections/LinkTile";
import { colors } from "@/lib/theme";

type HubLink = { label: string; href: string; description?: string };

type HubPageProps = {
  title: string;
  subtitle: string;
  links: HubLink[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function HubPage({
  title,
  subtitle,
  links,
  primaryCta = { label: "Start Free", href: "/book-demo" },
  secondaryCta = { label: "Book a Demo", href: "/book-demo" },
}: HubPageProps) {
  return (
    <>
      <PageHero mode="hub" title={title} subtitle={subtitle} eyebrow="Explore">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          <NavButton href={primaryCta.href} variant="contained" color="secondary" size="large">
            {primaryCta.label}
          </NavButton>
          <NavButton
            href={secondaryCta.href}
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.35)",
              color: colors.white,
              "&:hover": {
                borderColor: colors.gold,
                color: colors.goldLight,
                bgcolor: "rgba(255,255,255,0.06)",
              },
            }}
          >
            {secondaryCta.label}
          </NavButton>
        </Box>
      </PageHero>

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: colors.mist }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
              gridAutoRows: "minmax(160px, auto)",
            }}
          >
            {links.map((link, index) => (
              <Box
                key={link.href + link.label}
                sx={{
                  gridColumn: {
                    md: index % 7 === 0 ? "span 2" : "span 1",
                  },
                }}
              >
                <LinkTile
                  label={link.label}
                  href={link.href}
                  description={link.description}
                  featured={index % 7 === 0}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
