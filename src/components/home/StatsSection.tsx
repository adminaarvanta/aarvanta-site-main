"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AddIcon from "@mui/icons-material/Add";
import { homeStats } from "@/lib/content";
import { colors } from "@/lib/theme";

const statIcons: Record<string, React.ReactNode> = {
  rocket: <RocketLaunchOutlinedIcon sx={{ fontSize: 28 }} />,
  star: <StarBorderOutlinedIcon sx={{ fontSize: 28 }} />,
  support: <HeadsetMicOutlinedIcon sx={{ fontSize: 28 }} />,
  infinity: <AllInclusiveIcon sx={{ fontSize: 28 }} />,
};

export default function StatsSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.cream }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: colors.white,
            borderRadius: 4,
            border: `1px solid ${colors.border}`,
            p: { xs: 4, md: 6 },
            boxShadow: "0 8px 32px rgba(42, 36, 24, 0.04)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
              gap: { xs: 5, md: 6 },
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                component="h2"
                className="font-serif"
                sx={{ fontSize: { xs: "1.5rem", md: "1.85rem" }, lineHeight: 1.3, mb: 2 }}
              >
                Empowering businesses through intelligent solutions
              </Typography>
              <Typography sx={{ color: colors.textMuted, lineHeight: 1.8, mb: 3, fontSize: "0.95rem" }}>
                Join us on our journey to redefine what&apos;s possible with AI and technology.
                Let&apos;s build the future together.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="primary"
                endIcon={<AddIcon sx={{ fontSize: 16 }} />}
              >
                Get in Touch
              </Button>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
                gap: { xs: 3, md: 2 },
              }}
            >
              {homeStats.map((stat) => (
                <Box key={stat.label} sx={{ textAlign: "center" }}>
                  <Box sx={{ color: colors.gold, mb: 1, display: "flex", justifyContent: "center" }}>
                    {statIcons[stat.icon]}
                  </Box>
                  <Typography
                    className="font-serif"
                    sx={{ fontSize: { xs: "1.75rem", md: "2rem" }, fontWeight: 600, color: colors.textDark, mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: colors.textMuted, lineHeight: 1.4 }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
