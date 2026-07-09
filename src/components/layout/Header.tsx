"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { primaryNav, type NavGroup } from "@/lib/site-navigation";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isGroupActive(pathname: string, group: NavGroup) {
  if (isActive(pathname, group.href)) return true;
  return group.children?.some((child) => isActive(pathname, child.href)) ?? false;
}

function NavDropdown({ group }: { group: NavGroup }) {
  const pathname = usePathname();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const active = isGroupActive(pathname, group);
  const open = Boolean(anchor);

  if (!group.children?.length) {
    return (
      <Button
        component={Link}
        href={group.href}
        sx={{
          color: active ? colors.primary : colors.textMuted,
          fontSize: "0.875rem",
          fontWeight: active ? 600 : 500,
          px: 1.5,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          "&:hover": { color: colors.primary, bgcolor: "rgba(29, 78, 216, 0.04)" },
        }}
      >
        {group.label}
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={(e) => setAnchor(e.currentTarget)}
        onMouseEnter={(e) => setAnchor(e.currentTarget)}
        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16, opacity: 0.6 }} />}
        aria-haspopup="true"
        aria-expanded={open}
        sx={{
          color: active ? colors.primary : colors.textMuted,
          fontSize: "0.875rem",
          fontWeight: active ? 600 : 500,
          px: 1.5,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          "&:hover": { color: colors.primary, bgcolor: "rgba(29, 78, 216, 0.04)" },
        }}
      >
        {group.label}
      </Button>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: { sx: { mt: 1, borderRadius: 2, boxShadow: colors.cardShadow } },
          list: { onMouseLeave: () => setAnchor(null), sx: { py: 1, minWidth: 280 } },
        }}
      >
        <MenuItem
          component={Link}
          href={group.href}
          onClick={() => setAnchor(null)}
          sx={{ py: 1.25, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>All {group.label}</Typography>
        </MenuItem>
        {group.children.map((child) => (
          <MenuItem
            key={child.href + child.label}
            component={Link}
            href={child.href}
            onClick={() => setAnchor(null)}
            selected={isActive(pathname, child.href)}
            sx={{ py: 1.25, flexDirection: "column", alignItems: "flex-start", whiteSpace: "normal" }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>{child.label}</Typography>
            {child.description && (
              <Typography sx={{ fontSize: "0.75rem", color: colors.textMuted, mt: 0.25 }}>
                {child.description}
              </Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: colors.headerBg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Toolbar sx={{ py: { xs: 0.75, md: 1 }, minHeight: { xs: 56, md: 80 } }}>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 2, md: 3 },
              maxWidth: 1440,
            }}
          >
            <Logo variant="wordmark" height={36} />

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 0.25,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {primaryNav.map((group) => (
                <NavDropdown key={group.label} group={group} />
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 1 } }}>
              <IconButton
                aria-label="Search"
                sx={{ display: { xs: "none", md: "inline-flex" }, color: colors.textMuted }}
              >
                <SearchIcon fontSize="small" />
              </IconButton>
              <Button
                startIcon={<LanguageIcon sx={{ fontSize: 18 }} />}
                endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  color: colors.textMuted,
                  fontSize: "0.875rem",
                  textTransform: "none",
                  minWidth: 0,
                  px: 1.5,
                }}
              >
                EN
              </Button>
              <Button
                component={Link}
                href="/book-demo"
                variant="outlined"
                color="primary"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontSize: "0.8rem",
                  py: 1,
                  px: 2,
                  whiteSpace: "nowrap",
                }}
              >
                Book Demo
              </Button>
              <Button
                component={Link}
                href="/book-demo"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontSize: "0.8rem",
                  py: 1,
                  px: 2,
                  whiteSpace: "nowrap",
                }}
              >
                Start Free
              </Button>
              <IconButton
                sx={{ display: { lg: "none" }, color: colors.textDark }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 320, bgcolor: colors.cream } } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 700, color: colors.textDark }}>Menu</Typography>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {primaryNav.map((group) => (
            <Box key={group.label}>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href={group.href}
                  onClick={() => setMobileOpen(false)}
                  selected={isGroupActive(pathname, group)}
                >
                  <ListItemText primary={group.label} sx={{ "& .MuiListItemText-primary": { fontWeight: 600 } }} />
                </ListItemButton>
              </ListItem>
              {group.children?.map((child) => (
                <ListItem key={child.href + child.label} disablePadding sx={{ pl: 2 }}>
                  <ListItemButton
                    component={Link}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    selected={isActive(pathname, child.href)}
                  >
                    <ListItemText
                      primary={child.label}
                      sx={{ "& .MuiListItemText-primary": { fontSize: "0.9rem" } }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          ))}
          <ListItem sx={{ px: 2, mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Button component={Link} href="/book-demo" variant="outlined" fullWidth>
              Book Demo
            </Button>
            <Button component={Link} href="/book-demo" variant="contained" fullWidth>
              Start Free
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
