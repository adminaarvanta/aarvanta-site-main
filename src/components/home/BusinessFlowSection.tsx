"use client";

import { Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import { businessFlow } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function BusinessFlowSection() {
  return (
    <SectionShell variant="flowTrack" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
      <SectionHeader
        eyebrow="Business flow"
        title="Simple. Beautiful. Explains everything."
        subtitle="From the first visitor to lasting insight — one connected flow."
      />

      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center", gap: 1 }}>
        {businessFlow.map((step, index) => (
          <Box key={step} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 280 }}>
            <Box
              sx={{
                width: "100%",
                bgcolor: colors.cream,
                border: `1px solid ${colors.borderNavy}`,
                borderRadius: 2.5,
                py: 1.5,
                textAlign: "center",
                fontWeight: 700,
                color: colors.textDark,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: index === 0 ? colors.gold : colors.primary,
                },
              }}
            >
              {step}
            </Box>
            {index < businessFlow.length - 1 && (
              <ArrowDownwardIcon sx={{ color: colors.gold, my: 0.5, fontSize: 18 }} />
            )}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          rowGap: 2,
        }}
      >
        {businessFlow.map((step, index) => (
          <Box key={step} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                bgcolor: colors.cream,
                border: `1px solid ${colors.borderNavy}`,
                borderRadius: 2.5,
                px: 2,
                py: 1.25,
                fontWeight: 700,
                fontSize: "0.85rem",
                color: colors.textDark,
                whiteSpace: "nowrap",
                boxShadow: colors.cardShadow,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: index === 0 ? colors.gold : colors.primary,
                }}
              />
              {step}
            </Box>
            {index < businessFlow.length - 1 && (
              <ArrowForwardIcon sx={{ color: colors.gold, fontSize: 16 }} />
            )}
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
}
