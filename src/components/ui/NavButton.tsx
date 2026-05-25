"use client";

import Link from "next/link";
import { Button, ButtonProps } from "@mui/material";

type NavButtonProps = Omit<ButtonProps, "href"> & {
  href: string;
};

export default function NavButton({ href, children, ...props }: NavButtonProps) {
  return (
    <Button component={Link} href={href} {...props}>
      {children}
    </Button>
  );
}
