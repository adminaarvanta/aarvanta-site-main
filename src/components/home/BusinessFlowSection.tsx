"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import { businessFlow } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function BusinessFlowSection() {
  return (
    <SectionShell variant="flowTrack" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
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
          Business flow
        </Typography>
        <Typography
          component="h2"
          className="font-serif"
          sx={{
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 600,
            color: colors.white,
            mb: 1.5,
            lineHeight: 1.15,
          }}
        >
          Simple. Beautiful. Explains everything.
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 480, mx: "auto" }}>
          From the first visitor to lasting insight — one connected flow.
        </Typography>
      </Box>

      {/* Mobile: vertical timeline */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 0, pl: 1 }}>
        {businessFlow.map((step, index) => (
          <Box key={step} sx={{ display: "flex", gap: 2, minHeight: 56 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 28 }}>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  bgcolor: index === 0 || index === businessFlow.length - 1 ? colors.gold : colors.white,
                  border: `2px solid ${colors.gold}`,
                  flexShrink: 0,
                }}
              />
              {index < businessFlow.length - 1 && (
                <Box sx={{ flex: 1, width: 2, bgcolor: "rgba(212,175,55,0.4)", my: 0.5 }} />
              )}
            </Box>
            <Typography sx={{ fontWeight: 700, color: colors.white, pt: 0, fontSize: "0.95rem" }}>
              {step}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Desktop: continuous track */}
      <Box sx={{ display: { xs: "none", md: "block" }, position: "relative", pt: 2, pb: 1 }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: 28,
            left: "4%",
            right: "4%",
            height: 3,
            bgcolor: "rgba(212,175,55,0.45)",
          }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${businessFlow.length}, 1fr)`,
            gap: 1,
          }}
        >
          {businessFlow.map((step, index) => (
            <Box key={step} sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                  bgcolor: index === 0 || index === businessFlow.length - 1 ? colors.gold : colors.deepNavy,
                  border: `3px solid ${colors.gold}`,
                  boxShadow: "0 0 0 4px rgba(0,24,72,0.5)",
                }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: colors.white,
                  lineHeight: 1.35,
                  px: 0.5,
                }}
              >
                {step}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
}
