"use client";

import { Box, Container, Typography } from "@mui/material";
import { solutionSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function SolutionSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.cream }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, textAlign: "center" }}>
        <Typography
          sx={{
            color: colors.primary,
            fontWeight: 700,
            fontSize: "1rem",
            mb: 2,
          }}
        >
          {solutionSection.eyebrow}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
            gap: 2,
            mb: 4,
          }}
        >
          {solutionSection.pillars.map((pillar) => (
            <Box
              key={pillar}
              sx={{
                bgcolor: colors.offWhite,
                borderRadius: 3,
                border: `1px solid ${colors.border}`,
                py: 3,
                px: 2,
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "1rem", md: "1.15rem" }, color: colors.textDark }}>
                {pillar}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            color: colors.textMuted,
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.7,
            maxWidth: 560,
            mx: "auto",
          }}
        >
          {solutionSection.body}
        </Typography>
      </Container>
    </Box>
  );
}
