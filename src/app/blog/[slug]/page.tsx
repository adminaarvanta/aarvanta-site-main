import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Box, Container, Typography, Chip } from "@mui/material";
import { blogPosts } from "@/lib/content";
import { colors } from "@/lib/theme";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Box sx={{ bgcolor: colors.deepNavy, pt: { xs: 10, md: 12 }, pb: 6 }}>
        <Container maxWidth="md">
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              marginBottom: 24,
              fontSize: "0.95rem",
            }}
          >
            ← Back to Blog
          </Link>
          <Chip
            label={post.category}
            size="small"
            sx={{
              mb: 2,
              bgcolor: colors.mutedGold,
              color: colors.deepNavy,
              fontWeight: 600,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: colors.white,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {post.title}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography
            sx={{
              fontSize: "1.15rem",
              lineHeight: 1.9,
              color: colors.textSecondary,
              mb: 4,
            }}
          >
            {post.excerpt}
          </Typography>
          <Typography sx={{ color: colors.softCharcoal, lineHeight: 1.9, mb: 3 }}>
            At AARVANTA, we focus on practical implementation — not theoretical
            AI concepts. This article explores operational strategies that
            businesses can deploy today to improve efficiency, automate
            workflows, and scale communication systems.
          </Typography>
          <Typography sx={{ color: colors.softCharcoal, lineHeight: 1.9, mb: 3 }}>
            Whether you&apos;re evaluating AI infrastructure for the first time or
            looking to consolidate fragmented tools into one connected ecosystem,
            the principles outlined here are designed to deliver measurable
            business outcomes.
          </Typography>
          <Typography sx={{ color: colors.softCharcoal, lineHeight: 1.9 }}>
            Ready to implement these strategies? Our team can help you design and
            deploy the right AI infrastructure for your business scale and
            industry requirements.
          </Typography>

          <Box sx={{ mt: 6 }}>
            <Link
              href="/book-demo"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                backgroundColor: colors.deepNavy,
                color: colors.white,
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "var(--font-manrope)",
              }}
            >
              Book a Strategy Call
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
