"use client";

import { Box, Chip, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import { problemSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function ProblemSection() {
  return (
    <SectionShell variant="mist" maxWidth="md">
      <SectionHeader title={problemSection.headline} subtitle={problemSection.intro} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          mb: 3,
        }}
      >
        {problemSection.tools.map((tool) => (
          <Chip
            key={tool}
            label={tool}
            sx={{
              bgcolor: colors.cream,
              border: `1px solid ${colors.borderNavy}`,
              fontWeight: 500,
              "&:hover": { borderColor: colors.gold },
            }}
          />
        ))}
      </Box>
      <Typography
        sx={{
          color: colors.textDark,
          fontWeight: 600,
          fontSize: { xs: "1rem", md: "1.125rem" },
          maxWidth: 520,
          mx: "auto",
          textAlign: "center",
        }}
      >
        {problemSection.closing}
      </Typography>
    </SectionShell>
  );
}
