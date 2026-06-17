export const lightColors = {
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
  deepNavy: "#2A2418",
  navyLight: "#6B6356",
  textSecondary: "#6B6356",
  softCharcoal: "#2A2418",
  mutedGold: "#C29B40",
  headerBg: "rgba(255, 255, 255, 0.92)",
  iconBg: "rgba(15, 23, 41, 0.06)",
  cardShadow: "0 4px 24px rgba(42, 36, 24, 0.06)",
};

export const darkColors = {
  cream: "#0F0D0A",
  offWhite: "#171410",
  gold: "#C29B40",
  goldDark: "#9A7A32",
  goldLight: "#D4B06A",
  goldMuted: "#8A7340",
  textDark: "#F5EFE3",
  textMuted: "#A89B88",
  border: "#2E2920",
  white: "#FFFFFF",
  heroWave: "#14110D",
  deepNavy: "#F5EFE3",
  navyLight: "#A89B88",
  textSecondary: "#A89B88",
  softCharcoal: "#F5EFE3",
  mutedGold: "#C29B40",
  headerBg: "rgba(15, 13, 10, 0.92)",
  iconBg: "rgba(194, 155, 64, 0.12)",
  cardShadow: "0 4px 24px rgba(0, 0, 0, 0.35)",
};

export type SiteColors = typeof lightColors;

/** @deprecated Use useSiteColors() in client components. */
export const colors = lightColors;

export type ColorMode = "light" | "dark";
export type ColorModePreference = ColorMode | "system";

export const COLOR_MODE_STORAGE_KEY = "aarvanta-color-mode";

export function resolveColorMode(preference: ColorModePreference): ColorMode {
  if (preference === "system") {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return preference;
}

export function getSiteColors(mode: ColorMode): SiteColors {
  return mode === "dark" ? darkColors : lightColors;
}
