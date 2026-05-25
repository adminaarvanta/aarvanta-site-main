import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import { industries } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI infrastructure built for high-growth businesses across healthcare, real estate, education, hospitality, agencies, and legal.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Built for High-Growth Businesses."
        subtitle="Industry-specific AI infrastructure designed for operational scale."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {industries.map((industry) => (
              <Grid key={industry.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: colors.deepNavy, mb: 2 }}
                  >
                    {industry.title}
                  </Typography>
                  <Typography
                    sx={{ color: colors.textSecondary, lineHeight: 1.8 }}
                  >
                    {industry.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography
              sx={{ color: colors.textSecondary, mb: 3, maxWidth: 560, mx: "auto" }}
            >
              Not sure which solution fits your industry? Our team will help you
              design the right infrastructure.
            </Typography>
            <NavButton href="/contact" variant="contained" color="primary" size="large">
              Talk to Our Team
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
