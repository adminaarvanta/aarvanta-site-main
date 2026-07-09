import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import { subPages } from "@/lib/site-navigation";
import { colors } from "@/lib/theme";

const SECTIONS = ["platform", "solutions", "partners", "resources", "orbit", "fluentra", "nuri", "developers"] as const;
type Section = (typeof SECTIONS)[number];

type Props = { params: Promise<{ section: string; slug: string }> };

function isSection(value: string): value is Section {
  return (SECTIONS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return SECTIONS.flatMap((section) =>
    Object.keys(subPages[section] ?? {}).map((slug) => ({ section, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params;
  if (!isSection(section)) return { title: "Page" };
  const page = subPages[section]?.[slug];
  if (!page) return { title: "Page" };
  return { title: page.title, description: page.description };
}

export default async function SubPage({ params }: Props) {
  const { section, slug } = await params;
  if (!isSection(section)) notFound();
  const page = subPages[section]?.[slug];
  if (!page) notFound();

  return (
    <>
      <PageHero title={page.title} subtitle={page.description}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          <NavButton href="/book-demo" variant="contained" color="primary" size="large">
            Start Free
          </NavButton>
          <NavButton href="/contact" variant="outlined" color="primary" size="large">
            Contact Us
          </NavButton>
        </Box>
      </PageHero>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography sx={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "1.05rem" }}>
            {page.description}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
