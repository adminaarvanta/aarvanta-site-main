"use client";

import { createTheme } from "@mui/material/styles";

export const colors = {
  offWhite: "#F8F7F4",
  softCharcoal: "#2D3436",
  deepNavy: "#0F1729",
  navyLight: "#1A2744",
  mutedGold: "#C4A962",
  goldLight: "#D4BC7A",
  textSecondary: "#5C6670",
  border: "#E8E6E1",
  white: "#FFFFFF",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.deepNavy,
      light: colors.navyLight,
      dark: "#0A1018",
      contrastText: colors.white,
    },
    secondary: {
      main: colors.mutedGold,
      light: colors.goldLight,
      dark: "#A08850",
      contrastText: colors.deepNavy,
    },
    background: {
      default: colors.offWhite,
      paper: colors.white,
    },
    text: {
      primary: colors.softCharcoal,
      secondary: colors.textSecondary,
    },
    divider: colors.border,
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 28px",
          fontSize: "0.95rem",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: `linear-gradient(135deg, ${colors.deepNavy} 0%, ${colors.navyLight} 100%)`,
            boxShadow: "0 4px 14px rgba(15, 23, 41, 0.25)",
            "&:hover": {
              background: `linear-gradient(135deg, ${colors.navyLight} 0%, ${colors.deepNavy} 100%)`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: colors.deepNavy,
            borderWidth: 1.5,
            "&:hover": {
              borderWidth: 1.5,
              backgroundColor: "rgba(15, 23, 41, 0.04)",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
          border: `1px solid ${colors.border}`,
        },
      },
    },
  },
});

export default theme;
