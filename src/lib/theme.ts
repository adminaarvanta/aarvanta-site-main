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
      main: colors.deepNavy,
      contrastText: colors.white,
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
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: colors.textDark,
    },
    h2: {
      fontWeight: 700,
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
  shape: { borderRadius: 12 },
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
            boxShadow: "0 4px 16px rgba(29, 78, 216, 0.25)",
            color: colors.white,
            "&:hover": {
              background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: colors.border,
            borderWidth: 1.5,
            color: colors.textDark,
            "&:hover": {
              borderWidth: 1.5,
              borderColor: colors.primary,
              backgroundColor: "rgba(29, 78, 216, 0.04)",
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
