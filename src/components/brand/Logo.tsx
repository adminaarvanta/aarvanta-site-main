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
  variant?: "full" | "mark" | "wordmark" | "hero";
};

const MARK_SRC = "/aarvanta-logo-header-mark.png";
const FULL_SRC = "/aarvanta-logo.png";

export default function Logo({
  height = 44,
  width,
  href = "/",
  variant = "full",
}: LogoProps) {
  if (variant === "wordmark") {
    const markSize = height * 1.05;
    const content = (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: markSize,
            height: markSize,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={withBasePath(MARK_SRC)}
            alt=""
            width={256}
            height={256}
            priority
            style={{
              width: markSize,
              height: markSize,
              objectFit: "contain",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: height * 0.48,
            letterSpacing: "0.05em",
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

  if (variant === "hero") {
    const size = height;
    const image = (
      <Box
        sx={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={withBasePath(MARK_SRC)}
          alt="Aarvanta"
          width={256}
          height={256}
          priority
          style={{
            width: size * 0.88,
            height: size * 0.88,
            objectFit: "contain",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))",
          }}
        />
      </Box>
    );
    if (href === null) return image;
    return (
      <Link href={href} style={{ textDecoration: "none", display: "inline-flex", lineHeight: 0 }}>
        {image}
      </Link>
    );
  }

  const isMark = variant === "mark";
  const src = withBasePath(isMark ? MARK_SRC : FULL_SRC);
  const intrinsicSize = isMark ? 256 : 1024;

  const displayWidth = isMark ? height : (width ?? 220);
  const displayHeight = isMark ? height : undefined;

  const image = (
    <Image
      src={src}
      alt="AARVANTA"
      width={intrinsicSize}
      height={intrinsicSize}
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
