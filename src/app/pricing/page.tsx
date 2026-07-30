import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import PricingTierCard from "@/components/ui/PricingTierCard";
import SectionShell from "@/components/ui/sections/SectionShell";
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
        mode="marketing"
        eyebrow="Pricing"
        title="Simple. Transparent."
        subtitle="No credit card required. 15-day free trial on every plan."
      />

      <SectionShell variant="tileGrid" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 2,
            alignItems: "stretch",
          }}
        >
          {pricingTiers.map((tier) => (
            <Box
              key={tier.name}
              sx={{
                transform: tier.highlighted ? { lg: "scale(1.03)" } : undefined,
                zIndex: tier.highlighted ? 1 : 0,
              }}
            >
              <PricingTierCard tier={tier} />
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography sx={{ color: colors.textMuted, mb: 3 }}>
            Every business is different. Let&apos;s design the right plan for your scale.
          </Typography>
          <NavButton href="/contact" variant="contained" color="primary" size="large">
            Get Custom Pricing
          </NavButton>
        </Box>
      </SectionShell>
    </>
  );
}
