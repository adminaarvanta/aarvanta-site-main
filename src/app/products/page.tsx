import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import { products } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AARVANTA product ecosystem — LeadOS, WhatsAppOS, VoiceOS, SiteOS, ContentOS, and CRMOS designed to work together.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products Designed to Work Together."
        subtitle="Six interconnected AI systems forming one complete business infrastructure."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, md: 6 }}>
                <Box
                  id={product.id}
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: colors.white,
                    border: `1px solid ${colors.border}`,
                    scrollMarginTop: 100,
                  }}
                >
                  <Chip
                    label={product.shortName}
                    sx={{
                      mb: 2,
                      bgcolor: colors.deepNavy,
                      color: colors.white,
                      fontWeight: 600,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ color: colors.deepNavy, mb: 2, fontSize: "1.5rem" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {product.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        variant="outlined"
                        size="small"
                        sx={{ borderColor: colors.border }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <NavButton href="/book-demo" variant="contained" color="primary" size="large">
              Book a Demo
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
