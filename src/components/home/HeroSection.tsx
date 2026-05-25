"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";
import { withBasePath } from "@/lib/basePath";
import { colors } from "@/lib/theme";

export default function HeroSection() {
  return (
    <Box className="hero-waves" sx={{ position: "relative", overflow: "hidden", pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component="h1"
              className="font-serif"
              sx={{
                fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
                lineHeight: 1.15,
                mb: 3,
                color: colors.textDark,
              }}
            >
              Intelligent Solutions.
              <br />
              Limitless Possibilities.
            </Typography>
            <Typography
              sx={{
                color: colors.textMuted,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.85,
                mb: 4,
                maxWidth: 480,
              }}
            >
              Aarvanta Ltd is a forward-thinking developer of AI-powered SaaS products
              designed to simplify business operations, enhance productivity, and drive
              innovation across industries.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button component={Link} href="/products" variant="contained" color="primary" size="large">
                Explore Products
              </Button>
              <Button component={Link} href="/contact" variant="outlined" color="primary" size="large">
                Contact Us
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 440, sm: 520, md: "100%", lg: 720 },
                mx: { xs: "auto", md: 0 },
                pl: { md: 2 },
              }}
            >
              <Image
                src={withBasePath("/aarvanta-logo.png")}
                alt="AARVANTA LTD"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 600px) 440px, (max-width: 1200px) 50vw, 720px"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
