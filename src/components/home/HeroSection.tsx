"use client";

import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import NavButton from "@/components/ui/NavButton";
import HeroFlowVisual from "@/components/home/HeroFlowVisual";
import SectionShell from "@/components/ui/sections/SectionShell";
import { homeHero } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HeroSection() {
  return (
    <SectionShell variant="glassPanel" maxWidth={false} containerSx={{ maxWidth: 1240 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
          gap: { xs: 5, lg: 7 },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              display: "inline-block",
              color: colors.deepNavy,
              bgcolor: colors.goldTint,
              border: `1px solid ${colors.gold}`,
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              px: 1.5,
              py: 0.6,
              mb: 3,
            }}
          >
            AI Operating System
          </Typography>
          <Typography
            component="h1"
            className="font-serif"
            sx={{
              fontSize: { xs: "2.35rem", sm: "3.1rem", md: "3.75rem" },
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: colors.deepNavy,
              mb: 2.5,
              maxWidth: 620,
            }}
          >
            {homeHero.headline}
          </Typography>
          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              lineHeight: 1.7,
              mb: 4,
              maxWidth: 520,
              borderLeft: `3px solid ${colors.gold}`,
              pl: 2,
            }}
          >
            {homeHero.subheadline}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3.5 }}>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", color: colors.gold }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: 15 }} />
              ))}
            </Box>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: colors.textDark }}>
              {homeHero.trustLine}
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: colors.textMuted }}>
              · {homeHero.trialNote}
            </Typography>
          </Box>
        </Box>

        <HeroFlowVisual />
      </Box>
    </SectionShell>
  );
}
