"use client";

import { Box, Typography } from "@mui/material";
import { heroFlowSteps } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HeroFlowVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(12px)",
        borderRadius: 4,
        border: `1px solid ${colors.borderNavy}`,
        boxShadow: colors.cardShadow,
        p: { xs: 2.5, md: 3.5 },
        overflow: "hidden",
        minHeight: { xs: 280, md: 360 },
      }}
    >
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.gold,
          mb: 3,
        }}
      >
        Live business flow
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
        {heroFlowSteps.map((step, index) => (
          <Box
            key={step}
            className="flow-step"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              animation: `flowPulse 3.5s ease-in-out ${index * 0.25}s infinite`,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: index === 0 ? colors.gold : colors.primary,
                flexShrink: 0,
                boxShadow: `0 0 0 4px ${index === 0 ? colors.goldTint : colors.iconBg}`,
              }}
            />
            <Box
              sx={{
                flex: 1,
                bgcolor: colors.cream,
                border: `1px solid ${colors.border}`,
                borderRadius: 2,
                px: 2,
                py: 1.25,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: colors.textDark }}>
                {step}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", color: colors.textMuted }}>
                {index === 0 ? "Start" : index === heroFlowSteps.length - 1 ? "Insight" : "Next"}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
