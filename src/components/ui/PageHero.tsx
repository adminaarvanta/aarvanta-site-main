import { Box } from "@mui/material";
import { colors } from "@/lib/theme";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <Box
      sx={{
        bgcolor: colors.deepNavy,
        color: colors.white,
        pt: { xs: 10, md: 14 },
        pb: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: `radial-gradient(ellipse at 80% 20%, rgba(196, 169, 98, 0.08) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 3, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box component="h1" sx={{ m: 0, mb: subtitle ? 2 : 0 }}>
          <Box
            component="span"
            sx={{
              display: "block",
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Box>
        </Box>
        {subtitle && (
          <Box
            component="p"
            sx={{
              m: 0,
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "rgba(255,255,255,0.75)",
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
}
