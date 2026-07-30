import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import LinkTile from "@/components/ui/sections/LinkTile";
import { industries } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI infrastructure built for high-growth businesses across healthcare, real estate, education, hospitality, agencies, and legal.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        mode="marketing"
        eyebrow="Industries"
        title="Built for High-Growth Businesses."
        subtitle="Industry-specific AI infrastructure designed for operational scale."
      />

      <SectionShell variant="goldEdge" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {industries.map((industry, index) => (
            <LinkTile
              key={industry.title}
              label={industry.title}
              description={industry.description}
              href="/contact"
              featured={index === 0}
            />
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography sx={{ color: colors.textMuted, mb: 3, maxWidth: 560, mx: "auto" }}>
            Not sure which solution fits your industry? Our team will help you design the right
            infrastructure.
          </Typography>
          <NavButton href="/contact" variant="contained" color="primary" size="large">
            Talk to Our Team
          </NavButton>
        </Box>
      </SectionShell>
    </>
  );
}
