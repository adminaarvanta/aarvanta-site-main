import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import MetricBlock from "@/components/ui/sections/MetricBlock";
import { caseStudies } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real business outcomes from AARVANTA AI infrastructure — reduced missed enquiries, improved conversions, and automated operations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        mode="marketing"
        eyebrow="Outcomes"
        title="Focused on Outcomes, Not Buzzwords."
        subtitle="Operational improvements and measurable business results from real deployments."
      />

      <SectionShell variant="metricBand" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 5 },
            mb: 6,
          }}
        >
          {caseStudies.map((study) => (
            <Box key={study.industry}>
              <MetricBlock
                value={study.metric}
                label={study.metricLabel}
                detail={study.outcome}
              />
              <Typography
                sx={{
                  color: colors.gold,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  mt: 1.5,
                }}
              >
                {study.industry}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 3,
            bgcolor: colors.primary,
            textAlign: "center",
            border: `1px solid ${colors.gold}`,
          }}
        >
          <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: "1.35rem", mb: 1.5 }}>
            Ready to achieve similar results?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 3, maxWidth: 520, mx: "auto" }}>
            Book a strategy call to discuss how AARVANTA infrastructure can transform your
            operations.
          </Typography>
          <NavButton href="/book-demo" variant="contained" color="secondary" size="large">
            Book a Demo
          </NavButton>
        </Box>
      </SectionShell>
    </>
  );
}
