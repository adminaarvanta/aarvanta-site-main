import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteShell from "@/components/layout/SiteShell";
import ChatFab from "@/components/layout/ChatFab";
import ScrollManager from "@/components/layout/ScrollManager";
import { siteOrigin, withBasePath } from "@/lib/basePath";
import { siteConfig, seoKeywords } from "@/lib/content";
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
    default: `${siteConfig.name} — One AI Operating System for Your Entire Business`,
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
  other: {
    "facebook-domain-verification": "cjpw9pc8dqex6t8kkk2dtlu9s6o9ks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeRegistry>
          <ScrollManager />
          <Header />
          <SiteShell>
            <main className="flex-1">{children}</main>
          </SiteShell>
          <Footer />
          <ChatFab />
        </ThemeRegistry>
      </body>
    </html>
  );
}
