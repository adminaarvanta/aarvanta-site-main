import type { Metadata } from "next";
import { Box, Container, Grid } from "@mui/material";
import PageHero from "@/components/ui/PageHero";
import BlogPostCard from "@/components/ui/BlogPostCard";
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
        title="Insights for Business Operators."
        subtitle="Operational insights, automation strategies, and AI implementation guides — not generic AI news."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid key={post.slug} size={{ xs: 12, md: 6 }}>
                <BlogPostCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
