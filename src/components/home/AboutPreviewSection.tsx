"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SectionLabel from "@/components/ui/SectionLabel";
import NavButton from "@/components/ui/NavButton";
import { aboutChecklist } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";
import { colors } from "@/lib/theme";

export default function AboutPreviewSection() {
  return (
    <Box className="section-cream" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <SectionLabel>About Us</SectionLabel>
            <Typography
              component="h2"
              className="font-serif"
              sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, lineHeight: 1.25, mb: 3 }}
            >
              Building the future with{" "}
              <Box component="span" sx={{ color: colors.gold }}>
                AI & Technology
              </Box>
            </Typography>
            <Typography sx={{ color: colors.textMuted, lineHeight: 1.85, mb: 3 }}>
              At Aarvanta Ltd, we believe technology should empower people and businesses. Our
              mission is to create intelligent SaaS solutions that solve real-world challenges
              and unlock new opportunities for growth.
            </Typography>
            <Box sx={{ mb: 4 }}>
              {aboutChecklist.map((item) => (
                <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <CheckCircleOutlineIcon sx={{ color: colors.gold, fontSize: 22 }} />
                  <Typography sx={{ color: colors.textMuted, fontSize: "0.95rem" }}>{item}</Typography>
                </Box>
              ))}
            </Box>
            <NavButton href="/about" variant="contained" color="primary">
              Learn More
            </NavButton>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                aspectRatio: "4/3",
                position: "relative",
                boxShadow: "0 24px 48px rgba(42, 36, 24, 0.1)",
                border: `1px solid ${colors.border}`,
                bgcolor: colors.cream,
              }}
            >
              <Image
                src={withBasePath("/images/about-portal.jpg")}
                alt="Minimal arch portal with soft light — future-focused technology"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 55%" }}
                priority={false}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: `linear-gradient(180deg, rgba(252,249,242,0.05) 0%, rgba(194,155,64,0.12) 100%)`,
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: { xs: -16, md: 24 },
                right: { xs: 8, md: -24 },
                bgcolor: colors.white,
                borderRadius: 3,
                p: 2,
                maxWidth: 220,
                boxShadow: "0 12px 32px rgba(42, 36, 24, 0.1)",
                border: `1px solid ${colors.border}`,
                display: "flex",
                gap: 1.5,
                alignItems: "flex-start",
                zIndex: 1,
              }}
            >
              <GroupsOutlinedIcon sx={{ color: colors.gold, mt: 0.25 }} />
              <Typography variant="body2" sx={{ color: colors.textMuted, lineHeight: 1.6, fontSize: "0.8rem" }}>
                A passionate team building impactful digital products
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
