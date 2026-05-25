"use client";

import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function ProductsSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: colors.white }}>
      <Container maxWidth="xl">
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
                    borderRadius: "16px",
                    bgcolor: colors.offWhite,
                    border: `1px solid ${colors.border}`,
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: colors.mutedGold,
                      boxShadow: "0 16px 48px rgba(15, 23, 41, 0.08)",
                    },
                  }}
                >
                  <Chip
                    label={product.shortName}
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      mb: 2,
                      bgcolor: colors.deepNavy,
                      color: colors.white,
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ color: colors.deepNavy, mb: 1.5, fontSize: "1.25rem" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.textSecondary,
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
                          color: colors.softCharcoal,
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
      </Container>
    </Box>
  );
}
