import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteOrigin, withBasePath } from "@/lib/basePath";
import { siteConfig, seoKeywords } from "@/lib/content";
import { colors } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${siteConfig.name} — Intelligent Solutions. Limitless Possibilities.`,
    template: `%s | Aarvanta Ltd`,
  },
  description:
    "Aarvanta Ltd develops AI-powered SaaS products designed to simplify business operations, enhance productivity, and drive innovation.",
  keywords: seoKeywords,
  icons: {
    icon: withBasePath("/aarvanta-logo.png"),
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    images: [withBasePath("/aarvanta-logo.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: colors.cream }}>
        <ThemeRegistry>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
