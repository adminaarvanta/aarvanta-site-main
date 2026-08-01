"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { submitLeadForm } from "@/lib/submitForm";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("_honey") ?? "").trim()) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const result = await submitLeadForm(
      {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        company: String(data.get("company") ?? ""),
        phone: String(data.get("phone") ?? ""),
        interest: String(data.get("interest") ?? ""),
        goals: String(data.get("goals") ?? ""),
        _honey: String(data.get("_honey") ?? ""),
      },
      { subject: "New demo request — aarvanta.co" },
    );

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <Alert severity="success" sx={{ borderRadius: 2 }}>
        Your demo request has been received. We&apos;ll confirm your session within one business day.
      </Alert>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
    >
      <Box
        aria-hidden
        sx={{ position: "absolute", left: -9999, opacity: 0, height: 0, overflow: "hidden" }}
      >
        <TextField tabIndex={-1} autoComplete="off" name="_honey" label="Website" />
      </Box>

      <TextField label="Full Name" name="name" required fullWidth />
      <TextField
        label="Work Email"
        name="email"
        type="email"
        required
        fullWidth
        autoComplete="email"
      />
      <TextField label="Company" name="company" required fullWidth />
      <TextField label="Phone" name="phone" type="tel" autoComplete="tel" fullWidth />
      <FormControl fullWidth required>
        <InputLabel>What would you like to explore?</InputLabel>
        <Select name="interest" label="What would you like to explore?" defaultValue="">
          <MenuItem value="products">Product Ecosystem</MenuItem>
          <MenuItem value="partner">White-Label Partnership</MenuItem>
          <MenuItem value="enterprise">Enterprise Deployment</MenuItem>
          <MenuItem value="specific">Specific Product Demo</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Tell us about your business goals" name="goals" multiline rows={3} fullWidth />

      {status === "error" && (
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        disabled={status === "loading"}
        startIcon={status === "loading" ? <CircularProgress size={18} color="inherit" /> : undefined}
      >
        {status === "loading" ? "Sending…" : "Book a Demo"}
      </Button>
    </Box>
  );
}
