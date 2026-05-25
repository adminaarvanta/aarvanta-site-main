"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { colors } from "@/lib/theme";

export default function FinalCtaSection() {
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background: `radial-gradient(ellipse, rgba(196, 169, 98, 0.08) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                color: colors.white,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              AI Systems Built for Businesses That Intend to Scale.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.8,
                mb: 5,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Whether you&apos;re a growing business, agency, or global partner,
              AARVANTA provides the infrastructure to automate operations,
              improve communication, and build scalable AI-driven growth
              systems.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                component={Link}
                href="/book-demo"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: colors.mutedGold,
                  color: colors.deepNavy,
                  "&:hover": { bgcolor: colors.goldLight },
                }}
              >
                Book a Demo
              </Button>
              <Button
                component={Link}
                href="/partner-program"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: colors.white,
                  "&:hover": {
                    borderColor: colors.white,
                    bgcolor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                Partner With Aarvanta
              </Button>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
