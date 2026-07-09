import { Box, Container, Typography } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { brandingPillars } from "@/lib/content";
import Logo from "@/components/brand/Logo";
import { colors } from "@/lib/theme";

const iconMap = {
  globe: PublicOutlinedIcon,
  chip: MemoryOutlinedIcon,
  shield: VerifiedUserOutlinedIcon,
  chart: TrendingUpOutlinedIcon,
};

export default function BrandingBar() {
  return (
    <Box sx={{ py: { xs: 4, md: 5 }, px: { xs: 2, md: 4 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1440, px: 0 }}>
        <Box
          sx={{
            bgcolor: colors.deepNavy,
            borderRadius: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 0 },
              borderRight: { md: `1px solid rgba(255,255,255,0.1)` },
            }}
          >
            <Logo variant="mark" height={48} href={null} />
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                display: { xs: "none", sm: "block" },
              }}
            >
              AARVANTA
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            }}
          >
            {brandingPillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon];
              return (
                <Box
                  key={pillar.title}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    px: { xs: 3, md: 3 },
                    py: { xs: 2.5, md: 3 },
                    borderLeft: {
                      lg: index > 0 ? `1px solid rgba(255,255,255,0.1)` : "none",
                    },
                    borderTop: {
                      xs: index > 0 ? `1px solid rgba(255,255,255,0.1)` : "none",
                      lg: "none",
                    },
                  }}
                >
                  <Icon sx={{ color: colors.gold, fontSize: 28, flexShrink: 0, mt: 0.25 }} />
                  <Box>
                    <Typography
                      sx={{
                        color: colors.white,
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        mb: 0.5,
                      }}
                    >
                      {pillar.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "0.8rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {pillar.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
