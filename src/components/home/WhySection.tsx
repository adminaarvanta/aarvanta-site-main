"use client";

import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import { whyOutcomes } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function WhySection() {
  return (
    <SectionShell variant="paper" maxWidth="md">
      <SectionHeader eyebrow="Why AARVANTA" title="One system. Less chaos. More clarity." />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {whyOutcomes.map((outcome) => (
          <Box
            key={outcome}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              py: 2,
              px: 2.5,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <CheckCircleOutlineIcon sx={{ color: colors.gold, mt: 0.25, flexShrink: 0 }} />
            <Typography sx={{ fontWeight: 600, color: colors.textDark, fontSize: "1rem", lineHeight: 1.5 }}>
              {outcome}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
}
