import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteOrigin, withBasePath } from "@/lib/basePath";
import { siteConfig, seoKeywords } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${siteConfig.name} — AI Infrastructure for Real Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#F8F7F4" }}>
        <ThemeRegistry>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
