import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import { aboutValues } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About",
  description:
    "Building infrastructure for the AI-driven business era. AARVANTA simplifies growth, automates operations, and creates scalable business infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Building Infrastructure for the AI-Driven Business Era."
        subtitle="We're building a connected AI ecosystem designed to simplify growth, automate operations, and create scalable business infrastructure for the next generation of companies."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.9,
              color: colors.textSecondary,
              mb: 2,
            }}
          >
            AARVANTA was founded with a simple observation:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.9,
              color: colors.softCharcoal,
              mb: 2,
            }}
          >
            Most businesses are overwhelmed by fragmented software, disconnected
            systems, and inefficient operations.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.9,
              color: colors.textSecondary,
            }}
          >
            We&apos;re building a connected AI ecosystem designed to simplify
            growth, automate operations, and create scalable business
            infrastructure for the next generation of companies.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: colors.deepNavy,
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
