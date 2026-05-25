import { Box, Container, Typography } from "@mui/material";
import PageHero from "./PageHero";
import { colors } from "@/lib/theme";

export default function LegalPage({ title, content }: { title: string; content: string }) {
  return (
    <>
      <PageHero title={title} />
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="body1" sx={{ color: colors.softCharcoal, lineHeight: 1.9 }}>
            {content}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
