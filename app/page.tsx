import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Retainer AI - AI-Powered Social Media Analytics for Creators',
  description: 'Transform your social media strategy with data-driven AI analytics. Get viral hooks, audience insights, and performance tracking for Instagram & TikTok. Join 2,006+ creators.',
  keywords: [
    'social media analytics',
    'AI captions',
    'creator tools',
    'Instagram growth',
    'TikTok analytics',
    'viral content strategy',
    'social media AI',
    'influencer marketing tools',
    'content creator metrics',
    'AI hook generator'
  ],
  alternates: {
    canonical: 'https://retainer-ai-waitlist.vercel.app',
  },
  openGraph: {
    title: 'Retainer AI | Professional Social Media Analytics',
    description: 'Transform your social media strategy with data-driven AI analytics. Join 2,006+ creators.',
    url: 'https://retainer-ai-waitlist.vercel.app',
    siteName: 'Retainer AI',
    images: [
      {
        url: '/assets/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Retainer AI - Social Media Analytics Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retainer AI - AI-Powered Social Media Analytics',
    description: 'Unlock viral growth with AI-powered social media insights.',
    images: ['/assets/og-image.jpeg'],
    creator: '@Code_Fusion_01',
  },
};

export default function Home() {
  return (
    <>
      {/* Page Specific Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Retainer AI - Social Media Growth Platform',
            description: 'AI-powered social media analytics and caption generation for content creators.',
            publisher: {
              '@type': 'Organization',
              name: 'Retainer AI',
              logo: 'https://retainer-ai-waitlist.vercel.app/assets/logo-main.png'
            }
          }),
        }}
      />
      <HomeClient />
    </>
  );
}
