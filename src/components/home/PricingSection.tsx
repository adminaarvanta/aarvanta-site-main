"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricingTiers } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function PricingSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: colors.offWhite }}>
      <Container maxWidth="xl">
        <AnimatedSection>
          <SectionHeading
            title="Flexible for Businesses. Scalable for Partners."
            subtitle="Custom pricing based on scale and requirements."
          />
        </AnimatedSection>

        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {pricingTiers.map((tier, index) => (
            <Grid key={tier.name} size={{ xs: 12, sm: 6, lg: 3 }}>
              <AnimatedSection delay={index * 0.1}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: tier.highlighted ? colors.deepNavy : colors.white,
                    color: tier.highlighted ? colors.white : colors.softCharcoal,
                    border: tier.highlighted
                      ? "none"
                      : `1px solid ${colors.border}`,
                    boxShadow: tier.highlighted
                      ? "0 20px 60px rgba(15, 23, 41, 0.2)"
                      : "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      color: tier.highlighted ? colors.white : colors.deepNavy,
                    }}
                  >
                    {tier.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: tier.highlighted
                        ? "rgba(255,255,255,0.7)"
                        : colors.textSecondary,
                    }}
                  >
                    {tier.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      mb: 3,
                      color: tier.highlighted
                        ? colors.mutedGold
                        : colors.deepNavy,
                    }}
                  >
                    Custom pricing
                  </Typography>
                  <List dense disablePadding sx={{ flex: 1 }}>
                    {tier.features.map((feature) => (
                      <ListItem key={feature} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckIcon
                            sx={{
                              fontSize: 18,
                              color: tier.highlighted
                                ? colors.mutedGold
                                : colors.deepNavy,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          slotProps={{
                            primary: {
                              sx: {
                                fontSize: "0.875rem",
                                color: tier.highlighted
                                  ? "rgba(255,255,255,0.85)"
                                  : colors.textSecondary,
                              },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        <AnimatedSection delay={0.4}>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={Link}
              href="/pricing"
              variant="outlined"
              color="primary"
              size="large"
            >
              View Pricing Details
            </Button>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
