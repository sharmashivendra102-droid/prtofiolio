import type { Metadata } from "next";
import { Syne, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shivendra Sharma — AI Systems Builder & Fintech Engineer",
  description:
    "Building intelligent financial systems, AI-driven decision engines, and structured information platforms. AI systems builder at the intersection of economics and machine learning.",
  keywords: [
    "AI systems",
    "fintech",
    "machine learning",
    "financial intelligence",
    "Python",
    "Next.js",
    "LLM",
    "portfolio",
  ],
  authors: [{ name: "Shivendra Sharma" }],
  creator: "Shivendra Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Shivendra Sharma — AI Systems Builder & Fintech Engineer",
    description:
      "Building intelligent financial systems, AI-driven decision engines, and structured information platforms.",
    siteName: "Shivendra Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shivendra Sharma — AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivendra Sharma — AI Systems Builder & Fintech Engineer",
    description:
      "Building intelligent financial systems, AI-driven decision engines, and structured information platforms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
