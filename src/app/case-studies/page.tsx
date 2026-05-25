import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import { caseStudies } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real business outcomes from AARVANTA AI infrastructure — reduced missed enquiries, improved conversions, and automated operations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Focused on Outcomes, Not Buzzwords."
        subtitle="Operational improvements and measurable business results from real deployments."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {caseStudies.map((study, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: colors.mutedGold,
                      fontFamily: "var(--font-manrope)",
                      lineHeight: 1,
                    }}
                  >
                    {study.metric}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.textSecondary,
                      display: "block",
                      mb: 3,
                      mt: 1,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    {study.metricLabel}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.softCharcoal,
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      mb: 3,
                    }}
                  >
                    {study.outcome}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.mutedGold,
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    {study.industry}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 8,
              p: 5,
              borderRadius: "16px",
              bgcolor: colors.offWhite,
              border: `1px solid ${colors.border}`,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: colors.deepNavy, mb: 2 }}
            >
              Ready to achieve similar results?
            </Typography>
            <Typography
              sx={{ color: colors.textSecondary, mb: 3, maxWidth: 520, mx: "auto" }}
            >
              Book a strategy call to discuss how AARVANTA infrastructure can
              transform your operations.
            </Typography>
            <NavButton href="/book-demo" variant="contained" color="primary" size="large">
              Book a Demo
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
