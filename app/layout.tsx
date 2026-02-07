import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime, Press_Start_2P, Graduate, EB_Garamond, Audiowide } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Link from "next/link";
import CookieNotice from "@/components/CookieNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-courier'
});

const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel'
});

const graduate = Graduate({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-varsity'
});

const ebGaramond = EB_Garamond({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-serif'
});

const audiowide = Audiowide({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-techno'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thirdline.uk"),
  title: "Third Line — Web Design & Development Built With Intent",
  description:
    "Third Line initiates and executes digital work for brands that value clarity, reliability and control. Websites, systems and ongoing support.",
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "https://thirdline.uk/",
    siteName: "THIRD LINE",
    title: "Third Line — Web Design & Development Built With Intent",
    description:
      "Third Line initiates and executes digital work for brands that value clarity, reliability and control. Websites, systems and ongoing support.",
    images: [
      {
        url: "https://thirdline.uk/opengraph.png",
        width: 1200,
        height: 630,
        alt: "THIRD LINE",
      },
    ],
    videos: [
      {
        url: "https://thirdline.uk/og.gif",
        width: 1200,
        height: 630,
        type: "video/mp4",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Third Line — Web Design & Development Built With Intent",
    description:
      "Third Line initiates and executes digital work for brands that value clarity, reliability and control. Websites, systems and ongoing support.",
    images: ["https://thirdline.uk/opengraph.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "THIRD LINE",
  url: "https://thirdline.uk/",
  email: "mailto:hello@thirdline.uk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${courierPrime.variable} ${pressStart.variable} ${graduate.variable} ${ebGaramond.variable} ${audiowide.variable}`}>
      <GoogleTagManager gtmId="GTM-T56NNVGR" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <CookieNotice />
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-9999 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </Link>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}