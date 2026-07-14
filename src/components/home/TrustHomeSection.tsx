"use client";

import Link from "next/link";
import { Box, Chip, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { trustSection, caseStudies } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function TrustHomeSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.offWhite }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1200 }}>
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: colors.textDark,
            mb: 2,
          }}
        >
          {trustSection.headline}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1, mb: 4 }}>
          {trustSection.badges.map((badge) => (
            <Chip
              key={badge}
              label={badge}
              sx={{ bgcolor: colors.cream, border: `1px solid ${colors.border}`, fontWeight: 600 }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2.5, md: 4 },
            mb: 5,
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
            mb: 4,
          }}
        >
          {caseStudies.map((study) => (
            <Box
              key={study.industry}
              sx={{
                bgcolor: colors.cream,
                borderRadius: 3,
                border: `1px solid ${colors.border}`,
                p: 3,
              }}
            >
              <Typography sx={{ fontSize: "1.75rem", fontWeight: 800, color: colors.primary, mb: 0.5 }}>
                {study.metric}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: colors.textMuted, mb: 1.5 }}>
                {study.metricLabel}
              </Typography>
              <Typography sx={{ color: colors.textDark, fontSize: "0.9rem", lineHeight: 1.6 }}>
                {study.outcome}
              </Typography>
            </Box>
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
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {trustSection.cta.label}
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
