"use client";

import { Box, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 5 },
        maxWidth: align === "center" ? 720 : "none",
        mx: align === "center" ? "auto" : 0,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: colors.gold,
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: light ? colors.white : colors.textDark,
          mb: subtitle ? 1.5 : 0,
          lineHeight: 1.15,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            color: light ? "rgba(255,255,255,0.78)" : colors.textMuted,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
