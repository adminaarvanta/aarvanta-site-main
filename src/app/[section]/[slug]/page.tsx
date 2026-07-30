import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Typography } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import NavButton from "@/components/ui/NavButton";
import SectionShell from "@/components/ui/sections/SectionShell";
import SectionHeader from "@/components/ui/sections/SectionHeader";
import LinkTile from "@/components/ui/sections/LinkTile";
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

  const related = Object.entries(subPages[section] ?? {})
    .filter(([key]) => key !== slug)
    .slice(0, 4)
    .map(([key, p]) => ({
      label: p.title,
      href: `/${section}/${key}`,
      description: p.description,
    }));

  return (
    <>
      <PageHero mode="marketing" eyebrow={section} title={page.title} subtitle={page.description}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          <NavButton href="/book-demo" variant="contained" color="primary" size="large">
            Start Free
          </NavButton>
          <NavButton href="/contact" variant="outlined" color="primary" size="large">
            Contact Us
          </NavButton>
        </Box>
      </PageHero>

      <SectionShell variant="goldEdge" maxWidth="md">
        <Typography
          sx={{
            color: colors.gold,
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Overview
        </Typography>
        <Typography sx={{ color: colors.textDark, lineHeight: 1.85, fontSize: "1.05rem" }}>
          {page.description}
        </Typography>
      </SectionShell>

      {related.length > 0 && (
        <SectionShell variant="tileGrid" maxWidth={false} containerSx={{ maxWidth: 1000 }}>
          <SectionHeader
            align="left"
            eyebrow="Related"
            title="More in this area"
            subtitle="Continue exploring connected pages in this section."
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            {related.map((item, index) => (
              <LinkTile
                key={item.href}
                label={item.label}
                href={item.href}
                description={item.description}
                featured={index === 0}
              />
            ))}
          </Box>
        </SectionShell>
      )}
    </>
  );
}
