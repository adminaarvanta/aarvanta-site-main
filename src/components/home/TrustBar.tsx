import { Box, Container, Typography } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import { homeTrustFeatures } from "@/lib/content";
import { colors } from "@/lib/theme";

const icons: Record<string, React.ReactNode> = {
  innovation: <SmartToyOutlinedIcon sx={{ fontSize: 36 }} />,
  secure: <ShieldOutlinedIcon sx={{ fontSize: 36 }} />,
  scale: <RocketLaunchOutlinedIcon sx={{ fontSize: 36 }} />,
  support: <HeadsetMicOutlinedIcon sx={{ fontSize: 36 }} />,
};

export default function TrustBar() {
  return (
    <Box sx={{ py: { xs: 5, md: 6 }, bgcolor: colors.white, borderTop: `1px solid ${colors.border}` }}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            color: colors.gold,
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            mb: 4,
          }}
        >
          Trusted by businesses aiming high
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {homeTrustFeatures.map((item) => (
            <Box
              key={item.title}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box sx={{ color: colors.gold, opacity: 0.85 }}>{icons[item.icon]}</Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: colors.textMuted,
                  maxWidth: 140,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
