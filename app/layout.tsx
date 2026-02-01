import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Teko } from "next/font/google"; // Correct import for naming
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", // Define variable for Tailwind
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://retainer-ai-waitlist.vercel.app'),
  title: {
    default: 'Retainer AI - AI-Powered Social Media Analytics for Creators',
    template: '%s | Retainer AI'
  },
  description: 'Transform your social media strategy with AI-powered analytics. Get data-driven insights, automated captions, and performance tracking for Instagram, TikTok, and more. Join 2,006+ creators.',
  keywords: [
    'social media analytics',
    'AI captions',
    'creator tools',
    'Instagram analytics',
    'TikTok analytics',
    'content creator',
    'social media AI',
    'influencer tools',
    'AI-powered analytics',
    'social media insights',
    'automated captions',
    'creator analytics platform'
  ],
  authors: [{ name: 'Retainer AI Team' }],
  creator: 'Retainer AI',
  publisher: 'Retainer AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://retainer-ai-waitlist.vercel.app',
    title: 'Retainer AI - AI-Powered Social Media Analytics',
    description: 'Transform your social media strategy with AI-powered analytics and automated captions. Join 2,006+ creators already using Retainer AI.',
    siteName: 'Retainer AI',
    images: [{
      url: '/assets/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Retainer AI - Social Media Analytics Dashboard',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retainer AI - AI-Powered Social Media Analytics',
    description: 'Transform your social media strategy with AI-powered analytics and automated captions.',
    creator: '@Code_Fusion_01',
    images: ['/assets/og-image.png'],
  },
  icons: {
    icon: '/assets/logo-main.png',
    shortcut: '/assets/logo-main.png',
    apple: '/assets/logo-main.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Retainer AI',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '2006',
              },
              description: 'AI-powered social media analytics and caption generation for content creators. Get data-driven insights to grow your social media presence.',
            }),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${teko.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
