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
  secondaryHref = "/partners",
}: CTASectionProps) {
  return (
    <Box
      className="section-navy"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
        <Typography
          sx={{
            color: colors.gold,
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Next step
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: colors.white, fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: 2, fontWeight: 800 }}
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
            size="large"
            sx={{
              bgcolor: colors.gold,
              color: colors.deepNavy,
              "&:hover": { bgcolor: colors.goldLight },
            }}
          >
            {primaryLabel}
          </Button>
          <Button
            component={Link}
            href={secondaryHref}
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.35)",
              color: colors.white,
              "&:hover": { borderColor: colors.gold, bgcolor: "rgba(212,175,55,0.08)" },
            }}
          >
            {secondaryLabel}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
