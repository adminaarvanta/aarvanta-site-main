"use client";

import Link from "next/link";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { platformModules } from "@/lib/content";
import { platformModuleLinks } from "@/lib/site-navigation";
import StatsPanel from "@/components/home/StatsPanel";
import { colors } from "@/lib/theme";

const moduleIcons = [
  SettingsOutlinedIcon,
  AccountBalanceWalletOutlinedIcon,
  GroupsOutlinedIcon,
  HubOutlinedIcon,
  Inventory2OutlinedIcon,
  InsightsOutlinedIcon,
];

const moduleColorMap = {
  moduleBlue: colors.moduleBlue,
  moduleGreen: colors.moduleGreen,
  modulePurple: colors.modulePurple,
  moduleOrange: colors.moduleOrange,
  moduleTeal: colors.moduleTeal,
  modulePink: colors.modulePink,
};

export default function ModulesSection() {
  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: colors.offWhite }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1320 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.125rem" },
              fontWeight: 800,
              color: colors.primary,
              mb: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            {platformModules.headline}
          </Typography>
          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            {platformModules.subheadline}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", xl: "1fr 280px" },
            gap: 3,
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {platformModuleLinks.map((mod, index) => {
              const accent = moduleColorMap[mod.color];
              const Icon = moduleIcons[index];
              return (
                <Box
                  key={mod.title}
                  component={Link}
                  href={mod.href}
                  sx={{
                    bgcolor: colors.cream,
                    borderRadius: 3,
                    p: 2.5,
                    border: `1px solid ${colors.border}`,
                    boxShadow: "0 2px 12px rgba(15, 23, 42, 0.05)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 188,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 28px rgba(15, 23, 42, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: `${accent}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1.75,
                    }}
                  >
                    <Icon sx={{ color: accent, fontSize: 22 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: colors.textDark, mb: 0.75 }}>
                    {mod.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: colors.textMuted, lineHeight: 1.55, flex: 1 }}>
                    {mod.description}
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      mt: 1.5,
                      width: 32,
                      height: 32,
                      bgcolor: `${accent}14`,
                      color: accent,
                      "&:hover": { bgcolor: `${accent}24` },
                    }}
                    aria-label={`Explore ${mod.title}`}
                  >
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "block", xl: "block" } }}>
            <StatsPanel />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
