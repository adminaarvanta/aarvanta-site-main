"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, IconButton, Tooltip } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { sideNavLinks } from "@/lib/site-navigation";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

const iconMap = {
  dashboard: DashboardOutlinedIcon,
  business: BusinessCenterOutlinedIcon,
  analytics: AnalyticsOutlinedIcon,
  inventory: Inventory2OutlinedIcon,
  education: SchoolOutlinedIcon,
  users: GroupsOutlinedIcon,
  ai: AutoAwesomeOutlinedIcon,
  workflow: AccountTreeOutlinedIcon,
  building: ApartmentOutlinedIcon,
} as const;

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SideNav() {
  const pathname = usePathname();
  const showOnHomeOnly = pathname !== "/";

  if (showOnHomeOnly) return null;

  return (
    <Box
      component="nav"
      aria-label="Quick navigation"
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
        width: 56,
        flexShrink: 0,
        bgcolor: colors.cream,
        borderRight: `1px solid ${colors.border}`,
        py: 2,
        position: "sticky",
        top: 80,
        height: "calc(100vh - 80px)",
      }}
    >
      <Box sx={{ mb: 2.5 }}>
        <Logo variant="mark" height={32} href="/" />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25, flex: 1 }}>
        {sideNavLinks.map((link) => {
          const active = isLinkActive(pathname, link.href);
          const Icon = iconMap[link.icon];
          return (
            <Tooltip key={link.label + link.href} title={link.label} placement="right">
              <IconButton
                component={Link}
                href={link.href}
                aria-label={link.label}
                aria-current={active ? "page" : undefined}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  color: active ? colors.primary : colors.textMuted,
                  bgcolor: active ? colors.iconBg : "transparent",
                  "&:hover": { bgcolor: colors.iconBg, color: colors.primary },
                }}
              >
                <Icon sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
          );
        })}
      </Box>

      <IconButton
        aria-label="More"
        sx={{ width: 40, height: 40, color: colors.textMuted, mb: 1 }}
      >
        <MoreHorizIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  );
}
