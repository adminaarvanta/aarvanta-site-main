"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import NavButton from "@/components/ui/NavButton";
import { partnerSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function PartnerHomeSection() {
  return (
    <SectionShell variant="splitRail" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.15fr" },
          gap: 0,
          borderRadius: 3,
          overflow: "hidden",
          border: `1px solid ${colors.borderNavy}`,
        }}
      >
        <Box
          sx={{
            bgcolor: colors.primary,
            color: colors.cream,
            p: { xs: 3.5, md: 4.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: colors.gold,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            Partners
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.5rem", md: "1.85rem" }, fontWeight: 800, mb: 2, lineHeight: 1.2 }}>
            {partnerSection.headline}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 3, lineHeight: 1.65 }}>
            {partnerSection.body}
          </Typography>
          <NavButton href={partnerSection.cta.href} variant="outlined" color="secondary" size="medium">
            {partnerSection.cta.label}
          </NavButton>
        </Box>
        <Box sx={{ bgcolor: colors.cream, p: { xs: 3.5, md: 4.5 } }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: colors.textDark,
              mb: 2.5,
            }}
          >
            Partner paths
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {partnerSection.types.map((type) => (
              <Box
                key={type}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 1.25,
                  borderBottom: `1px solid ${colors.border}`,
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: colors.gold,
                    flexShrink: 0,
                  }}
                />
                <Typography sx={{ fontWeight: 600, color: colors.textDark, fontSize: "0.95rem" }}>
                  {type}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </SectionShell>
  );
}
