"use client";

import Link from "next/link";
import { Fab, Tooltip } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { colors } from "@/lib/theme";

export default function ChatFab() {
  return (
    <Tooltip title="Chat with us" placement="left">
      <Fab
        component={Link}
        href="/contact"
        aria-label="Open chat"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1200,
          bgcolor: colors.primary,
          color: colors.white,
          boxShadow: "0 8px 24px rgba(0, 24, 72, 0.35)",
          border: `1px solid ${colors.gold}`,
          "&:hover": {
            bgcolor: colors.primaryDark,
          },
        }}
      >
        <ChatBubbleOutlineIcon />
      </Fab>
    </Tooltip>
  );
}
