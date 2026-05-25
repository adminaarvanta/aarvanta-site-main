"use client";

import { Box, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

const modules = [
  { label: "LeadOS", x: 10, y: 15, color: colors.mutedGold },
  { label: "CRMOS", x: 55, y: 8, color: colors.navyLight },
  { label: "WhatsAppOS", x: 75, y: 35, color: "#25D366" },
  { label: "VoiceOS", x: 15, y: 55, color: colors.deepNavy },
  { label: "SiteOS", x: 45, y: 50, color: colors.mutedGold },
  { label: "Analytics", x: 70, y: 70, color: colors.navyLight },
];

export default function HeroVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        maxWidth: 560,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          background: `linear-gradient(145deg, ${colors.white} 0%, ${colors.offWhite} 100%)`,
          border: `1px solid ${colors.border}`,
          boxShadow: "0 20px 60px rgba(15, 23, 41, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Dashboard header bar */}
        <Box
          sx={{
            height: 48,
            bgcolor: colors.deepNavy,
            display: "flex",
            alignItems: "center",
            px: 2,
            gap: 1,
          }}
        >
          {[colors.mutedGold, "rgba(255,255,255,0.3)", "rgba(255,255,255,0.3)"].map(
            (c, i) => (
              <Box
                key={i}
                sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c }}
              />
            )
          )}
          <Typography
            sx={{
              ml: 1,
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-manrope)",
            }}
          >
            AARVANTA Control Center
          </Typography>
        </Box>

        {/* Dashboard content area */}
        <Box sx={{ p: 2.5, position: "relative", height: "calc(100% - 48px)" }}>
          {/* Stats row */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
            {[
              { label: "Active Leads", value: "2,847" },
              { label: "Conversations", value: "1,203" },
              { label: "Conversion", value: "34.2%" },
            ].map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  flex: 1,
                  p: 1.5,
                  borderRadius: "10px",
                  bgcolor: colors.white,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Typography
                  sx={{ fontSize: "0.65rem", color: colors.textSecondary, mb: 0.5 }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: colors.deepNavy,
                    fontFamily: "var(--font-manrope)",
                  }}
                >
                  {stat.value}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Module nodes */}
          <Box sx={{ position: "relative", height: 180 }}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              style={{ position: "absolute", inset: 0 }}
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.mutedGold} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={colors.deepNavy} stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {[
                [20, 25, 55, 15],
                [55, 15, 80, 40],
                [20, 60, 50, 55],
                [50, 55, 75, 75],
                [20, 25, 50, 55],
                [55, 15, 50, 55],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
              ))}
            </svg>

            {modules.map((mod) => (
              <Box
                key={mod.label}
                sx={{
                  position: "absolute",
                  left: `${mod.x}%`,
                  top: `${mod.y}%`,
                  transform: "translate(-50%, -50%)",
                  px: 1.5,
                  py: 0.75,
                  borderRadius: "8px",
                  bgcolor: colors.white,
                  border: `1.5px solid ${mod.color}`,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: colors.deepNavy,
                    fontFamily: "var(--font-manrope)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {mod.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Activity feed */}
          <Box
            sx={{
              mt: 1,
              p: 1.5,
              borderRadius: "10px",
              bgcolor: "rgba(15, 23, 41, 0.03)",
              border: `1px solid ${colors.border}`,
            }}
          >
            {[
              "New lead qualified via LeadOS → CRMOS synced",
              "WhatsAppOS follow-up sent automatically",
              "VoiceOS handled inbound call — appointment booked",
            ].map((activity, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: i === 0 ? colors.mutedGold : colors.textSecondary,
                    opacity: i === 0 ? 1 : 0.4,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: i === 0 ? colors.softCharcoal : colors.textSecondary,
                    fontWeight: i === 0 ? 500 : 400,
                  }}
                >
                  {activity}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
