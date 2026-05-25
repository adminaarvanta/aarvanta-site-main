"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { colors } from "@/lib/theme";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 4, md: 8 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(196, 169, 98, 0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 6, lg: 8 },
            alignItems: "center",
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="overline"
              sx={{
                color: colors.mutedGold,
                fontWeight: 600,
                letterSpacing: "0.15em",
                mb: 2,
                display: "block",
              }}
            >
              AI INFRASTRUCTURE COMPANY
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
                color: colors.deepNavy,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              AI Infrastructure Built for Real Businesses.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 540,
              }}
            >
              AARVANTA builds scalable AI systems for businesses, agencies, and
              global partners — combining automation, communication, lead
              generation, voice AI, and operational infrastructure into one
              connected ecosystem.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                component={Link}
                href="/book-demo"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Book a Demo
              </Button>
              <Button
                component={Link}
                href="/products"
                variant="outlined"
                color="primary"
                size="large"
              >
                Explore Products
              </Button>
            </Box>
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
