"use client";

import { createTheme } from "@mui/material/styles";

export const colors = {
  cream: "#FCF9F2",
  offWhite: "#FFFFFF",
  gold: "#C29B40",
  goldDark: "#9A7A32",
  goldLight: "#D4B06A",
  goldMuted: "#E8D4A8",
  textDark: "#2A2418",
  textMuted: "#6B6356",
  border: "#EDE6D6",
  white: "#FFFFFF",
  heroWave: "#F5EFE3",
  /** Legacy aliases used by secondary pages */
  deepNavy: "#2A2418",
  navyLight: "#6B6356",
  textSecondary: "#6B6356",
  softCharcoal: "#2A2418",
  mutedGold: "#C29B40",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.gold,
      dark: colors.goldDark,
      light: colors.goldLight,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.textDark,
      contrastText: colors.white,
    },
    background: {
      default: colors.cream,
      paper: colors.offWhite,
    },
    text: {
      primary: colors.textDark,
      secondary: colors.textMuted,
    },
    divider: colors.border,
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: colors.textDark,
    },
    h2: {
      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: colors.textDark,
    },
    h3: {
      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: colors.textDark,
    },
    h4: { fontWeight: 600, color: colors.textDark },
    button: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.04em",
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "14px 32px",
          fontSize: "0.8rem",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: `linear-gradient(180deg, ${colors.goldLight} 0%, ${colors.gold} 100%)`,
            boxShadow: "0 4px 16px rgba(194, 155, 64, 0.35)",
            color: colors.white,
            "&:hover": {
              background: `linear-gradient(180deg, ${colors.gold} 0%, ${colors.goldDark} 100%)`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: colors.gold,
            borderWidth: 1.5,
            color: colors.gold,
            "&:hover": {
              borderWidth: 1.5,
              backgroundColor: "rgba(194, 155, 64, 0.06)",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(42, 36, 24, 0.06)",
          border: `1px solid ${colors.border}`,
        },
      },
    },
  },
});

export default theme;
