import type { Metadata } from "next";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Aarvanta Ltd and help build AI-powered products that simplify business operations and drive innovation.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        mode="editorial"
        eyebrow="Careers"
        title="Build the Future With Us"
        subtitle="We're growing our team of builders passionate about AI, SaaS, and meaningful product work."
      />

      <SectionShell variant="editorial" maxWidth="md">
        <Typography
          sx={{
            color: colors.textMuted,
            lineHeight: 1.85,
            fontSize: { xs: "1rem", md: "1.05rem" },
            mb: 4,
          }}
        >
          Aarvanta Ltd is always interested in hearing from talented engineers, designers, and
          product thinkers who want to work on AI-powered SaaS. Open roles will be posted here as we
          scale — in the meantime, send us your CV and a short note about what you&apos;d like to
          work on.
        </Typography>

        <Box
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: "0 16px 16px 0",
            bgcolor: colors.mist,
            border: `1px solid ${colors.borderNavy}`,
            borderLeft: `4px solid ${colors.gold}`,
            maxWidth: 560,
          }}
        >
          <Typography
            className="font-serif"
            sx={{ fontSize: "1.35rem", color: colors.textDark, mb: 2 }}
          >
            Get in touch
          </Typography>
          <Typography sx={{ color: colors.textMuted, lineHeight: 1.8, mb: 3 }}>
            Email{" "}
            <Link
              href="mailto:hr@aarvanta.co"
              style={{ color: colors.goldDark, textDecoration: "none", fontWeight: 600 }}
            >
              hr@aarvanta.co
            </Link>{" "}
            with your portfolio or LinkedIn profile.
          </Typography>
          <NavButton href="/contact" variant="contained" color="primary">
            Contact Us
          </NavButton>
        </Box>
      </SectionShell>
    </>
  );
}
