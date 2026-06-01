import { Box, Container, Typography } from "@mui/material";
import { trustBarText } from "@/lib/content";
import { colors } from "@/lib/theme";

export default function TrustBar() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: colors.white,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          align="center"
          sx={{
            color: colors.textMuted,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
            maxWidth: 720,
            mx: "auto",
          }}
        >
          {trustBarText}
        </Typography>
      </Container>
    </Box>
  );
}
