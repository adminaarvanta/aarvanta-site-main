"use client";

import { Box, Container, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { businessFlow } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function BusinessFlowSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.offWhite }}>
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
            Simple. Beautiful. Explains everything.
          </Typography>
          <Typography sx={{ color: colors.textMuted }}>
            From the first visitor to lasting insight — one connected flow.
          </Typography>
        </Box>

        {/* Mobile: vertical */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center", gap: 1 }}>
          {businessFlow.map((step, index) => (
            <Box key={step} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 280 }}>
              <Box
                sx={{
                  width: "100%",
                  bgcolor: colors.cream,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 2.5,
                  py: 1.5,
                  textAlign: "center",
                  fontWeight: 700,
                  color: colors.textDark,
                }}
              >
                {step}
              </Box>
              {index < businessFlow.length - 1 && (
                <ArrowDownwardIcon sx={{ color: colors.primary, my: 0.5, fontSize: 18 }} />
              )}
            </Box>
          ))}
        </Box>

        {/* Desktop: horizontal wrap */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            rowGap: 2,
          }}
        >
          {businessFlow.map((step, index) => (
            <Box key={step} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  bgcolor: colors.cream,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 2.5,
                  px: 2,
                  py: 1.25,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: colors.textDark,
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 14px rgba(15,23,42,0.04)",
                }}
              >
                {step}
              </Box>
              {index < businessFlow.length - 1 && (
                <ArrowForwardIcon sx={{ color: colors.primary, fontSize: 16 }} />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
