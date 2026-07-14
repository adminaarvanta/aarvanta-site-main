"use client";

import { Box, Container, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { whyOutcomes } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function WhySection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.offWhite }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: colors.textDark,
            mb: 5,
          }}
        >
          Why Aarvanta
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          {whyOutcomes.map((outcome) => (
            <Box
              key={outcome}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                bgcolor: colors.cream,
                borderRadius: 3,
                border: `1px solid ${colors.border}`,
                p: 2.5,
              }}
            >
              <CheckCircleOutlineIcon sx={{ color: colors.primary, mt: 0.25 }} />
              <Typography sx={{ fontWeight: 600, color: colors.textDark, fontSize: "1rem", lineHeight: 1.5 }}>
                {outcome}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
