"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import { problemSection } from "@/lib/content";
import { colors } from "@/lib/theme";

/** Scattered angles so chips feel chaotic — not a neat wrap row */
const chipOffsets = [
  { rotate: -8, mt: 0 },
  { rotate: 4, mt: 2 },
  { rotate: -3, mt: -1 },
  { rotate: 7, mt: 1.5 },
  { rotate: -5, mt: 0.5 },
  { rotate: 2, mt: -0.5 },
  { rotate: -6, mt: 2 },
  { rotate: 5, mt: 0 },
  { rotate: -2, mt: 1 },
  { rotate: 9, mt: -1 },
  { rotate: -4, mt: 1.5 },
  { rotate: 3, mt: 0.5 },
];

export default function ProblemSection() {
  return (
    <SectionShell variant="mist" maxWidth="md">
      <Typography
        className="font-serif"
        component="h2"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.85rem" },
          fontWeight: 600,
          color: colors.deepNavy,
          lineHeight: 1.15,
          mb: 2,
          maxWidth: 640,
          mx: "auto",
        }}
      >
        {problemSection.headline}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: colors.textMuted,
          mb: 5,
          fontSize: "1.05rem",
        }}
      >
        {problemSection.intro}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 1, md: 1.25 },
          mb: 5,
          maxWidth: 620,
          mx: "auto",
        }}
      >
        {problemSection.tools.map((tool, i) => {
          const offset = chipOffsets[i % chipOffsets.length];
          return (
            <Box
              key={tool}
              sx={{
                px: 1.75,
                py: 1,
                bgcolor: colors.cream,
                border: `1px solid ${colors.borderNavy}`,
                color: colors.textMuted,
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "line-through",
                textDecorationColor: "rgba(185,40,40,0.45)",
                transform: {
                  xs: "none",
                  md: `rotate(${offset.rotate}deg)`,
                },
                mt: { md: offset.mt },
                boxShadow: "0 4px 12px rgba(0,18,51,0.06)",
              }}
            >
              {tool}
            </Box>
          );
        })}
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          color: colors.deepNavy,
          fontWeight: 700,
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          maxWidth: 480,
          mx: "auto",
          lineHeight: 1.5,
        }}
      >
        {problemSection.closing}
      </Typography>
    </SectionShell>
  );
}
