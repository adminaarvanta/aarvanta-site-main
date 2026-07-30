import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import { featureGrid, ecosystemFlow } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Complete AI business infrastructure — lead systems, communication, operations, and websites in one connected ecosystem.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        mode="marketing"
        eyebrow="Solutions"
        title="Complete AI Business Infrastructure."
        subtitle="One intelligent ecosystem that replaces fragmented software with connected systems designed to scale."
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
          {featureGrid.map((solution, index) => (
            <Box
              key={solution.title}
              sx={{
                p: { xs: 3.5, md: 4 },
                borderRight: {
                  md: index % 2 === 0 ? `1px solid ${colors.borderNavy}` : "none",
                },
                borderBottom: {
                  xs: index < featureGrid.length - 1 ? `1px solid ${colors.borderNavy}` : "none",
                  md: index < featureGrid.length - 2 ? `1px solid ${colors.borderNavy}` : "none",
                },
                borderLeft: index % 2 === 0 ? `3px solid ${colors.gold}` : "none",
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: "1.15rem", color: colors.textDark, mb: 1.5 }}>
                {solution.title}
              </Typography>
              <Typography sx={{ color: colors.textMuted, lineHeight: 1.8 }}>
                {solution.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionShell>

      <SectionShell variant="navy" maxWidth="md">
        <SectionHeader light title="How It All Connects" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
          {ecosystemFlow.map((step, i) => (
            <Box key={step} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: i === 0 ? colors.gold : "rgba(255,255,255,0.08)",
                  color: i === 0 ? colors.deepNavy : colors.white,
                  fontWeight: 700,
                  display: "inline-block",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {step}
              </Typography>
              {i < ecosystemFlow.length - 1 && (
                <Typography sx={{ color: colors.gold, my: 0.5, fontWeight: 700 }}>↓</Typography>
              )}
            </Box>
          ))}
        </Box>
      </SectionShell>
    </>
  );
}
