"use client";

import { Box, Typography } from "@mui/material";
import { heroFlowSteps } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function HeroFlowVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 0,
        bgcolor: colors.deepNavy,
        p: { xs: 3, md: 4 },
        minHeight: { xs: 300, md: 420 },
        overflow: "hidden",
        clipPath: { md: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" },
        pl: { md: 6 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: `1px solid ${colors.gold}`,
          opacity: 0.35,
        }}
      />
      <Typography
        sx={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: colors.gold,
          mb: 3.5,
        }}
      >
        Live business flow
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 11,
            top: 12,
            bottom: 12,
            width: 2,
            bgcolor: "rgba(212,175,55,0.35)",
          }}
        />
        {heroFlowSteps.map((step, index) => (
          <Box
            key={step}
            className="flow-step"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 1.1,
              animation: `flowPulse 3.5s ease-in-out ${index * 0.25}s infinite`,
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: index === 0 ? colors.gold : colors.navyMid,
                border: `2px solid ${index === 0 ? colors.goldLight : "rgba(255,255,255,0.25)"}`,
                flexShrink: 0,
                zIndex: 1,
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: colors.white,
                letterSpacing: "-0.01em",
              }}
            >
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
