"use client";

import Link from "next/link";
import { Box, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { navLinks } from "@/lib/content";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.cream,
        borderTop: `1px solid ${colors.border}`,
        pt: { xs: 6, md: 8 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ maxWidth: { xs: 280, sm: 320, md: 300 } }}>
              <Logo variant="full" width={280} href="/" />
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              sx={{ color: colors.gold, fontWeight: 600, fontSize: "0.85rem", mb: 2 }}
            >
              Quick Links
            </Typography>
            {navLinks.map((link) => (
              <Typography key={link.href + link.label} variant="body2" sx={{ mb: 1 }}>
                <Link
                  href={link.href}
                  style={{ color: colors.textMuted, textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography
              sx={{ color: colors.gold, fontWeight: 600, fontSize: "0.85rem", mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>
              <Link href="mailto:hello@aarvanta.com" style={{ color: "inherit", textDecoration: "none" }}>
                hello@aarvanta.com
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>
              +91 98765 43210
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textMuted }}>
              United Kingdom
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              sx={{ color: colors.gold, fontWeight: 600, fontSize: "0.85rem", mb: 2 }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <LinkedInIcon fontSize="small" />, href: "#" },
                { icon: <TwitterIcon fontSize="small" />, href: "#" },
                { icon: <InstagramIcon fontSize="small" />, href: "#" },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  href={social.href}
                  component="a"
                  sx={{
                    border: `1px solid ${colors.gold}`,
                    color: colors.gold,
                    width: 36,
                    height: 36,
                    "&:hover": { bgcolor: "rgba(194, 155, 64, 0.1)" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: colors.border, my: 4 }} />

        <Typography variant="body2" align="center" sx={{ color: colors.textMuted, fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Aarvanta Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
