"use client";

import { Box, Container } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { colors } from "@/lib/theme";

export default function GlobalSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        bgcolor: colors.white,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth="md">
        <AnimatedSection>
          <Box sx={{ textAlign: "center" }}>
            <PublicIcon
              sx={{ fontSize: 48, color: colors.mutedGold, mb: 3 }}
            />
            <SectionHeading
              title="Built in the UK. Designed for Global Scale."
              subtitle="AARVANTA combines global infrastructure, AI systems, automation, and scalable architecture to support businesses and partners across international markets."
            />
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
