import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import SectionShell from "@/components/ui/sections/SectionShell";
import { contactPage } from "@/lib/content";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's build smarter business infrastructure together. Contact AARVANTA for AI systems, automation, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero mode="marketing" eyebrow="Contact" title={contactPage.headline} />

      <SectionShell variant="paper" maxWidth={false} containerSx={{ maxWidth: 1100 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{ color: colors.textDark, mb: 3, fontSize: "1.5rem", fontWeight: 800 }}
            >
              Get in Touch
            </Typography>
            <Typography sx={{ color: colors.textMuted, lineHeight: 1.8, mb: 4 }}>
              Whether you&apos;re exploring AI infrastructure for your business or interested in our
              partner program, we&apos;d love to hear from you.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    bgcolor: colors.goldTint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmailIcon sx={{ color: colors.primary }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:admin@aarvanta.co"
                    sx={{
                      color: colors.textMuted,
                      textDecoration: "none",
                      "&:hover": { color: colors.goldDark },
                    }}
                  >
                    admin@aarvanta.co
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    bgcolor: colors.goldTint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationOnIcon sx={{ color: colors.primary }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Location
                  </Typography>
                  <Typography sx={{ color: colors.textMuted }}>United Kingdom</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "0 16px 16px 0",
              bgcolor: colors.cream,
              border: `1px solid ${colors.borderNavy}`,
              borderLeft: `4px solid ${colors.gold}`,
              boxShadow: colors.cardShadow,
            }}
          >
            <ContactForm submitLabel={contactPage.formCta} />
          </Box>
        </Box>
      </SectionShell>
    </>
  );
}
