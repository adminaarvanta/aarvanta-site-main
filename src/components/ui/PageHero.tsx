"use client";

import { Box, Container, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

export type PageHeroMode = "marketing" | "hub" | "editorial";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  mode?: PageHeroMode;
  eyebrow?: string;
}

export default function PageHero({
  title,
  subtitle,
  children,
  mode = "marketing",
  eyebrow,
}: PageHeroProps) {
  const isHub = mode === "hub";
  const isEditorial = mode === "editorial";

  return (
    <Box
      className={isHub ? "section-navy" : isEditorial ? undefined : "section-glass"}
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        borderBottom: isHub ? "none" : `1px solid ${colors.border}`,
        ...(isHub
          ? {
              bgcolor: colors.deepNavy,
              background: `radial-gradient(ellipse 60% 50% at 90% 10%, rgba(212,175,55,0.16) 0%, transparent 50%), linear-gradient(160deg, ${colors.deepNavy} 0%, ${colors.primary} 60%, ${colors.navyMid} 100%)`,
            }
          : isEditorial
            ? { bgcolor: colors.cream }
            : {}),
      }}
    >
      <Container
        maxWidth={isEditorial ? "md" : "lg"}
        sx={{
          px: { xs: 2, md: 3 },
          ...(isEditorial ? { maxWidth: 760 } : {}),
        }}
      >
        {(eyebrow || isEditorial) && (
          <Typography
            sx={{
              color: colors.gold,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            {eyebrow ?? "AARVANTA"}
          </Typography>
        )}
        <Typography
          component="h1"
          className={isEditorial ? "font-serif" : undefined}
          sx={{
            fontSize: {
              xs: "2rem",
              md: isEditorial ? "2.5rem" : "2.75rem",
            },
            fontWeight: isEditorial ? 700 : 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            mb: subtitle ? 2 : 0,
            color: isHub ? colors.white : colors.textDark,
            maxWidth: isEditorial ? 640 : 720,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: isHub ? "rgba(255,255,255,0.78)" : colors.textMuted,
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}
