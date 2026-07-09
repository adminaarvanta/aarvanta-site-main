"use client";

import { Box } from "@mui/material";
import SideNav from "./SideNav";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
      <SideNav />
      <Box component="div" sx={{ flex: 1, minWidth: 0 }}>
        {children}
      </Box>
    </Box>
  );
}
