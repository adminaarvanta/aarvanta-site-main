import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import { partnerFeatures, products } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Build your own AI business under your brand with AARVANTA's white-label infrastructure for agencies and entrepreneurs.",
};

export default function PartnerProgramPage() {
  return (
    <>
      <PageHero
        mode="marketing"
        eyebrow="Partners"
        title="Build Your Own AI Business Under Your Brand."
        subtitle="Offer advanced AI systems under your own branding while AARVANTA powers the backend technology."
      />

      <SectionShell variant="splitRail" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 0,
            borderRadius: 3,
            overflow: "hidden",
            border: `1px solid ${colors.borderNavy}`,
          }}
        >
          <Box sx={{ p: { xs: 3.5, md: 4.5 }, bgcolor: colors.cream }}>
            <Typography
              sx={{ color: colors.textDark, mb: 2, fontSize: "1.5rem", fontWeight: 800 }}
            >
              White-Label AI Infrastructure
            </Typography>
            <Typography sx={{ color: colors.textMuted, lineHeight: 1.9, mb: 3 }}>
              AARVANTA&apos;s white-label infrastructure allows agencies, consultants, and
              entrepreneurs to offer advanced AI systems under their own branding while we power the
              backend technology.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {partnerFeatures.map((feature) => (
                <Box key={feature} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckCircleOutlineIcon sx={{ color: colors.gold, mt: 0.2, fontSize: 20 }} />
                  <Typography sx={{ fontWeight: 500, color: colors.softCharcoal }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ p: { xs: 3.5, md: 4.5 }, bgcolor: colors.deepNavy, color: colors.white }}>
            <Typography sx={{ mb: 3, fontWeight: 800, fontSize: "1.25rem", color: colors.gold }}>
              Products Available for White-Label
            </Typography>
            {products.map((product) => (
              <Box
                key={product.id}
                sx={{
                  py: 2,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{product.shortName}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>
                  {product.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <NavButton href="/contact" variant="contained" color="primary" size="large">
            Become a Partner
          </NavButton>
        </Box>
      </SectionShell>
    </>
  );
}
