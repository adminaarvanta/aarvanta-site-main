"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function CaseStudiesSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: colors.offWhite }}>
      <Container maxWidth="xl">
        <AnimatedSection>
          <SectionHeading title="Focused on Outcomes, Not Buzzwords." />
        </AnimatedSection>

        <Grid container spacing={3}>
          {caseStudies.map((study, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <AnimatedSection delay={index * 0.1}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: colors.mutedGold,
                      fontFamily: "var(--font-manrope)",
                      mb: 0.5,
                    }}
                  >
                    {study.metric}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.textSecondary,
                      mb: 3,
                      display: "block",
                      fontWeight: 500,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    {study.metricLabel}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.softCharcoal,
                      lineHeight: 1.7,
                      flex: 1,
                      mb: 2,
                    }}
                  >
                    {study.outcome}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.mutedGold,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {study.industry}
                  </Typography>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
