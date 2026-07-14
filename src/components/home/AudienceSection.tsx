"use client";

import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { audienceCards } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function AudienceSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.cream }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: 1200 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: colors.textDark,
              mb: 1,
            }}
          >
            Who It&apos;s For
          </Typography>
          <Typography sx={{ color: colors.textMuted }}>
            Four paths. One operating system.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {audienceCards.map((card) => (
            <Box
              key={card.title}
              component={Link}
              href={card.href}
              sx={{
                p: 3.5,
                borderRadius: 3,
                border: `1px solid ${colors.border}`,
                bgcolor: colors.offWhite,
                textDecoration: "none",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                "&:hover": { borderColor: colors.primary, boxShadow: "0 12px 32px rgba(15,23,42,0.08)" },
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", color: colors.textDark, mb: 1.25 }}>
                {card.title}
              </Typography>
              <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", lineHeight: 1.6, flex: 1 }}>
                {card.description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 2, color: colors.primary }}>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>View solution</Typography>
                <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
