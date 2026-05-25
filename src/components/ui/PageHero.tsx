import { Box, Container, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <Box
      className="hero-waves"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          component="h1"
          className="font-serif"
          sx={{
            fontSize: { xs: "2rem", md: "2.75rem" },
            lineHeight: 1.2,
            mb: subtitle ? 2 : 0,
            color: colors.textDark,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: colors.textMuted,
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}
