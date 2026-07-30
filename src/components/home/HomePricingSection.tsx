"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import NavButton from "@/components/ui/NavButton";
import { pricingSection, pricingTiers } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HomePricingSection() {
  return (
    <SectionShell variant="tileGrid" id="pricing" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          sx={{
            color: colors.gold,
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Pricing
        </Typography>
        <Typography
          component="h2"
          className="font-serif"
          sx={{
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 600,
            color: colors.deepNavy,
            mb: 1,
          }}
        >
          {pricingSection.headline}
        </Typography>
        <Typography sx={{ color: colors.textMuted }}>{pricingSection.disclaimer}</Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "1fr 1.15fr 1fr 1fr" },
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
                p: { xs: 3, md: featured ? 4 : 3 },
                bgcolor: featured ? colors.deepNavy : colors.cream,
                color: featured ? colors.white : colors.textDark,
                border: featured ? `2px solid ${colors.gold}` : `1px solid ${colors.borderNavy}`,
                display: "flex",
                flexDirection: "column",
                minHeight: featured ? { lg: 420 } : 320,
                order: { lg: featured ? 0 : undefined },
              }}
            >
              {featured && (
                <Typography
                  sx={{
                    color: colors.gold,
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  Most popular
                </Typography>
              )}
              <Typography sx={{ fontWeight: 800, fontSize: "1.15rem", mb: 1 }}>{tier.name}</Typography>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, mb: 1.5 }}>
                <Typography
                  className="font-serif"
                  sx={{ fontSize: featured ? "2.5rem" : "2rem", fontWeight: 600, letterSpacing: "-0.02em" }}
                >
                  {tier.price}
                </Typography>
                {tier.period && (
                  <Typography sx={{ fontSize: "0.85rem", opacity: 0.8 }}>{tier.period}</Typography>
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  mb: 3,
                  color: featured ? "rgba(255,255,255,0.8)" : colors.textMuted,
                }}
              >
                {tier.description}
              </Typography>
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1.25, mb: 3 }}>
                {tier.features.map((feature) => (
                  <Typography
                    key={feature}
                    sx={{
                      fontSize: "0.88rem",
                      color: featured ? "rgba(255,255,255,0.88)" : colors.textMuted,
                      borderLeft: `2px solid ${featured ? colors.gold : colors.borderNavy}`,
                      pl: 1.5,
                    }}
                  >
                    {feature}
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
