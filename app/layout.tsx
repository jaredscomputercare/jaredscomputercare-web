import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jared's Computer Care | Mobile IT Services in Addison County, VT",
  description: 'Expert computer repair, upgrades, and custom builds. We come to you! Serving Addison County, Vermont.',
  icons: {
    icon: '/assets/icon.png', // Displays in the browser tab
    apple: '/assets/icon.png', // Displays if someone saves your site to their iPhone home screen
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