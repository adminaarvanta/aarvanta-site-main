"use client";

import { useState } from "react";
import Link from "next/link";
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
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "@/lib/content";
import { colors } from "@/lib/theme";
import Logo from "@/components/brand/Logo";

function ElevationScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 2 : 0}
      sx={{
        bgcolor: trigger ? "rgba(248, 247, 244, 0.95)" : "transparent",
        backdropFilter: trigger ? "blur(12px)" : "none",
        borderBottom: trigger ? `1px solid ${colors.border}` : "none",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </AppBar>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
  <>
    <ElevationScroll>
      <Toolbar sx={{ py: 1 }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 3 },
          }}
        >
          <Logo height={40} />

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navLinks.slice(0, 6).map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: colors.softCharcoal,
                  fontSize: "0.875rem",
                  px: 1.5,
                  "&:hover": { color: colors.deepNavy, bgcolor: "transparent" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Button
              component={Link}
              href="/book-demo"
              variant="contained"
              color="primary"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              Book a Demo
            </Button>
            <IconButton
              sx={{ display: { lg: "none" }, color: colors.deepNavy }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </ElevationScroll>

    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      slotProps={{
        paper: { sx: { width: 300, bgcolor: colors.offWhite } },
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText
                primary={link.label}
                slotProps={{
                  primary: {
                    sx: { fontFamily: "var(--font-manrope)", fontWeight: 500 },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2, px: 2 }}>
          <Button
            component={Link}
            href="/book-demo"
            variant="contained"
            fullWidth
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </Button>
        </ListItem>
      </List>
    </Drawer>
  </>
  );
}
