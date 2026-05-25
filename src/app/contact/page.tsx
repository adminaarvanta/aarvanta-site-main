import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's build smarter business infrastructure together. Contact AARVANTA for AI systems, automation, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Let's Build Smarter Business Infrastructure." />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h4"
                sx={{ color: colors.deepNavy, mb: 3, fontSize: "1.5rem" }}
              >
                Get in Touch
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, lineHeight: 1.8, mb: 4 }}
              >
                Whether you&apos;re exploring AI infrastructure for your
                business or interested in our partner program, we&apos;d love to
                hear from you.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      bgcolor: "rgba(15, 23, 41, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmailIcon sx={{ color: colors.deepNavy }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:hello@aarvanta.com"
                      sx={{
                        color: colors.textSecondary,
                        textDecoration: "none",
                        "&:hover": { color: colors.deepNavy },
                      }}
                    >
                      hello@aarvanta.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      bgcolor: "rgba(15, 23, 41, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ color: colors.deepNavy }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography sx={{ color: colors.textSecondary }}>
                      United Kingdom
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "16px",
                  bgcolor: colors.white,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
