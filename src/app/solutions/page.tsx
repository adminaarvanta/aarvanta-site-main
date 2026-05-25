import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
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
        title="Complete AI Business Infrastructure."
        subtitle="One intelligent ecosystem that replaces fragmented software with connected systems designed to scale."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Grid container spacing={4}>
            {featureGrid.map((solution) => (
              <Grid key={solution.title} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: colors.deepNavy, mb: 2 }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography
                    sx={{ color: colors.textSecondary, lineHeight: 1.8 }}
                  >
                    {solution.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.deepNavy }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h4"
            sx={{ color: colors.white, textAlign: "center", mb: 4 }}
          >
            How It All Connects
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
            {ecosystemFlow.map((step, i) => (
              <Box key={step} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "8px",
                    bgcolor: i === 0 ? colors.mutedGold : "rgba(255,255,255,0.08)",
                    color: i === 0 ? colors.deepNavy : colors.white,
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  {step}
                </Typography>
                {i < ecosystemFlow.length - 1 && (
                  <Typography sx={{ color: colors.mutedGold, my: 0.5 }}>↓</Typography>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
