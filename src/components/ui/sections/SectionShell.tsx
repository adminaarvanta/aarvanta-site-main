"use client";

import { Box, Container, type SxProps, type Theme } from "@mui/material";
import { colors } from "@/lib/theme";

export type SectionVariant =
  | "mist"
  | "paper"
  | "navy"
  | "goldEdge"
  | "splitRail"
  | "glassPanel"
  | "metricBand"
  | "flowTrack"
  | "tileGrid"
  | "editorial";

type SectionShellProps = {
  variant?: SectionVariant;
  children: React.ReactNode;
  id?: string;
  maxWidth?: false | "sm" | "md" | "lg" | "xl";
  disableContainer?: boolean;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
};

const variantSx: Record<SectionVariant, SxProps<Theme>> = {
  mist: {
    py: { xs: 8, md: 12 },
    position: "relative",
    overflow: "hidden",
    bgcolor: colors.mist,
    backgroundImage: `
      radial-gradient(circle at 12% 20%, rgba(0,24,72,0.06) 0 1px, transparent 1px),
      radial-gradient(circle at 88% 70%, rgba(0,24,72,0.06) 0 1px, transparent 1px)
    `,
    backgroundSize: "28px 28px, 28px 28px",
  },
  paper: {
    py: { xs: 8, md: 12 },
    bgcolor: colors.cream,
  },
  navy: {
    py: { xs: 10, md: 14 },
    position: "relative",
    overflow: "hidden",
    color: colors.white,
    background: `
      radial-gradient(ellipse 55% 45% at 100% 0%, rgba(212,175,55,0.2) 0%, transparent 55%),
      radial-gradient(ellipse 40% 50% at 0% 100%, rgba(24,48,120,0.8) 0%, transparent 50%),
      linear-gradient(155deg, ${colors.deepNavy} 0%, ${colors.primary} 50%, ${colors.navyMid} 100%)
    `,
  },
  goldEdge: {
    py: { xs: 8, md: 12 },
    bgcolor: "#F0EDE4",
  },
  splitRail: {
    py: 0,
    bgcolor: colors.cream,
  },
  glassPanel: {
    py: { xs: 8, md: 12 },
    minHeight: { md: "88vh" },
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${colors.borderNavy}`,
  },
  metricBand: {
    py: { xs: 8, md: 12 },
    bgcolor: colors.cream,
    borderTop: `1px solid ${colors.borderNavy}`,
    borderBottom: `1px solid ${colors.borderNavy}`,
  },
  flowTrack: {
    py: { xs: 8, md: 12 },
    bgcolor: colors.primary,
    color: colors.white,
    position: "relative",
    overflow: "hidden",
  },
  tileGrid: {
    py: { xs: 8, md: 12 },
    bgcolor: colors.mist,
    backgroundImage: `linear-gradient(${colors.borderNavy} 1px, transparent 1px), linear-gradient(90deg, ${colors.borderNavy} 1px, transparent 1px)`,
    backgroundSize: "48px 48px",
    backgroundPosition: "-1px -1px",
  },
  editorial: {
    py: { xs: 8, md: 14 },
    bgcolor: colors.cream,
  },
};

export default function SectionShell({
  variant = "paper",
  children,
  id,
  maxWidth = "lg",
  disableContainer = false,
  sx,
  containerSx,
}: SectionShellProps) {
  const isGlass = variant === "glassPanel";
  const isNavy = variant === "navy";
  const isFlow = variant === "flowTrack";

  return (
    <Box
      component="section"
      id={id}
      className={isGlass ? "section-glass" : isNavy ? "section-navy" : undefined}
      sx={[variantSx[variant], ...(Array.isArray(sx) ? sx : sx ? [sx] : [])] as SxProps<Theme>}
    >
      {isFlow && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 40px,
              rgba(212,175,55,0.04) 40px,
              rgba(212,175,55,0.04) 41px
            )`,
            pointerEvents: "none",
          }}
        />
      )}
      {disableContainer ? (
        children
      ) : (
        <Container
          maxWidth={maxWidth === false ? false : maxWidth}
          sx={
            [
              { px: { xs: 2, md: 4 }, position: "relative", zIndex: 1 },
              maxWidth === false ? { maxWidth: 1200 } : {},
              ...(Array.isArray(containerSx) ? containerSx : containerSx ? [containerSx] : []),
            ] as SxProps<Theme>
          }
        >
          {variant === "goldEdge" ? (
            <Box
              sx={{
                borderLeft: `6px solid ${colors.gold}`,
                pl: { xs: 3, md: 5 },
                bgcolor: colors.cream,
                py: { xs: 4, md: 5 },
                pr: { xs: 2, md: 4 },
                boxShadow: "12px 16px 40px rgba(0,18,51,0.08)",
              }}
            >
              {children}
            </Box>
          ) : (
            children
          )}
        </Container>
      )}
    </Box>
  );
}
