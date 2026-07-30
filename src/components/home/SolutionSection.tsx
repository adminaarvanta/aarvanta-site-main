"use client";

import { Box, Typography } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import { solutionSection } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function SolutionSection() {
  return (
    <SectionShell variant="splitRail" disableContainer>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: { md: 480 },
        }}
      >
        <Box
          sx={{
            bgcolor: colors.deepNavy,
            color: colors.white,
            px: { xs: 3, md: 7 },
            py: { xs: 6, md: 10 },
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
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            The solution
          </Typography>
          <Typography
            className="font-serif"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 600,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            {solutionSection.eyebrow}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, fontSize: "1.1rem", maxWidth: 400 }}>
            {solutionSection.body}
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: colors.cream,
            px: { xs: 3, md: 7 },
            py: { xs: 5, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0,
            borderTop: { xs: `6px solid ${colors.gold}`, md: "none" },
            borderLeft: { md: `6px solid ${colors.gold}` },
          }}
        >
          {solutionSection.pillars.map((pillar, index) => (
            <Box
              key={pillar}
              sx={{
                py: 2.5,
                borderBottom: index < solutionSection.pillars.length - 1 ? `1px solid ${colors.borderNavy}` : "none",
                display: "flex",
                alignItems: "baseline",
                gap: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.75rem",
                  color: colors.gold,
                  fontWeight: 600,
                  lineHeight: 1,
                  minWidth: 36,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.35rem", md: "1.65rem" },
                  color: colors.deepNavy,
                  letterSpacing: "-0.02em",
                }}
              >
                {pillar}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
}
