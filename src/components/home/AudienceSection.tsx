"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionShell from "@/components/ui/sections/SectionShell";
import { audienceCards } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function AudienceSection() {
  return (
    <SectionShell variant="goldEdge" maxWidth={false} containerSx={{ maxWidth: 960 }}>
      <Typography
        sx={{
          color: colors.gold,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        Who it&apos;s for
      </Typography>
      <Typography
        component="h2"
        className="font-serif"
        sx={{
          fontSize: { xs: "2rem", md: "2.6rem" },
          fontWeight: 600,
          color: colors.deepNavy,
          mb: 1.5,
          lineHeight: 1.15,
        }}
      >
        Four paths. One operating system.
      </Typography>
      <Typography sx={{ color: colors.textMuted, mb: 4, maxWidth: 520 }}>
        Whether you sell, serve, or scale — AARVANTA fits your operating rhythm.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {audienceCards.map((card, index) => (
          <Box
            key={card.title}
            component={Link}
            href={card.href}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "48px 1fr auto", md: "72px 1fr auto" },
              gap: 2,
              alignItems: "center",
              py: { xs: 2.5, md: 3 },
              textDecoration: "none",
              borderTop: `1px solid ${colors.borderNavy}`,
              borderBottom: index === audienceCards.length - 1 ? `1px solid ${colors.borderNavy}` : "none",
              transition: "background 0.15s, padding-left 0.15s",
              "&:hover": {
                bgcolor: colors.goldTint,
                pl: 1,
                "& .arrow": { color: colors.goldDark, transform: "translateX(4px)" },
              },
            }}
          >
            <Typography
              className="font-serif"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 600,
                color: colors.gold,
                lineHeight: 1,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.15rem", md: "1.35rem" },
                  color: colors.deepNavy,
                  letterSpacing: "-0.02em",
                  mb: 0.5,
                }}
              >
                {card.title}
              </Typography>
              <Typography sx={{ color: colors.textMuted, fontSize: "0.95rem", lineHeight: 1.55 }}>
                {card.description}
              </Typography>
            </Box>
            <ArrowForwardIcon
              className="arrow"
              sx={{ color: colors.primary, transition: "all 0.15s", fontSize: 22 }}
            />
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
}
