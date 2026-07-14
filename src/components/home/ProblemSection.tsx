"use client";

import { Box, Chip, Container, Typography } from "@mui/material";
import { problemSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function ProblemSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.offWhite }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, textAlign: "center" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: colors.textDark,
            mb: 2,
          }}
        >
          {problemSection.headline}
        </Typography>
        <Typography sx={{ color: colors.textMuted, mb: 3 }}>
          {problemSection.intro}
        </Typography>
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
                border: `1px solid ${colors.border}`,
                fontWeight: 500,
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
          }}
        >
          {problemSection.closing}
        </Typography>
      </Container>
    </Box>
  );
}
