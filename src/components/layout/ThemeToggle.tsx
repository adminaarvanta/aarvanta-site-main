"use client";

import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { useState } from "react";
import { useColorMode, useSiteColors } from "@/lib/color-mode";
import type { ColorModePreference } from "@/lib/theme-colors";

const options: { value: ColorModePreference; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export default function ThemeToggle() {
  const { preference, setPreference } = useColorMode();
  const colors = useSiteColors();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const icon =
    preference === "dark" ? (
      <DarkModeOutlinedIcon fontSize="small" />
    ) : preference === "light" ? (
      <LightModeOutlinedIcon fontSize="small" />
    ) : (
      <SettingsBrightnessOutlinedIcon fontSize="small" />
    );

  return (
    <>
      <Tooltip title="Theme">
        <IconButton
          aria-label="Theme"
          onClick={(event) => setAnchor(event.currentTarget)}
          sx={{ color: colors.textDark }}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={preference === option.value}
            onClick={() => {
              setPreference(option.value);
              setAnchor(null);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
