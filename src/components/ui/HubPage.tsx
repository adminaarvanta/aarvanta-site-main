"use client";

import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
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
      <PageHero title={title} subtitle={subtitle}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          <NavButton href={primaryCta.href} variant="contained" color="primary" size="large">
            {primaryCta.label}
          </NavButton>
          <NavButton href={secondaryCta.href} variant="outlined" color="primary" size="large">
            {secondaryCta.label}
          </NavButton>
        </Box>
      </PageHero>

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: colors.offWhite }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Grid container spacing={2}>
            {links.map((link) => (
              <Grid key={link.href + link.label} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  component={Link}
                  href={link.href}
                  sx={{
                    display: "block",
                    p: 3,
                    height: "100%",
                    bgcolor: colors.cream,
                    borderRadius: 3,
                    border: `1px solid ${colors.border}`,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: colors.primary,
                      boxShadow: colors.cardShadow,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: colors.textDark, mb: 1 }}>
                    {link.label}
                  </Typography>
                  {link.description && (
                    <Typography sx={{ fontSize: "0.9rem", color: colors.textMuted, lineHeight: 1.6, mb: 2 }}>
                      {link.description}
                    </Typography>
                  )}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: colors.primary }}>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>Explore</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
