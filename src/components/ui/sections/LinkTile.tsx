"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "@/lib/theme";

type LinkTileProps = {
  label: string;
  href: string;
  description?: string;
  featured?: boolean;
};

export default function LinkTile({ label, href, description, featured }: LinkTileProps) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "block",
        p: 3,
        height: "100%",
        bgcolor: featured ? colors.primary : colors.cream,
        borderRadius: 3,
        border: featured ? "none" : `1px solid ${colors.borderNavy}`,
        textDecoration: "none",
        boxShadow: colors.cardShadow,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: colors.gold,
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          color: featured ? colors.white : colors.textDark,
          mb: description ? 1 : 0,
        }}
      >
        {label}
      </Typography>
      {description && (
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: featured ? "rgba(255,255,255,0.75)" : colors.textMuted,
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {description}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          color: featured ? colors.goldLight : colors.primary,
        }}
      >
        <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>Explore</Typography>
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
  );
}
