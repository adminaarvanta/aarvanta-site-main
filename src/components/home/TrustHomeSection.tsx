"use client";

import Link from "next/link";
import { Box, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionShell from "@/components/ui/sections/SectionShell";
import { trustSection, caseStudies } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function TrustHomeSection() {
  return (
    <SectionShell variant="metricBand" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
      <Typography
        sx={{
          color: colors.gold,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          mb: 2,
          textAlign: "center",
        }}
      >
        Trust
      </Typography>
      <Typography
        component="h2"
        className="font-serif"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.6rem" },
          fontWeight: 600,
          color: colors.deepNavy,
          mb: 5,
        }}
      >
        {trustSection.headline}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 4, md: 0 },
          mb: 6,
        }}
      >
        {caseStudies.map((study, index) => (
          <Box
            key={study.industry}
            sx={{
              textAlign: "center",
              px: { md: 3 },
              borderRight: {
                md: index < caseStudies.length - 1 ? `1px solid ${colors.borderNavy}` : "none",
              },
            }}
          >
            <Typography
              className="font-serif"
              sx={{
                fontSize: { xs: "3.5rem", md: "4.25rem" },
                fontWeight: 600,
                color: colors.deepNavy,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                mb: 1,
              }}
            >
              {study.metric}
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.gold,
                mb: 1.5,
              }}
            >
              {study.metricLabel}
            </Typography>
            <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", lineHeight: 1.6 }}>
              {study.outcome}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1, mb: 4 }}>
        {trustSection.badges.map((badge) => (
          <Chip
            key={badge}
            label={badge}
            sx={{
              bgcolor: "transparent",
              border: `1px solid ${colors.borderNavy}`,
              fontWeight: 600,
              borderRadius: 0,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2.5, md: 5 },
          mb: 4,
          opacity: 0.45,
        }}
      >
        {trustSection.logos.map((logo) => (
          <Typography
            key={logo}
            sx={{
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              color: colors.textMuted,
            }}
          >
            {logo}
          </Typography>
        ))}
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography
          component={Link}
          href={trustSection.cta.href}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: colors.deepNavy,
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: `2px solid ${colors.gold}`,
            pb: 0.25,
            "&:hover": { color: colors.goldDark },
          }}
        >
          {trustSection.cta.label}
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Typography>
      </Box>
    </SectionShell>
  );
}
