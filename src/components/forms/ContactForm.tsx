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
} from "@mui/material";
import {
  serviceOptions,
  teamSizeOptions,
  industryOptions,
} from "@/lib/content";
import { colors } from "@/lib/theme";

interface ContactFormProps {
  submitLabel?: string;
  showTeamSize?: boolean;
}

export default function ContactForm({
  submitLabel = "Schedule a Strategy Call",
  showTeamSize = true,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Alert severity="success" sx={{ borderRadius: "12px" }}>
        Thank you for reaching out. Our team will contact you within 24 hours.
      </Alert>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Name"
            name="name"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Company"
            name="company"
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
        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" size="large">
            {submitLabel}
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
