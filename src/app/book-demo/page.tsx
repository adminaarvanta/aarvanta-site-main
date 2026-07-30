import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import SectionShell from "@/components/ui/sections/SectionShell";
import { colors } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo with AARVANTA to explore AI infrastructure built for real businesses.",
};

const demoBenefits = [
  "Personalized walkthrough of the AARVANTA ecosystem",
  "Industry-specific use case discussion",
  "Custom infrastructure recommendations",
  "No obligation strategy consultation",
];

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        mode="marketing"
        eyebrow="Demo"
        title="See AARVANTA in Action."
        subtitle="Book a personalized demo to explore how our AI infrastructure can transform your business operations."
      />

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
              What to Expect
            </Typography>
            {demoBenefits.map((benefit) => (
              <Box
                key={benefit}
                sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2.5 }}
              >
                <CheckCircleOutlineIcon sx={{ color: colors.gold, mt: 0.3 }} />
                <Typography sx={{ color: colors.softCharcoal, lineHeight: 1.7 }}>
                  {benefit}
                </Typography>
              </Box>
            ))}
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
            <Typography sx={{ color: colors.textDark, mb: 3, fontWeight: 800, fontSize: "1.25rem" }}>
              Schedule Your Demo
            </Typography>
            <ContactForm submitLabel="Book a Demo" showTeamSize={true} />
          </Box>
        </Box>
      </SectionShell>
    </>
  );
}
