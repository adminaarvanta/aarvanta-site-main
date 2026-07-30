import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "@/lib/theme";

export type PricingTier = {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  price?: string;
  period?: string;
};

export default function PricingTierCard({ tier }: { tier: PricingTier }) {
  const highlighted = Boolean(tier.highlighted);
  const featureColor = highlighted ? colors.white : colors.textMuted;
  const iconColor = highlighted ? colors.goldLight : colors.gold;

  return (
    <Box
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 3,
        bgcolor: highlighted ? colors.primary : colors.offWhite,
        border: highlighted ? `2px solid ${colors.gold}` : `1px solid ${colors.borderNavy}`,
        boxShadow: highlighted ? "0 16px 40px rgba(0, 24, 72, 0.28)" : colors.cardShadow,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontWeight: 800,
          mb: 0.5,
          fontSize: "1.25rem",
          color: highlighted ? colors.white : colors.textDark,
        }}
      >
        {tier.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, mb: 1 }}>
        <Typography
          sx={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: highlighted ? colors.white : colors.textDark,
          }}
        >
          {tier.price ?? "Custom"}
        </Typography>
        {tier.period ? (
          <Typography sx={{ fontSize: "0.85rem", color: highlighted ? "rgba(255,255,255,0.8)" : colors.textMuted }}>
            {tier.period}
          </Typography>
        ) : null}
      </Box>
      <Typography
        variant="body2"
        sx={{
          mb: 3,
          color: highlighted ? "rgba(255, 255, 255, 0.85)" : colors.textMuted,
        }}
      >
        {tier.description}
      </Typography>

      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", flex: 1 }}>
        {tier.features.map((feature) => (
          <Box
            component="li"
            key={feature}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              py: 0.75,
            }}
          >
            <CheckIcon
              sx={{
                fontSize: 18,
                mt: 0.2,
                flexShrink: 0,
                color: iconColor,
              }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: featureColor,
              }}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
