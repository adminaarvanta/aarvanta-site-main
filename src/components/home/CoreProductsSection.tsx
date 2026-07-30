"use client";

import Link from "next/link";
import { Box, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import { coreProducts } from "@/lib/content";
import { colors } from "@/lib/theme";

/** Bento spans — deliberately uneven so it doesn't read as a card grid */
const spans: Record<number, { col: string; row?: string; featured?: boolean; outline?: boolean }> = {
  0: { col: "span 2", row: "span 2", featured: true },
  1: { col: "span 1" },
  2: { col: "span 1" },
  3: { col: "span 2" },
  4: { col: "span 1", outline: true },
  5: { col: "span 1" },
  6: { col: "span 1", outline: true },
  7: { col: "span 1" },
};

export default function CoreProductsSection() {
  return (
    <SectionShell variant="tileGrid" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
      <SectionHeader
        serif
        eyebrow="Platform"
        title="Core Products"
        subtitle="Premium building blocks of your AI operating system."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gridAutoRows: { lg: "minmax(140px, auto)" },
          gap: 1.5,
        }}
      >
        {coreProducts.map((product, index) => {
          const span = spans[index] ?? { col: "span 1" };
          const featured = Boolean(span.featured);
          const outline = Boolean(span.outline);
          return (
            <Box
              key={product.name}
              component={Link}
              href={product.href}
              sx={{
                gridColumn: { lg: span.col },
                gridRow: { lg: span.row },
                p: featured ? 4 : 3,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: featured ? { lg: 280 } : 140,
                bgcolor: featured
                  ? colors.deepNavy
                  : outline
                    ? "transparent"
                    : colors.cream,
                color: featured ? colors.white : colors.textDark,
                border: outline
                  ? `2px solid ${colors.primary}`
                  : featured
                    ? `1px solid ${colors.gold}`
                    : `1px solid ${colors.borderNavy}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 36px rgba(0,18,51,0.12)",
                },
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.25 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: featured ? "1.5rem" : "1.05rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {product.name}
                  </Typography>
                  {product.comingSoon && (
                    <Chip
                      label="Soon"
                      size="small"
                      sx={{
                        height: 22,
                        fontSize: "0.65rem",
                        bgcolor: colors.goldTint,
                        color: colors.goldDark,
                      }}
                    />
                  )}
                </Box>
                <Typography
                  sx={{
                    fontSize: featured ? "1rem" : "0.88rem",
                    lineHeight: 1.6,
                    color: featured ? "rgba(255,255,255,0.75)" : colors.textMuted,
                  }}
                >
                  {product.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 2,
                  color: featured ? colors.gold : colors.primary,
                }}
              >
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>Explore</Typography>
                <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </SectionShell>
  );
}
