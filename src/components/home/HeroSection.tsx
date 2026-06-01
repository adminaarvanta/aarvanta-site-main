"use client";

import { Box, Container, Typography } from "@mui/material";
import NavButton from "@/components/ui/NavButton";
import HeroVisual from "@/components/home/HeroVisual";
import { homeHero } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HeroSection() {
  return (
    <Box
      className="hero-waves"
      sx={{ position: "relative", overflow: "hidden", pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component="h1"
              className="font-serif"
              sx={{
                fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.1rem" },
                lineHeight: 1.15,
                mb: 3,
                color: colors.textDark,
              }}
            >
              {homeHero.headline}
            </Typography>
            <Typography
              sx={{
                color: colors.textMuted,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.85,
                mb: 4,
                maxWidth: 520,
              }}
            >
              {homeHero.subheadline}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <NavButton href={homeHero.primaryCta.href} variant="contained" color="primary" size="large">
                {homeHero.primaryCta.label}
              </NavButton>
              <NavButton href={homeHero.secondaryCta.href} variant="outlined" color="primary" size="large">
                {homeHero.secondaryCta.label}
              </NavButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HeroVisual />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
