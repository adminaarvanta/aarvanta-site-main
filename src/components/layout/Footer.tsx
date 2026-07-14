"use client";

import Link from "next/link";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { footerLegalLinks, siteConfig } from "@/lib/content";
import { footerNav } from "@/lib/site-navigation";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 2 }}>
      <Typography sx={{ color: colors.primary, fontWeight: 600, fontSize: "0.85rem", mb: 2 }}>
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
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ maxWidth: 220, mb: 2 }}>
              <Logo variant="wordmark" height={36} href="/" />
            </Box>
            <Typography variant="body2" sx={{ color: colors.textMuted, lineHeight: 1.7, maxWidth: 260 }}>
              {siteConfig.tagline}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Typography
                component="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: colors.textMuted, fontSize: "0.85rem", textDecoration: "none", "&:hover": { color: colors.primary } }}
              >
                LinkedIn
              </Typography>
              <Typography
                component="a"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: colors.textMuted, fontSize: "0.85rem", textDecoration: "none", "&:hover": { color: colors.primary } }}
              >
                YouTube
              </Typography>
            </Box>
          </Grid>

          <FooterColumn title="Platform" links={footerNav.platform} />
          <FooterColumn title="Solutions" links={footerNav.solutions} />
          <FooterColumn title="Partners" links={footerNav.partners} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <FooterColumn title="Company" links={[...footerNav.company, ...footerLegalLinks, ...footerNav.developers]} />
        </Grid>

        <Divider sx={{ borderColor: colors.border, my: 4 }} />

        <Typography variant="body2" align="center" sx={{ color: colors.textMuted, fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Aarvanta Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
