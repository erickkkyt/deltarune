import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import SessionIndicator from "@/components/SessionIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deltarune Online - Play the Epic RPG Adventure by Toby Fox",
  description: "Experience Deltarune, the acclaimed episodic RPG by Toby Fox. Join Kris, Susie, and Ralsei in the Dark World adventure. Play Deltarune online with turn-based combat and bullet-hell mechanics.",
  keywords: "Deltarune, Deltarune online, Deltarune game, Toby Fox, RPG, Dark World, Kris, Susie, Ralsei, Undertale, episodic RPG, turn-based combat, bullet-hell",
  authors: [{ name: "Deltarune Online Hub" }],
  creator: "Deltarune Online Hub",
  publisher: "Deltarune Online Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deltarune-arcade-hub.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Deltarune Online - Play the Epic RPG Adventure by Toby Fox",
    description: "Experience Deltarune, the acclaimed episodic RPG by Toby Fox. Join Kris, Susie, and Ralsei in the Dark World adventure with turn-based combat.",
    url: 'https://deltarune-arcade-hub.vercel.app',
    siteName: 'Deltarune Online Hub',
    images: [
      {
        url: '/deltarune-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltarune Online - Epic RPG Adventure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Deltarune Online - Play the Epic RPG Adventure by Toby Fox",
    description: "Experience Deltarune, the acclaimed episodic RPG by Toby Fox. Join Kris, Susie, and Ralsei in the Dark World adventure.",
    images: ['/deltarune-og.jpg'],
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
    <html lang="zh-CN">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SessionIndicator />
      </body>
    </html>
  );
}
