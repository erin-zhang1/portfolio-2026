import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Analytics } from "@/components/common/analytics";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { ModalProvider } from "@/providers/modal-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.username,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    creator: `@${siteConfig.username}`,
  },
  icons: {
    icon: siteConfig.iconIco,
    shortcut: siteConfig.logoIcon,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
  // if (!GA_ID) {
  //   throw new Error("Missing Google Analytics ID");
  // }

  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Analytics />
        <Toaster />
        <ModalProvider />
      </body>

      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
