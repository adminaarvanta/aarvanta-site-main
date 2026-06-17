"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  COLOR_MODE_STORAGE_KEY,
  getSiteColors,
  resolveColorMode,
  type ColorMode,
  type ColorModePreference,
} from "./theme-colors";

type ColorModeContextValue = {
  mode: ColorMode;
  preference: ColorModePreference;
  setPreference: (preference: ColorModePreference) => void;
};

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

function applyColorMode(mode: ColorMode) {
  document.documentElement.dataset.theme = mode;
  document.documentElement.style.colorScheme = mode;
}

export function ColorModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preference, setPreferenceState] = useState<ColorModePreference>("system");
  const [mode, setMode] = useState<ColorMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(
      COLOR_MODE_STORAGE_KEY,
    ) as ColorModePreference | null;
    const initialPreference: ColorModePreference =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    const resolved = resolveColorMode(initialPreference);

    setPreferenceState(initialPreference);
    setMode(resolved);
    applyColorMode(resolved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || preference !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const resolved = resolveColorMode("system");
      setMode(resolved);
      applyColorMode(resolved);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [preference, ready]);

  const setPreference = useCallback((next: ColorModePreference) => {
    const resolved =
      next === "system" ? resolveColorMode("system") : next;

    setPreferenceState(next);
    window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, next);
    setMode(resolved);
    applyColorMode(resolved);
  }, []);

  const value = useMemo(
    () => ({ mode, preference, setPreference }),
    [mode, preference, setPreference],
  );

  return (
    <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within ColorModeProvider");
  }
  return context;
}

export function useSiteColors() {
  const { mode } = useColorMode();
  return useMemo(() => getSiteColors(mode), [mode]);
}
