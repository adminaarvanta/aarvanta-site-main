import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import PricingTierCard from "@/components/ui/PricingTierCard";
import { pricingTiers } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing. Starter £99, Growth £299, Business £699, Enterprise custom.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Simple. Transparent."
        subtitle="No credit card required. 15-day free trial on every plan."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Grid container spacing={4}>
            {pricingTiers.map((tier) => (
              <Grid key={tier.name} size={{ xs: 12, sm: 6, lg: 3 }}>
                <PricingTierCard tier={tier} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography sx={{ color: colors.textMuted, mb: 3 }}>
              Every business is different. Let&apos;s design the right plan for your scale.
            </Typography>
            <NavButton href="/contact" variant="contained" color="primary" size="large">
              Get Custom Pricing
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
