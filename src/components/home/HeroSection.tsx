"use client";

import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import NavButton from "@/components/ui/NavButton";
import HeroFlowVisual from "@/components/home/HeroFlowVisual";
import { homeHero } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: colors.cream,
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1200 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 5, lg: 6 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.25rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: colors.textDark,
                mb: 2.5,
                maxWidth: 560,
              }}
            >
              {homeHero.headline}
            </Typography>
            <Typography
              sx={{
                color: colors.textMuted,
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: 520,
              }}
            >
              {homeHero.subheadline}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}>
              <NavButton
                href={homeHero.primaryCta.href}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {homeHero.primaryCta.label}
              </NavButton>
              <NavButton
                href={homeHero.secondaryCta.href}
                variant="outlined"
                color="primary"
                size="large"
              >
                {homeHero.secondaryCta.label}
              </NavButton>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", color: "#F59E0B" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 16 }} />
                  ))}
                </Box>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: colors.textDark }}>
                  {homeHero.trustLine}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "0.8rem", color: colors.textMuted }}>
                {homeHero.trialNote}
              </Typography>
            </Box>
          </Box>

          <HeroFlowVisual />
        </Box>
      </Container>
    </Box>
  );
}
