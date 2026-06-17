
import { createTheme, type Theme } from "@mui/material/styles";
import {
  getSiteColors,
  type ColorMode,
  type SiteColors,
} from "./theme-colors";

export function createAppTheme(mode: ColorMode): Theme {
  const colors = getSiteColors(mode);

  return createTheme({
    palette: {
      mode,
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
            boxShadow: colors.cardShadow,
            border: `1px solid ${colors.border}`,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: colors.headerBg,
            backdropFilter: "blur(12px)",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: colors.cream,
          },
        },
      },
    },
  });
}

export { getSiteColors, type SiteColors };
export { colors, lightColors, darkColors } from "./theme-colors";
