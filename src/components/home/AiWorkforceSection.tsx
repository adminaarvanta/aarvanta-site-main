"use client";

import { Box, Chip } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import RoleAvatar from "@/components/ui/sections/RoleAvatar";
import NavButton from "@/components/ui/NavButton";
import { aiWorkforceSection } from "@/lib/content";
import { colors } from "@/lib/theme";

const avatarColors = [
  colors.gold,
  colors.goldLight,
  colors.navyMid,
  colors.goldDark,
  colors.navyLight,
  colors.mutedGold,
  colors.primaryLight,
  colors.gold,
];

export default function AiWorkforceSection() {
  return (
    <SectionShell variant="navy" maxWidth={false} containerSx={{ maxWidth: 1200 }}>
      <SectionHeader
        light
        eyebrow="AI Workforce"
        title={aiWorkforceSection.headline}
        subtitle={aiWorkforceSection.subheadline}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          mb: 4,
        }}
      >
        {aiWorkforceSection.traits.map((trait) => (
          <Chip
            key={trait}
            label={trait}
            sx={{
              bgcolor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: colors.goldLight,
              fontWeight: 600,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
          mb: 4,
        }}
      >
        {aiWorkforceSection.roles.map((role, index) => (
          <RoleAvatar
            key={role}
            role={role}
            href="/ai-workforce"
            color={avatarColors[index % avatarColors.length]}
            light
          />
        ))}
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <NavButton href="/ai-workforce" variant="outlined" color="secondary" size="large">
          Explore AI Workforce
        </NavButton>
      </Box>
    </SectionShell>
  );
}
