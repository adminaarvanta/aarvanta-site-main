"use client";

import Link from "next/link";
import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { aiWorkforceBadge, orbitCards } from "@/lib/site-navigation";
import { colors } from "@/lib/theme";
import { withBasePath } from "@/lib/basePath";

const RING_SIZE = 420;

const ringIcons = [
  { Icon: PersonOutlineOutlinedIcon, top: "18%", left: "72%", color: colors.moduleOrange },
  { Icon: CheckCircleOutlineOutlinedIcon, top: "55%", left: "82%", color: colors.moduleGreen },
  { Icon: BarChartOutlinedIcon, top: "78%", left: "48%", color: colors.modulePink },
  { Icon: SettingsOutlinedIcon, top: "42%", left: "12%", color: colors.moduleTeal },
];

const productIcons = {
  Orbit: RocketLaunchOutlinedIcon,
  Fluentra: SchoolOutlinedIcon,
  Nuri: FavoriteBorderOutlinedIcon,
  "Business OS": GridViewOutlinedIcon,
};

export default function HeroOrbitVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        width: RING_SIZE,
        height: RING_SIZE,
        mx: "auto",
        maxWidth: "100%",
      }}
    >
      {[1, 0.82, 0.64].map((scale, i) => (
        <Box
          key={scale}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: RING_SIZE * scale,
            height: RING_SIZE * scale,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: `1px solid ${i === 0 ? "rgba(29, 78, 216, 0.12)" : colors.border}`,
            bgcolor: i === 0 ? "rgba(255,255,255,0.6)" : "transparent",
          }}
        />
      ))}

      {ringIcons.map(({ Icon, top, left, color }, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top,
            left,
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: colors.cream,
            border: `1px solid ${colors.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
            zIndex: 1,
          }}
        >
          <Icon sx={{ fontSize: 16, color }} />
        </Box>
      ))}

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 112,
          height: 112,
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 30%, ${colors.primaryLight}, ${colors.primary} 55%, ${colors.primaryDark})`,
          boxShadow: "0 12px 40px rgba(29, 78, 216, 0.35), inset 0 2px 8px rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <Image
          src={withBasePath("/aarvanta-logo-mark.png")}
          alt="Aarvanta"
          width={64}
          height={64}
          style={{ objectFit: "contain" }}
        />
      </Box>

      {orbitCards.map((product) => {
        const ProductIcon = productIcons[product.name as keyof typeof productIcons];
        return (
          <Box
            key={product.name}
            component={Link}
            href={product.href}
            className="orbit-card"
            sx={{
              position: "absolute",
              top: product.top,
              left: product.left,
              width: { xs: 150, sm: 168 },
              textDecoration: "none",
              zIndex: 4,
            }}
          >
            <Box
              sx={{
                bgcolor: colors.cream,
                borderRadius: 3,
                px: 1.75,
                py: 1.5,
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.1)",
                border: `1px solid ${colors.border}`,
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.14)",
                },
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  bgcolor: `${product.color}14`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {ProductIcon && <ProductIcon sx={{ fontSize: 20, color: product.color }} />}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: colors.textDark, lineHeight: 1.2 }}>
                  {product.name}
                </Typography>
                <Typography sx={{ fontSize: "0.68rem", color: colors.textMuted, lineHeight: 1.3 }}>
                  {product.tagline}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}

      <Box
        component={Link}
        href={aiWorkforceBadge.href}
        sx={{
          position: "absolute",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          zIndex: 4,
        }}
      >
        <Chip
          icon={<AutoAwesomeOutlinedIcon sx={{ fontSize: "16px !important" }} />}
          label={
            <Box component="span" sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <Box component="span" sx={{ fontWeight: 700 }}>{aiWorkforceBadge.label}:</Box>
              <Box component="span" sx={{ fontWeight: 500, opacity: 0.85 }}>{aiWorkforceBadge.tagline}</Box>
            </Box>
          }
          sx={{
            bgcolor: colors.cream,
            border: `1px solid ${colors.border}`,
            boxShadow: colors.cardShadow,
            height: 36,
            px: 0.5,
            "& .MuiChip-label": { px: 1 },
            "& .MuiChip-icon": { color: colors.primary },
          }}
        />
      </Box>
    </Box>
  );
}
