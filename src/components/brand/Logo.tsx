"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { withBasePath } from "@/lib/basePath";
import { colors } from "@/lib/theme";

type LogoProps = {
  height?: number;
  width?: number;
  href?: string | null;
  variant?: "full" | "mark" | "wordmark";
};

export default function Logo({
  height = 44,
  width,
  href = "/",
  variant = "full",
}: LogoProps) {
  if (variant === "wordmark") {
    const content = (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
        <Box
          sx={{
            width: height * 0.85,
            height: height * 0.85,
            borderRadius: 2,
            bgcolor: colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: height * 0.45,
              lineHeight: 1,
              fontStyle: "italic",
            }}
          >
            A
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: height * 0.42,
            letterSpacing: "0.06em",
            color: colors.textDark,
            lineHeight: 1,
          }}
        >
          AARVANTA
        </Typography>
      </Box>
    );

    if (href === null) return content;
    return (
      <Link href={href} style={{ textDecoration: "none", display: "inline-flex" }}>
        {content}
      </Link>
    );
  }

  const isMark = variant === "mark";
  const src = withBasePath(isMark ? "/aarvanta-logo-mark.png" : "/aarvanta-logo.png");
  const intrinsicWidth = isMark ? 720 : 1024;
  const intrinsicHeight = isMark ? 512 : 1024;

  const displayWidth = isMark ? height : (width ?? 220);
  const displayHeight = isMark ? height : undefined;

  const image = (
    <Image
      src={src}
      alt="AARVANTA"
      width={intrinsicWidth}
      height={intrinsicHeight}
      priority={isMark}
      style={{
        width: displayWidth,
        height: displayHeight ?? "auto",
        objectFit: "contain",
      }}
    />
  );

  if (href === null) return image;

  return (
    <Link href={href} style={{ textDecoration: "none", display: "inline-flex", lineHeight: 0 }}>
      {image}
    </Link>
  );
}
