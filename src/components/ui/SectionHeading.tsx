import { Box, Typography } from "@mui/material";
import { colors } from "@/lib/theme";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
        maxWidth: align === "center" ? 720 : "none",
        mx: align === "center" ? "auto" : 0,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
          color: light ? colors.white : colors.deepNavy,
          mb: subtitle ? 2 : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? "rgba(255,255,255,0.75)" : colors.textSecondary,
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
