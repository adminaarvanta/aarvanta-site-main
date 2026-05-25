"use client";

import Link from "next/link";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { products } from "@/lib/content";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Partner Program", href: "/partner-program" },
  { label: "Careers", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "GDPR", href: "/gdpr" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.deepNavy,
        color: colors.white,
        pt: { xs: 8, md: 10 },
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Logo height={64} />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.65)", maxWidth: 320, lineHeight: 1.7 }}
            >
              Premium UK-based AI infrastructure company. Global AI systems,
              automation, SaaS, and white-label ecosystem.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: colors.mutedGold, mb: 2, fontWeight: 600 }}
            >
              Products
            </Typography>
            {products.map((product) => (
              <Typography
                key={product.id}
                component={Link}
                href="/products"
                variant="body2"
                sx={{
                  display: "block",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  mb: 1,
                  "&:hover": { color: colors.white },
                  transition: "color 0.2s",
                }}
              >
                {product.shortName}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: colors.mutedGold, mb: 2, fontWeight: 600 }}
            >
              Company
            </Typography>
            {companyLinks.map((link) => (
              <Typography
                key={link.href + link.label}
                component={Link}
                href={link.href}
                variant="body2"
                sx={{
                  display: "block",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  mb: 1,
                  "&:hover": { color: colors.white },
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: colors.mutedGold, mb: 2, fontWeight: 600 }}
            >
              Legal
            </Typography>
            {legalLinks.map((link) => (
              <Typography
                key={link.label}
                component={Link}
                href={link.href}
                variant="body2"
                sx={{
                  display: "block",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  mb: 1,
                  "&:hover": { color: colors.white },
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} AARVANTA LTD. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            Built in the UK. Designed for global scale.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
