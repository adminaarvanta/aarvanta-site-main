"use client";

import { Box, Chip, Container, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import NavButton from "@/components/ui/NavButton";
import HeroOrbitVisual from "@/components/home/HeroOrbitVisual";
import { homeHero } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HeroSection() {
  return (
    <Box
      className="hero-waves"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 4, md: 6 },
        pb: { xs: 5, md: 8 },
        bgcolor: colors.cream,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1320 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 5, lg: 4 },
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 540, zIndex: 1 }}>
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
              label={homeHero.badge}
              sx={{
                mb: 3,
                bgcolor: "rgba(29, 78, 216, 0.06)",
                color: colors.primary,
                fontWeight: 600,
                fontSize: "0.8rem",
                height: 32,
                border: `1px solid rgba(29, 78, 216, 0.12)`,
                "& .MuiChip-icon": { color: colors.primary },
              }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.08,
                mb: 3,
                color: colors.textDark,
                letterSpacing: "-0.03em",
              }}
            >
              {homeHero.headline}{" "}
              <Box component="span" sx={{ color: colors.primary }}>
                {homeHero.headlineAccent}
              </Box>
            </Typography>
            <Typography
              sx={{
                color: colors.textMuted,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.75,
                mb: 4,
                maxWidth: 460,
              }}
            >
              {homeHero.subheadline}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
              <NavButton
                href={homeHero.primaryCta.href}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 3, py: 1.5, borderRadius: 2.5 }}
              >
                {homeHero.primaryCta.label}
              </NavButton>
              <NavButton
                href={homeHero.secondaryCta.href}
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<PlayCircleOutlineIcon />}
                sx={{ px: 3, py: 1.5, borderRadius: 2.5, bgcolor: colors.cream }}
              >
                {homeHero.secondaryCta.label}
              </NavButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 420 }}>
            <HeroOrbitVisual />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
