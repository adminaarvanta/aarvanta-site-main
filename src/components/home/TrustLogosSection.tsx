"use client";

import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { trustBarText, trustLogos } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function TrustLogosSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: colors.cream,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1440 }}>
        <Typography
          align="center"
          sx={{
            color: colors.textMuted,
            fontSize: "0.9rem",
            mb: 3,
            fontWeight: 500,
          }}
        >
          {trustBarText}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 5 },
            mb: 3,
          }}
        >
          {trustLogos.map((name) => (
            <Typography
              key={name}
              sx={{
                fontSize: { xs: "0.85rem", md: "1rem" },
                fontWeight: 700,
                color: colors.textMuted,
                opacity: 0.55,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                filter: "grayscale(100%)",
              }}
            >
              {name}
            </Typography>
          ))}
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            component={Link}
            href="/case-studies"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: "0.85rem",
              fontWeight: 600,
              color: colors.primary,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            See all customers
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
