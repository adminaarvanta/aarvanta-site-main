"use client";

import { createTheme } from "@mui/material/styles";

export const colors = {
  offWhite: "#F8F7F4",
  softCharcoal: "#3D3D3D",
  deepNavy: "#0F1B2D",
  navyMid: "#1A2744",
  mutedGold: "#B8956A",
  goldLight: "#D4BC94",
  border: "rgba(15, 27, 45, 0.08)",
  white: "#FFFFFF",
};

export const aarvantaTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.deepNavy, contrastText: colors.white },
    secondary: { main: colors.mutedGold, contrastText: colors.deepNavy },
    background: { default: colors.offWhite, paper: colors.white },
    text: { primary: colors.deepNavy, secondary: colors.softCharcoal },
  },
  typography: {
    fontFamily: "var(--font-body), Inter, system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-heading), Satoshi, system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-heading), Satoshi, system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-heading), Satoshi, system-ui, sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: "var(--font-heading), Satoshi, system-ui, sans-serif",
      fontWeight: 600,
    },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, padding: "12px 28px", fontSize: "0.95rem" },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": { boxShadow: "0 8px 24px rgba(15, 27, 45, 0.15)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${colors.border}`,
          boxShadow: "0 4px 24px rgba(15, 27, 45, 0.04)",
        },
      },
    },
  },
});
