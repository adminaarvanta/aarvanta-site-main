import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import { aboutPage, aboutValues } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About",
  description:
    "Building infrastructure for the AI-driven business era. AARVANTA simplifies growth, automates operations, and creates scalable business infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutPage.headline} subtitle={aboutPage.mission} />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.9, color: colors.textMuted, mb: 2 }}>
            {aboutPage.intro}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.9, color: colors.textDark, mb: 2 }}>
            {aboutPage.problem}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.9, color: colors.textMuted }}>
            {aboutPage.mission}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            component="h2"
            className="font-serif"
            sx={{
              textAlign: "center",
              color: colors.textDark,
              mb: 6,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {aboutValues.map((value) => (
              <Grid key={value.title} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: colors.deepNavy, mb: 2 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{ color: colors.textSecondary, lineHeight: 1.8 }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
