import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { BackgroundVisual } from "@/components/background-visual";
import { Navigation } from "@/components/navigation";
import { identity, siteUrl, withBasePath } from "@/data/portfolio";
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

const title = "Shihab Bin Kader | AI Researcher & Computer Vision Developer";
const description =
  "Portfolio of Shihab Bin Kader, a Computer Science and Engineering graduate with experience in data analysis, computer vision, deep learning, explainable AI, and software development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Shihab Bin Kader — Portfolio",
  authors: [{ name: identity.name, url: identity.github }],
  creator: identity.name,
  keywords: [
    "Shihab Bin Kader",
    "computer vision",
    "explainable AI",
    "deep learning",
    "multimodal learning",
    "AI researcher",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Shihab Bin Kader — Portfolio",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shihab Bin Kader — AI researcher and computer vision developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: siteUrl,
  email: `mailto:${identity.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattogram",
    addressCountry: "Bangladesh",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "East Delta University",
  },
  sameAs: [identity.github],
  knowsAbout: ["Computer Vision", "Deep Learning", "Explainable AI", "Multimodal Learning"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <BackgroundVisual />
        <Navigation />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
