"use client";

import Link from "next/link";
import { Box, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "@/lib/theme";

type ProductTileProps = {
  name: string;
  description: string;
  href: string;
  comingSoon?: boolean;
  featured?: boolean;
};

export default function ProductTile({
  name,
  description,
  href,
  comingSoon,
  featured,
}: ProductTileProps) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: featured ? colors.primary : colors.cream,
        color: featured ? colors.white : colors.textDark,
        border: featured ? "none" : `1px solid ${colors.borderNavy}`,
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        minHeight: 180,
        boxShadow: featured ? "0 12px 32px rgba(0,24,72,0.22)" : colors.cardShadow,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: featured ? undefined : colors.gold,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Typography sx={{ fontWeight: 800, fontSize: "1.05rem" }}>{name}</Typography>
        {comingSoon && (
          <Chip
            label="Coming Soon"
            size="small"
            sx={{
              height: 22,
              fontSize: "0.65rem",
              bgcolor: featured ? "rgba(212,175,55,0.2)" : colors.goldTint,
              color: featured ? colors.goldLight : colors.goldDark,
            }}
          />
        )}
      </Box>
      <Typography
        sx={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          flex: 1,
          color: featured ? "rgba(255,255,255,0.8)" : colors.textMuted,
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          mt: 2,
          color: featured ? colors.goldLight : colors.primary,
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>Explore</Typography>
        <ArrowForwardIcon sx={{ fontSize: 14 }} />
      </Box>
    </Box>
  );
}
