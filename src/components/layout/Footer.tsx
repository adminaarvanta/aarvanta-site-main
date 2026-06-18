"use client";

import Link from "next/link";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerProductLinks,
  siteConfig,
} from "@/lib/content";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 2 }}>
      <Typography sx={{ color: colors.gold, fontWeight: 600, fontSize: "0.85rem", mb: 2 }}>
        {title}
      </Typography>
      {links.map((link) => (
        <Typography key={link.href + link.label} variant="body2" sx={{ mb: 1 }}>
          <Link href={link.href} style={{ color: colors.textMuted, textDecoration: "none" }}>
            {link.label}
          </Link>
        </Typography>
      ))}
    </Grid>
  );
}

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
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ maxWidth: { xs: 280, sm: 320, md: 300 }, mb: 2 }}>
              <Logo variant="full" width={280} href="/" />
            </Box>
            <Typography variant="body2" sx={{ color: colors.textMuted, lineHeight: 1.7, maxWidth: 280 }}>
              {siteConfig.tagline}. {siteConfig.description.slice(0, 120)}…
            </Typography>
          </Grid>

          <FooterColumn title="Products" links={footerProductLinks} />
          <FooterColumn title="Company" links={footerCompanyLinks} />
          <FooterColumn title="Legal" links={footerLegalLinks} />
        </Grid>

        <Divider sx={{ borderColor: colors.border, my: 4 }} />

        <Typography variant="body2" align="center" sx={{ color: colors.textMuted, fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Aarvanta Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
