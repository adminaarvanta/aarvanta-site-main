import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import { aboutPage, aboutValues } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About",
  description:
    "Building infrastructure for the AI-driven business era. AARVANTA simplifies growth, automates operations, and creates scalable business infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        mode="editorial"
        eyebrow="About"
        title={aboutPage.headline}
        subtitle={aboutPage.mission}
      />

      <SectionShell variant="editorial" maxWidth="md">
        <Typography
          sx={{
            fontSize: { xs: "1.05rem", md: "1.15rem" },
            lineHeight: 1.9,
            color: colors.textMuted,
            mb: 2,
          }}
        >
          {aboutPage.intro}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.05rem", md: "1.15rem" },
            lineHeight: 1.9,
            color: colors.textDark,
            mb: 2,
            borderLeft: `3px solid ${colors.gold}`,
            pl: 2.5,
          }}
        >
          {aboutPage.problem}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.05rem", md: "1.15rem" },
            lineHeight: 1.9,
            color: colors.textMuted,
          }}
        >
          {aboutPage.mission}
        </Typography>
      </SectionShell>

      <SectionShell variant="mist" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
        <SectionHeader title="Our Values" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {aboutValues.map((value) => (
            <Box
              key={value.title}
              sx={{
                py: 2,
                borderTop: `2px solid ${colors.gold}`,
              }}
            >
              <Typography sx={{ fontWeight: 800, color: colors.textDark, mb: 1.5, fontSize: "1.15rem" }}>
                {value.title}
              </Typography>
              <Typography sx={{ color: colors.textMuted, lineHeight: 1.8 }}>
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionShell>
    </>
  );
}
