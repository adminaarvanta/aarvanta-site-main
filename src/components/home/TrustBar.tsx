import { Box, Container, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

const trustItems = [
  "Growing Businesses",
  "Agencies",
  "Consultants",
  "Automation Partners",
];

export default function TrustBar() {
  return (
    <Box
      sx={{
        py: 4,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        bgcolor: colors.white,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: colors.textSecondary,
            mb: 3,
            fontSize: "0.9rem",
          }}
        >
          Trusted by growing businesses, agencies, consultants, and automation
          partners globally.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
          }}
        >
          {trustItems.map((item) => (
            <Typography
              key={item}
              sx={{
                color: colors.softCharcoal,
                fontWeight: 600,
                fontSize: "0.875rem",
                fontFamily: "var(--font-manrope)",
                opacity: 0.6,
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
