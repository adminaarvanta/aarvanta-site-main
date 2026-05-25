"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { featureGrid } from "@/lib/content";
import { colors } from "@/lib/theme";

const iconMap: Record<string, React.ReactNode> = {
  lead: <TrendingUpIcon sx={{ fontSize: 28 }} />,
  communication: <ChatIcon sx={{ fontSize: 28 }} />,
  operations: <SettingsIcon sx={{ fontSize: 28 }} />,
  website: <LanguageIcon sx={{ fontSize: 28 }} />,
};

export default function PositioningSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: colors.offWhite }}>
      <Container maxWidth="xl">
        <AnimatedSection>
          <SectionHeading
            title="More Than AI Tools. Business Infrastructure."
            subtitle="Most companies are buying disconnected software. AARVANTA brings everything together into one intelligent ecosystem designed to scale modern businesses."
          />
        </AnimatedSection>

        <Box sx={{ maxWidth: 640, mx: "auto", mb: 8 }}>
          <AnimatedSection delay={0.1}>
            {[
              "One platform for CRM.",
              "Another for communication.",
              "Another for websites.",
              "Another for automation.",
            ].map((line, i) => (
              <Typography
                key={i}
                sx={{
                  color: colors.textSecondary,
                  fontSize: "1.05rem",
                  lineHeight: 2,
                  textAlign: "center",
                }}
              >
                {line}
              </Typography>
            ))}
          </AnimatedSection>
        </Box>

        <Grid container spacing={3}>
          {featureGrid.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <AnimatedSection delay={index * 0.1}>
                <Box
                  sx={{
                    p: 3.5,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: colors.mutedGold,
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 40px rgba(15, 23, 41, 0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "12px",
                      bgcolor: "rgba(15, 23, 41, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.deepNavy,
                      mb: 2.5,
                    }}
                  >
                    {iconMap[feature.icon]}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: colors.deepNavy, mb: 1, fontSize: "1.1rem" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.textSecondary, lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
