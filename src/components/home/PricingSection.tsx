"use client";

import { Box, Container, Grid } from "@mui/material";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import NavButton from "@/components/ui/NavButton";
import PricingTierCard from "@/components/ui/PricingTierCard";
import { pricingSection, pricingTiers } from "@/lib/content";

export default function PricingSection() {
  return (
    <Box className="section-cream" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <AnimatedSection>
          <SectionHeading
            title={pricingSection.headline}
            subtitle={pricingSection.disclaimer}
          />
        </AnimatedSection>

        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {pricingTiers.map((tier, index) => (
            <Grid key={tier.name} size={{ xs: 12, sm: 6, lg: 3 }}>
              <AnimatedSection delay={index * 0.1}>
                <PricingTierCard tier={tier} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <NavButton href="/pricing" variant="outlined" color="primary" size="large">
            View Pricing Details
          </NavButton>
        </Box>
      </Container>
    </Box>
  );
}
