"use client";

import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import NavButton from "@/components/ui/NavButton";
import { products } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function ProductsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <AnimatedSection>
          <SectionHeading title="Products Designed to Work Together." />
        </AnimatedSection>

        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <AnimatedSection delay={index * 0.08}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: colors.cream,
                    border: `1px solid ${colors.border}`,
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: colors.gold,
                      boxShadow: "0 16px 48px rgba(42, 36, 24, 0.08)",
                    },
                  }}
                >
                  <Chip
                    label={product.shortName}
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      mb: 2,
                      bgcolor: colors.gold,
                      color: colors.white,
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  />
                  <Typography
                    className="font-serif"
                    sx={{ color: colors.textDark, mb: 1.5, fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.textMuted,
                      lineHeight: 1.7,
                      mb: 3,
                      flex: 1,
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {product.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: colors.border,
                          color: colors.textMuted,
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <NavButton href="/products" variant="outlined" color="primary" size="large">
            View All Products
          </NavButton>
        </Box>
      </Container>
    </Box>
  );
}
