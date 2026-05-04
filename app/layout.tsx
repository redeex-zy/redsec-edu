import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { absoluteUrl, siteConfig } from "@/lib/site";

import "./globals.css";

const displayFont = localFont({
  src: [
    {
      path: "./fonts/FiraSansCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FiraSansCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

const bodyFont = localFont({
  src: [
    {
      path: "./fonts/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "school cybersecurity",
    "education cybersecurity",
    "student data protection",
    "school security review",
    "cyber awareness training",
    "student cybersecurity workshops",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social card`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="bg-slate-950 font-body text-slate-100 antialiased">
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
          <div className="absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] rounded-full bg-red-500/10 blur-[140px]" />
          <div className="absolute bottom-[-14%] right-[-6%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[130px]" />
          <div className="absolute inset-0 bg-grid-slate [mask-image:radial-gradient(circle_at_center,black,transparent_88%)] opacity-35" />
        </div>

        <Navbar />
        <main id="main-content" className="relative min-h-screen pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
