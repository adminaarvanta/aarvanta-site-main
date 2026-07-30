"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import { whyOutcomes } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function WhySection() {
  return (
    <SectionShell variant="paper" maxWidth="md">
      <Typography
        sx={{
          color: colors.gold,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          mb: 2,
          textAlign: "center",
        }}
      >
        Why AARVANTA
      </Typography>
      <Typography
        component="h2"
        className="font-serif"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.75rem" },
          fontWeight: 600,
          color: colors.deepNavy,
          mb: 6,
          lineHeight: 1.15,
        }}
      >
        One system. Less chaos. More clarity.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 640, mx: "auto" }}>
        {whyOutcomes.map((outcome, index) => (
          <Box
            key={outcome}
            sx={{
              display: "grid",
              gridTemplateColumns: "64px 1fr",
              gap: 2,
              py: 2.75,
              borderTop: `1px solid ${colors.borderNavy}`,
              "&:last-child": { borderBottom: `1px solid ${colors.borderNavy}` },
            }}
          >
            <Typography
              className="font-serif"
              sx={{
                fontSize: "1.75rem",
                fontWeight: 600,
                color: colors.gold,
                lineHeight: 1,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                color: colors.textDark,
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                lineHeight: 1.45,
                pt: 0.35,
              }}
            >
              {outcome}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
}
