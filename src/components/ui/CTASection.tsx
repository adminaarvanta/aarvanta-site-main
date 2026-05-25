"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  subtitle,
  primaryLabel = "Book a Demo",
  primaryHref = "/book-demo",
  secondaryLabel = "Partner With Aarvanta",
  secondaryHref = "/partner-program",
}: CTASectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: colors.deepNavy,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(184, 149, 106, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{ color: colors.white, fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: 2 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.75)", mb: 4, lineHeight: 1.8 }}
        >
          {subtitle}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            component={Link}
            href={primaryHref}
            variant="contained"
            color="secondary"
            size="large"
          >
            {primaryLabel}
          </Button>
          <Button
            component={Link}
            href={secondaryHref}
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              color: colors.white,
              "&:hover": { borderColor: colors.white, bgcolor: "rgba(255,255,255,0.05)" },
            }}
          >
            {secondaryLabel}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
