"use client";

import { Box, Container, Typography } from "@mui/material";
import NavButton from "@/components/ui/NavButton";
import { pricingSection, pricingTiers } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HomePricingSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.cream }} id="pricing">
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1200 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: colors.textDark,
              mb: 1,
            }}
          >
            Pricing
          </Typography>
          <Typography sx={{ color: colors.textMuted }}>{pricingSection.headline}</Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", mt: 0.5 }}>
            {pricingSection.disclaimer}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {pricingTiers.map((tier) => (
            <Box
              key={tier.name}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: tier.highlighted ? colors.primary : colors.offWhite,
                color: tier.highlighted ? colors.white : colors.textDark,
                border: tier.highlighted ? "none" : `1px solid ${colors.border}`,
                display: "flex",
                flexDirection: "column",
                minHeight: 340,
              }}
            >
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
                  opacity: tier.highlighted ? 0.9 : 1,
                  color: tier.highlighted ? "rgba(255,255,255,0.85)" : colors.textMuted,
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
                      color: tier.highlighted ? "rgba(255,255,255,0.9)" : colors.textMuted,
                    }}
                  >
                    • {feature}
                  </Typography>
                ))}
              </Box>
              <NavButton
                href="/book-demo"
                variant={tier.highlighted ? "outlined" : "contained"}
                color="primary"
                fullWidth
                sx={
                  tier.highlighted
                    ? {
                        borderColor: colors.white,
                        color: colors.white,
                        "&:hover": { borderColor: colors.white, bgcolor: "rgba(255,255,255,0.1)" },
                      }
                    : undefined
                }
              >
                {tier.name === "Enterprise" ? "Let's Talk" : "Start Free Trial"}
              </NavButton>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
