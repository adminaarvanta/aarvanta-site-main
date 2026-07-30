import type { Metadata } from "next";
import { Box, Chip } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import ProductTile from "@/components/ui/sections/ProductTile";
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
        mode="marketing"
        eyebrow="Platform"
        title="Products Designed to Work Together."
        subtitle="Interconnected AI systems forming one complete business infrastructure."
      />

      <SectionShell variant="tileGrid" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2.5,
          }}
        >
          {products.map((product, index) => (
            <Box key={product.id} id={product.id} sx={{ scrollMarginTop: 100 }}>
              <ProductTile
                name={product.name}
                description={product.description}
                href={`/products#${product.id}`}
                featured={index === 2}
              />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.5 }}>
                {product.features.map((feature) => (
                  <Chip
                    key={feature}
                    label={feature}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: colors.borderNavy }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <NavButton href="/book-demo" variant="contained" color="primary" size="large">
            Book a Demo
          </NavButton>
        </Box>
      </SectionShell>
    </>
  );
}
