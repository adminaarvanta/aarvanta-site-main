"use client";

import { Box } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import ProductTile from "@/components/ui/sections/ProductTile";
import { coreProducts } from "@/lib/content";

export default function CoreProductsSection() {
  return (
    <SectionShell variant="tileGrid" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
      <SectionHeader
        eyebrow="Platform"
        title="Core Products"
        subtitle="Premium building blocks of your AI operating system."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: 2,
          gridAutoRows: "minmax(170px, auto)",
        }}
      >
        {coreProducts.map((product, index) => (
          <Box
            key={product.name}
            sx={{
              gridColumn: {
                lg: index === 2 || index === 7 ? "span 2" : "span 1",
              },
            }}
          >
            <ProductTile
              name={product.name}
              description={product.description}
              href={product.href}
              comingSoon={product.comingSoon}
              featured={index === 2}
            />
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
}
