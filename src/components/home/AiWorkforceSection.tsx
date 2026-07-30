"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import NavButton from "@/components/ui/NavButton";
import { aiWorkforceSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function AiWorkforceSection() {
  return (
    <SectionShell variant="navy" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
          gap: { xs: 5, md: 6 },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: colors.gold,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            AI Workforce
          </Typography>
          <Typography
            component="h2"
            className="font-serif"
            sx={{
              fontSize: { xs: "2.1rem", md: "2.75rem" },
              fontWeight: 600,
              color: colors.white,
              lineHeight: 1.12,
              mb: 2,
            }}
          >
            {aiWorkforceSection.headline}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.72)", mb: 3, lineHeight: 1.7 }}>
            {aiWorkforceSection.subheadline}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
            {aiWorkforceSection.traits.map((trait) => (
              <Typography
                key={trait}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: colors.gold,
                  borderBottom: `1px solid ${colors.gold}`,
                  pb: 0.25,
                }}
              >
                {trait}
              </Typography>
            ))}
          </Box>
          <NavButton href="/ai-workforce" variant="outlined" color="secondary" size="large">
            Explore AI Workforce
          </NavButton>
        </Box>

        {/* Overlapping avatar constellation — not a card grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 0,
            pr: { md: 2 },
          }}
        >
          {aiWorkforceSection.roles.map((role, index) => {
            const initials = role
              .replace("AI ", "")
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);
            const size = index % 3 === 0 ? 88 : index % 3 === 1 ? 72 : 64;
            return (
              <Box
                key={role}
                component={Link}
                href="/ai-workforce"
                title={role}
                sx={{
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  ml: index === 0 ? 0 : { xs: -1.5, md: -2 },
                  mt: index > 3 ? { xs: -1.5, md: -2 } : 0,
                  bgcolor: index % 2 === 0 ? colors.gold : colors.navyMid,
                  color: index % 2 === 0 ? colors.deepNavy : colors.white,
                  border: "3px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: size > 80 ? "1rem" : "0.8rem",
                  zIndex: aiWorkforceSection.roles.length - index,
                  transition: "transform 0.2s, z-index 0s",
                  "&:hover": {
                    transform: "scale(1.12)",
                    zIndex: 20,
                    borderColor: colors.gold,
                  },
                }}
              >
                {initials}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "grid" },
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          mt: 6,
          pt: 4,
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {aiWorkforceSection.roles.slice(0, 4).map((role) => (
          <Typography key={role} sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>
            {role}
          </Typography>
        ))}
      </Box>
    </SectionShell>
  );
}
