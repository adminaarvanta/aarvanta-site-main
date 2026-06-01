import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "@/lib/theme";

export type PricingTier = {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
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
        borderRadius: 2,
        bgcolor: highlighted ? colors.textDark : colors.white,
        border: highlighted ? `2px solid ${colors.gold}` : `1px solid ${colors.border}`,
        boxShadow: highlighted ? "0 20px 60px rgba(42, 36, 24, 0.15)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        component="h3"
        className="font-serif"
        sx={{
          fontWeight: 600,
          mb: 0.5,
          fontSize: "1.25rem",
          color: highlighted ? colors.white : colors.textDark,
        }}
      >
        {tier.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 3,
          color: highlighted ? "rgba(255, 255, 255, 0.85)" : colors.textMuted,
        }}
      >
        {tier.description}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 600,
          mb: 3,
          color: highlighted ? colors.goldLight : colors.gold,
        }}
      >
        Custom pricing based on scale and requirements.
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
