"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { featureGrid, homePositioning } from "@/lib/content";
import { colors } from "@/lib/theme";

const iconMap: Record<string, React.ReactNode> = {
  lead: <TrendingUpIcon sx={{ fontSize: 28 }} />,
  communication: <ChatIcon sx={{ fontSize: 28 }} />,
  operations: <SettingsIcon sx={{ fontSize: 28 }} />,
  website: <LanguageIcon sx={{ fontSize: 28 }} />,
};

export default function PositioningSection() {
  return (
    <Box className="section-cream" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <AnimatedSection>
          <SectionHeading
            title={homePositioning.headline}
            subtitle="Most companies are buying disconnected software."
          />
        </AnimatedSection>

        <Box sx={{ maxWidth: 640, mx: "auto", mb: 4 }}>
          <AnimatedSection delay={0.1}>
            {homePositioning.disconnected.map((line) => (
              <Typography
                key={line}
                sx={{
                  color: colors.textMuted,
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

        <AnimatedSection delay={0.15}>
          <Typography
            sx={{
              textAlign: "center",
              color: colors.textDark,
              maxWidth: 720,
              mx: "auto",
              mb: 8,
              lineHeight: 1.85,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            {homePositioning.closing}
          </Typography>
        </AnimatedSection>

        <Grid container spacing={3}>
          {featureGrid.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <AnimatedSection delay={index * 0.1}>
                <Box
                  sx={{
                    p: 3.5,
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: colors.gold,
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 40px rgba(42, 36, 24, 0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "12px",
                      bgcolor: "rgba(194, 155, 64, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.gold,
                      mb: 2.5,
                    }}
                  >
                    {iconMap[feature.icon]}
                  </Box>
                  <Typography
                    className="font-serif"
                    sx={{ color: colors.textDark, mb: 1, fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textMuted, lineHeight: 1.7 }}>
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
