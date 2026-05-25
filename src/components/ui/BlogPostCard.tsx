"use client";

import Link from "next/link";
import { Box, Typography, Chip } from "@mui/material";
import { colors } from "@/lib/theme";

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  category,
  date,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "block",
          p: 4,
          height: "100%",
          borderRadius: "16px",
          bgcolor: colors.white,
          border: `1px solid ${colors.border}`,
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: colors.mutedGold,
            transform: "translateY(-2px)",
            boxShadow: "0 12px 40px rgba(15, 23, 41, 0.08)",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
          <Chip
            label={category}
            size="small"
            sx={{
              bgcolor: "rgba(15, 23, 41, 0.06)",
              color: colors.deepNavy,
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          />
          <Typography variant="caption" sx={{ color: colors.textSecondary }}>
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: colors.deepNavy,
            mb: 2,
            fontSize: "1.25rem",
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
          {excerpt}
        </Typography>
      </Box>
    </Link>
  );
}
