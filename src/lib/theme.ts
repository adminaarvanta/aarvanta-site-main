import { createTheme } from "@mui/material/styles";
import { colors } from "./theme-colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.gold,
      dark: colors.goldDark,
      light: colors.goldLight,
      contrastText: colors.deepNavy,
    },
    background: {
      default: colors.offWhite,
      paper: colors.cream,
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
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: colors.textDark,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: colors.textDark,
    },
    h3: {
      fontWeight: 700,
      color: colors.textDark,
    },
    h4: { fontWeight: 600, color: colors.textDark },
    button: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "12px 24px",
          fontSize: "0.875rem",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: `linear-gradient(180deg, ${colors.primaryLight} 0%, ${colors.primary} 100%)`,
            boxShadow: "0 6px 20px rgba(0, 24, 72, 0.28)",
            color: colors.white,
            "&:hover": {
              background: `linear-gradient(180deg, ${colors.navyMid} 0%, ${colors.primaryDark} 100%)`,
              boxShadow: "0 8px 24px rgba(0, 24, 72, 0.35)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: colors.borderNavy,
            borderWidth: 1.5,
            color: colors.primary,
            "&:hover": {
              borderWidth: 1.5,
              borderColor: colors.gold,
              backgroundColor: colors.goldTint,
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

export default theme;
export { colors };
