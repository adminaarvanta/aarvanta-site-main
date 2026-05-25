import type { Metadata } from "next";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import { pricingTiers } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible AI infrastructure pricing for businesses and partners. Custom pricing based on scale and requirements.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Flexible for Businesses. Scalable for Partners."
        subtitle="Custom pricing based on scale and requirements."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {pricingTiers.map((tier) => (
              <Grid key={tier.name} size={{ xs: 12, sm: 6, lg: 3 }}>
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
                      ? "0 20px 60px rgba(15, 23, 41, 0.15)"
                      : "none",
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
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 3,
                      color: tier.highlighted
                        ? colors.mutedGold
                        : colors.deepNavy,
                    }}
                  >
                    Custom pricing based on scale and requirements.
                  </Typography>
                  <List dense disablePadding>
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
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography sx={{ color: colors.textSecondary, mb: 3 }}>
              Every business is different. Let&apos;s design the right plan for
              your scale.
            </Typography>
            <NavButton href="/contact" variant="contained" color="primary" size="large">
              Get Custom Pricing
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
