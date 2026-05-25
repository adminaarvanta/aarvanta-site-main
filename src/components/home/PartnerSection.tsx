"use client";

import Link from "next/link";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { partnerFeatures } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function PartnerSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: colors.white }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection>
              <SectionHeading
                title="Build Your Own AI Business Under Your Brand."
                subtitle="AARVANTA's white-label infrastructure allows agencies, consultants, and entrepreneurs to offer advanced AI systems under their own branding while we power the backend technology."
                align="left"
              />
              <Button
                component={Link}
                href="/partner-program"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2 }}
              >
                Become a Partner
              </Button>
            </AnimatedSection>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection delay={0.15}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  bgcolor: colors.offWhite,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {partnerFeatures.map((feature) => (
                  <Box
                    key={feature}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      py: 1.5,
                      borderBottom: `1px solid ${colors.border}`,
                      "&:last-child": { borderBottom: "none" },
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ color: colors.mutedGold, fontSize: 22 }}
                    />
                    <Typography
                      sx={{
                        color: colors.softCharcoal,
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
