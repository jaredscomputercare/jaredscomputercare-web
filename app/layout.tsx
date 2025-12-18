import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jared's Computer Care | Mobile IT Services in Addison County, VT",
  description: 'Expert computer repair, upgrades, and custom builds. We come to you! Serving Addison County, Vermont.',
  
  // This is what controls the icon in the Browser Tab AND Google Search
  icons: {
    icon: '/assets/icon.png', // MUST be a square image (e.g. 512x512) for Google to pick it up
    shortcut: '/assets/icon.png',
    apple: '/assets/icon.png', // For iPhone home screen
  },

  // This controls what the link looks like when shared on Facebook/Twitter/Text
  openGraph: {
    title: "Jared's Computer Care",
    description: "Expert mobile IT services in Addison County, VT. Computer repair, custom builds, and more.",
    url: 'https://jareds-computer-care.vercel.app', 
    siteName: "Jared's Computer Care",
    images: [
      {
        url: '/assets/mainlogo.png', // We use the big logo for the social card preview
        width: 1200,
        height: 630,
        alt: "Jared's Computer Care Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}