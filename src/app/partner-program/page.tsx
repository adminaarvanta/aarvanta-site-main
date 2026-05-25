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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import { partnerFeatures, products } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Build your own AI business under your brand with AARVANTA's white-label infrastructure for agencies and entrepreneurs.",
};

export default function PartnerProgramPage() {
  return (
    <>
      <PageHero
        title="Build Your Own AI Business Under Your Brand."
        subtitle="Offer advanced AI systems under your own branding while AARVANTA powers the backend technology."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{ color: colors.deepNavy, mb: 3, fontSize: "1.75rem" }}
              >
                White-Label AI Infrastructure
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, lineHeight: 1.9, mb: 4 }}
              >
                AARVANTA&apos;s white-label infrastructure allows agencies,
                consultants, and entrepreneurs to offer advanced AI systems under
                their own branding while we power the backend technology.
              </Typography>
              <List disablePadding>
                {partnerFeatures.map((feature) => (
                  <ListItem key={feature} disableGutters sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon sx={{ color: colors.mutedGold }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      slotProps={{
                        primary: {
                          sx: { fontWeight: 500, color: colors.softCharcoal },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  bgcolor: colors.deepNavy,
                  color: colors.white,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Products Available for White-Label
                </Typography>
                {products.map((product) => (
                  <Box
                    key={product.id}
                    sx={{
                      py: 2,
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      "&:last-child": { borderBottom: "none" },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                      {product.shortName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <NavButton href="/contact" variant="contained" color="primary" size="large">
              Become a Partner
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
