"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import NavButton from "@/components/ui/NavButton";
import { partnerFeatures, partnerSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function PartnerSection() {
  return (
    <Box className="section-cream" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection>
              <SectionHeading
                title={partnerSection.headline}
                subtitle={partnerSection.body}
                align="left"
              />
              <NavButton
                href={partnerSection.cta.href}
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                {partnerSection.cta.label}
              </NavButton>
            </AnimatedSection>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection delay={0.15}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: colors.white,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {partnerFeatures.map((feature) => (
                  <Box
                    key={feature}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      py: 1.5,
                      borderBottom: `1px solid ${colors.border}`,
                      "&:last-child": { borderBottom: "none" },
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ color: colors.gold, fontSize: 22 }} />
                    <Typography sx={{ color: colors.textMuted, fontWeight: 500, fontSize: "0.95rem" }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
