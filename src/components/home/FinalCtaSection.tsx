"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import NavButton from "@/components/ui/NavButton";
import { finalCta } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function FinalCtaSection() {
  return (
    <SectionShell variant="navy" maxWidth="md">
      <Box sx={{ textAlign: "center" }}>
        <Typography
          component="h2"
          sx={{
            color: colors.white,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          {finalCta.headline}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.8)",
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            mb: 4,
            maxWidth: 560,
            mx: "auto",
          }}
        >
          {finalCta.body}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
          <NavButton
            href={finalCta.primaryCta.href}
            variant="contained"
            color="secondary"
            size="large"
          >
            {finalCta.primaryCta.label}
          </NavButton>
          <NavButton
            href={finalCta.secondaryCta.href}
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.4)",
              color: colors.white,
              "&:hover": {
                borderColor: colors.gold,
                color: colors.goldLight,
                bgcolor: "rgba(255,255,255,0.06)",
              },
            }}
          >
            {finalCta.secondaryCta.label}
          </NavButton>
        </Box>
      </Box>
    </SectionShell>
  );
}
