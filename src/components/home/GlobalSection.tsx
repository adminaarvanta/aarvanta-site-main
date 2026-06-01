"use client";

import { Box, Container } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { globalSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function GlobalSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: colors.white,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <AnimatedSection>
          <Box sx={{ textAlign: "center" }}>
            <PublicIcon sx={{ fontSize: 48, color: colors.gold, mb: 3 }} />
            <SectionHeading
              title={globalSection.headline}
              subtitle={globalSection.body}
            />
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
