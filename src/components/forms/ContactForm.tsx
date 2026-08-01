"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  serviceOptions,
  teamSizeOptions,
  industryOptions,
} from "@/lib/content";
import { submitLeadForm } from "@/lib/submitForm";
import { colors } from "@/lib/theme";

interface ContactFormProps {
  submitLabel?: string;
  showTeamSize?: boolean;
  formSubject?: string;
}

export default function ContactForm({
  submitLabel = "Schedule a Strategy Call",
  showTeamSize = true,
  formSubject = "New contact enquiry — aarvanta.co",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("_honey") ?? "").trim()) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const result = await submitLeadForm(
      {
        name: String(data.get("name") ?? ""),
        company: String(data.get("company") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        industry: String(data.get("industry") ?? ""),
        services: String(data.get("services") ?? ""),
        teamSize: String(data.get("teamSize") ?? ""),
        message: String(data.get("message") ?? ""),
        _honey: String(data.get("_honey") ?? ""),
      },
      { subject: formSubject },
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
      <Alert severity="success" sx={{ borderRadius: "12px" }}>
        Thank you for reaching out. Our team will contact you within 24 hours.
      </Alert>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from users */}
      <Box
        aria-hidden
        sx={{ position: "absolute", left: -9999, opacity: 0, height: 0, overflow: "hidden" }}
      >
        <TextField tabIndex={-1} autoComplete="off" name="_honey" label="Website" />
      </Box>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth required label="Name" name="name" variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth required label="Company" name="company" variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            type="email"
            label="Email"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            type="tel"
            label="Phone"
            name="phone"
            autoComplete="tel"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth required>
            <InputLabel>Industry</InputLabel>
            <Select label="Industry" name="industry" defaultValue="">
              {industryOptions.map((ind) => (
                <MenuItem key={ind} value={ind}>
                  {ind}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth required>
            <InputLabel>Services Interested In</InputLabel>
            <Select label="Services Interested In" name="services" defaultValue="">
              {serviceOptions.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {showTeamSize && (
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Team Size</InputLabel>
              <Select label="Team Size" name="teamSize" defaultValue="">
                {teamSizeOptions.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            required
            multiline
            rows={4}
            label="Message"
            name="message"
            variant="outlined"
          />
        </Grid>
        {status === "error" && (
          <Grid size={{ xs: 12 }}>
            <Alert severity="error" sx={{ borderRadius: "12px" }}>
              {errorMessage}
            </Alert>
          </Grid>
        )}
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={status === "loading"}
            startIcon={status === "loading" ? <CircularProgress size={18} color="inherit" /> : undefined}
          >
            {status === "loading" ? "Sending…" : submitLabel}
          </Button>
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, color: colors.textSecondary }}
          >
            We respect your privacy. Your information will never be shared.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
