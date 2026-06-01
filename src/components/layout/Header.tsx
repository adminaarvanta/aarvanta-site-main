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
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { navLinks } from "@/lib/content";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
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
          bgcolor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Toolbar sx={{ py: { xs: 1, md: 1.5 } }}>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 2, md: 3 },
            }}
          >
            <Logo variant="mark" height={52} />

            <Box
              sx={{
                display: { xs: "none", xl: "flex" },
                alignItems: "center",
                gap: 0,
                flex: 1,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Button
                    key={link.href + link.label}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: active ? colors.gold : colors.textMuted,
                      fontSize: "0.72rem",
                      fontWeight: active ? 600 : 500,
                      letterSpacing: "0.04em",
                      px: 1.25,
                      py: 1,
                      borderRadius: 0,
                      borderBottom: active ? `2px solid ${colors.gold}` : "2px solid transparent",
                      "&:hover": {
                        color: colors.gold,
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                component={Link}
                href="/book-demo"
                variant="contained"
                color="primary"
                endIcon={<AddIcon sx={{ fontSize: 16 }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontSize: "0.75rem",
                  py: 1.25,
                  px: 2.5,
                  whiteSpace: "nowrap",
                }}
              >
                Book a Demo
              </Button>
              <IconButton
                sx={{ display: { xl: "none" }, color: colors.textDark }}
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
        slotProps={{ paper: { sx: { width: 300, bgcolor: colors.cream } } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href + link.label} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                selected={isActive(pathname, link.href)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 2, mt: 2 }}>
            <Button component={Link} href="/book-demo" variant="contained" fullWidth>
              Book a Demo
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
