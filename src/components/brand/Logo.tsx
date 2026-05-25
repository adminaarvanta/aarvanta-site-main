import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

type LogoProps = {
  height?: number;
  href?: string | null;
};

export default function Logo({ height = 44, href = "/" }: LogoProps) {
  const image = (
    <Image
      src={withBasePath("/aarvanta-logo.png")}
      alt="AARVANTA LTD"
      width={Math.round(height * 2.4)}
      height={height}
      priority
      style={{ width: "auto", height, objectFit: "contain" }}
    />
  );

  if (href === null) {
    return image;
  }

  return (
    <Link href={href} style={{ textDecoration: "none", display: "inline-flex" }}>
      {image}
    </Link>
  );
}
