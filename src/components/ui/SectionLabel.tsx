import { Typography } from "@mui/material";
import { colors } from "@/lib/theme";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <Typography
      sx={{
        color: colors.gold,
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  );
}
