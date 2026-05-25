"use client";

import { Box, Container, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { ecosystemFlow } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function UspSection() {
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
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(196, 169, 98, 0.1) 0%, transparent 70%)`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <SectionHeading
            title="Built As One Connected AI Ecosystem."
            subtitle="Most AI platforms operate independently. AARVANTA products are designed to communicate with each other seamlessly."
            light
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.75)",
              maxWidth: 720,
              mx: "auto",
              mb: 8,
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            A lead generated through LeadOS can automatically trigger WhatsApp
            conversations, AI voice calls, CRM workflows, analytics tracking, and
            conversion funnels — without manual intervention.
          </Typography>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
              maxWidth: 400,
              mx: "auto",
            }}
          >
            {ecosystemFlow.map((step, index) => (
              <Box key={step} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    bgcolor: index === 0 ? colors.mutedGold : "rgba(255,255,255,0.08)",
                    border: `1px solid ${index === 0 ? colors.mutedGold : "rgba(255,255,255,0.15)"}`,
                    minWidth: 240,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: index === 0 ? colors.deepNavy : colors.white,
                      fontFamily: "var(--font-manrope)",
                      fontSize: "1rem",
                    }}
                  >
                    {step}
                  </Typography>
                </Box>
                {index < ecosystemFlow.length - 1 && (
                  <ArrowDownwardIcon
                    sx={{ color: colors.mutedGold, my: 0.5, fontSize: 20, opacity: 0.6 }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
