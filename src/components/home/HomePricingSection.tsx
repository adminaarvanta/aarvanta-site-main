"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import NavButton from "@/components/ui/NavButton";
import { pricingSection, pricingTiers } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HomePricingSection() {
  return (
    <SectionShell variant="tileGrid" id="pricing" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
      <SectionHeader
        eyebrow="Pricing"
        title="Pricing"
        subtitle={`${pricingSection.headline} ${pricingSection.disclaimer}`}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: 2,
          alignItems: "stretch",
        }}
      >
        {pricingTiers.map((tier) => {
          const featured = Boolean(tier.highlighted);
          return (
            <Box
              key={tier.name}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: featured ? colors.primary : colors.offWhite,
                color: featured ? colors.white : colors.textDark,
                border: featured ? `2px solid ${colors.gold}` : `1px solid ${colors.borderNavy}`,
                display: "flex",
                flexDirection: "column",
                minHeight: featured ? { lg: 380 } : 340,
                transform: featured ? { lg: "scale(1.03)" } : undefined,
                boxShadow: featured ? "0 16px 40px rgba(0,24,72,0.28)" : colors.cardShadow,
                zIndex: featured ? 1 : 0,
              }}
            >
              {featured && (
                <Typography
                  sx={{
                    color: colors.gold,
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  Most popular
                </Typography>
              )}
              <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1 }}>{tier.name}</Typography>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, mb: 1 }}>
                <Typography sx={{ fontSize: "1.75rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  {tier.price}
                </Typography>
                {tier.period && (
                  <Typography sx={{ fontSize: "0.85rem", opacity: 0.8 }}>{tier.period}</Typography>
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  mb: 2.5,
                  color: featured ? "rgba(255,255,255,0.85)" : colors.textMuted,
                }}
              >
                {tier.description}
              </Typography>
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
                {tier.features.map((feature) => (
                  <Typography
                    key={feature}
                    sx={{
                      fontSize: "0.85rem",
                      color: featured ? "rgba(255,255,255,0.9)" : colors.textMuted,
                    }}
                  >
                    • {feature}
                  </Typography>
                ))}
              </Box>
              <NavButton
                href="/book-demo"
                variant={featured ? "outlined" : "contained"}
                color={featured ? "secondary" : "primary"}
                fullWidth
              >
                {tier.name === "Enterprise" ? "Let's Talk" : "Start Free Trial"}
              </NavButton>
            </Box>
          );
        })}
      </Box>
    </SectionShell>
  );
}
