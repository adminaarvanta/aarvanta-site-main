"use client";

import Link from "next/link";
import { Box, Divider, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { platformStats } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function StatsPanel() {
  return (
    <Box
      sx={{
        bgcolor: colors.cream,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
        p: 3,
        height: "fit-content",
      }}
    >
      {platformStats.map((stat, index) => (
        <Box key={stat.label}>
          {index > 0 && <Divider sx={{ my: 2.25, borderColor: colors.border }} />}
          <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: colors.textMuted, mb: 0.5 }}>
            {stat.label}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: colors.textDark,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {stat.value}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: stat.detailColor === "success" ? "#16A34A" : colors.textMuted,
              mt: 0.5,
              fontWeight: stat.detailColor === "success" ? 600 : 400,
            }}
          >
            {stat.detail}
          </Typography>
        </Box>
      ))}

      <Box sx={{ mt: 2.5, pt: 2, borderTop: `1px solid ${colors.border}` }}>
        <Typography
          component={Link}
          href="/case-studies"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.85rem",
            fontWeight: 600,
            color: colors.primary,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View Success Stories
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
}
