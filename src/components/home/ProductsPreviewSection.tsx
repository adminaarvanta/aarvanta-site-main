"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import SectionLabel from "@/components/ui/SectionLabel";
import { homeProducts } from "@/lib/content";
import { colors } from "@/lib/theme";

const productIcons: Record<string, React.ReactNode> = {
  assistant: <SmartToyOutlinedIcon sx={{ fontSize: 40 }} />,
  analytics: <BarChartOutlinedIcon sx={{ fontSize: 40 }} />,
  automate: <SettingsOutlinedIcon sx={{ fontSize: 40 }} />,
};

export default function ProductsPreviewSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <SectionLabel>Our Products</SectionLabel>
          <Typography
            component="h2"
            className="font-serif"
            sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, lineHeight: 1.25 }}
          >
            AI SaaS Products for{" "}
            <Box component="span" sx={{ color: colors.gold }}>
              Modern Businesses
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 3,
            mb: 5,
          }}
        >
          {homeProducts.map((product) => (
            <Card
              key={product.name}
              sx={{
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 12px 32px rgba(42,36,24,0.08)" },
              }}
            >
              <CardContent sx={{ p: 3.5, textAlign: "center" }}>
                <Box sx={{ color: colors.gold, mb: 2, display: "flex", justifyContent: "center" }}>
                  {productIcons[product.icon]}
                </Box>
                <Typography
                  className="font-serif"
                  sx={{ fontSize: "1.15rem", fontWeight: 600, mb: 0.5, color: colors.textDark }}
                >
                  {product.name}
                  {product.subtitle && (
                    <Typography component="span" sx={{ display: "block", fontSize: "0.9rem", color: colors.gold }}>
                      {product.subtitle}
                    </Typography>
                  )}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textMuted, lineHeight: 1.7, mb: 2.5, minHeight: 72 }}>
                  {product.description}
                </Typography>
                <Button
                  component={Link}
                  href={product.href}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{ color: colors.gold, fontSize: "0.8rem", fontWeight: 600 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            component={Link}
            href="/products"
            variant="outlined"
            color="primary"
            endIcon={<AddIcon sx={{ fontSize: 16 }} />}
            sx={{ px: 4 }}
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
