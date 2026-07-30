"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

type RoleAvatarProps = {
  role: string;
  href?: string;
  color?: string;
  description?: string;
  light?: boolean;
};

export default function RoleAvatar({
  role,
  href = "/ai-workforce",
  color = colors.gold,
  description = "Available 24/7.",
  light = false,
}: RoleAvatarProps) {
  const initials = role
    .replace("AI ", "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <Box
      component={Link}
      href={href}
      sx={{
        bgcolor: light ? "rgba(255,255,255,0.08)" : colors.cream,
        borderRadius: 3,
        border: light ? "1px solid rgba(255,255,255,0.12)" : `1px solid ${colors.borderNavy}`,
        p: 2.5,
        textDecoration: "none",
        textAlign: "center",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: colors.gold,
        },
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          mx: "auto",
          mb: 1.5,
          bgcolor: `${color}22`,
          color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "0.95rem",
          border: `1px solid ${color}44`,
        }}
      >
        {initials}
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "0.9rem",
          color: light ? colors.white : colors.textDark,
          lineHeight: 1.35,
        }}
      >
        {role}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: light ? "rgba(255,255,255,0.7)" : colors.textMuted,
          mt: 0.75,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
