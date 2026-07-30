"use client";

import { Box, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

type MetricBlockProps = {
  value: string;
  label: string;
  detail?: string;
  light?: boolean;
};

export default function MetricBlock({ value, label, detail, light = false }: MetricBlockProps) {
  return (
    <Box
      sx={{
        py: 2,
        borderTop: `1px solid ${light ? "rgba(255,255,255,0.15)" : colors.borderNavy}`,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: light ? colors.goldLight : colors.primary,
          lineHeight: 1.1,
          mb: 0.75,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "0.95rem",
          color: light ? colors.white : colors.textDark,
          mb: detail ? 0.5 : 0,
        }}
      >
        {label}
      </Typography>
      {detail && (
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: light ? "rgba(255,255,255,0.7)" : colors.textMuted,
          }}
        >
          {detail}
        </Typography>
      )}
    </Box>
  );
}
