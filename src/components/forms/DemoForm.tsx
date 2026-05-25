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
} from "@mui/material";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Alert severity="success" sx={{ borderRadius: 2 }}>
        Your demo request has been received. We&apos;ll confirm your session within one business day.
      </Alert>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <TextField label="Full Name" name="name" required fullWidth />
      <TextField label="Work Email" name="email" type="email" required fullWidth />
      <TextField label="Company" name="company" required fullWidth />
      <TextField label="Phone (optional)" name="phone" fullWidth />
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
      <Button type="submit" variant="contained" color="secondary" size="large">
        Book a Demo
      </Button>
    </Box>
  );
}
