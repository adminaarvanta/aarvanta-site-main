"use client";

import { Box, Chip, Container, Typography } from "@mui/material";
import NavButton from "@/components/ui/NavButton";
import { partnerSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function PartnerHomeSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.cream }}>
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
          {partnerSection.headline}
        </Typography>
        <Typography sx={{ color: colors.textMuted, mb: 3, maxWidth: 520, mx: "auto" }}>
          {partnerSection.body}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1, mb: 4 }}>
          {partnerSection.types.map((type) => (
            <Chip
              key={type}
              label={type}
              sx={{ bgcolor: colors.offWhite, border: `1px solid ${colors.border}`, fontWeight: 600 }}
            />
          ))}
        </Box>
        <NavButton href={partnerSection.cta.href} variant="contained" color="primary" size="large">
          {partnerSection.cta.label}
        </NavButton>
      </Container>
    </Box>
  );
}
