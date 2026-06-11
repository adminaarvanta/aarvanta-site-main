import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

type LogoProps = {
  /** Emblem height (mark) or max height hint (full) */
  height?: number;
  /** Display width for full logo (emblem + wordmark); height scales automatically */
  width?: number;
  href?: string | null;
  /** `mark` = emblem only (header); `full` = original logo with wordmark */
  variant?: "full" | "mark";
};

export default function Logo({
  height = 44,
  width,
  href = "/",
  variant = "full",
}: LogoProps) {
  const isMark = variant === "mark";
  const src = withBasePath(isMark ? "/aarvanta-logo-mark.png" : "/aarvanta-logo.png");
  const intrinsicWidth = isMark ? 360 : 1024;
  const intrinsicHeight = isMark ? 360 : 682;

  const displayWidth = isMark ? height : (width ?? 220);
  const displayHeight = isMark ? height : undefined;

  const image = (
    <Image
      src={src}
      alt="AARVANTA LTD"
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

  if (href === null) {
    return image;
  }

  return (
    <Link href={href} style={{ textDecoration: "none", display: "inline-flex", lineHeight: 0 }}>
      {image}
    </Link>
  );
}
