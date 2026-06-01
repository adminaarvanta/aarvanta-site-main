"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";
import { colors } from "@/lib/theme";

const iconMap: Record<string, React.ReactNode> = {
  healthcare: <LocalHospitalIcon />,
  realestate: <HomeWorkIcon />,
  education: <SchoolIcon />,
  hospitality: <RestaurantIcon />,
  agency: <GroupsIcon />,
  legal: <GavelIcon />,
};

export default function IndustriesSection() {
  return (
    <Box className="section-cream" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <AnimatedSection>
          <SectionHeading title="Built for High-Growth Businesses." />
        </AnimatedSection>

        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid key={industry.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <AnimatedSection delay={index * 0.08}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: colors.gold,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      bgcolor: "rgba(196, 169, 98, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.mutedGold,
                      mb: 2,
                    }}
                  >
                    {iconMap[industry.icon]}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: colors.deepNavy, mb: 1, fontSize: "1.1rem" }}
                  >
                    {industry.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.textSecondary, lineHeight: 1.7 }}
                  >
                    {industry.description}
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
