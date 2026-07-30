"use client";

import { Box, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  serif?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  serif = false,
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 5, md: 6 },
        maxWidth: align === "center" ? 720 : "none",
        mx: align === "center" ? "auto" : 0,
      }}
    >
      {eyebrow && (
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
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h2"
        className={serif ? "font-serif" : undefined}
        sx={{
          fontSize: { xs: "1.85rem", md: serif ? "2.75rem" : "2.35rem" },
          fontWeight: serif ? 600 : 800,
          letterSpacing: serif ? "-0.01em" : "-0.03em",
          color: light ? colors.white : colors.textDark,
          mb: subtitle ? 1.75 : 0,
          lineHeight: 1.12,
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
