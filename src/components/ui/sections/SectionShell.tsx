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
    py: { xs: 7, md: 10 },
    bgcolor: colors.mist,
  },
  paper: {
    py: { xs: 7, md: 10 },
    bgcolor: colors.cream,
  },
  navy: {
    py: { xs: 8, md: 12 },
    bgcolor: colors.deepNavy,
    color: colors.white,
    background: `radial-gradient(ellipse 70% 50% at 80% 20%, rgba(212, 175, 55, 0.14) 0%, transparent 55%), linear-gradient(160deg, ${colors.deepNavy} 0%, ${colors.primary} 55%, ${colors.navyMid} 100%)`,
  },
  goldEdge: {
    py: { xs: 7, md: 10 },
    bgcolor: colors.offWhite,
  },
  splitRail: {
    py: { xs: 7, md: 10 },
    bgcolor: colors.cream,
  },
  glassPanel: {
    py: { xs: 6, md: 10 },
    borderBottom: `1px solid ${colors.border}`,
  },
  metricBand: {
    py: { xs: 7, md: 10 },
    bgcolor: colors.offWhite,
  },
  flowTrack: {
    py: { xs: 7, md: 10 },
    bgcolor: colors.mist,
  },
  tileGrid: {
    py: { xs: 7, md: 10 },
    bgcolor: colors.cream,
  },
  editorial: {
    py: { xs: 7, md: 10 },
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

  return (
    <Box
      component="section"
      id={id}
      className={isGlass ? "section-glass" : isNavy ? "section-navy" : undefined}
      sx={[variantSx[variant], ...(Array.isArray(sx) ? sx : sx ? [sx] : [])] as SxProps<Theme>}
    >
      {disableContainer ? (
        children
      ) : (
        <Container
          maxWidth={maxWidth === false ? false : maxWidth}
          sx={
            [
              { px: { xs: 2, md: 4 } },
              maxWidth === false ? { maxWidth: 1200 } : {},
              ...(Array.isArray(containerSx) ? containerSx : containerSx ? [containerSx] : []),
            ] as SxProps<Theme>
          }
        >
          {variant === "goldEdge" ? (
            <Box
              sx={{
                borderLeft: `4px solid ${colors.gold}`,
                pl: { xs: 2.5, md: 4 },
                bgcolor: colors.cream,
                borderRadius: "0 16px 16px 0",
                py: { xs: 3, md: 4 },
                pr: { xs: 2, md: 3 },
                boxShadow: colors.cardShadow,
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
