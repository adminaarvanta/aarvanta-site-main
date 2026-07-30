"use client";

import { Box } from "@mui/material";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import LinkTile from "@/components/ui/sections/LinkTile";
import { audienceCards } from "@/lib/content";

export default function AudienceSection() {
  return (
    <SectionShell variant="goldEdge" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
      <SectionHeader
        eyebrow="Who it's for"
        title="Four paths. One operating system."
        subtitle="Whether you sell, serve, or scale — AARVANTA fits your operating rhythm."
        align="left"
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        {audienceCards.map((card, index) => (
          <LinkTile
            key={card.title}
            label={card.title}
            description={card.description}
            href={card.href}
            featured={index === 0}
          />
        ))}
      </Box>
    </SectionShell>
  );
}
