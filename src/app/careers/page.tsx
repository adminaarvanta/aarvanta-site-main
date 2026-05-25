import type { Metadata } from "next";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
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
        title="Build the Future With Us"
        subtitle="We're growing our team of builders passionate about AI, SaaS, and meaningful product work."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              color: colors.textMuted,
              lineHeight: 1.85,
              fontSize: { xs: "1rem", md: "1.05rem" },
              maxWidth: 720,
              mb: 4,
            }}
          >
            Aarvanta Ltd is always interested in hearing from talented engineers, designers, and
            product thinkers who want to work on AI-powered SaaS. Open roles will be posted here as
            we scale — in the meantime, send us your CV and a short note about what you&apos;d like
            to work on.
          </Typography>

          <Box
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 2,
              bgcolor: colors.white,
              border: `1px solid ${colors.border}`,
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
                href="mailto:careers@aarvanta.com"
                style={{ color: colors.gold, textDecoration: "none" }}
              >
                careers@aarvanta.com
              </Link>{" "}
              with your portfolio or LinkedIn profile.
            </Typography>
            <NavButton href="/contact" variant="contained" color="primary">
              Contact Us
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
