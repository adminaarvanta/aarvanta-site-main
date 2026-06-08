import { Box, Container, Typography } from "@mui/material";
import PageHero from "./PageHero";
import type { LegalBlock, LegalSection } from "@/lib/legal-content";
import { colors } from "@/lib/theme";

const bodySx = {
  color: colors.softCharcoal,
  lineHeight: 1.9,
  fontSize: { xs: "1rem", md: "1.05rem" },
};

const listSx = {
  pl: 3,
  my: 1.5,
  "& li": {
    color: colors.softCharcoal,
    lineHeight: 1.9,
    mb: 0.75,
    fontSize: { xs: "1rem", md: "1.05rem" },
  },
};

function LegalBlockContent({ block }: { block: LegalBlock }) {
  if (block.kind === "paragraph") {
    return (
      <Typography sx={{ ...bodySx, mb: 1.5 }}>{block.text}</Typography>
    );
  }

  if (block.kind === "list") {
    return (
      <Box component="ul" sx={listSx}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        component="h3"
        sx={{
          fontWeight: 600,
          color: colors.textDark,
          fontSize: { xs: "1rem", md: "1.05rem" },
          mb: 1,
        }}
      >
        {block.title}
      </Typography>
      <Box component="ul" sx={{ ...listSx, my: 0 }}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Box>
    </Box>
  );
}

function LegalSectionContent({
  section,
  index,
}: {
  section: LegalSection;
  index: number;
}) {
  return (
    <Box
      component="section"
      sx={{
        mb: 5,
        pb: 5,
        borderBottom: `1px solid ${colors.border}`,
        "&:last-child": { borderBottom: "none", pb: 0, mb: 0 },
      }}
    >
      <Typography
        component="h2"
        className="font-serif"
        sx={{
          fontSize: { xs: "1.25rem", md: "1.4rem" },
          color: colors.textDark,
          mb: 2,
        }}
      >
        {index + 1}. {section.title}
      </Typography>
      {section.blocks.map((block, blockIndex) => (
        <LegalBlockContent key={`${section.title}-${blockIndex}`} block={block} />
      ))}
    </Box>
  );
}

type LegalPageProps = {
  title: string;
  lastUpdated?: string;
  content?: string;
  sections?: LegalSection[];
};

export default function LegalPage({
  title,
  lastUpdated,
  content,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero title={title} />
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
          {lastUpdated && (
            <Typography
              sx={{
                color: colors.textMuted,
                fontSize: "0.95rem",
                mb: 4,
              }}
            >
              Last Updated: {lastUpdated}
            </Typography>
          )}
          {sections ? (
            sections.map((section, index) => (
              <LegalSectionContent
                key={section.title}
                section={section}
                index={index}
              />
            ))
          ) : (
            <Typography variant="body1" sx={bodySx}>
              {content}
            </Typography>
          )}
        </Container>
      </Box>
    </>
  );
}
