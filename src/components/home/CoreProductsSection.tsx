"use client";

import Link from "next/link";
import { Box, Chip, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { coreProducts } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function CoreProductsSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.cream }}>
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
            Core Products
          </Typography>
          <Typography sx={{ color: colors.textMuted, maxWidth: 520, mx: "auto" }}>
            Premium building blocks of your AI operating system.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {coreProducts.map((product) => (
            <Box
              key={product.name}
              component={Link}
              href={product.href}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: colors.offWhite,
                border: `1px solid ${colors.border}`,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                minHeight: 170,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 32px rgba(15,23,42,0.08)",
                  borderColor: colors.primary,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", color: colors.textDark }}>
                  {product.name}
                </Typography>
                {product.comingSoon && (
                  <Chip
                    label="Coming Soon"
                    size="small"
                    sx={{ height: 22, fontSize: "0.65rem", bgcolor: "rgba(37,99,235,0.08)", color: colors.primary }}
                  />
                )}
              </Box>
              <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", lineHeight: 1.6, flex: 1 }}>
                {product.description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 2, color: colors.primary }}>
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>Explore</Typography>
                <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
