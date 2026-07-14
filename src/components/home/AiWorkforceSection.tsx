"use client";

import Link from "next/link";
import { Box, Chip, Container, Typography } from "@mui/material";
import { aiWorkforceSection } from "@/lib/content";
import { colors } from "@/lib/theme";

const avatarColors = [
  "#2563EB",
  "#7C3AED",
  "#16A34A",
  "#EA580C",
  "#0D9488",
  "#DB2777",
  "#1D4ED8",
  "#CA8A04",
];

export default function AiWorkforceSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.offWhite }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1200 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: colors.textDark,
              mb: 1,
            }}
          >
            {aiWorkforceSection.headline}
          </Typography>
          <Typography sx={{ color: colors.textMuted, maxWidth: 560, mx: "auto", mb: 2 }}>
            {aiWorkforceSection.subheadline}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
            {aiWorkforceSection.traits.map((trait) => (
              <Chip
                key={trait}
                label={trait}
                sx={{ bgcolor: colors.cream, border: `1px solid ${colors.border}`, fontWeight: 600 }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {aiWorkforceSection.roles.map((role, index) => {
            const initials = role
              .replace("AI ", "")
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);
            return (
              <Box
                key={role}
                component={Link}
                href="/ai-workforce"
                sx={{
                  bgcolor: colors.cream,
                  borderRadius: 3,
                  border: `1px solid ${colors.border}`,
                  p: 2.5,
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-3px)", borderColor: colors.primary },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    mx: "auto",
                    mb: 1.5,
                    bgcolor: `${avatarColors[index % avatarColors.length]}18`,
                    color: avatarColors[index % avatarColors.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                  }}
                >
                  {initials}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: colors.textDark, lineHeight: 1.35 }}>
                  {role}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: colors.textMuted, mt: 0.75 }}>
                  Follows up automatically. Available 24/7.
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
