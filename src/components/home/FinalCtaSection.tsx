"use client";

import { Box, Container, Typography } from "@mui/material";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavButton from "@/components/ui/NavButton";
import { finalCta } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function FinalCtaSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.textDark,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background: `radial-gradient(ellipse, rgba(194, 155, 64, 0.12) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 3 } }}>
        <AnimatedSection>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              component="h2"
              className="font-serif"
              sx={{
                color: colors.white,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              {finalCta.headline}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.8,
                mb: 5,
                maxWidth: 640,
                mx: "auto",
              }}
            >
              {finalCta.body}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
              <NavButton href={finalCta.primaryCta.href} variant="contained" color="primary" size="large">
                {finalCta.primaryCta.label}
              </NavButton>
              <NavButton
                href={finalCta.secondaryCta.href}
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.4)",
                  color: colors.white,
                  "&:hover": {
                    borderColor: colors.white,
                    bgcolor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                {finalCta.secondaryCta.label}
              </NavButton>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
