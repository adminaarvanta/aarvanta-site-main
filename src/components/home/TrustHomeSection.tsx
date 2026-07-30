"use client";

import Link from "next/link";
import { Box, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import MetricBlock from "@/components/ui/sections/MetricBlock";
import { trustSection, caseStudies } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function TrustHomeSection() {
  return (
    <SectionShell variant="metricBand" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
      <SectionHeader eyebrow="Trust" title={trustSection.headline} />

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1, mb: 4 }}>
        {trustSection.badges.map((badge) => (
          <Chip
            key={badge}
            label={badge}
            sx={{
              bgcolor: colors.cream,
              border: `1px solid ${colors.borderNavy}`,
              fontWeight: 600,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 2, md: 4 },
          mb: 5,
          py: 1,
          borderTop: `1px solid ${colors.borderNavy}`,
          borderBottom: `1px solid ${colors.borderNavy}`,
        }}
      >
        {caseStudies.map((study) => (
          <MetricBlock
            key={study.industry}
            value={study.metric}
            label={study.metricLabel}
            detail={study.outcome}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2.5, md: 4 },
          mb: 4,
          opacity: 0.55,
        }}
      >
        {trustSection.logos.map((logo) => (
          <Typography
            key={logo}
            sx={{
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontSize: { xs: "0.8rem", md: "0.95rem" },
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
            gap: 0.5,
            color: colors.primary,
            fontWeight: 700,
            textDecoration: "none",
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
