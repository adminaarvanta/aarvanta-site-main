import type { Metadata } from "next";
import { Box } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import BlogPostCard from "@/components/ui/BlogPostCard";
import SectionShell from "@/components/ui/sections/SectionShell";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Operational insights, automation strategies, lead generation systems, and AI implementation guides from AARVANTA.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        mode="hub"
        eyebrow="Insights"
        title="Insights for Business Operators."
        subtitle="Operational insights, automation strategies, and AI implementation guides — not generic AI news."
      />

      <SectionShell variant="editorial" maxWidth={false} containerSx={{ maxWidth: 1000 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
            />
          ))}
        </Box>
      </SectionShell>
    </>
  );
}
