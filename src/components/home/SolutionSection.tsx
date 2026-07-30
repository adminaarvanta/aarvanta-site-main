"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import { solutionSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function SolutionSection() {
  return (
    <SectionShell variant="splitRail" maxWidth="md">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          gap: { xs: 4, md: 5 },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRight: { md: `2px solid ${colors.primary}` },
            pr: { md: 4 },
          }}
        >
          <Typography
            sx={{
              color: colors.gold,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            The solution
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              color: colors.textDark,
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            {solutionSection.eyebrow}
          </Typography>
          <Typography sx={{ color: colors.textMuted, lineHeight: 1.7, fontSize: "1.05rem" }}>
            {solutionSection.body}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1.5,
          }}
        >
          {solutionSection.pillars.map((pillar) => (
            <Box
              key={pillar}
              sx={{
                bgcolor: colors.offWhite,
                borderRadius: 2.5,
                border: `1px solid ${colors.borderNavy}`,
                py: 2.5,
                px: 2,
                borderTop: `3px solid ${colors.gold}`,
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: "1rem", color: colors.textDark }}>
                {pillar}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
}
