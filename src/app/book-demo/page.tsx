import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo with AARVANTA to explore AI infrastructure built for real businesses.",
};

const demoBenefits = [
  "Personalized walkthrough of the AARVANTA ecosystem",
  "Industry-specific use case discussion",
  "Custom infrastructure recommendations",
  "No obligation strategy consultation",
];

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        title="See AARVANTA in Action."
        subtitle="Book a personalized demo to explore how our AI infrastructure can transform your business operations."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h4"
                sx={{ color: colors.deepNavy, mb: 3, fontSize: "1.5rem" }}
              >
                What to Expect
              </Typography>
              {demoBenefits.map((benefit) => (
                <Box
                  key={benefit}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2.5 }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: colors.mutedGold, mt: 0.3 }}
                  />
                  <Typography sx={{ color: colors.softCharcoal, lineHeight: 1.7 }}>
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "16px",
                  bgcolor: colors.white,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: colors.deepNavy, mb: 3 }}
                >
                  Schedule Your Demo
                </Typography>
                <ContactForm
                  submitLabel="Book a Demo"
                  showTeamSize={true}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
