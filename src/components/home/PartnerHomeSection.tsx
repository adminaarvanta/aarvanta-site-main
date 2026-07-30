"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import NavButton from "@/components/ui/NavButton";
import { partnerSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function PartnerHomeSection() {
  return (
    <SectionShell variant="splitRail" disableContainer>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          minHeight: { md: 420 },
        }}
      >
        <Box
          sx={{
            bgcolor: "#F0EDE4",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 9 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: colors.goldDark,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Partners
          </Typography>
          <Typography
            className="font-serif"
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 600,
              color: colors.deepNavy,
              mb: 2,
              lineHeight: 1.15,
            }}
          >
            {partnerSection.headline}
          </Typography>
          <Typography sx={{ color: colors.textMuted, mb: 4, lineHeight: 1.7, maxWidth: 440 }}>
            {partnerSection.body}
          </Typography>
          <Box>
            <NavButton href={partnerSection.cta.href} variant="contained" color="primary" size="large">
              {partnerSection.cta.label}
            </NavButton>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: colors.deepNavy,
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {partnerSection.types.map((type, index) => (
            <Box
              key={type}
              sx={{
                py: 2.25,
                borderBottom:
                  index < partnerSection.types.length - 1
                    ? "1px solid rgba(255,255,255,0.12)"
                    : "none",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: colors.gold,
                  flexShrink: 0,
                }}
              />
              <Typography sx={{ fontWeight: 700, color: colors.white, fontSize: "1.15rem" }}>
                {type}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
}
